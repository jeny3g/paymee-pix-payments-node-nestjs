import { IPayMeeQrCode } from '../../../IPayMeeResponse/IPayMeeQrCode';

export type IPayMeeQrCodeResponse = {
  qrCode: IPayMeeQrCode;
  status: string;
  message: string;
};
