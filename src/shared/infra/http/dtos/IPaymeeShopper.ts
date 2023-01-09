import { IPayMeeDocument } from './IPayMeeDocument';
import { IPayMeePhone } from './IPayMeePhone';

export type IPaymeeShopper = {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  agency: string;
  account: string;

  document: IPayMeeDocument;
  phone: IPayMeePhone;
};
