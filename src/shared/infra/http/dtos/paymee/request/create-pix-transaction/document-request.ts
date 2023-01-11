import { DocumentTypes } from '@shared/constants/document-types';

export type DocumentRequest = {
  type: DocumentTypes;
  number: string;
};
