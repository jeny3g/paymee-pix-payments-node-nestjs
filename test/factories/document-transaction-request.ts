import { IPayMeeDocument } from "@shared/infra/http/dtos/IPayMeeDocument";

type Override = Partial<IPayMeeDocument>;

export function makeDocumentTranscationFactory(
  override: Override = {
  },
): IPayMeeDocument {
  return {
    type: 'CPF',
    number: '452.956.960-81',
    ...override,
  };
}
