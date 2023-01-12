import { PayMeeServiceRepository } from '@application/repositories/paymee-service-repository';
import { Module } from '@nestjs/common';
import { PayMeeService } from './paymee/paymee.service';

@Module({
  providers: [
    PayMeeService,
    {
      provide: PayMeeServiceRepository,
      useExisting: PayMeeService,
    },
  ],
  exports: [PayMeeServiceRepository],
})
export class ServiceModule {}
