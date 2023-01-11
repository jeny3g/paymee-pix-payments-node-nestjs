import { PhoneRequest } from '@shared/infra/http/dtos/paymee/request/create-pix-transaction/phone-request';

type Override = Partial<PhoneRequest>;

export function makePhoneTranscationFactory(
  override: Override = {},
): PhoneRequest {
  return {
    type: 'MOBILE',
    number: '27938797884',
    ...override,
  };
}
