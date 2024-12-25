import { Feedback } from './feedback';

export interface Training {
  id?: number;
  title: string;
  backgroundPicture?: string;
  levelOfUser: string;
  typeOfTraining: string;
  duration: string;
  price: number;
  caloriesQtt: number;
  description: string;
  createdAt?: Date;
  sex: string;
  video: string;
  rating?: number;
  trainerId: number;
  isPromo?: boolean;
  feedbacks?: Feedback[];
}

