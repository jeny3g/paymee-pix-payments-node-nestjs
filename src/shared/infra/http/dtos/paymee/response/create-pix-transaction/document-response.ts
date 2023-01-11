import { DocumentTypes } from '@shared/constants/document-types';

export type DocumentResponse = {
  type: DocumentTypes;
  number: string;
};
