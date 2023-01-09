import { DocumentTypes } from "@shared/constants/document-types";
import { ErrorMessages } from "@shared/constants/error-messages";
import { Document, DocumentProps } from "./document";

describe('Document', () => {
  let document: Document;
  let props: DocumentProps;

  beforeEach(() => {
    props = {
      id: '123',
      type: DocumentTypes.CPF,
      number: '12345678910'
    };
  });

  describe('constructor', () => {
    it('should create a valid document', () => {
      document = new Document(props);

      expect(document).toBeInstanceOf(Document);
      expect(document.id).toBe('123');
      expect(document.type).toBe(DocumentTypes.CPF);
      expect(document.number).toBe('12345678910');
    });
  });

  describe('validateDocument', () => {
    it('should throw an error when type is invalid', () => {
      props.type = 'invalid';
      expect(() => new Document(props)).toThrowError(ErrorMessages.INVALID_DOCUMENT_TYPE);
    });

    it('should throw an error when CPF is invalid', () => {
      props.type = DocumentTypes.CPF;
      props.number = '123456789';

      expect(() => new Document(props)).toThrowError(ErrorMessages.INVALID_CPF);
    });

    it('should throw an error when CNPJ is invalid', () => {
      props.type = DocumentTypes.CNPJ;
      props.number = '123456789';

      expect(() => new Document(props)).toThrowError(ErrorMessages.INVALID_CNPJ);
    });
  });
});
