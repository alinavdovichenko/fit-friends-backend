import { User } from './user';

export type Review = {
  id: string;
  rating: number;
  text: string;
  user: User;
};
