import { Component, ViewChild, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import { environment } from '../environments/environment';
import { AppState } from './redux-stores/global-store/app.reducer';
import { Store } from '@ngrx/store';
import { IsMobileService } from './services/is-mobile.service';
import { AuthService } from './services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUserDBState } from './redux-stores/user-database/user-db.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  footerTitle: string = "@KQ 2020";
  myUrl: string = "https://yiqu.github.io/";
  compDest$: Subject<any> = new Subject<any>();
  userLoaded: boolean;

  @ViewChild("snav")
  sideNav: MatSidenav;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;


  constructor(public changeDetectorRef: ChangeDetectorRef, public media: MediaMatcher,
    public store: Store<AppState>, private ims: IsMobileService, private as: AuthService) {
      this.setMobileDetection();

      this.store.select("userDB").pipe(
        takeUntil(this.compDest$)
      ).subscribe(
        (state: IUserDBState) => {
          this.userLoaded = !state.appLoadMask;
        }
      );
  }

  ngOnInit() {
    this.as.autoLoginFromLocalstorage();
    this.startUpAnalytics();
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

  startUpAnalytics() {
    if (environment.gAnalytics) {
      firebase.analytics();
    }
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
