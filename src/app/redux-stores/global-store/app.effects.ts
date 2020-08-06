import { AuthEffects } from '../auth/auth.effects';
import { RouterEffects } from '../router-related/router-related.effects';
import { LocalStorageEffects } from '../local-storage/local-storage.effects';
import { UserInfoEffects } from '../user/user.effects';
import { UserDatabaseEffects } from '../user-database/user-db.effects';

export const appEffects = [
  AuthEffects,
  UserInfoEffects,
  RouterEffects,
  LocalStorageEffects,
  UserDatabaseEffects
]
