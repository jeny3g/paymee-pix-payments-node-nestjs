import { Customer } from '@application/entities/customer';
import { Document } from '@application/entities/document/document';
import { Phone } from '@application/entities/phone';
import { QRCode } from '@application/entities/qr-code';
import {
  Transaction,
  TransactionProps,
} from '@application/entities/transaction';
import { IPayMeeResponse } from '@shared/infra/http/dtos/IPayMeeResponse/IPayMeeResponse';

export class CreatePixTransactionMapper {
  static toDomain(data: IPayMeeResponse): TransactionProps {
    const { response } = data;

    const { shopper, instructions } = data.response;
    const { qrCode: qrCodeResponse } = instructions;

    const phone = new Phone({
      number: shopper.phone.number,
      type: shopper.phone.type,
    });

    const document = new Document({
      type: shopper.document.type,
      number: shopper.document.number,
    });

    const customer = new Customer({
      name: shopper.name,
      email: shopper.email,
      phone: phone.getProps(),
      document: document.getProps(),
    });

    const qrCode = new QRCode({
      base64: qrCodeResponse.base64,
      plain: qrCodeResponse.plain,
      url: qrCodeResponse.url,
    });

    const transaction = new Transaction({
      amount: response.amount,
      status: String(data.status),
      customer,
      qrCode,
      transactionId: response.uuid,
    });

    const transactionProps: TransactionProps = {
      ...transaction.getProps(),
      customer: {
        ...customer.getProps(),
        phone: phone.getProps(),
        document: document.getProps(),
      },
      qrCode: qrCode.getProps(),
    };

    return transactionProps;
  }
}
