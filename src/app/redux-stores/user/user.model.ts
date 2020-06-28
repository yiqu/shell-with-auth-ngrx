export interface IUserInfo {
  displayName: string;
  phoneNumber: number;
  photoUrl: string;
}

export class UserInfo implements IUserInfo {
  constructor(public displayName: string, public phoneNumber: number, public photoUrl: string) {}
}

export interface IUserInfoState {
  userInfo: IUserInfo;
  loading: boolean;
  error: boolean;
  errMsg: string;
}
