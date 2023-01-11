import { randomUUID } from 'crypto';
import { CustomerProps } from './customer';
import { QRCodeProps } from './qr-code';

export type TransactionProps = {
  id?: string;
  createdAt?: Date;

  amount: number;
  status: string;
  customer: CustomerProps;
  qrCode: QRCodeProps;

  transactionId: string;
};

export type UnsavedTransactionProps = Omit<
  TransactionProps,
  'id' | 'createdAt'
>;

export class Transaction {
  private _id: string;
  private props: TransactionProps;

  constructor(props: TransactionProps, id?: string) {
    this._id = id ?? randomUUID();

    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      id: this._id,
    };
  }

  getProps(): TransactionProps {
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

  get amount(): number {
    return this.props.amount;
  }

  get status(): string {
    return this.props.status;
  }

  get customer(): CustomerProps {
    return this.props.customer;
  }

  get qrCode(): QRCodeProps {
    return this.props.qrCode;
  }

  get transactionId(): string {
    return this.props.transactionId;
  }
}
