import { ApiProperty } from "@nestjs/swagger";

export class BankDetailsResponse {
  @ApiProperty({
    description: 'Bank name',
    type: String,
  })
  bank: string;

  @ApiProperty({
    description: 'Branch name',
    type: String,
  })
  branch: string;

  @ApiProperty({
    description: 'Account name',
    type: String,
  })
  account: string;
}
