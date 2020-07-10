import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { AngularFirestore, AngularFirestoreDocument,
  AngularFirestoreCollection } from '@angular/fire/firestore';
import { VerifiedUser, AuthInfoFromUser, AuthEmailCredential } from '../shared/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux-stores/global-store/app.reducer';
import * as AuthActions from '../redux-stores/auth/auth.actions';
import * as UserActions from '../redux-stores/user/user.actions';
import { UserRegistrationFromEmailActionProp, LoginSuccessActionProp } from '../redux-stores/auth/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afs: AngularFirestore, public store: Store<AppState>) {
    // this determines if firebase auth has emitted the first result,
    // if it has not, don't redirect to /, or resume redirect operations
    let firstAuthUserFetchCallCompleted: boolean = false;

    firebase.auth().onAuthStateChanged(
      (user: firebase.User) => {
        console.log("Firebase State AUTH:", user ? user.toJSON():user);
        if (user) {
          const u = (<VerifiedUser>user.toJSON());
          this.setVerifiedUser(u, firstAuthUserFetchCallCompleted, true);
          firstAuthUserFetchCallCompleted = true;
          this.store.dispatch(UserActions.getUserProfileStart());
        } else {
          this.unsetVerifiedUser();
          firstAuthUserFetchCallCompleted = true;
        }
      },
      (err) => {
        console.error("Error occured in firebase auth state change trigger.")
      },
      () => {
        console.info("Firebase auth state change completed.")
      }
    );
  }

  registerUser(authInfo: AuthInfoFromUser) {
    const p = new UserRegistrationFromEmailActionProp(authInfo.id, authInfo.password, authInfo.saveSession);
    this.store.dispatch(AuthActions.authUserRegistrationFromEmailStart(p));
  }

  userLogin(authInfo: AuthInfoFromUser) {
    this.store.dispatch(AuthActions.authLoginStart({authInfo: authInfo}));
  }

  signoutUser() {
    this.store.dispatch(AuthActions.authLogoutStart());
  }

  clearErrors() {
    this.store.dispatch(AuthActions.authClearErrorsByUser());
  }

  throwErrorMessage(msg: string) {
    this.store.dispatch(AuthActions.authThrowErrorMessageByUser({errorMsg: msg}));
  }

  setVerifiedUser(u: VerifiedUser, redirect: boolean, showAlert?: boolean) {
    const prop = new LoginSuccessActionProp(u, redirect, showAlert);
    this.store.dispatch(AuthActions.authLoginSuccess(prop));
  }

  unsetVerifiedUser() {
    this.store.dispatch(AuthActions.authLogoutSuccess({redirect: false}));
  }

  resetPasswordByEmail(cred: AuthEmailCredential) {
    this.store.dispatch(AuthActions.authResetPasswordStart(cred));
  }

}
