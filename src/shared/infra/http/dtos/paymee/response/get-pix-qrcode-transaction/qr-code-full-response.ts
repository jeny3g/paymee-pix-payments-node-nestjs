import { QRCodeResponse } from '../create-pix-transaction/qr-code-response';

export type QRCodeFullResponseResponse = {
  qrCode: QRCodeResponse;
  status: string;
  message: string;
};
