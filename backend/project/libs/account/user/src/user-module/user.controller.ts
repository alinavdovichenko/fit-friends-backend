import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Query,
  Req,
  UseGuards
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserRdo, UpdateUserDto } from '@project/authentication';
import { UserService } from './user.service';
import { UserQuery } from './query/user.query';
import { RequestWithTokenPayload } from '@project/core';
import { fillObject } from '@project/shared/helpers';
import { JwtAuthGuard } from '../../../authentication/src/guards/jwt-auth.guard';
import { RoleClientGuard } from '../../../authentication/src/guards/role-client.guard';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard, RoleClientGuard)
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'Users list complete.',
  })
  @Get('/feed')
  public async feedLine(@Query() query: UserQuery) {
    const users = await this.userService.getUsers(query);
    return fillObject(UserRdo, users);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User by id received',
  })
  @Get(':id')
  public async show(@Param('id') id: number) {
    const user = await this.userService.getUser(id);
    return fillObject(UserRdo, user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User updated.',
  })
  @Patch('/update')
  public async update(
    @Req() { user: payload }: RequestWithTokenPayload,
    @Body() dto: UpdateUserDto,
  ) {
    const updatedUser = await this.userService.updateUser(payload.sub, dto);
    return fillObject(UserRdo, updatedUser);
  }
}
