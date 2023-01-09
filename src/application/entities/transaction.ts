import { Customer } from "./customer";
import { QRCode } from "./qr-code";

export type TransactionProps = {
  id: string;
  createdAt: Date;
  amount: number;
  status: string;
  customer: Customer;
  qrCode: QRCode;
}

export type UnsavedTransactionProps = Omit<TransactionProps, "id" | "createdAt">;

export class Transaction {
 private _id: string;
 private props: TransactionProps;

 constructor(props: TransactionProps) {
    this._id = props.id;
    this.props = {...props};
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get amount() {
    return this.props.amount;
  }

  get status() {
    return this.props.status;
  }

  get customer() {
    return this.props.customer;
  }

  get qrCode() {
    return this.props.qrCode;
  }
}
