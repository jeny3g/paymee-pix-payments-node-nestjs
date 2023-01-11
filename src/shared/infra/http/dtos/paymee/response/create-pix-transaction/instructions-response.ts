import { ApiProperty } from '@nestjs/swagger';
import { BeneficiaryResponse } from './beneficiary-response';
import { QRCodeResponse } from './qr-code-response';
import { StepsResponse } from './steps-reponse';

export class InstructionsResponse {
  @ApiProperty({
    description: 'Chosen payment method',
    type: String,
  })
  chosen: string;

  @ApiProperty({
    description: 'Payment method name',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Payment method label',
    type: String,
  })
  label: string;

  @ApiProperty()
  beneficiary: BeneficiaryResponse;

  @ApiProperty()
  qrCode: QRCodeResponse;

  @ApiProperty()
  steps: StepsResponse;
}
