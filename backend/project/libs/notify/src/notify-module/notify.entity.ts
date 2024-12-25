import { Entity, Notify } from '@project/core';

export class NotifyEntity implements Entity<NotifyEntity>, Notify {
  public targetUserEmail: string;
  public text: string;
  public createdAt: Date;

  constructor(notify: Notify) {
    this.fillEntity(notify);
  }

  public fillEntity(entity: Notify) {
    this.targetUserEmail = entity.targetUserEmail;
    this.text = entity.text;
    this.createdAt = entity.createdAt || new Date();
  }

  public toObject(): NotifyEntity {
    return { ...this };
  }
}
