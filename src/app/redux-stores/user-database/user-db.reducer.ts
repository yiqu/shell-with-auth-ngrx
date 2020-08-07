import { createReducer, on } from '@ngrx/store';
import * as userDBActions from './user-db.actions';
import { IUserDBState } from './user-db.model';
import * as fromAuthActions from '../auth/auth.actions';


/**
 * User Info Initial State
 */
const inititalState: IUserDBState = {
  appLoadMask: true, // let this be the OVERALL loaded variable
  crudLoaded: true,
  user: null,
  uid: null,
  error: false,
  errorMsg: null
}

export const userDBReducer = createReducer(
  inititalState,
  on(userDBActions.getUserDBEntryStart, (state, {uid}) => {
    return {
      ...state,
      uid: uid,
      appLoadMask: true,
      crudLoaded: false,
      user: null,
      error: false,
      errorMsg: null,
      getUserStatus: "STARTED"
    }
  }),
  on(userDBActions.getUserDBEntrySuccess, (state, {user}) => {
    return {
      ...state,
      appLoadMask: false,
      crudLoaded: true,
      user: user,
      error: false,
      errorMsg: null,
      getUserStatus: "SUCCESS"
    }
  }),
  on(userDBActions.getUserDBEntryFailure, (state, {errorMsg}) => {
    return {
      ...state,
      appLoadMask: false,
      crudLoaded: true,
      user: null,
      error: true,
      errorMsg: errorMsg,
      getUserStatus: "FAIL"
    }
  }),
  on(userDBActions.userLogoutClearUser, (state) => {
    return {
      ...state,
      appLoadMask: true,
      crudLoaded: true,
      user: null,
      error: false,
      errorMsg: null
    }
  }),

  on(userDBActions.updateUserDBProfileEntryStart, (state, {userProfile, uid}) => {
    return {
      ...state,
      uid: uid,
      crudLoaded: false,
      error: false,
      errorMsg: null
    }
  }),
  on(userDBActions.updateUserDBProfileSuccess, (state, {userProfile, uid}) => {
    return {
      ...state,
      crudLoaded: true,
      error: false,
      errorMsg: null
    }
  }),
  on(userDBActions.updateUserDBProfileEntryFailure, (state, {errorMsg}) => {
    return {
      ...state,
      crudLoaded: true,
      error: true,
      errorMsg: errorMsg
    }
  }),

  on(fromAuthActions.updateUserLoginsTimeStart, (state, {uid}) => {
    return {
      ...state,
      crudLoaded: false,
      uid: uid
    }
  }),

  on(fromAuthActions.updateUserLoginsTimeSuccess, (state) => {
    return {
      ...state,
      crudLoaded: true,
      error: false,
      errorMsg: null
    }
  }),

  on(fromAuthActions.updateUserLoginsTimeFailure, (state, {errorMsg}) => {
    return {
      ...state,
      crudLoaded: true,
      error: true,
      errorMsg: errorMsg
    }
  }),
)
