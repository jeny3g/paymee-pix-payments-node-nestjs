import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export class RefundPixRequest {
  @ApiProperty()
  amount: number;

  @ApiProperty()
  reason: string;

  @ApiHideProperty()
  transactionId: string;
}
