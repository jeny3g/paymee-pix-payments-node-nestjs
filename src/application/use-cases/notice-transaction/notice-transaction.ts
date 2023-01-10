import { Injectable } from '@nestjs/common';
import { PaymeeTransactionStatus } from '@shared/constants/paymee-transaction-status';

export interface IPayMeeNoticeRequest {
  referenceCode: string;
  newStatus: string;
}

@Injectable()
class NoticePixTransaction {
  async execute({
    newStatus,
    referenceCode,
  }: IPayMeeNoticeRequest): Promise<void> {
    if (newStatus === PaymeeTransactionStatus.PAID) {
      console.log(`PayMee: Transaction paid, orderId: ${referenceCode}`);
    }

    if (newStatus === PaymeeTransactionStatus.CANCELLED) {
      console.log(`PayMee: Transaction cancelled, orderId: ${referenceCode}`);
    }

    if (newStatus === PaymeeTransactionStatus.PENDING) {
      console.log(`PayMee: Transaction pending, orderId: ${referenceCode}`);
    }
  }
}

export { NoticePixTransaction };
