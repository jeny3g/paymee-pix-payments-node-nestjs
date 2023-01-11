import { IPayMeeBankDetails } from '../IPayMeeResponse/IPayMeeBankDetails';
import { IPayMeePhone } from '../paymee/request/create-transaction/IPayMeePhone';
import { IPaymeeShopper } from '../paymee/request/create-transaction/IPaymeeShopper';

export interface IPayMeeRefundResponse {
  status: number;
  message: string;
  uuid: string;
  currency: string;
  originalAmount: number;
  discounts: number;
  totalRefund: number;

  shopper: IPaymeeShopper;
  bankDetails: IPayMeeBankDetails;
  phone: IPayMeePhone;

  currentBalance: number;
}
