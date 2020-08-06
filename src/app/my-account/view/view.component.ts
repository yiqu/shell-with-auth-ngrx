import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { VerifiedUser } from '../../shared/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux-stores/global-store/app.reducer';
import { takeUntil } from 'rxjs/operators';
import { AuthState } from '../../redux-stores/auth/auth.models';
import { IsMobileService } from '../../services/is-mobile.service';
import { IUserInfoState, FireUserProfile } from '../../redux-stores/user/user.model';
import { UserService } from 'src/app/services/user.service';
import { IUserDBState } from 'src/app/redux-stores/user-database/user-db.model';

@Component({
  selector: 'app-account-view',
  templateUrl: 'view.component.html',
  styleUrls: ['./view.component.css']
})
export class AccountViewComponent implements OnInit, OnDestroy {

  viewSubtext: string = "My account information";
  defaultAvartarImgSrc: string = "assets/banner/placeholder-logo.png";
  compDest$: Subject<any> = new Subject<any>();
  user: VerifiedUser & FireUserProfile;
  dataLoading: boolean;
  loadingError: boolean;

  constructor(private store: Store<AppState>, public ims: IsMobileService, private us: UserService) {
    // TODO Retrieve info from User DB to display login times

    // this.store.select("userDB").pipe(
    //   takeUntil(this.compDest$)
    // ).subscribe(
    //   (state: IUserDBState) => {
    //     this.displayProfile(state);
    //   }
    // );
  }

  /**
   * Retrieve info from actual Firebase User Info
   */
  ngOnInit() {
    const userProfile$ = this.store.select("userInfoProfile");
    const authUserProfile$ = this.store.select("appAuth");
    combineLatest(userProfile$, authUserProfile$).pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      ([userProfile, authUser]) => {
        this.displayUserProfile(userProfile, authUser);
      }
    );

    this.us.getUserProfile();
  }

  displayProfile(d: IUserDBState) {
    this.dataLoading = !d.crudLoaded;
    this.user = d.user;
    this.loadingError = d.error;
  }

  displayUserProfile(userProfile: IUserInfoState, authUser: AuthState) {
    if (userProfile.userInfo) {
      this.dataLoading = userProfile.loading;
      this.user = userProfile.userInfo;
      this.loadingError = userProfile.error;
    }
    else {
      this.dataLoading = authUser.loading;
      this.user = authUser.verifiedUser;
      this.loadingError = authUser.error;
    }
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
