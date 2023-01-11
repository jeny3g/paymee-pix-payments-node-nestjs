import { ApiProperty } from '@nestjs/swagger';
import { CreatePixTransactionResponse } from './create-pix-transaction-response';

export class CreatePixTransactionFullResponse {
  @ApiProperty({
    description: 'Status',
    type: String,
  })
  status: string;

  @ApiProperty({
    description: 'Message',
    type: String,
  })
  message: string;

  @ApiProperty()
  response: CreatePixTransactionResponse;
}
