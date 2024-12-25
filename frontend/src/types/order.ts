import { Training } from './training';

export type OrdersInfo = {
  count: number;
  sum: number;
};

export type TrainingOrders = OrdersInfo & {
  training: Training;
};
