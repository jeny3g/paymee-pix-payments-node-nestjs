import { CurrencyTypes } from '@shared/constants/currency-types';
import { PaymentMethodTypes } from '@shared/constants/payment-method-types';
import { IPaymeeShopper } from './IPaymeeShopper';

export type ICreatePixTransaction = {
  currency: CurrencyTypes;
  amount: number;
  referenceCode: string;
  maxAge: number;
  paymentMethod: PaymentMethodTypes;
  callbackURL: string;

  shopper: IPaymeeShopper;
};
