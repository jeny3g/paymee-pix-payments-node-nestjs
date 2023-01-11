import { ApiProperty } from '@nestjs/swagger';
import { DocumentTypes } from '@shared/constants/document-types';

export class DocumentResponse {
  @ApiProperty()
  type: DocumentTypes;

  @ApiProperty()
  number: string;
}
