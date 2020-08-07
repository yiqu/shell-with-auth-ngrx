import { Injectable } from '@angular/core';
import { AppState } from '../redux-stores/global-store/app.reducer';
import { Store } from '@ngrx/store';
import * as fromUserActions from '../redux-stores/user/user.actions';
import * as fromUserDBActions from '../redux-stores/user-database/user-db.actions';
import { UserInfo } from '../redux-stores/user/user.model';
import { DocumentReference } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_USERS_URL: string = "users";

  constructor(private store: Store<AppState>) {

  }

  updateUserProfile(profileData: UserInfo) {
    this.store.dispatch(fromUserActions.saveUserProfileStart({info: profileData}));
  }

  getUserProfile() {
    this.store.dispatch(fromUserActions.getUserProfileStart());
  }

  public getUserDBEntryById(uid: string): DocumentReference {
    return this.getFireStore().collection(this.BASE_USERS_URL).doc(uid);
  }

  private getFireStore(): firebase.firestore.Firestore {
    return firebase.firestore();
  }

  public clearLoggedinUser(): void {
    this.store.dispatch(fromUserDBActions.userLogoutClearUser());
  }

}
