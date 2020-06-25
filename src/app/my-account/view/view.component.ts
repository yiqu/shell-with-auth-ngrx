import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { VerifiedUser } from '../../shared/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux-stores/global-store/app.reducer';
import { takeUntil } from 'rxjs/operators';
import { AuthState } from '../../redux-stores/auth/auth.models';
import { IsMobileService } from 'src/app/services/is-mobile.service';

@Component({
  selector: 'app-account-view',
  templateUrl: 'view.component.html',
  styleUrls: ['./view.component.css']
})
export class AccountViewComponent implements OnInit, OnDestroy {

  viewSubtext: string = "My account information";
  defaultAvartarImgSrc: string = "assets/banner/placeholder-logo.png";
  compDest$: Subject<any> = new Subject<any>();
  user: VerifiedUser;
  authLoading: boolean;

  constructor(private store: Store<AppState>, public ims: IsMobileService) {

  }

  ngOnInit() {
    this.store.select("appAuth").pipe(
      takeUntil(this.compDest$)
    )
    .subscribe(
      (state: AuthState) => {
        this.authLoading = state.loading;
        this.user = state.verifiedUser;
      }
    )
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
