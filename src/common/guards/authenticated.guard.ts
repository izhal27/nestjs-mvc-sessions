import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    return request.isAuthenticated();
  }
}
