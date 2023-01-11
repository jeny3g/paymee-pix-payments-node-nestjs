import { IPayMeeInstructions } from './IPayMeeInstructions';
import { Shopper } from './shopper';

export interface IPayMeeCheckoutResponse {
  email: string;
  referenceCode: string;
  amount: number;
  saleCode: string;
  uuid: string;

  shopper: Shopper;
  instructions: IPayMeeInstructions;
}
