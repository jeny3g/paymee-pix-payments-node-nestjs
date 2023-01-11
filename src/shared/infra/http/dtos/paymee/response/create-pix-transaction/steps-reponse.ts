import { ApiProperty } from "@nestjs/swagger";

export class StepsResponse {
  @ApiProperty()
  qrCode: string[];

  @ApiProperty()
  key: string[];
}
