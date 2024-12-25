import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  User,
  MetroStation,
  UserLevel,
  UserRole,
  UserSex,
  TrainingDuration,
  TrainingType,
} from '@project/core';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class UserModel extends Document implements User {
  @Prop()
  public avatar?: string;

  @Prop()
  public dateOfBirth?: Date;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public name: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: true,
    type: String,
    enum: UserRole,
    default: UserRole.Default,
  })
  public role: UserRole;

  @Prop({
    required: true,
    type: String,
    enum: UserSex,
  })
  public sex: UserSex;

  @Prop()
  public description?: string;

  @Prop({
    required: true,
    type: String,
    enum: MetroStation,
  })
  public location: MetroStation;

  @Prop({
    required: true,
  })
  public backgroundImage: string;

  @Prop({
    required: true,
    type: String,
    enum: UserLevel,
  })
  public level: UserLevel;

  @Prop({
    required: true,
    type: () => [String],
    enum: TrainingType,
  })
  public trainingTypes: TrainingType[];

  @Prop({
    required: true,
  })
  public isReady: boolean;

  @Prop()
  public certificates?: string[];

  @Prop()
  public achievements?: string;

  @Prop()
  public caloriesToLose?: number;

  @Prop()
  public caloriesPerDay?: number;

  @Prop({
    type: String,
    enum: TrainingDuration,
  })
  public timeForTraining?: TrainingDuration;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
