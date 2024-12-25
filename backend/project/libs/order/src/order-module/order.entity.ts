import { Entity, Order } from '@project/core';

export class OrderEntity implements Entity<OrderEntity>, Order {
  public userId: number;
  public type: string;
  public trainerId: number;
  public trainingId: number;
  public price: number;
  public quantity: number;
  public sumPrice: number;
  public typeOfPayment: string;
  public createdAt?: Date;

  constructor(order: Order) {
    this.fillEntity(order);
  }

  public fillEntity(entity: Order) {
    this.userId = entity.userId;
    this.type = entity.type;
    this.trainerId = entity.trainerId;
    this.trainingId = entity.trainingId;
    this.price = entity.price;
    this.quantity = entity.quantity;
    this.sumPrice = this.price * this.quantity;
    this.typeOfPayment = entity.typeOfPayment;
    this.createdAt = new Date();
  }

  public toObject(): OrderEntity {
    return { ...this };
  }
}
