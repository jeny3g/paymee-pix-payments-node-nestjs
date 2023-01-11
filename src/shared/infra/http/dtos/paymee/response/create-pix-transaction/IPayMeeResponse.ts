import { IPayMeeCheckoutResponse } from './IPayMeeCheckoutResponse';

export interface IPayMeeResponse {
  status: string;
  message: string;

  response: IPayMeeCheckoutResponse;
}
