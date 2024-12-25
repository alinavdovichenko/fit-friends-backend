import { User } from './user';
import { Training } from './training';

export type MainPageData = {
  trainingsForUser: Training[];
  specialTrainings: Training[];
  popularTrainings: Training[];
  readyUsers: User[];
}
