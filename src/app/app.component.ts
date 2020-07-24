import { Component, ViewChild, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';
import { AppState } from './redux-stores/global-store/app.reducer';
import { Store } from '@ngrx/store';
import * as AuthActions from './redux-stores/auth/auth.actions';
import { VerifiedUser } from './shared/models/user.model';
import { IsMobileService } from './services/is-mobile.service';

const LOCAL_STORAGE_USER_KEY: string = "VERIFIED_USER";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  footerTitle: string = "@KQ 2020";
  myUrl: string = "https://yiqu.github.io/";

  @ViewChild("snav")
  sideNav: MatSidenav;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;


  constructor(public changeDetectorRef: ChangeDetectorRef, public media: MediaMatcher,
    public store: Store<AppState>, private ims: IsMobileService) {
      this.setMobileDetection();
  }

  ngOnInit() {
    const u = this.getUserFromLocalStorage();
    if (u) {
      this.store.dispatch(AuthActions.authAutoLogin({user: u}))
    }
  }

  /**
   * Initialize Firebase.
   * NOTE: Injecting AngularFire will auto initializeApp
   */
  initFirebase() {
    firebase.initializeApp(environment.firebaseConfig);
  }

  /**
   * Detect if deive is mobile size, then re-run detection change
   */
  setMobileDetection() {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.ims.mediaQList = this.mobileQuery;
  }

  onTopNavMenuClick() {
    if (this.sideNav) {
      this.sideNav.toggle();
    }
  }

  onNavClose() {
    if (this.sideNav) {
      this.sideNav.close();
    }
  }

  getUserFromLocalStorage(): VerifiedUser | null{
    const localStorageUser: any = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY));
    if (!localStorageUser) {
      return null;
    }
    console.info("Local Storage: User Present");
    return localStorageUser;
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
