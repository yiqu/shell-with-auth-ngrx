import { Injectable } from '@angular/core';
import { VerifiedUser } from '../shared/models/user.model';
import { LOCAL_STORAGE_USER_KEY } from './auth.service';
/**
 *
 * Local storage is used to temp store verified user object so when
 * browser is refreshed, the Authservice can instantly call .next()
 * on the logged in user.
 *
 * This prevents many nasty bugs with Guards trying to wait for Authservice's
 * currentUser$ to complete the first subscribe
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setCurrentUserFromLocalStorage(): VerifiedUser {
    const localStorageUser: any = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY));
    if (!localStorageUser) {
      return null;
    }
    console.info("LS User Present");
    return localStorageUser;
  }

  saveCurrentUser(u: VerifiedUser) {
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(u));
  }

  clearCurrentUser() {
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  }

}
