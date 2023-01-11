import { ApiProperty } from "@nestjs/swagger";

export class PhoneResponse {
  @ApiProperty({
    description: 'Phone type',
    type: String,
  })
  type: string;

  @ApiProperty({
    description: 'Phone number',
    type: String,
  })
  number: string;
}
