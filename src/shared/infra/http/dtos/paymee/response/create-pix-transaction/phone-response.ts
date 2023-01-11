import { ApiProperty } from "@nestjs/swagger";

export class PhoneResponse {
  @ApiProperty()
  type: string;

  @ApiProperty()
  number: string;
}
