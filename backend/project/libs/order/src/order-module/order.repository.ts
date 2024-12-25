import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@project/models';
import { OrderQuery } from '../query/order.query';
import { OrderEntity } from './order.entity';
import { Order } from '@project/core';

@Injectable()
export class OrderRepository {
  constructor(private readonly prisma: PrismaClientService) {}

  public async create(orderEntity: OrderEntity): Promise<Order> {
    const entityOrder = orderEntity.toObject();
    return await this.prisma.order.create({
      data: { ...entityOrder },
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.order.delete({
      where: {
        id,
      },
    });
  }

  public async findById(id: number): Promise<Order> {
    return await this.prisma.order.findFirst({
      where: {
        id,
      },
    });
  }

  public async findByTrainingId(trainingId: number): Promise<Order[] | null> {
    return await this.prisma.order.findMany({
      where: {
        trainingId,
      },
    });
  }

  public async findByUserId(userId: number): Promise<Order[] | null> {
    return await this.prisma.order.findMany({
      where: {
        userId,
      },
    });
  }

  public async find(query: OrderQuery, trainerId: number): Promise<Order[]> {
    const { limit, page } = query;
    return await this.prisma.order.findMany({
      where: { trainerId },
      orderBy: { trainingId: 'desc' },
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }
}
