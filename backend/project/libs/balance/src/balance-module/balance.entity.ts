import { Balance, Entity } from '@project/core';

export class BalanceEntity implements Entity<BalanceEntity>, Balance {
  public userId: number;
  public trainingId: number;
  public trainingQtt: number;

  constructor(balance: Balance) {
    this.fillEntity(balance);
  }

  fillEntity(entity: Balance) {
    this.userId = entity.userId;
    this.trainingId = entity.trainingId;
    this.trainingQtt = entity.trainingQtt;
  }

  public toObject(): BalanceEntity {
    return { ...this };
  }
}
