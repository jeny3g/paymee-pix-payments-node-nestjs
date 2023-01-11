import { PhoneResponse } from '../create-pix-transaction/phone-response';
import { ShopperResponse } from '../create-pix-transaction/shopper-response';
import { BankDetailsResponse } from '../get-pix-transaction/bank-details-response';

export interface RefundPixResponse {
  status: number;
  message: string;
  uuid: string;
  currency: string;
  originalAmount: number;
  discounts: number;
  totalRefund: number;

  shopper: ShopperResponse;
  bankDetails: BankDetailsResponse;
  phone: PhoneResponse;

  currentBalance: number;
}
