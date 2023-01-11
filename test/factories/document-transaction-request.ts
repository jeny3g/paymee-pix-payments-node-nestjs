import { DocumentTypes } from '@shared/constants/document-types';
import { IPayMeeDocument } from '@shared/infra/http/dtos/paymee/request/create-transaction/IPayMeeDocument';

type Override = Partial<IPayMeeDocument>;

export function makeDocumentTranscationFactory(
  override: Override = {},
): IPayMeeDocument {
  return {
    type: DocumentTypes.CPF,
    number: '452.956.960-81',
    ...override,
  };
}
