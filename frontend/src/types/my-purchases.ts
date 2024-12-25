import { Training } from './training';

export type TrainingMyPurchase = {
  training: Training;
  count: number;
};

export type TrainingMyPurchaseStatus = {
  count: number | null;
};
