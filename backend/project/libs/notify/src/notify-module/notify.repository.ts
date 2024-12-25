 import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@project/models';
import { CrudRepository, Notify } from '@project/core';
import { NotifyEntity } from './notify.entity';

@Injectable()
export class NotifyRepository
  implements CrudRepository<NotifyEntity, number, Notify>
{
  constructor(private readonly prisma: PrismaClientService) {}

  public async create(item: NotifyEntity): Promise<Notify> {
    const entity = item.toObject();
    return await this.prisma.notify.create({ data: { ...entity } });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.notify.delete({ where: { id } });
  }

  public async findById(id: number): Promise<Notify> {
    return await this.prisma.notify.findFirst({
      where: { id },
    });
  }

  public async findByEmail(targetUserEmail: string): Promise<Notify[]> {
    return await this.prisma.notify.findMany({
      where: { targetUserEmail },
    });
  }
}
