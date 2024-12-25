import { Injectable } from '@nestjs/common';
import { FeedbackRepository } from './feedback.repository';
import { CreateReviewDto } from '../dto/create-feedback.dto';
import { Feedback, TokenPayload } from '@project/core';
import { FeedbackEntity } from './feedback.entity';
import { UserService } from '@project/user';

@Injectable()
export class FeedbackService {
  constructor(
    private readonly feedbackRepository: FeedbackRepository,
    private readonly userService: UserService,
  ) {}

  public async create(user: TokenPayload, dto: CreateReviewDto) {
    const { trainingId, rating, text } = dto;
    const existsUser = await this.userService.getUser(user.sub);

    const feedback: Feedback = {
      userId: user.sub,
      trainingId,
      rating,
      text,
      userName: user.name,
      userAvatar: existsUser.avatar,
      createdAt: new Date(),
    };
    const feedbackEntity = new FeedbackEntity(feedback);

    return await this.feedbackRepository.create(feedbackEntity);
  }

  public async getFeedbacks(trainingId: number) {
    return await this.feedbackRepository.findBytrainingId(trainingId);
  }
}
