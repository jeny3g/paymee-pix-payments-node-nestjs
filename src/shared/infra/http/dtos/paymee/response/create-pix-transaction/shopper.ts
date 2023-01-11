import { Phone } from '@prisma/client';
import { Document } from './document';

export type Shopper = {
  id?: string;
  name: string;
  email: string;
  firstName?: string;
  lastName?: string;
  agency?: string;
  account?: string;

  document: Document;
  phone: Phone;
};
