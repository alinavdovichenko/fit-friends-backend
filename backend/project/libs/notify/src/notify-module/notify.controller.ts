import { Controller, Delete, Get, Param, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotifyService } from './notify.service';
import { JwtAuthGuard } from '@project/authentication';
import { RequestWithTokenPayload } from '@project/core';
import { fillObject } from '@project/shared/helpers';
import { NotifyRdo } from '../rdo/notify.rdo';

@ApiTags('Notify')
@Controller('notify')
export class NotifyController {
  constructor(private readonly notifyService: NotifyService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  public async show(@Req() { user: payload }: RequestWithTokenPayload) {
    const notify = await this.notifyService.getNotify(payload.email);
    return fillObject(NotifyRdo, notify);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  public async delete(@Param('id') id: number) {
    await this.notifyService.deleteNotify(id);
  }
}
