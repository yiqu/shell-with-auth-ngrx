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
import * as UserDbActions from '../redux-stores/user-database/user-db.actions';
import { UserRegistrationFromEmailActionProp, LoginSuccessActionProp } from '../redux-stores/auth/auth.models';

export const LOCAL_STORAGE_USER_KEY: string = "VERIFIED_USER_PH_KEY";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // this determines if firebase auth has emitted the first result,
  // if it has not, don't redirect to /, or resume redirect operations
  private firstAuthUserFetchCallAndRedirect: boolean = false;

  constructor(private afs: AngularFirestore, public store: Store<AppState>) {
    let firstAuthUserFetchCallCompleted: boolean = false;
    firebase.auth().onAuthStateChanged(
      (user: firebase.User) => {
        console.log("Firebase State AUTH:", user ? user.toJSON() : user);
        this.handleOnAuthChange(user);
      },
      (err) => {
        console.error("Error occured in firebase auth state change trigger.")
      },
      () => {
        console.info("Firebase auth state change completed.")
      }
    );
  }

  handleOnAuthChange(fireUser: firebase.User) {
    if (fireUser) {
      const u = (<VerifiedUser>fireUser.toJSON());
      this.setVerifiedUser(u, this.firstAuthUserFetchCallAndRedirect, true);
      this.store.dispatch(UserActions.getUserProfileStart());
    } else {
      this.unsetVerifiedUser();
    }
    this.store.dispatch(UserDbActions.getUserDBEntryStart({uid: fireUser?.uid}));
    this.firstAuthUserFetchCallAndRedirect = true;
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

  autoLoginFromLocalstorage() {
    const u: VerifiedUser = this.getUserFromLocalStorage();
    if (u) {
      this.store.dispatch(AuthActions.authAutoLogin({user: u}))
    }
  }

  private getUserFromLocalStorage(): VerifiedUser | null {
    const localStorageUser: any = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY));
    if (!localStorageUser) {
      return null;
    }
    console.info("Local Storage: User Present");
    return localStorageUser;
  }

}
