import { Injectable } from '@nestjs/common';
import { BalanceEntity } from './balance.entity';
import { PrismaClientService } from '@project/models';
import { CrudRepository, Balance } from '@project/core';

@Injectable()
export class BalanceRepository
  implements CrudRepository<BalanceEntity, number, Balance>
{
  constructor(private readonly prisma: PrismaClientService) {}

  public async create(userBalanceEntity: BalanceEntity): Promise<Balance> {
    const entity = userBalanceEntity.toObject();
    return await this.prisma.balance.create({
      data: { ...entity },
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.balance.delete({
      where: { id },
    });
  }

  public async findById(id: number): Promise<Balance> {
    return await this.prisma.balance.findFirst({
      where: { id },
    });
  }

  public async findByUserId(userId: number): Promise<Balance[]> {
    return await this.prisma.balance.findMany({
      where: { userId },
    });
  }

  public async findByUserIdAndTrainingId(userId: number, trainingId: number) {
    return await this.prisma.balance.findFirst({
      where: { userId, trainingId },
    });
  }

  public async update(
    id: number,
    balanceEntity: BalanceEntity,
  ): Promise<Balance> {
    const entity = balanceEntity.toObject();
    return await this.prisma.balance.update({
      where: { id },
      data: { ...entity },
    });
  }
}
