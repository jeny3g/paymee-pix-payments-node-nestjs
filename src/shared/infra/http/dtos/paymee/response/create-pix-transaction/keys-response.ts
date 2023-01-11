import { ApiProperty } from "@nestjs/swagger";

export class KeysResponse {
  @ApiProperty({
    description: "Key email",
    type: String,
  })
  email: string;

  @ApiProperty({
    description: "Key document",
    type: String
  })
  document: string;
}
