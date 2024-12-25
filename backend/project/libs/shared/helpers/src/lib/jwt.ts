import { User, TokenPayload } from '@project/core';

export function createJWTPayload(user: User): TokenPayload {
  return {
    sub: user.userId,
    email: user.email,
    role: user.role,
    name: user.name,
  };
}
