import {
  Get,
  Body,
  Post,
  Param,
  UseGuards,
  Controller,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { FeedbackRdo } from '../rdo/feedback.rdo';
import { FeedbackService } from './feedback.service';
import { JwtAuthGuard, RoleClientGuard } from '@project/authentication';
import { RequestWithTokenPayload } from '@project/core';
import { CreateReviewDto } from '../dto/create-feedback.dto';
import { fillObject } from '@project/shared/helpers';

@ApiTags('feedbacks')
@Controller('feedbacks')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post('/create')
  @ApiResponse({
    type: FeedbackRdo,
    status: HttpStatus.CREATED,
    description: 'The new review has been successfully created.',
  })
  @UseGuards(JwtAuthGuard, RoleClientGuard)
  public async create(
    @Req() { user: payload }: RequestWithTokenPayload,
    @Body() dto: CreateReviewDto,
  ) {
    const newReview = await this.feedbackService.create(payload, dto);

    return fillObject(FeedbackRdo, newReview);
  }

  @Get(':id')
  @ApiResponse({
    schema: {
      type: 'array',
      items: { $ref: getSchemaPath(FeedbackRdo) },
    },
    status: HttpStatus.OK,
    description: 'The review has been successfully found.',
  })
  @UseGuards(JwtAuthGuard)
  public async showTrainingFeedbacks(@Param('id') trainingId: number) {
    const feedbacks = await this.feedbackService.getFeedbacks(trainingId);

    return fillObject(FeedbackRdo, feedbacks);
  }
}
