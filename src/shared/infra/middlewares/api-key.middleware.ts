import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const { 'x-api-key': apiKey, 'x-api-token': apiToken } = req.headers;

    if (!apiKey) {
      throw new UnauthorizedException('x-api-key header not found.');
    }

    if (!apiToken) {
      throw new UnauthorizedException('x-api-token header not found.');
    }

    next();
  }
}
