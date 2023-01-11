import { ApiProperty } from '@nestjs/swagger';
import { BeneficiaryResponse } from './beneficiary-response';
import { QRCodeResponse } from './qr-code-response';
import { StepsResponse } from './steps-reponse';

export class InstructionsResponse {
  @ApiProperty()
  chosen: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  label: string;

  @ApiProperty()
  beneficiary: BeneficiaryResponse;

  @ApiProperty()
  qrCode: QRCodeResponse;

  @ApiProperty()
  steps: StepsResponse;
}
