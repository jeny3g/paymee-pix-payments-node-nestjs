import { IPayMeeQrCode } from '../create-pix-transaction/IPayMeeQrCode';

export type IPayMeeQrCodeResponse = {
  qrCode: IPayMeeQrCode;
  status: string;
  message: string;
};
