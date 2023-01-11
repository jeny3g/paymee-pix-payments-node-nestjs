import { IPaymeeShopper } from '../paymee/request/create-transaction/IPaymeeShopper';

export type IPayMeePaymentConfirmationRequest = {
  saleToken: string;
  referenceCode: string;
  currency: string;
  amount: number;

  payMeeShopper: IPaymeeShopper;
  date: string;
  newStatus: string;
};
