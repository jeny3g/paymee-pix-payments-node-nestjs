
import { Injectable } from "@nestjs/common";
import { CANCELLED } from "dns";
import { PAID, PENDING } from "src/application/constants/paymee-transaction-status";

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
    if (newStatus === PAID) {
      console.log(`PayMee: Transaction paid, orderId: ${referenceCode}`);
    }

    if (newStatus === CANCELLED) {
      console.log(`PayMee: Transaction cancelled, orderId: ${referenceCode}`);
    }

    if (newStatus === PENDING) {
      console.log(`PayMee: Transaction pending, orderId: ${referenceCode}`);
    }
  }
}

export { NoticePixTransaction };
