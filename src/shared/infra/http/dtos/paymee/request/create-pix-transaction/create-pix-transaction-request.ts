import { ApiProperty } from '@nestjs/swagger';
import { CurrencyTypes } from '@shared/constants/currency-types';
import { PaymentMethodTypes } from '@shared/constants/payment-method-types';
import { randomUUID } from 'crypto';
import { ShopperRequest } from './shopper-request';

export class CreatePixTransactionRequest {
  @ApiProperty({
    default: CurrencyTypes.BRL,
    description: 'Currency of the transaction',
  })
  currency: CurrencyTypes;

  @ApiProperty({
    default: 1,
    description: 'Amount of the transaction',
  })
  amount: number;

  @ApiProperty({
    default: randomUUID(),
    description: 'Unique identifier for the transaction',
  })
  referenceCode: string;

  @ApiProperty({
    default: 60,
    description: 'Time in minutes to expire',
  })
  maxAge: number;

  @ApiProperty({
    default: PaymentMethodTypes.PIX,
    description: 'Payment method',
  })
  paymentMethod: PaymentMethodTypes;

  @ApiProperty({
    default: 'https://www.example.com/paymeeListener',
    description: 'URL to receive the notification when PIX is paid',
  })
  callbackURL: string;

  @ApiProperty()
  shopper: ShopperRequest;
}
