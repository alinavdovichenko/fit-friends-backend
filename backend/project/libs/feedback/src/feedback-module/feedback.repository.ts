import { FeedbackEntity } from './feedback.entity';
import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@project/models';
import {
  CrudRepository,
  Feedback
} from '@project/core';

@Injectable()
export class FeedbackRepository
  implements CrudRepository<FeedbackEntity, number, Feedback>
{
  constructor(private readonly prisma: PrismaClientService) {}
  findById(id: number): Promise<Feedback> {
    return this.prisma.feedback.findFirst({ where: { id } });
  }

  public async create(feedbackEntity: FeedbackEntity): Promise<Feedback> {
    const entity = feedbackEntity.toObject();
    const newFeedback = await this.prisma.feedback.create({
      data: {
        ...entity,
      },
    });

    const newRating = await this.prisma.feedback.aggregate({
      where: {
        trainingId: entity.trainingId,
      },
      _avg: {
        rating: true,
      },
    });

    await this.prisma.training.update({
      where: {
        id: entity.trainingId,
      },
      data: {
        rating: Number(newRating._avg.rating.toFixed(1)) ?? 0,
      },
    });

    return newFeedback;
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.feedback.delete({ where: { id } });
  }

  public async findBytrainingId(
    trainingId: number,
  ): Promise<Feedback[] | null> {
    return await this.prisma.feedback.findMany({ where: { trainingId } });
  }
}
