import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { DocumentRequest } from './document-request';
import { PhoneRequest } from './phone-request';

export class ShopperRequest {
  @ApiProperty()
  id?: string;

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
  document: DocumentRequest;

  @ApiProperty()
  phone: PhoneRequest;
}
