import {
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PersonalOrderRepository } from './personal-order.repository';
import { UserRepository } from '@project/user';
import { TokenPayload, RequestStatus } from '@project/core';
import { PersonalOrderEntity } from './personal-order.entity';

@Injectable()
export class PersonalOrderService {
  private readonly logger = new Logger(PersonalOrderService.name);

  constructor(
    private readonly personalOrderRepository: PersonalOrderRepository,
    private readonly userRepository: UserRepository,
  ) {}

  public async buyPersonalTraining(userId: number, targetId: number) {
    const targetUser = await this.userRepository
      .findById(targetId)
      .catch((err) => {
        this.logger.error(err);
        throw new NotFoundException('User not found');
      });

    if (!targetUser) {
      throw new NotFoundException('TargetUser not found');
    }
    const existsOrder =
      await this.personalOrderRepository.findByUserIdAndTargetId(
        userId,
        targetId,
      );

    if (existsOrder.length) {
      return existsOrder;
    }

    if (userId !== targetId) {
      const entity = new PersonalOrderEntity({
        userId,
        targetId,
        orderStatus: RequestStatus.Default,
      });
      return await this.personalOrderRepository.create(entity);
    }
  }

  public async getPersonalOrder(orderId: number) {
    return await this.personalOrderRepository.findById(orderId);
  }

  public async getInPersonalOrders(targetId: number) {
    return await this.personalOrderRepository.findByTargetId(targetId);
  }

  public async getOutPersonalOrders(userId: number) {
    return await this.personalOrderRepository.findByUserId(userId);
  }

  public async changeStatus(
    payload: TokenPayload,
    { orderId: orderId, newStatus: newStatus },
  ) {
    const order = await this.personalOrderRepository
      .findById(orderId)
      .catch((err) => {
        this.logger.error(err);
        throw new NotFoundException('Order not found');
      });

    if (!order) {
      throw new NotFoundException('Order not found');
    }
    if (order.targetId !== payload.sub) {
      throw new ForbiddenException('You are not the trainer');
    }

    if (order.orderStatus !== newStatus) {
      const entity = new PersonalOrderEntity({
        ...order,
        orderStatus: newStatus,
      });
      entity.createdAt = order.createdAt;
      await this.personalOrderRepository.update(orderId, entity);
      return await this.personalOrderRepository.findById(orderId);
    }
  }
}
