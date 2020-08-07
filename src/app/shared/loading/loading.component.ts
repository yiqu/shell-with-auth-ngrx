import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd,
  NavigationCancel, NavigationError } from '@angular/router';
import { AppState } from 'src/app/redux-stores/global-store/app.reducer';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { IUserDBState } from 'src/app/redux-stores/user-database/user-db.model';
import { Subject } from 'rxjs';
import { VerifiedUser } from '../models/user.model';

@Component({
  selector: 'app-shared-loading',
  templateUrl: 'loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  wholePage: boolean;

  loading: boolean = true;
  logoShakeState: boolean = false;
  parentClass: string;
  compDest$: Subject<any> = new Subject<any>();
  debugMode: boolean = false;

  appLoadMask: boolean;
  crudLoaded: boolean;
  user: VerifiedUser;
  uid: string;
  error: boolean;
  errMsg: string;
  getUserStatus: string;

  constructor(public router: Router, private store: Store<AppState>) {

    this.store.select("userDB").pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (state: IUserDBState) => {
        this.appLoadMask = state.appLoadMask;
        this.crudLoaded = state.crudLoaded;
        this.user = state.user;
        this.uid = state.uid;
        this.error = state.error;
        this.errMsg = state.errorMsg;
        this.getUserStatus = state['getUserStatus'];
      }
    );
    // this.router.events.subscribe((event: Event) => {
    //   switch (true) {
    //     case event instanceof NavigationStart: {
    //       this.loading = true;
    //       break;
    //     }

    //     case event instanceof NavigationEnd:
    //     case event instanceof NavigationCancel:
    //     case event instanceof NavigationError: {
    //       this.loading = false;
    //       break;
    //     }
    //     default: {
    //       break;
    //     }
    //   }
    // });
  }

  ngOnChanges(c) {
    if (this.wholePage) {
      this.parentClass = "whole-page loading-container"
    } else {
      this.parentClass = "container loading-container mt-5";
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
