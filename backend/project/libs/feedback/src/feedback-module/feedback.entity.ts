import { Entity, Feedback } from '@project/core';

export class FeedbackEntity implements Entity<FeedbackEntity>, Feedback {
  public userId: number;
  public trainingId: number;
  public rating: number;
  public text: string;
  public createdAt?: Date;
  public userName: string;
  public userAvatar: string;

  constructor(feedBack: Feedback) {
    this.fillEntity(feedBack);
  }

  public fillEntity(entity: Feedback) {
    this.userId = entity.userId;
    this.trainingId = entity.trainingId;
    this.rating = entity.rating;
    this.text = entity.text;
    this.userName = entity.userName;
    this.userAvatar = entity.userAvatar;
    this.createdAt = new Date();
  }

  public toObject(): FeedbackEntity {
    return { ...this };
  }
}
