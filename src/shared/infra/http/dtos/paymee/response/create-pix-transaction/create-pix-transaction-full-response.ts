import { ApiProperty } from '@nestjs/swagger';
import { CreatePixTransactionResponse } from './create-pix-transaction-response';

export class CreatePixTransactionFullResponse {
  @ApiProperty()
  status: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  response: CreatePixTransactionResponse;
}
