import { IPayMeePhone } from "../IPayMeePhone";
import { IPayMeeBankDetails } from "../IPayMeeResponse/IPayMeeBankDetails";
import { IPaymeeShopper } from "../IPaymeeShopper";

export interface IPayMeeRequest {
  currency: string;
  amount: number;
  referenceCode: string;
  maxAge: number;
  paymentMethod: string;
  callbackURL: string;

  shopper: IPaymeeShopper;
  phone: IPayMeePhone;
}
