import { ApiProperty } from "@nestjs/swagger";

export class StepsResponse {
  @ApiProperty({
    description: "Step QRCode",
  })
  qrCode: string[];

  @ApiProperty({
    description: "Step Keys",
  })
  key: string[];
}
