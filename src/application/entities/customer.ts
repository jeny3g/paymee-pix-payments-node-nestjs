import { Document } from "./document/document";
import { Phone } from "./phone";

export type CustomerProps = {
  id: string;
  createdAt: Date;
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

  constructor(props: CustomerProps) {
    this.props = props;
    this._id = props.id;
  }

  get id(): string {
    return this._id;
  }


  get createdAt(): Date {
    return this.props.createdAt;
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
