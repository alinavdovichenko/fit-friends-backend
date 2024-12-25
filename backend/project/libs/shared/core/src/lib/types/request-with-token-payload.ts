import { TokenPayload } from './token-payload';

export interface RequestWithTokenPayload {
  user?: TokenPayload;
}
