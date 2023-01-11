import { ApiProperty } from "@nestjs/swagger";

export class PhoneRequest {
  @ApiProperty({
    default: "MOBILE",
    description: "Type of phone"
  })
  type: string;

  @ApiProperty({
    default: "5511999999999",
    description: "Number of phone"
  })
  number: string;
}
