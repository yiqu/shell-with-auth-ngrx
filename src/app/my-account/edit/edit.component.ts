import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, combineLatest, Observable } from 'rxjs';
import { VerifiedUser } from '../../shared/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux-stores/global-store/app.reducer';
import { takeUntil } from 'rxjs/operators';
import { AuthState } from '../../redux-stores/auth/auth.models';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { createFormControl } from '../../shared/utils/form.utils';
import { ErrorStateMatcher } from '@angular/material/core';
import * as em from '../../shared/error-matchers/error-state.matcher';
import * as fromValidators from '../../shared/form-validators/general-form.validator';
import { UserService } from '../../services/user.service';
import { UserInfo, IUserInfoState, FireUserProfile } from '../../redux-stores/user/user.model';
import { CanComponentDeactivate } from '../../shared/route-guards/can-deactivate.guard';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../../shared/custom/dialog/dialog.component';
import { IUserDBState } from 'src/app/redux-stores/user-database/user-db.model';

@Component({
  selector: 'app-account-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.css', '../my.component.css']
})
export class AccountEditComponent implements OnInit, OnDestroy, CanComponentDeactivate {

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


  get photoUrlFc(): FormControl {
    return <FormControl>this.infoFg.get("photoUrl");
  }


  constructor(private store: Store<AppState>, public fb: FormBuilder, private us: UserService,
    public dialog: MatDialog) {

      this.store.select("userDB").pipe(
        takeUntil(this.compDest$)
      ).subscribe(
        (state: IUserDBState) => {
          this.displayProfile(state);
        }
      );
  }

  ngOnInit() {
  }

  displayProfile(d: IUserDBState) {
    this.loading = !d.crudLoaded;
    this.user = d.user;
    this.loadingError = d.error;
    if (this.user) {
      this.createInfoFg(this.user);
    }
  }

  createInfoFg(u: UserInfo) {
    this.infoFg = this.fb.group({
      displayName: createFormControl(u?.displayName, false, [fromValidators.alphaNumericValidator]),
      //phoneNumber: createFormControl(u?.phoneNumber, false, [fromValidators.numbersOnlyValidator]),
      photoUrl: createFormControl(u?.photoURL, false),
    });
    this.setInitialValue(this.infoFg.value);
  }

  setInitialValue(val) {
    this.formInitValues = val;
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

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.infoFg.pristine) {
      return true;
    } else {
      return this.openConfirmDialog();
    }
  }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      minWidth: '300px',
      data: {actionName: "leave this page? There are unsaved changes."}
    });

    return dialogRef.afterClosed().pipe(
      takeUntil(this.compDest$)
    );
  }
}
