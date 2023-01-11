import { CurrencyTypes } from '@shared/constants/currency-types';
import { PaymentMethodTypes } from '@shared/constants/payment-method-types';
import { ShopperRequest } from './shopper-request';

export type CreatePixTransactionRequest = {
  currency: CurrencyTypes;
  amount: number;
  referenceCode: string;
  maxAge: number;
  paymentMethod: PaymentMethodTypes;
  callbackURL: string;

  shopper: ShopperRequest;
};
