import { ApiProperty } from '@nestjs/swagger';
import { InstructionsResponse } from './instructions-response';
import { ShopperResponse } from './shopper-response';


export class CreatePixTransactionResponse {
  @ApiProperty({
    description: 'Transaction id',
    type: String,
  })
  email: string;

  @ApiProperty({
    description: 'Reference code must be your application unique id',
    type: String,
  })
  referenceCode: string;

  @ApiProperty({
    description: 'Transaction amount',
    type: Number,
  })
  amount: number;

  @ApiProperty({
    description: "Transaction sale code",
    type: String,
  })
  saleCode: string;

  @ApiProperty({
    description: "Transaction uuid",
    type: String,
  })
  uuid: string;

  @ApiProperty()
  shopper: ShopperResponse;

  @ApiProperty()
  instructions: InstructionsResponse;
}
