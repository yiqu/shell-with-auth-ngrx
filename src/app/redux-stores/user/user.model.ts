export interface IUserInfo {
  displayName: string;
  email?: string;
  photoUrl: string;
  emailVerfied?: boolean;
  uid?: string;
}

export class UserInfo implements IUserInfo {
  constructor(public displayName: string, public photoUrl: string, public email?: string, public emailVerfied?: boolean,
    public uid?: string) {}
}

/**
 * User profile from Firebase auth.
 * To get a user's profile information, use the properties of an instance of User.
 */
export class FireUserProfile {
  constructor(public displayName: string, public photoUrl: string, public email?: string,  public emailVerfied?: boolean,
    public uid?: string) {
    }
}

export interface IUserInfoState {
  userInfo: FireUserProfile;
  loading: boolean;
  error: boolean;
  errMsg: string;
}
