import {
  TrainingType,
} from '../consts';

export type PopularTraining = {
  id: string;
  title: string;
  backgroundImage: string;
  type: TrainingType;
  price: number;
  calories: number;
  description: string;
  rating: number;
};

