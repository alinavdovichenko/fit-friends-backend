import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { PrismaClientService } from '@project/models';
import {
  CrudRepository,
  User,
  UserFilter
} from '@project/core';


@Injectable()
export class UserRepository
  implements CrudRepository<UserEntity, number, User>
{
  constructor(private readonly prisma: PrismaClientService) {}

  public async create(item: UserEntity): Promise<User> {
    const entityData = item.toObject();
    return this.prisma.user.create({
      data: {
        ...entityData,
        client:
          item.client != null
            ? {
                create: item.client,
              }
            : undefined,

        trainer:
          item.trainer != null
            ? {
                create: item.trainer,
              }
            : undefined,
        orders: {
          connect: [],
        },
        personalOrders: {
          connect: [],
        },
        balance: {
          connect: [],
        },
        friends: {
          connect: [],
        },
      },
      include: {
        client: true,
        trainer: true,
        orders: true,
        personalOrders: true,
        balance: true,
        friends: true,
      },
    });
  }

  public async destroy(userId: number): Promise<void> {
    await this.prisma.user.delete({
      where: {
        userId,
      },
      include: {
        client: true,
        trainer: true,
        orders: true,
        personalOrders: true,
        balance: true,
      },
    });
  }

  public async findById(userId: number): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        userId,
      },
      include: {
        client: true,
        trainer: true,
      },
    });
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  public async update(userId: number, userEntity: UserEntity): Promise<User> {
    const entityData = userEntity.toObject();
    return this.prisma.user.update({
      where: {
        userId,
      },
      data: {
        ...entityData,
        client:
          userEntity.client != null
            ? {
                update: {
                  timeOfTraining:
                    userEntity.client.timeForTraining != null
                      ? userEntity.client.timeForTraining
                      : undefined,
                  caloryLosingPlanTotal:
                    userEntity.client.caloriesToLose != null
                      ? userEntity.client.caloriesToLose
                      : undefined,
                  caloryLosingPlanDaily:
                    userEntity.client.caloriesPerDay != null
                      ? userEntity.client.caloriesPerDay
                      : undefined,
                  isReady:
                    userEntity.client.isReady != null
                      ? userEntity.client.isReady
                      : undefined,
                },
              }
            : undefined,
        trainer:
          userEntity.trainer != null
            ? {
                update: {
                  certificate:
                    userEntity.trainer.certificates != null
                      ? userEntity.trainer.certificates
                      : undefined,
                  merits:
                    userEntity.trainer.merits != null
                      ? userEntity.trainer.merits
                      : undefined,
                  isPersonalTraining:
                    userEntity.trainer.isPersonalTraining != null
                      ? userEntity.trainer.isPersonalTraining
                      : undefined,
                },
              }
            : undefined,
        orders: {
          connect: userEntity.orders.map(({ id }) => ({
            id,
          })),
        },
        personalOrders: {
          connect: userEntity.personalOrders.map(({ id }) => ({ id })),
        },
        balance: {
          connect: userEntity.balance.map(({ id }) => ({
            id,
          })),
        },
        friends: {
          connect: userEntity.friends.map(({ id }) => ({
            id,
          })),
        },
      },
      include: {
        client: true,
        trainer: true,
        balance: true,
        friends: true,
      },
    });
  }

  public async find(
    limit: number,
    filter: UserFilter,
    page: number,
  ): Promise<User[]> | null {
    return this.prisma.user.findMany({
      where: {
        AND: [
          { role: { contains: filter.role } },

          {
            location: { in: filter.locations },
          },

          { level: { contains: filter.level } },

          {
            typesOfTraining: filter.typesOfTraining
              ? { hasSome: filter.typesOfTraining }
              : undefined,
          },

          {
            client: {
              isReady: filter.isReady,
            },
          },
        ],
      },

      take: limit,
      include: {
        client: true,
        trainer: true,
        balance: true,
      },
      orderBy: [{ createdAt: 'desc' }],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }
}

