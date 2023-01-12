import { Module } from '@nestjs/common';
import { PayMeeService } from './paymee/paymee.service';

@Module({
  providers: [PayMeeService],
  exports: [PayMeeService],
})
export class ServiceModule {}
