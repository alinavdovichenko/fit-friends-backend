import { Injectable } from '@nestjs/common';
import { FriendEntity } from './friend.entity';
import { PrismaClientService } from '@project/models';
import { CrudRepository, Friend } from '@project/core';

@Injectable()
export class FriendRepository
  implements CrudRepository<FriendEntity, number, Friend>
{
  constructor(private readonly prisma: PrismaClientService) {}

  public async create(friendEntity: FriendEntity): Promise<Friend> {
    const entity = friendEntity.toObject();
    return await this.prisma.friend.create({
      data: { ...entity },
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.friend.delete({ where: { id } });
  }

  public async findById(id: number): Promise<Friend> {
    return await this.prisma.friend.findFirst({ where: { id } });
  }

  public async findByUserId(userId: number): Promise<Friend[] | null> {
    return await this.prisma.friend.findMany({ where: { userId } });
  }

  public async findByFriendId(friendId: number): Promise<Friend[] | null> {
    return await this.prisma.friend.findMany({ where: { friendId } });
  }

  public async findByUserIdAndFriendId(
    userId: number,
    friendId: number,
  ): Promise<Friend> {
    return await this.prisma.friend.findFirst({
      where: { userId, friendId },
    });
  }
}
