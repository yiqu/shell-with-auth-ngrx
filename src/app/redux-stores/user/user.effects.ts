import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap, concatMap, switchMap, map } from 'rxjs/operators';
import * as UserActions from './user.actions';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import * as AuthUtils from '../../shared/utils/auth.utils';
import { ToasterService } from '../../services/toaster.service';
import { IUserInfo } from './user.model';
import { VerifiedUser } from '../../shared/models/user.model';
import * as UserDbActions from '../user-database/user-db.actions';

@Injectable()
export class UserInfoEffects {

  constructor(public actions$: Actions, public ts: ToasterService) {
  }

  updateProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.saveUserProfileStart),
      concatMap((data) => {
        const user: firebase.User = firebase.auth().currentUser;
        return user.updateProfile({
          displayName: data.info.displayName,
          photoURL: data.info.photoURL
        }).then(
          () => {
            return UserActions.saveUserProfileSuccess({info: data.info, uid: user.uid});
          },
          (rej) => {
            return UserActions.saveUserProfileFailure({errorMsg: AuthUtils.getFirebaseErrorMsg(rej)})
          }
        )
      })
    );
  });

  updateProfileSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.saveUserProfileSuccess),
      switchMap((data) => {
        const info: IUserInfo = data.info;
        this.ts.getSuccess("Profile updated for " + info.displayName);
        return [
          UserActions.getUserProfileStart(),
          UserDbActions.updateUserDBProfileEntryStart({userProfile: info, uid: data.uid})
        ];
      })
    );
  });

  updateProfileFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.saveUserProfileFailure),
      tap((data) => {
        this.ts.getError(data.errorMsg);
      })
    );
  }, {dispatch: false});


  getUserFireProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.getUserProfileStart),
      map(() => {
        const user: firebase.User = firebase.auth().currentUser;
        if (user) {
          const u = (<VerifiedUser>user.toJSON());
          return UserActions.getUserProfileSuccess({fireProfile: u});
        }
        return UserActions.getUserProfileFailure({errorMsg: "User is not logged in."});
      })
    );
  });
}
