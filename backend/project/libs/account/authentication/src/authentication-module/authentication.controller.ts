import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from '../dto/create-user.dto';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoggedUserRdo } from '../rdo/logged-user.rdo';
import { UserRdo } from '../rdo/user.rdo';
import { RequestWithTokenPayload, RequestWithUser } from '@project/core';
import { UserService } from '@project/user';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { JwtRefreshGuard } from '../guards/jwt-refresh.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authService: AuthenticationService,
    private readonly userService: UserService,
  ) {}

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.',
  })
  @Post('/register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.createUser(dto);
    return this.authService.createUserToken(newUser);
  }

  @UseGuards(LocalAuthGuard)
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged.',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Password or Login is wrong.',
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Req() { user }: RequestWithUser) {
    return this.authService.createUserToken(user);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'User has been successfully logged out.',
  })
  @Post('logout')
  async logout(@Req() user: RequestWithUser) {
    return this.authService.logout(user.user.userId);
  }

  @UseGuards(JwtRefreshGuard)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get a new access/refresh tokens',
  })
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  public async refreshToken(@Req() { user }: RequestWithUser) {
    return this.authService.createUserToken(user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Checkig token availibility',
  })
  @Post('check')
  @HttpCode(HttpStatus.OK)
  public async checkToken(@Req() { user: payload }: RequestWithTokenPayload) {
    const user = await this.userService.getUser(payload.sub);
    return this.authService.createUserToken(user);
  }
}
