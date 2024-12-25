export interface PersonalOrder {
  id?: number;
  userId: number;
  targetId: number;
  createdAt?: Date;
  updateAt?: Date;
  orderStatus: string;
}
