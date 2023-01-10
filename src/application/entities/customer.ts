import { randomUUID } from 'crypto';
import { DocumentProps } from './document/document';
import { PhoneProps } from './phone';

export type CustomerProps = {
  id?: string;
  createdAt?: Date;
  name: string;
  email: string;

  phone?: PhoneProps;
  document?: DocumentProps;
};

export class Customer {
  private _id: string;
  private props: CustomerProps;

  constructor(props: CustomerProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
  }

  getProps(): CustomerProps {
    return this.props;
  }

  get id(): string {
    return this._id;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  set createdAt(date: Date) {
    this.props.createdAt = date;
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get phone(): PhoneProps | undefined {
    return this.props.phone;
  }

  get document(): DocumentProps | undefined {
    return this.props.document;
  }
}
