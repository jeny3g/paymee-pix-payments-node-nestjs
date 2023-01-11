import { ApiProperty } from '@nestjs/swagger';
import { DocumentTypes } from '@shared/constants/document-types';

export class DocumentResponse {
  @ApiProperty({
    description: 'Document type',
    type: DocumentTypes,
  })
  type: DocumentTypes;

  @ApiProperty({
    description: 'Document number',
    type: String,
  })
  number: string;
}
