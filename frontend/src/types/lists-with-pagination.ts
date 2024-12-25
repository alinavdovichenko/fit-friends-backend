import { User } from './user';
import { Training, TrainingOrders, TrainingBalance, Comment } from '../types';

export type FieldRange = [min: number, max: number];

type BasePagination = {
  totalPages: number;
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
};

export type TrainingsWithPagination = BasePagination & {
  trainings: Training[];
  priceRange: FieldRange;
  caloriesRange: FieldRange;
};

export type UsersWithPagination = BasePagination & {
  users: User[];
};

export type OrdersWithPagination = BasePagination & {
  orders: TrainingOrders[];
};

export type BalancesWithPagination = BasePagination & {
  balances: TrainingBalance[];
};

export type FriendsWithPagination = BasePagination & {
  friends: User[];
};

export type CommentsWithPagination = BasePagination & {
  comments: Comment[];
};
