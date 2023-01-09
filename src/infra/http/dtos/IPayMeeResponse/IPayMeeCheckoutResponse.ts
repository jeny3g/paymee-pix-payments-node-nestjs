import { IPaymeeShopper } from "../IPaymeeShopper";
import { IPayMeeInstructions } from "./IPayMeeInstructions";

export interface IPayMeeCheckoutResponse {
  email: string;
  referenceCode: string;
  amount: number;
  saleCode: string;
  uuid: string;

  shopper: IPaymeeShopper;
  instructions: IPayMeeInstructions;
}
