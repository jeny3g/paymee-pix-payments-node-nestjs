import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { BaseRequest } from '../base-request';

export class RefundPixRequest extends BaseRequest {
  @ApiProperty()
  amount: number;

  @ApiProperty()
  reason: string;

  @ApiHideProperty()
  transactionId: string;
}
