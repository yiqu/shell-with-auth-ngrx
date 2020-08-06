import { createAction, props } from '@ngrx/store';
import { VerifiedUser } from '../../shared/models/user.model';
import { IUserInfo } from '../user/user.model';
import { AuthVerifiedUserProp, FailureActionProp } from '../auth/auth.models';


const UPDATE_USER_DB_START: string = "[DB/User/All] Update Start";
const UPDATE_USER_DB_FAILURE: string = "[DB/User/All] Update Failure";
const UPDATE_USER_DB_SUCCESS: string = "[DB/User/All] Update Success";

const UPDATE_USER_DB_DISPLAY_START: string = "[DB/User/Profile] Update Start";
const UPDATE_USER_DB_DISPLAY_FAILURE: string = "[DB/User/Profile] Update Failure";
const UPDATE_USER_DB_DISPLAY_SUCCESS: string = "[DB/User/Profile] Update Success";

const GET_USER_DB_START: string = "[DB/User/Profile] Get Start";
const GET_USER_DB_FAILURE: string = "[DB/User/Profile] Get Failure";
const GET_USER_DB_SUCCESS: string = "[DB/User/Profile] Get Success";

/**
 * CRUD operations for User entry in Fire DB
 *
 * /users/{{uid}}/*
 *
 */
export const updateUserDBEntryStart = createAction(
  UPDATE_USER_DB_START,
  props<AuthVerifiedUserProp>()
)

export const updateUserDBEntryFailure = createAction(
  UPDATE_USER_DB_FAILURE,
  props<FailureActionProp>()
)

export const updateUserDBEntrySuccess = createAction(
  UPDATE_USER_DB_SUCCESS,
  props<{user: VerifiedUser}>()
)

export const getUserDBEntryStart = createAction(
  GET_USER_DB_START,
  props<{uid: string}>()
)

export const getUserDBEntryFailure = createAction(
  GET_USER_DB_FAILURE,
  props<FailureActionProp>()
)

export const getUserDBEntrySuccess = createAction(
  GET_USER_DB_SUCCESS,
  props<{user: VerifiedUser}>()
)

/**
 * DB User Profile updates
 * Display name and profile URL
 */
export const updateUserDBProfileEntryStart = createAction(
  UPDATE_USER_DB_DISPLAY_START,
  props<{userProfile: IUserInfo, uid: string}>()
)

export const updateUserDBProfileEntryFailure = createAction(
  UPDATE_USER_DB_DISPLAY_FAILURE,
  props<FailureActionProp>()
)

export const updateUserDBProfileSuccess = createAction(
  UPDATE_USER_DB_DISPLAY_SUCCESS,
  props<{userProfile: IUserInfo, uid: string}>()
)

