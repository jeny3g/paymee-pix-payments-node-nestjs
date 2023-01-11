import { ApiProperty } from '@nestjs/swagger';
import { QRCodeResponse } from '../create-pix-transaction/qr-code-response';

export class QRCodeFullResponseResponse {
  @ApiProperty({
    type: QRCodeResponse,
    description: 'QRCode response',
  })
  qrCode: QRCodeResponse;

  @ApiProperty({
    type: String,
    description: 'Status of response',
  })
  status: string;

  @ApiProperty({
    description: 'Message of response',
    type: String,
  })
  message: string;
}
