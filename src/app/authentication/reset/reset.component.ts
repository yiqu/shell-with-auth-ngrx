import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as fu from '../../shared/utils/form.utils';
import { AppState } from '../../redux-stores/global-store/app.reducer';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthState } from '../../redux-stores/auth/auth.models';
import { AuthService } from 'src/app/services/auth.service';
import { AuthEmailCredential } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-auth-reset',
  templateUrl: 'reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class AuthResetComponent implements OnInit, OnDestroy {

  title: string = "Reset your password";
  subtitle: string = "Enter your user account's verified email address and we will send you a password reset link.";
  submitBtnText: string = "Send password reset email";
  compDest$: Subject<any> = new Subject<any>();
  resetFg: FormGroup;
  avartarImgSrc: string = "assets/banner/placeholder-logo.png";
  loading: boolean;
  errorOccured: boolean;
  errorMsg: string;

  get emailFc(): FormControl {
    return <FormControl>this.resetFg.get("email");
  }

  constructor(public fb: FormBuilder, public store: Store<AppState>, public as: AuthService) {
    this.store.select("appAuth").pipe(
      takeUntil(
        this.compDest$
      )
    ).subscribe(
      (authState: AuthState) => {
        this.errorMsg = authState.errorMsg;
        this.errorOccured = authState.error;
        this.loading = authState.loading;
        this.disableFieldsOnLoading(authState.loading);
      }
    );

    this.createFg();
  }

  ngOnInit() {
    this.as.clearErrors();
    this.resetFg.valueChanges.pipe(
      takeUntil(this.compDest$)
    )
    .subscribe((val) => {
      this.as.clearErrors();
    });
  }

  createFg() {
    this.resetFg = this.fb.group({
      email: fu.createFormControl(null, false, [Validators.required, Validators.email])
    });
  }

  disableFieldsOnLoading(loading: boolean) {
    if (this.resetFg) {
      loading ? this.resetFg.disable({onlySelf: true, emitEvent: false}) :
        this.resetFg.enable({onlySelf: true, emitEvent: false});
    }
  }

  onSubmit() {
    const res: AuthEmailCredential = this.resetFg.value;
    this.as.resetPasswordByEmail(res);
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
