import { Injectable } from '@nestjs/common';
import { RefreshTokenEntity } from './refresh-token.entity';
import { PrismaClientService } from '@project/models';
import { Token } from '@project/core';

@Injectable()
export class RefreshTokenRepository {
  constructor(private readonly prisma: PrismaClientService) {}

  public async create(item: RefreshTokenEntity): Promise<Token> {
    const entityData = item.toObject();

    return this.prisma.token.create({
      data: {
        ...entityData,
      },
    });
  }

  public async deleteByUserId(userId: number) {
    this.prisma.token.deleteMany({
      where: {
        userId,
      },
    });
  }

  public async deleteByTokenId(tokenId: string): Promise<Token> {
    return this.prisma.token.delete({
      where: {
        tokenId,
      },
    });
  }

  public async findByTokenId(tokenId: string): Promise<Token | null> {
    return this.prisma.token.findFirst({
      where: {
        tokenId,
      },
    });
  }

  public async deleteExpiredTokens() {
    return this.prisma.token.deleteMany({
      where: {
        exp: { lt: new Date() },
      },
    });
  }
}
