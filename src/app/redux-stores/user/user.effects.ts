import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap, concatMap, switchMap, map } from 'rxjs/operators';
import * as UserActions from './user.actions';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import * as AuthUtils from '../../shared/utils/auth.utils';
import { ToasterService } from 'src/app/services/toaster.service';
import { FireUserProfile } from './user.model';

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
          photoURL: data.info.photoUrl
        }).then(
          () => {
            return UserActions.saveUserProfileSuccess({info: data.info});
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
      tap(() => {
        this.ts.getSuccess("Profile updated.")
      })
    );
  }, {dispatch: false});

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
          const profile: FireUserProfile = new FireUserProfile(user.displayName, user.email,
            user.photoURL, user.emailVerified, user.uid);
          return UserActions.getUserProfileSuccess({fireProfile: profile});
        }
        return UserActions.getUserProfileFailure({errorMsg: "User is not logged in."});
      })
    );
  });

  getUserProfileFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.getUserProfileFailure),
      tap(() => {
        this.ts.getError("USer has not logged in.");
      })
    );
  }, {dispatch: false});
}
