import { randomUUID } from 'crypto';

export type PhoneProps = {
  id?: string;

  type: string;
  number: string;
};

export type UnsavedPhoneProps = Omit<PhoneProps, 'id'>;

export class Phone {
  private _id: string;
  private props: PhoneProps;

  constructor(props: PhoneProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = { ...props };
  }

  getProps(): PhoneProps {
    return this.props;
  }

  get id(): string {
    return this._id;
  }

  get type(): string {
    return this.props.type;
  }

  get number(): string {
    return this.props.number;
  }
}
