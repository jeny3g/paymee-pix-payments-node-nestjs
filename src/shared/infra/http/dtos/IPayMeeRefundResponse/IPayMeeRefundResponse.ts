import { IPayMeePhone } from '../paymee/request/create-pix-transaction/IPayMeePhone';
import { IPaymeeShopper } from '../paymee/request/create-pix-transaction/IPaymeeShopper';
import { BankDetailsResponse } from '../paymee/response/get-pix-transaction/bank-details-response';

export interface IPayMeeRefundResponse {
  status: number;
  message: string;
  uuid: string;
  currency: string;
  originalAmount: number;
  discounts: number;
  totalRefund: number;

  shopper: IPaymeeShopper;
  bankDetails: BankDetailsResponse;
  phone: IPayMeePhone;

  currentBalance: number;
}
