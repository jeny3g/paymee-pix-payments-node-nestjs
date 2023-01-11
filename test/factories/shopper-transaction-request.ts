import { IPaymeeShopper } from '@shared/infra/http/dtos/paymee/request/create-transaction/IPaymeeShopper';
import { makeDocumentTranscationFactory } from './document-transaction-request';
import { makePhoneTranscationFactory } from './phone-transaction-request';

type Override = Partial<IPaymeeShopper>;

export function makeShopperTranscationFactory(
  override: Override = {},
): IPaymeeShopper {
  return {
    name: 'John Doe',
    email: 'john_doe@gmail.com',
    document: makeDocumentTranscationFactory(),
    phone: makePhoneTranscationFactory(),
    ...override,
  };
}
