import { ShopperRequest } from '@shared/infra/http/dtos/paymee/request/create-pix-transaction/shopper-request';
import { makeDocumentTranscationFactory } from './document-transaction-request';
import { makePhoneTranscationFactory } from './phone-transaction-request';

type Override = Partial<ShopperRequest>;

export function makeShopperTranscationFactory(
  override: Override = {},
): ShopperRequest {
  return {
    name: 'John Doe',
    email: 'john_doe@gmail.com',
    document: makeDocumentTranscationFactory(),
    phone: makePhoneTranscationFactory(),
    ...override,
  };
}
