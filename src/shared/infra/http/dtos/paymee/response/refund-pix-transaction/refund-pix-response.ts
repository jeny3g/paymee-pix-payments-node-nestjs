import { ApiProperty } from '@nestjs/swagger';
import { PhoneResponse } from '../create-pix-transaction/phone-response';
import { ShopperResponse } from '../create-pix-transaction/shopper-response';
import { BankDetailsResponse } from '../get-pix-transaction/bank-details-response';

export class RefundPixResponse {
  @ApiProperty({
    description: 'Transaction status',
    type: Number,
  })
  status: number;

  @ApiProperty({
    description: 'Transaction message',
    type: String,
  })
  message: string;

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
    description: 'Transaction original amount',
    type: Number,
  })
  originalAmount: number;

  @ApiProperty({
    description: 'Transaction discounts',
    type: Number,
  })
  discounts: number;

  @ApiProperty({
    description: 'Transaction total refund',
    type: Number,
  })
  totalRefund: number;

  @ApiProperty({
    description: 'Transaction shopper',
    type: ShopperResponse,
  })
  shopper: ShopperResponse;

  @ApiProperty({
    description: 'Transaction bank details',
    type: BankDetailsResponse,
  })
  bankDetails: BankDetailsResponse;

  @ApiProperty({
    description: 'Transaction phone',
    type: PhoneResponse,
  })
  phone: PhoneResponse;

  @ApiProperty({
    description: 'Transaction current balance',
    type: Number,
  })
  currentBalance: number;
}
