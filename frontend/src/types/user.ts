import {
  MetroStation,
  RequestStatus,
  UserLevel,
  UserRole,
  UserSex,
  TrainingType,
} from '../consts';
import { FileData } from './file-data';
import { Training } from './training';

export type TrainingRequest = {
  id: string;
  status: RequestStatus;
};

export type User = {
  id: string;
  avatar?: FileData;
  name: string;
  role: UserRole;
  sex: UserSex;
  isReady: boolean;
  location: MetroStation;
  level: UserLevel;
  trainingTypes: TrainingType[];
  trainingRequest?: TrainingRequest;
};

export type SubscriptionStatus = {
  subscriptionStatus: boolean;
};

export type FriendshipStatus = {
  isFriend: boolean;
};

export type CoachInfo = SubscriptionStatus & {
  trainings: Training[];
};

export type FullUser = User &
  FriendshipStatus & {
    description: string;
    backgroundImage: FileData;
    certificates?: FileData[];
  };

export type AuthUser = FullUser & {
    caloriesToLose?: number;
    caloriesPerDay?: number;
    certificates?: FileData[];
  };
