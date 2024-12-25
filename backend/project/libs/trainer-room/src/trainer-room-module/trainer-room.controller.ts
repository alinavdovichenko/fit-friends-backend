import {
  Body,
  Controller,
  HttpStatus,
  Param,
  Patch,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TrainingRdo } from '@project/training';
import { JwtAuthGuard, RoleTrainerGuard } from '@project/authentication';
import { CreateTrainingDto, UpdateTrainingDto } from '@project/training';
import { fillObject } from '@project/shared/helpers';
import { TrainingQuery } from '../query/training.query';
import { RequestWithTokenPayload } from '@project/core';
import { OrdersRdo } from '@project/order';
import { TrainerRoomService } from './trainer-room.service';
import { OrderQuery } from '../query/order.query';
import { UserRdo } from '@project/authentication';

@ApiTags('trainer-room')
@Controller('trainer')
export class TrainerRoomController {
  constructor(private readonly trainerRoomService: TrainerRoomService) {}

  @ApiResponse({
    type: TrainingRdo,
    status: HttpStatus.CREATED,
    description: 'The new training has been successfully created.',
  })
  @UseGuards(JwtAuthGuard, RoleTrainerGuard)
  @Post('/create')
  public async createTraining(
    @Body() dto: CreateTrainingDto,
    @Req() { user: payload }: RequestWithTokenPayload,
  ) {
    const newTraining = await this.trainerRoomService.createTraning(
      payload,
      dto,
    );

    return fillObject(TrainingRdo, newTraining);
  }

  @ApiResponse({
    type: TrainingRdo,
    status: HttpStatus.OK,
    description: 'The training has been successfully updates.',
  })
  @UseGuards(JwtAuthGuard, RoleTrainerGuard)
  @Patch('/update/:id')
  public async updatedTraiding(
    @Req() { user: payload }: RequestWithTokenPayload,
    @Param('id') id: number,
    @Body() dto: UpdateTrainingDto,
  ) {
    const updatedTraiding = await this.trainerRoomService.update(
      id,
      payload.sub,
      dto,
    );
    return fillObject(TrainingRdo, updatedTraiding);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/training/:id')
  public async show(@Param('id') id: number) {
    const updatedTraiding = await this.trainerRoomService.getTraining(id);
    return fillObject(TrainingRdo, updatedTraiding);
  }

  @ApiResponse({
    type: TrainingRdo,
    status: HttpStatus.OK,
    description: 'The training list has been successfully created.',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/feed')
  public async feedLine(
    @Query() query: TrainingQuery,
    @Req() { user: payload }: RequestWithTokenPayload,
  ) {
    const trainings = await this.trainerRoomService.getTrainings(
      query,
      payload.sub,
    );

    return fillObject(TrainingRdo, trainings);
  }

  @ApiResponse({
    type: OrdersRdo,
    status: HttpStatus.OK,
    description: 'Get trainer orders',
  })
  @UseGuards(JwtAuthGuard, RoleTrainerGuard)
  @Get('orders')
  async findTrainerOrders(
    @Req() { user: payload }: RequestWithTokenPayload,
    @Query() query: OrderQuery,
  ) {
    const trainerOrders = await this.trainerRoomService.getOrders(
      query,
      payload.sub,
    );

    return fillObject(OrdersRdo, trainerOrders);
  }

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'Get trainer friends',
  })
  @UseGuards(JwtAuthGuard, RoleTrainerGuard)
  @Get('friends')
  async findFriends(@Req() { user: payload }: RequestWithTokenPayload) {
    const friends = await this.trainerRoomService.getFriends(payload.sub);

    return fillObject(UserRdo, friends);
  }
}
