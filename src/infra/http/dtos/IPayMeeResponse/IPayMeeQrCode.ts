import { IPayMeePayoutResponse } from "./IPayMeePayoutResponse";

export type IPayMeeQrCode = {
  url: string;
  base64: string;
  plain: string;
  payoutResponse?: IPayMeePayoutResponse;
};
