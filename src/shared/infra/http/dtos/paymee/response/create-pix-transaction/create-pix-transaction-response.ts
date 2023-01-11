import { ApiProperty } from '@nestjs/swagger';
import { InstructionsResponse } from './instructions-response';
import { ShopperResponse } from './shopper-response';


export class CreatePixTransactionResponse {
  @ApiProperty()
  email: string;

  @ApiProperty()
  referenceCode: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  saleCode: string;

  @ApiProperty()
  uuid: string;

  @ApiProperty()
  shopper: ShopperResponse;

  @ApiProperty()
  instructions: InstructionsResponse;
}
