import { IPayMeePhone } from "@shared/infra/http/dtos/IPayMeePhone";

type Override = Partial<IPayMeePhone>;

export function makePhoneTranscationFactory(
  override: Override = {
  },
): IPayMeePhone {
  return {
    type: 'MOBILE',
    number: '27938797884',
    ...override,
  };
}
