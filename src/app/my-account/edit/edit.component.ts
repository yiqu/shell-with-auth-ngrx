import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
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
  user: VerifiedUser;
  infoFg: FormGroup;
  formInitValues: any;

  constructor(private store: Store<AppState>, public fb: FormBuilder) {

  }

  ngOnInit() {
    this.store.select("appAuth").pipe(
      takeUntil(this.compDest$)
    )
    .subscribe(
      (state: AuthState) => {
        this.user = state.verifiedUser;
        this.createInfoFg(this.user);
        this.formInitValues = this.infoFg.value;
        console.log(this.formInitValues)
      }
    )
  }

  createInfoFg(u: VerifiedUser) {
    this.infoFg = this.fb.group({
      displayName: createFormControl(u?.displayName, false, [fromValidators.alphaNumericValidator]),
      phoneNumber: createFormControl(u?.phoneNumber, false, [fromValidators.numbersOnlyValidator]),
      photoUrl: createFormControl(u?.photoURL, false),
    });
  }


  onSave() {

  }

  onReset() {
    this.infoFg.reset(this.formInitValues);
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
