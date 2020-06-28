import { createAction, props } from '@ngrx/store';
import { VerifiedUser } from '../../shared/models/user.model';
import { IUserInfo, UserInfo } from './user.model';
import { LoginFailureActionProp } from '../auth/auth.models';

const SAVE_USER_PROFILE_START: string = "[User/Profile] Save User Profile Started";
const SAVE_USER_PROFILE_SUCCESS: string = "[User/Profile] Save User Profile Success";
const SAVE_USER_PROFILE_FAILURE: string = "[User/Profile] Save User Profile Failure";

export const saveUserProfileStart = createAction(
  SAVE_USER_PROFILE_START,
  props<{info: UserInfo}>()
)

export const saveUserProfileSuccess = createAction(
  SAVE_USER_PROFILE_START,
  props<{info: IUserInfo}>()
)

export const saveUserProfileFailure = createAction(
  SAVE_USER_PROFILE_START,
  props<LoginFailureActionProp>()
)
