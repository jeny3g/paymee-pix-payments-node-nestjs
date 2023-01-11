import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Phone } from '@prisma/client';
import { DocumentResponse } from './document-response';
import { PhoneResponse } from './phone-response';


export class ShopperResponse{
  @ApiProperty({
    description: 'Shopper id',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'Shopper name',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Shopper email',
    type: String,
  })
  email: string;

  @ApiPropertyOptional({
    description: 'Shopper first name',
    type: String,
  })
  firstName?: string;

  @ApiPropertyOptional({
    description: 'Shopper last name',
    type: String,
  })
  lastName?: string;

  @ApiPropertyOptional({
    description: 'Shopper agency',
    type: String,
  })
  agency?: string;

  @ApiPropertyOptional({
    description: 'Shopper account',
    type: String,
  })
  account?: string;

  @ApiProperty({
    description: 'Shopper document',
    type: DocumentResponse,
  })
  document: DocumentResponse;

  @ApiProperty({
    description: 'Shopper phone',
    type: PhoneResponse,
  })
  phone: PhoneResponse;
}
