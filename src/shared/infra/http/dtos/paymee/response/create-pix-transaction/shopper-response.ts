import { Phone } from '@prisma/client';
import { DocumentResponse } from './document-response';

export type ShopperResponse = {
  id?: string;
  name: string;
  email: string;
  firstName?: string;
  lastName?: string;
  agency?: string;
  account?: string;

  document: DocumentResponse;
  phone: Phone;
};
