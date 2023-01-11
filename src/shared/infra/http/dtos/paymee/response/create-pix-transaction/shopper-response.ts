import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Phone } from '@prisma/client';
import { DocumentResponse } from './document-response';


export class ShopperResponse{
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  firstName?: string;

  @ApiPropertyOptional()
  lastName?: string;

  @ApiPropertyOptional()
  agency?: string;

  @ApiPropertyOptional()
  account?: string;

  @ApiProperty()
  document: DocumentResponse;

  @ApiProperty()
  phone: Phone;
}
