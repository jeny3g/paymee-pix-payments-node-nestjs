import { DocumentTypes } from '@shared/constants/document-types';

export type IPayMeeDocument = {
  type: DocumentTypes;
  number: string;
};
