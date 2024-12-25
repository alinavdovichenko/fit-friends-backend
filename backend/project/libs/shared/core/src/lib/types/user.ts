import { Alert } from './alert';
import { Order } from './order';
import { PersonalOrder } from './personal-order';
import { Balance } from './balance';
import { Friend } from './friend';

export interface User {
  userId?: number;
  name: string;
  email: string;
  avatar?: string;
  passwordHash: string;
  sex: string;
  birthDate?: Date;
  role: string;
  description?: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
  level?: string;
  typesOfTraining?: string[];
  client?: Client | null;
  trainer?: Trainer | null;
  alerts?: Alert[];
  orders?: Order[];
  personalOrders?: PersonalOrder[];
  balance?: Balance[];
  friends?: Friend[];
}

export interface Client {
  id?: number;
  userId?: number;
  timeForTraining?: string;
  caloriesToLose?: number;
  caloriesPerDay?: number;
  isReady?: boolean;
}

export interface Trainer {
  id?: number;
  userId?: number;
  certificates?: string[];
  merits?: string;
  isPersonalTraining?: boolean;
}
