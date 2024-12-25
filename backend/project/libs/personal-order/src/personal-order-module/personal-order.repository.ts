import { Injectable } from '@nestjs/common';
import { PersonalOrderEntity } from './personal-order.entity';
import { PrismaClientService } from '@project/models';
import { CrudRepository, PersonalOrder } from '@project/core';

@Injectable()
export class PersonalOrderRepository
  implements CrudRepository<PersonalOrderEntity, number, PersonalOrder>
{
  constructor(private readonly prisma: PrismaClientService) {}

  public async create(
    personalOrderTrainingEntity: PersonalOrderEntity,
  ): Promise<PersonalOrder> {
    const entity = personalOrderTrainingEntity.toObject();
    return await this.prisma.personalOrder.create({
      data: { ...entity },
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.personalOrder.delete({
      where: {
        id,
      },
    });
  }

  public async findById(id: number): Promise<PersonalOrder> {
    return await this.prisma.personalOrder.findFirst({
      where: { id },
    });
  }

  public async findByUserId(userId: number): Promise<PersonalOrder[]> {
    return await this.prisma.personalOrder.findMany({
      where: { userId },
    });
  }

  public async findByTargetId(targetId: number): Promise<PersonalOrder[]> {
    return await this.prisma.personalOrder.findMany({
      where: { targetId },
    });
  }

  public async findByUserIdAndTargetId(
    userId: number,
    targetId: number,
  ): Promise<PersonalOrder[]> {
    return await this.prisma.personalOrder.findMany({
      where: {
        AND: [{ userId }, { targetId }],
      },
    });
  }

  public async findByTrainerId(targetId: number): Promise<PersonalOrder[]> {
    return await this.prisma.personalOrder.findMany({
      where: { targetId },
    });
  }

  public async update(
    id: number,
    personalOrderTrainingEntity: PersonalOrderEntity,
  ): Promise<PersonalOrder> {
    const entity = personalOrderTrainingEntity.toObject();
    return await this.prisma.personalOrder.update({
      where: { id },
      data: { ...entity },
    });
  }
}
