import { AccessErrorType, UserRole } from '@project/core';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class RoleTrainerGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userRole = request.user.role;

    if (userRole !== UserRole.Coach) {
      throw new ForbiddenException(AccessErrorType.TrainerAccessDenied);
    }

    return true;
  }
}
