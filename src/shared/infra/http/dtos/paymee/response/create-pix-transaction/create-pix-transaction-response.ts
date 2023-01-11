import { InstructionsResponse } from './instructions-response';
import { ShopperResponse } from './shopper-response';

export interface CreatePixTransactionResponse {
  email: string;
  referenceCode: string;
  amount: number;
  saleCode: string;
  uuid: string;

  shopper: ShopperResponse;
  instructions: InstructionsResponse;
}
