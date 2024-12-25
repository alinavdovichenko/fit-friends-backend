import { User, UserFilter } from '@project/core';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from '@project/authentication';
import { UserQuery } from './query/user.query';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { PrismaClientService } from '@project/models';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    private readonly userRepository: UserRepository,
    private readonly prisma: PrismaClientService,
  ) {}

  public async getUser(id: number) {
    const user = await this.userRepository.findById(id).catch((err) => {
      this.logger.error(err);
      throw new NotFoundException('User not found');
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  public async getUsers(query: UserQuery): Promise<User[] | null> {
    const { limit, page } = query;
    const userFilter: UserFilter = { ...query };
    const users = await this.userRepository
      .find(limit, userFilter, page)
      .catch((err) => {
        this.logger.error(err);
        throw new NotFoundException('.catch: Users not found');
      });

    if (!users) {
      throw new NotFoundException('Users not found');
    }
    return users;
  }

  public async updateUser(id: number, dto: UpdateUserDto) {
    const oldUser = await this.userRepository.findById(id).catch((err) => {
      this.logger.error(err);
      throw new NotFoundException('User not found');
    });

    if (oldUser) {
      const userEntity = new UserEntity({
        ...oldUser,
        ...dto,
      });
      userEntity.createdAt = oldUser.createdAt;

      return await this.userRepository.update(id, userEntity);
    }
  }

  public async deleteCertificate(userId: number, path: string) {
    const user = await this.userRepository.findById(userId).catch((err) => {
      this.logger.error(err);
      throw new NotFoundException('User not found');
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const oldCertificates = user.trainer.certificates;
    const newCertificates = oldCertificates.filter((el) => el !== path);
    await this.prisma.user.update({
      where: {
        userId,
      },
      data: {
        trainer: {
          update: {
            certificate: newCertificates,
          },
        },
      },
    });
  }
}
