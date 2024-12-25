import { User } from './user';

export interface AuthUser extends User {
  email: string;
  passwordHash: string;
}
