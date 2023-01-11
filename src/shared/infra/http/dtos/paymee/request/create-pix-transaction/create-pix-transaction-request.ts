import { ApiProperty } from '@nestjs/swagger';
import { CurrencyTypes } from '@shared/constants/currency-types';
import { PaymentMethodTypes } from '@shared/constants/payment-method-types';
import { ShopperRequest } from './shopper-request';

export class CreatePixTransactionRequest {
  @ApiProperty()
  currency: CurrencyTypes;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  referenceCode: string;

  @ApiProperty()
  maxAge: number;

  @ApiProperty()
  paymentMethod: PaymentMethodTypes;

  @ApiProperty()
  callbackURL: string;

  @ApiProperty()
  shopper: ShopperRequest;
}
