import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PersonalOrderRdo } from '../rdo/personal-order.rdo';
import { JwtAuthGuard, RoleClientGuard } from '@project/authentication';
import { RequestWithTokenPayload } from '@project/core';
import { PersonalOrderService } from './personal-order.service';
import { fillObject } from '@project/shared/helpers';
import { PersonalOrderStatusQuery } from '../query/personal-order-status.query';

@ApiTags('Personal order')
@Controller('personal-order')
export class PersonalOrderController {
  constructor(private readonly personalOrderService: PersonalOrderService) {}

  @ApiResponse({
    type: PersonalOrderRdo,
    status: HttpStatus.OK,
    description: 'The personal training order successfully created.',
  })
  @UseGuards(JwtAuthGuard, RoleClientGuard)
  @Post(':id')
  public async addPersonalOrder(
    @Param('id') targetId: number,
    @Req() { user: payload }: RequestWithTokenPayload,
  ) {
    const newPersonalOrder =
      await this.personalOrderService.buyPersonalTraining(
        payload.sub,
        targetId,
      );
    return fillObject(PersonalOrderRdo, newPersonalOrder);
  }

  @ApiResponse({
    type: PersonalOrderRdo,
    status: HttpStatus.OK,
    description: 'The personal training order successfully changed',
  })
  @UseGuards(JwtAuthGuard)
  @Patch('/')
  public async approvePersonalOrder(
    @Query() query: PersonalOrderStatusQuery,
    @Req() { user: payload }: RequestWithTokenPayload,
  ) {
    const personalOrder = await this.personalOrderService.changeStatus(
      payload,
      query,
    );
    return fillObject(PersonalOrderRdo, personalOrder);
  }

  @ApiResponse({
    type: PersonalOrderRdo,
    status: HttpStatus.OK,
    description: 'The personal training order successfully showed',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/in/:id')
  public async getInPersonalOrders(@Param('id') userId: number) {
    const personalOrders =
      await this.personalOrderService.getInPersonalOrders(userId);
    return fillObject(PersonalOrderRdo, personalOrders);
  }

  @ApiResponse({
    type: PersonalOrderRdo,
    status: HttpStatus.OK,
    description: 'The personal training order successfully showed',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/out')
  public async getOutPersonalOrders(
    @Req() { user: payload }: RequestWithTokenPayload,
  ) {
    const personalOrders = await this.personalOrderService.getOutPersonalOrders(
      payload.sub,
    );
    return fillObject(PersonalOrderRdo, personalOrders);
  }
}
