type PhoneProps = {
  id?: string;

  type: string;
  number: string;
};

export type UnsavedPhoneProps = Omit<PhoneProps, 'id'>;

export class Phone {
  private _id: string;
  private props: PhoneProps;

  constructor(props: PhoneProps) {
    this._id = props.id;
    this.props = { ...props };
  }

  get id() {
    return this._id;
  }

  get type() {
    return this.props.type;
  }

  get number() {
    return this.props.number;
  }
}
