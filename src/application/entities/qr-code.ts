import { randomUUID } from "crypto";

export type QRCodeProps = {
 id?: string;
 createdAt?: Date;

 url: string;
 base64: string;
 plain: string;
}

export type UnsavedQRCodeProps = Omit<QRCodeProps, 'id' | 'createdAt'>;

export class QRCode {
  private _id: string;
  private props: QRCodeProps;

  constructor(props: QRCodeProps, id?: string) {
    this._id = id ?? randomUUID()

    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
  }

  get id(): string{
    return this._id
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  set createdAt(date: Date) {
    this.props.createdAt = date
  }

  get url(): string {
    return this.props.url
  }

  get base64(): string {
    return this.props.base64
  }

  get plain(): string {
    return this.props.plain
  }
}
