import { KeysResponse } from './keys-response';
import { QRCodeResponse } from './qr-code-response';

export interface BeneficiaryResponse {
  qrCode: QRCodeResponse;
  keys: KeysResponse;
}
