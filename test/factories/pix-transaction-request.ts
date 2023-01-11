import { CurrencyTypes } from '@shared/constants/currency-types';
import { PaymentMethodTypes } from '@shared/constants/payment-method-types';
import { ICreatePixTransaction } from '@shared/infra/http/dtos/paymee/request/create-pix-transaction/ICreatePixTransaction';
import { randomUUID } from 'crypto';
import { makeShopperTranscationFactory } from './shopper-transaction-request';

type Override = Partial<ICreatePixTransaction>;

export function makeCreatePixTranscationFactory(
  override: Override = {},
): ICreatePixTransaction {
  return {
    currency: CurrencyTypes.BRL,
    amount: 1.0,
    referenceCode: randomUUID(),
    maxAge: 60,
    paymentMethod: PaymentMethodTypes.PIX,
    callbackURL: 'https://foo.bar/paymeeListener',
    shopper: makeShopperTranscationFactory(),
    ...override,
  };
}
