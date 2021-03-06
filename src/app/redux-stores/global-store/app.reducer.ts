import { ActionReducerMap } from '@ngrx/store';
import * as fromAuthReducer from '../auth/auth.reducer';
import * as fromRouterReducer from '../router-related/router-related.reducer';
import * as fromLsReducer from '../local-storage/local-storage.reducer';
import * as fromUserInfoReducer from '../user/user.reducer';
import * as fromUserDbReducer from '../user-database/user-db.reducer';
import { AuthState } from '../auth/auth.models';
import { RouterRedirectState } from '../router-related/router-related.models';
import { LocalStorageState } from '../local-storage/local-storage.models';
import { IUserInfoState } from '../user/user.model';
import { IUserDBState } from '../user-database/user-db.model';

/**
 * App Overall State
 */
export interface AppState {
  appAuth: AuthState;
  userInfoProfile: IUserInfoState;
  appRouterRedirects: RouterRedirectState;
  localStorage: LocalStorageState;
  userDB: IUserDBState
}

export const appReducers: ActionReducerMap<AppState> = {
  appAuth: fromAuthReducer.authReducer,
  userInfoProfile: fromUserInfoReducer.userInfoReducer,
  appRouterRedirects: fromRouterReducer.routerReducer,
  localStorage: fromLsReducer.localStorageReducer,
  userDB: fromUserDbReducer.userDBReducer
}
