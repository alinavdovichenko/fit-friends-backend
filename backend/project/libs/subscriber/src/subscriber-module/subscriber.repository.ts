import { Injectable } from '@nestjs/common';
import { SubscriberEntity } from './subscriber.entity';
import { PrismaClientService } from '@project/models';
import { CrudRepository, Subscriber } from '@project/core';

@Injectable()
export class SubscriberRepository
  implements CrudRepository<SubscriberEntity, number, Subscriber>
{
  constructor(private readonly prisma: PrismaClientService) {}

  public async create(item: SubscriberEntity): Promise<Subscriber> {
    const entity = item.toObject();
    return await this.prisma.subscriber.create({ data: { ...entity } });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.subscriber.delete({ where: { id } });
  }

  public async findById(id: number): Promise<Subscriber> {
    return await this.prisma.subscriber.findFirst({ where: { id } });
  }

  public async findByEmail(email: string): Promise<Subscriber> {
    return await this.prisma.subscriber.findFirst({ where: { email } });
  }

  public async findByEmailAndTrainerId(
    email: string,
    trainerId: number,
  ): Promise<Subscriber> {
    return await this.prisma.subscriber.findFirst({
      where: { trainerId, email },
    });
  }

  public async findByTrainerId(trainerId: number): Promise<Subscriber[]> {
    return await this.prisma.subscriber.findMany({ where: { trainerId } });
  }
}
