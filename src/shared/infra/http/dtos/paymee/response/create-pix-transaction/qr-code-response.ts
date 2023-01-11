import { ApiProperty } from "@nestjs/swagger";

export class QRCodeResponse {
  @ApiProperty({
    description: 'QRCode url',
    type: String,
  })
  url: string;

  @ApiProperty({
    description: 'QRCode base64',
    type: String,
  })
  base64: string;

  @ApiProperty({
    description: 'QRCode plain text',
    type: String,
  })
  plain: string;
}
