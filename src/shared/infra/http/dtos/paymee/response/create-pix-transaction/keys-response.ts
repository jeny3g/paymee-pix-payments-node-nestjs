import { ApiProperty } from "@nestjs/swagger";

export class KeysResponse {
  @ApiProperty()
  email: string;

  @ApiProperty()
  document: string;
}
