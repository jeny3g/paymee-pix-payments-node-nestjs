import { ApiProperty } from '@nestjs/swagger';
import { KeysResponse } from './keys-response';
import { QRCodeResponse } from './qr-code-response';

export class BeneficiaryResponse{
  @ApiProperty()
  qrCode: QRCodeResponse;

  @ApiProperty()
  keys: KeysResponse;
}
