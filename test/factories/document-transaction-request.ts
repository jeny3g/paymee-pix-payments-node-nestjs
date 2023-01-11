import { DocumentTypes } from '@shared/constants/document-types';
import { DocumentRequest } from '@shared/infra/http/dtos/paymee/request/create-pix-transaction/document-request';

type Override = Partial<DocumentRequest>;

export function makeDocumentTranscationFactory(
  override: Override = {},
): DocumentRequest {
  return {
    type: DocumentTypes.CPF,
    number: '452.956.960-81',
    ...override,
  };
}
