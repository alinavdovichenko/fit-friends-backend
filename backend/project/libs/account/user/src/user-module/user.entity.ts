import { compare, genSalt, hash } from 'bcrypt';
import {
  Balance,
  Client,
  Entity,
  Friend,
  Order,
  PersonalOrder,
  Trainer,
  User,
} from '@project/core';

const SALT_ROUNDS = 10;

export class UserEntity implements Entity<UserEntity>, User {
  public name: string;
  public email: string;
  public avatar?: string;
  public passwordHash: string;
  public sex: string;
  public birthDate?: Date;
  public role: string;
  public description?: string;
  public location: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public level?: string;
  public typesOfTraining?: string[];
  public client?: Client | null;
  public trainer?: Trainer | null;
  public refreshTokenHash?: string;
  public orders?: Order[];
  public personalOrders?: PersonalOrder[];
  public balance?: Balance[];
  public friends?: Friend[];

  constructor(user: User) {
    this.fillEntity(user);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(user: User) {
    this.name = user.name;
    this.email = user.email;
    this.avatar = user.avatar || '';
    this.passwordHash = user.passwordHash;
    this.sex = user.sex;
    this.birthDate = user.birthDate;
    this.role = user.role;
    this.description = user.description || '';
    this.location = user.location;
    this.createdAt = user.createdAt || new Date();
    this.updatedAt = user.updatedAt || new Date();
    this.level = user.level || '';
    this.typesOfTraining = user.typesOfTraining || [];
    this.client = user.client;
    this.trainer = user.trainer;
    this.orders = user.orders || [];
    this.personalOrders = user.personalOrders || [];
    this.balance = user.balance || [];
    this.friends = user.friends || [];
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
