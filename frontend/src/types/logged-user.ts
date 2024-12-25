import { UserRole } from '../consts';

export type LoggedUser = {
  id: string;
  role: UserRole;
  accessToken: string;
  refreshToken: string;
};
