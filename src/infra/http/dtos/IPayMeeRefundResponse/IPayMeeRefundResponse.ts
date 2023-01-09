import { IPayMeePhone } from "../IPayMeePhone";
import { IPayMeeBankDetails } from "../IPayMeeResponse/IPayMeeBankDetails";
import { IPaymeeShopper } from "../IPaymeeShopper";

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
