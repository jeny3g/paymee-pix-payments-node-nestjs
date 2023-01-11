import { ApiProperty } from '@nestjs/swagger';
import { PaymeeTransactionStatus } from '@shared/constants/paymee-transaction-status';
import { BankDetailsResponse } from './bank-details-response';

export class PixTransactionFullResponse {
  @ApiProperty({
    description: 'Success of response',
    type: Boolean,
  })
  success: boolean;

  @ApiProperty({
    description: 'Message of response',
    type: String,
  })
  message: string;

  @ApiProperty({
    description: 'Transaction id',
    type: Number,
  })
  id: number;

  @ApiProperty({
    description: 'Transaction uuid',
    type: String,
  })
  uuid: string;

  @ApiProperty({
    description: 'Transaction currency',
    type: String,
  })
  currency: string;

  @ApiProperty({
    description: 'Transaction type',
    type: String,
  })
  type: string;

  @ApiProperty({
    description: 'Transaction status',
    type: PaymeeTransactionStatus,
  })
  situation: PaymeeTransactionStatus;

  @ApiProperty({
    description: 'Transaction amount',
    type: Number,
  })
  amount: number;

  @ApiProperty({
    description: 'Transaction status',
    type: String,
  })
  status: string;

  @ApiProperty({
    description: 'Transaction reference code',
    type: String,
  })
  referenceCode: string;

  @ApiProperty({
    description: 'Transaction creation date',
    type: Date,
  })
  creation: Date;

  @ApiProperty({
    description: 'Max age of transaction in date format',
    type: Date,
  })
  maxAge: Date;

  @ApiProperty()
  bankDetails: BankDetailsResponse;

  @ApiProperty({
    description: 'Transaction receipt',
    type: String,
  })
  receipt: string;

  @ApiProperty({
    description: 'Transaction error code',
    type: String,
  })
  error_code: string;
}
