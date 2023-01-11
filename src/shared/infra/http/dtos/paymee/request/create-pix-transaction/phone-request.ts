import { ApiProperty } from "@nestjs/swagger";

export class PhoneRequest {
  @ApiProperty()
  type: string;

  @ApiProperty()
  number: string;
}
