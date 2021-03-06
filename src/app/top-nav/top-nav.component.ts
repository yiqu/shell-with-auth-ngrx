import { Component, OnInit, EventEmitter, Output, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { headShakeAnimation, rotateAnimation, tadaAnimation } from 'angular-animations';
import { MenuItem } from '../shared/models/nav-item.model';
import { AuthService } from '../services/auth.service';
import { AppState } from '../redux-stores/global-store/app.reducer';
import { Store } from '@ngrx/store';
import { VerifiedUser } from '../shared/models/user.model';
import * as utils from '../shared/utils/general.utils';
import { environment } from '../../environments/environment';
import { IUserDBState } from '../redux-stores/user-database/user-db.model';

const defaultProfileImg: string = "assets/user/default-user5.png";

@Component({
  selector: 'app-top-nav',
  templateUrl: 'top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  animations: [
    headShakeAnimation(),
    rotateAnimation(),
    tadaAnimation()
  ]
})
export class TopNavComponent implements OnInit, OnDestroy, AfterViewInit {

  headerTitle: string = environment.entityName;
  compDest$: Subject<any> = new Subject<any>();
  logoShakeState: boolean = false;
  leftNavMenuState: boolean = false;
  swingState: boolean = false;
  userMenuIcon: string; //account_circle
  userMenuItems: MenuItem[] = [];
  crudLoaded: boolean;
  avartarImgSrc: string = defaultProfileImg;

  @Output()
  navToggle: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router, public route: ActivatedRoute,
    public as: AuthService, private store: Store<AppState>) {

      this.store.select("userDB").pipe(
        takeUntil(this.compDest$)
      ).subscribe(
        (state: IUserDBState) => {
          this.crudLoaded = state.crudLoaded;
          this.setUserProfileImg(state.user);
          this.buildUserMenuItems(state.user);
          this.userMenuIcon = state.user ? "account_circle" : "perm_identity";
        }
      )
  }

  ngOnInit() {
    this.animateLogoOnStart();

  }

  setUserProfileImg(u: VerifiedUser) {
    if (u) {
      this.avartarImgSrc = u.photoURL ? u.photoURL : this.avartarImgSrc;
    } else {
      this.avartarImgSrc = defaultProfileImg;
    }
  }

  ngAfterViewInit() {
  }

  onLogoClick() {
    this.logoShakeState = !this.logoShakeState;
  }

  onMenuClick() {
    this.leftNavMenuState = !this.leftNavMenuState;
    this.navToggle.emit(true);
  }

  animateLogoOnStart() {
    const logoAnimateTimer = timer(600);
    logoAnimateTimer.pipe(
      take(1)
    ).subscribe((val) => {
      this.swingState = true;
    })
  }

  onAuthClick() {
    this.router.navigate(['auth']);
  }

  onMenuItemClick(item: MenuItem) {
    if (item.id === "account") {
      this.router.navigate(['/', 'my-account']);
    } else if (item.id === "signout") {
      this.onSignoutClick();
    } else if (item.id === "signin") {
      this.onAuthClick();
    }
  }

  onSignoutClick() {
    this.as.signoutUser();
  }


  buildUserMenuItems(u: VerifiedUser) {
    this.userMenuItems = [];
    if (u) {
      const displayName = u.displayName ? u.displayName : utils.createInitAlias(u.email);
      this.userMenuItems.push(
        new MenuItem(null, "Signed in as " + (displayName), null,
          true),
        new MenuItem("account_circle", "My profile", "account"),
        new MenuItem("forward", "Sign Out", "signout")
      )
    } else {
      this.userMenuItems.push(
        new MenuItem("record_voice_over", "Sign in", "signin"),
      )
    }
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
