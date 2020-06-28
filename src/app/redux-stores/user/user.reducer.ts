import { createReducer, on } from '@ngrx/store';
import * as userActions from './user.actions';
import { IUserInfoState } from './user.model';

/**
 * User Info Initial State
 */
const inititalState: IUserInfoState = {
  userInfo: null,
  loading: false,
  error: false,
  errMsg: null
}


export const userInfoReducer = createReducer(
  inititalState,
  on(userActions.saveUserProfileStart, (state, {info}) => {
    return {
      ...state,
      userInfo: info,
      loading: true,
      errMsg: null,
      error: false
    }
  }),
  on(userActions.saveUserProfileSuccess, (state, {info}) => {
    return {
      ...state,
      userInfo: info,
      loading: false,
      errMsg: null,
      error: false
    }
  }),
  on(userActions.saveUserProfileFailure, (state, {errorMsg}) => {
    return {
      ...state,
      loading: false,
      errMsg: errorMsg,
      error: true
    }
  }),
)
