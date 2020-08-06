import { VerifiedUser } from "../../shared/models/user.model";

export interface IUserDBState {
  appLoadMask: boolean;
  crudLoaded: boolean;
  user: VerifiedUser;
  uid: string;
  error: boolean;
  errorMsg: string;
}
