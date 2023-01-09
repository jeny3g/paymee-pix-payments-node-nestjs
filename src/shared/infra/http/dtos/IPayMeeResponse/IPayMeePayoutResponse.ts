import { IPayMeeBankDetails } from "./IPayMeeBankDetails";

export type IPayMeePayoutResponse = {
  success: boolean;
  message: string;
  id: number;
  uuid: string;
  currency: string;
  type: string;
  situation: string;
  amount: number;
  status: string;
  referenceCode: string;
  creation: Date;
  maxAge: Date;

  bankDetails: IPayMeeBankDetails;

  receipt: string;
  error_code: string;
};
