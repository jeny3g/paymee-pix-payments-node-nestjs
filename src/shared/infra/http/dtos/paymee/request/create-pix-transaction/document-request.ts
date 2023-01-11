import { ApiProperty } from '@nestjs/swagger';
import { DocumentTypes } from '@shared/constants/document-types';

export class DocumentRequest {
  @ApiProperty()
  type: DocumentTypes;

  @ApiProperty()
  number: string;
}
