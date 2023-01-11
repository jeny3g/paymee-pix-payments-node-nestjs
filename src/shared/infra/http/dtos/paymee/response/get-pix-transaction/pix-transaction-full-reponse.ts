import { BankDetailsResponse } from './bank-details-response';

export type PixTransactionFullResponse = {
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

  bankDetails: BankDetailsResponse;

  receipt: string;
  error_code: string;
};
