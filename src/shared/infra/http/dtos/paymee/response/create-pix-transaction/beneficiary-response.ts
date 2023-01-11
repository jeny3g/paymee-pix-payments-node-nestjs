import { ApiProperty } from '@nestjs/swagger';
import { KeysResponse } from './keys-response';
import { QRCodeResponse } from './qr-code-response';

export class BeneficiaryResponse{
  @ApiProperty({
    description: 'QR Code response',
    type: QRCodeResponse,
  })
  qrCode: QRCodeResponse;

  @ApiProperty({
    description: 'Keys response',
    type: KeysResponse,
  })
  keys: KeysResponse;
}
