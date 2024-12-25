import { Training } from './training';

export interface TotalOrder extends Training {
  totalQuantity: number;
  totalPrice: number;
}
