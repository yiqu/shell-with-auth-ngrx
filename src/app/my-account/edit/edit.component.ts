import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { VerifiedUser } from '../../shared/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux-stores/global-store/app.reducer';
import { takeUntil } from 'rxjs/operators';
import { AuthState } from '../../redux-stores/auth/auth.models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createFormControl } from '../../shared/utils/form.utils';
import { ErrorStateMatcher } from '@angular/material/core';
import * as em from '../../shared/error-matchers/error-state.matcher';
import * as fromValidators from '../../shared/form-validators/general-form.validator';
import { UserService } from '../../services/user.service';
import { UserInfo, IUserInfoState, FireUserProfile } from '../../redux-stores/user/user.model';

@Component({
  selector: 'app-account-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class AccountEditComponent implements OnInit, OnDestroy {

  matcher: ErrorStateMatcher = new em.AfterActionsErrorStateMatcher();
  updateSubText: string = "Update my profile";
  defaultAvartarImgSrc: string = "assets/banner/placeholder-logo.png";
  compDest$: Subject<any> = new Subject<any>();
  user: FireUserProfile;
  infoFg: FormGroup;
  formInitValues: any;
  formError: boolean;
  loading: boolean;
  loadingError: boolean;


  constructor(private store: Store<AppState>, public fb: FormBuilder, private us: UserService) {

  }

  ngOnInit() {
    const userProfile$ = this.store.select("userInfoProfile");
    const authUserProfile$ = this.store.select("appAuth");
    combineLatest(userProfile$, authUserProfile$).pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      ([userProfile, authUser]) => {
        this.displayUserProfile(userProfile, authUser);
      }
    );

    this.us.getUserProfile();
  }

  displayUserProfile(userProfile: IUserInfoState, authUser: AuthState) {
    if (userProfile.userInfo) {
      this.loading = userProfile.loading;
      this.user = userProfile.userInfo;
      this.loadingError = userProfile.error;
    } else if (authUser.verifiedUser) {
      this.loading = authUser.loading;
      const p = new FireUserProfile(authUser.verifiedUser.displayName, authUser.verifiedUser.photoURL, authUser.verifiedUser.email,
        authUser.verifiedUser.emailVerified, authUser.verifiedUser.uid);
      this.user = p;
      this.loadingError = authUser.error;
    }
    this.createInfoFg(this.user);
  }

  createInfoFg(u: UserInfo) {
    this.infoFg = this.fb.group({
      displayName: createFormControl(u?.displayName, false, [fromValidators.alphaNumericValidator]),
      //phoneNumber: createFormControl(u?.phoneNumber, false, [fromValidators.numbersOnlyValidator]),
      photoUrl: createFormControl(u?.photoURL, false),
    });
  }


  onSave() {
    if (this.infoFg.valid) {
      this.formError = false;
      const val = this.infoFg.value;
      const info: UserInfo = new UserInfo(val.displayName, val.photoUrl);
      this.us.updateUserProfile(info);
    } else {
      this.formError = true;
    }
  }

  onReset() {
    this.infoFg.reset(this.formInitValues);
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
