import { BeneficiaryResponse } from './beneficiary-response';
import { QRCodeResponse } from './qr-code-response';
import { StepsResponse } from './steps-reponse';

export interface InstructionsResponse {
  chosen: string;
  name: string;
  label: string;

  beneficiary: BeneficiaryResponse;
  qrCode: QRCodeResponse;
  steps: StepsResponse;
}
