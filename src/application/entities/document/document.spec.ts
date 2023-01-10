import { DocumentTypes } from '@shared/constants/document-types';
import { ErrorMessages } from '@shared/constants/error-messages';
import { Document, DocumentProps } from './document';

describe('Document', () => {
  let props: DocumentProps;

  beforeEach(() => {
    props = {
      type: DocumentTypes.CPF,
      number: '452.956.960-81',
    };
  });

  it('should create a new Document with correct properties', () => {
    const document = new Document(props);
    expect(document).toBeInstanceOf(Document);
    expect(document.getProps()).toEqual({
      id: expect.any(String),
      type: props.type,
      number: props.number,
    });
  });

  it('should throw an error if type is not CPF or CNPJ', () => {
    props.type = 'InvalidType' as any;
    expect(() => new Document(props)).toThrowError(
      ErrorMessages.INVALID_DOCUMENT_TYPE,
    );
  });

  it('should throw an error if CPF number is invalid', async () => {
    props.number = 'InvalidCPF';
    await expect(() => new Document(props)).toThrow();
  });

  it('should throw an error if CNPJ number is invalid', async () => {
    props.type = DocumentTypes.CNPJ;
    props.number = 'InvalidCNPJ';

    await expect(() => new Document(props)).toThrow();
  });
});
