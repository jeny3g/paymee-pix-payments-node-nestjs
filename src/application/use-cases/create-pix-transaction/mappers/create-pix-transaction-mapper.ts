import { Customer } from '@application/entities/customer';
import { Phone } from '@application/entities/phone';
import { QRCode } from '@application/entities/qr-code';
import { Transaction } from '@application/entities/transaction';
import { IPayMeeResponse } from '@shared/infra/http/dtos/IPayMeeResponse/IPayMeeResponse';

export class CreatePixTransactionMapper {
  static toDomain(data: IPayMeeResponse): Transaction {
    const { response } = data;
    const { shopper, instructions } = data.response;
    const { qrCode: qrCodeResponse } = instructions;

    const customer = new Customer({
      name: shopper.name,
      email: shopper.email,
      phone: new Phone({
        number: shopper.phone.number,
        type: shopper.phone.type,
      }),
    });

    const qrCode = new QRCode({
      base64: qrCodeResponse.base64,
      plain: qrCodeResponse.plain,
      url: qrCodeResponse.url,
    });

    const transaction = new Transaction({
      amount: response.amount,
      status: data.status,
      customer,
      qrCode,
    });

    return transaction;
  }
}
