import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { DocumentRequest } from './document-request';
import { PhoneRequest } from './phone-request';

export class ShopperRequest {
  @ApiProperty({
    default: 'John Doe',
    description: 'Name of the customer',
  })
  name: string;

  @ApiProperty({
    default: "john_doe@gmail.com",
    description: "Email of the customer"
  })
  email: string;

  @ApiProperty()
  document: DocumentRequest;

  @ApiProperty()
  phone: PhoneRequest;
}
