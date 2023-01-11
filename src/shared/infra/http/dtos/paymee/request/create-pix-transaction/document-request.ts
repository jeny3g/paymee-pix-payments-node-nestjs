import { ApiProperty } from '@nestjs/swagger';
import { DocumentTypes } from '@shared/constants/document-types';

export class DocumentRequest {
  @ApiProperty({
    default: DocumentTypes.CPF,
    description: 'Type of document',
  })
  type: DocumentTypes;

  @ApiProperty({
    default: '452.956.960-81',
    description: 'Number of document',
  })
  number: string;
}
