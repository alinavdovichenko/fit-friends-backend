import { TrainingType, UserLevel, TrainingDuration, TrainingSexFor } from '../consts';
import { User } from './user';
import { FileData } from './file-data';
import { Comment } from './comment';

export type Training = {
  id: string;
  title: string;
  backgroundImage: string;
  level: UserLevel;
  type: TrainingType;
  duration: TrainingDuration;
  price: number;
  calories: number;
  description: string;
  userSex: TrainingSexFor;
  coachId: string;
  isSpecial: boolean;
  rating: number;
};

export type FullTraining = Training & {
  coach: User;
  video: FileData;
  balance: null | number;
  comments: Comment[];
}

export type TrainingBalance = {
  training: Training;
  count: number;
};

export type TrainingBalanceStatus = {
  count: number | null;
};

