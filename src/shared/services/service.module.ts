import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PayMeeService } from './paymee.service';
import { RequestContextInterceptor } from './request-context-interceptor';

@Module({
  providers: [
    PayMeeService,
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestContextInterceptor,
    },
  ],
  exports: [PayMeeService],
})
export class PayMeeModule {}
