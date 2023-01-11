import { Injectable } from '@nestjs/common';
import { PaymeeTransactionStatus } from '@shared/constants/paymee-transaction-status';
import { NoticePixTransactionRequest } from '@shared/infra/http/dtos/paymee/request/notice-pix-transaction/notice-pix-transaction-request';

@Injectable()
class NoticePixTransaction {
  async execute({
    newStatus,
    referenceCode,
  }: NoticePixTransactionRequest): Promise<NoticePixTransactionRequest> {
    if (newStatus === PaymeeTransactionStatus.PAID) {
      console.log(`PayMee: Transaction paid, orderId: ${referenceCode}`);
    }

    if (newStatus === PaymeeTransactionStatus.CANCELLED) {
      console.log(`PayMee: Transaction cancelled, orderId: ${referenceCode}`);
    }

    if (newStatus === PaymeeTransactionStatus.PENDING) {
      console.log(`PayMee: Transaction pending, orderId: ${referenceCode}`);
    }

    return {newStatus, referenceCode}
  }
}

export { NoticePixTransaction };
