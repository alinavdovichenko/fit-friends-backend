import { TokenPayload } from './token-payload';

export interface RefreshTokenPayload extends TokenPayload {
  tokenId: string;
}
