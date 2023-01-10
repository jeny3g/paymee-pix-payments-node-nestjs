import { randomUUID } from "crypto";
import { Document } from "./document/document";
import { Phone } from "./phone";

export type CustomerProps = {
  id?: string;
  createdAt?: Date;
  name: string;
  email: string;

  phone?: Phone;
  document?: Document;

  phoneId?: string;
  documentId?: string;
}

export class Customer {
  private _id: string;
  private props: CustomerProps;

  constructor(props: CustomerProps, id?: string) {
    this._id = id ?? randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
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

  get phone(): Phone | undefined {
    return this.props.phone;
  }

  get document(): Document | undefined {
    return this.props.document;
  }

  get phoneId(): string | undefined {
    return this.props.phoneId;
  }

  get documentId(): string | undefined {
    return this.props.documentId;
  }
}
