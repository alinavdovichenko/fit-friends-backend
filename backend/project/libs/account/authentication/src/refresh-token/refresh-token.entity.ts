import { Entity, Token } from '@project/core';

export class RefreshTokenEntity implements Entity<RefreshTokenEntity>, Token {
  public createdAt: Date;
  public exp: Date;
  public id?: number;
  public tokenId: string;
  public userId: number;
  [key: string]: unknown;

  constructor(refreshToken: Token) {
    this.createdAt = new Date();
    this.fillEntity(refreshToken);
  }

  public fillEntity(entity: Token): void {
    this.userId = entity.userId;
    this.id = entity.id;
    this.tokenId = entity.tokenId;
    this.createdAt = entity.createdAt;
    this.exp = entity.exp;
  }

  public toObject(): RefreshTokenEntity {
    return { ...this };
  }
}
