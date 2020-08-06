import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap, concatMap, switchMap, map } from 'rxjs/operators';
import * as UserDbActions from './user-db.actions';
import * as AuthUtils from '../../shared/utils/auth.utils';
import { ToasterService } from '../../services/toaster.service';
import { VerifiedUser } from '../../shared/models/user.model';
import { UserService } from '../../services/user.service';
import { FirebasePromiseError } from '../../shared/models/firebase.model';
import { IUserInfo, UserInfo } from '../user/user.model';

@Injectable()
export class UserDatabaseEffects {

  constructor(public actions$: Actions, public ts: ToasterService,
    private us: UserService) {
  }

  getUserDatabaseEntry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserDbActions.getUserDBEntryStart),
      switchMap((data) => {
        const uid: string = data.uid;
        if (uid) {
          return this.us.getUserDBEntryById(uid).get().then(
            (res) => {
              if (res.exists) {
                const user: VerifiedUser = res.data() as VerifiedUser;
                return UserDbActions.getUserDBEntrySuccess({user: user});
              } else {
                return UserDbActions.getUserDBEntrySuccess({user: null});
              }
            },
            (rej: FirebasePromiseError) => {
              this.ts.getError(AuthUtils.getFirebaseErrorMsg(rej));
              return UserDbActions.getUserDBEntryFailure({errorMsg: AuthUtils.getFirebaseErrorMsg(rej)});
            }
          );
        }
        return [
          UserDbActions.getUserDBEntrySuccess({user: undefined})
        ]
      })
    );
  });

  updateUserDBProfileStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserDbActions.updateUserDBProfileEntryStart),
      switchMap((info) => {
        const userInfo: IUserInfo = info.userProfile;
        const uid: string = info.uid;
        const newInfo: UserInfo = new UserInfo(userInfo.displayName, userInfo.photoURL);
        return this.us.getUserDBEntryById(uid)
          .update(
            {...newInfo}
          ).then(
            (res) => {
              return UserDbActions.updateUserDBProfileSuccess({userProfile: newInfo, uid: uid});
            },
            (rej: FirebasePromiseError) => {
              return UserDbActions.updateUserDBProfileEntryFailure({errorMsg: AuthUtils.getFirebaseErrorMsg(rej)});
            }
          )
        }
      )
    );
  });

  updateUserDBProfileSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserDbActions.updateUserDBProfileSuccess),
      map((data) => {
        const uid: string = data.uid;
        return UserDbActions.getUserDBEntryStart({uid: uid});
      }),
    );
  });

  updateUserDBProfileFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserDbActions.updateUserDBProfileEntryFailure),
      map((data) => {
        this.ts.getError("Could not update your DB entry. " + data.errorMsg);
      })
    );
  }, {dispatch: false});

}
