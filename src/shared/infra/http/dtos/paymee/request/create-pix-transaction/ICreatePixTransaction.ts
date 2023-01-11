import { IPaymeeShopper } from './IPaymeeShopper';

export interface ICreatePixTransaction {
  currency: string;
  amount: number;
  referenceCode: string;
  maxAge: number;
  paymentMethod: string;
  callbackURL: string;

  shopper: IPaymeeShopper;
}
