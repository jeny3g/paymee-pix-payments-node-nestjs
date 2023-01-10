import { DocumentTypes } from '@shared/constants/document-types';
import { ErrorMessages } from '@shared/constants/error-messages';
import { ValidationHelper } from '@shared/helpers/validation';
import { AppError } from '@shared/infra/http/errors/app-error';
import { randomUUID } from 'crypto';

export type DocumentProps = {
  id?: string;

  type: string;
  number: string;
};

export class Document {
  private _id: string;
  private props: DocumentProps;

  constructor(props: DocumentProps, id?: string) {
    // this.validateDocument(props);

    this._id = id ?? randomUUID();

    this.props = {
      ...props,
      id: this._id,
    };
  }

  getProps(): DocumentProps {
    return this.props;
  }

  get id() {
    return this._id;
  }

  get type(): string {
    return this.props.type;
  }

  get number(): string {
    return this.props.number;
  }

  private validateDocument(props: DocumentProps) {
    if (props.type === DocumentTypes.CPF) {
      return ValidationHelper.validateCPF(props.number);
    } else if (props.type === DocumentTypes.CNPJ) {
      return ValidationHelper.validateCNPJ(props.number);
    } else {
      throw new AppError(ErrorMessages.INVALID_DOCUMENT_TYPE);
    }
  }
}
