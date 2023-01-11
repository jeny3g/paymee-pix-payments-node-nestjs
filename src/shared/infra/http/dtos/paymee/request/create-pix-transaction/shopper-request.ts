import { DocumentRequest } from './document-request';
import { PhoneRequest } from './phone-request';

export type ShopperRequest = {
  id?: string;
  name: string;
  email: string;
  firstName?: string;
  lastName?: string;
  agency?: string;
  account?: string;

  document: DocumentRequest;
  phone: PhoneRequest;
};
