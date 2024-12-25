import { Entity, Feedback, Training } from '@project/core';

export class TrainingEntity implements Entity<TrainingEntity>, Training {
  public title: string;
  public backgroundPicture?: string;
  public levelOfUser: string;
  public typeOfTraining: string;
  public duration: string;
  public price: number;
  public caloriesQtt: number;
  public createdAt: Date;
  public description: string;
  public sex: string;
  public video: string;
  public rating?: number;
  public trainerId: number;
  public isPromo?: boolean;
  public feedbacks?: Feedback[];

  constructor(fitnessTraining: Training) {
    this.fillEntity(fitnessTraining);
  }

  public fillEntity(entity: Training): void {
    this.title = entity.title;
    this.backgroundPicture = entity.backgroundPicture;
    this.levelOfUser = entity.levelOfUser;
    this.typeOfTraining = entity.typeOfTraining;
    this.duration = entity.duration;
    this.price = entity.price;
    this.caloriesQtt = entity.caloriesQtt;
    this.createdAt = new Date();
    this.description = entity.description;
    this.sex = entity.sex;
    this.video = entity.video;
    this.rating = entity.rating ? entity.rating : 0;
    this.trainerId = entity.trainerId;
    this.isPromo = entity.isPromo;
    this.feedbacks = [];
  }

  public toObject(): TrainingEntity {
    return { ...this };
  }
}
