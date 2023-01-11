import { ApiProperty } from "@nestjs/swagger";

export class QRCodeResponse {
  @ApiProperty()
  url: string;

  @ApiProperty()
  base64: string;

  @ApiProperty()
  plain: string;

}
