import { DocumentTypes } from '@shared/constants/document-types';

export type Document = {
  type: DocumentTypes;
  number: string;
};
