import { Entity, PersonalOrder, RequestStatus } from '@project/core';

export class PersonalOrderEntity
  implements Entity<PersonalOrderEntity>, PersonalOrder
{
  userId: number;
  targetId: number;
  createdAt: Date;
  updateAt: Date;
  orderStatus: string;

  constructor(item: PersonalOrder) {
    this.fillEntity(item);
  }

  public fillEntity(entity: PersonalOrder) {
    this.userId = entity.userId;
    this.targetId = entity.targetId;
    this.orderStatus = entity.orderStatus || RequestStatus.Default;
    this.createdAt = new Date();
    this.updateAt = entity.updateAt || new Date();
  }

  public toObject(): PersonalOrderEntity {
    return { ...this };
  }
}
