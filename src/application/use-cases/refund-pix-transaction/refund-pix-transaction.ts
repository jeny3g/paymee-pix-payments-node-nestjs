import { Injectable } from '@nestjs/common';
import { RefundPixResponse } from '@shared/infra/http/dtos/paymee/response/refund-pix-transaction/refund-pix-response';
import { AppError } from '@shared/infra/http/errors/app-error';
import { apiPayMee } from '@shared/services/api';

export interface IRefundPixTransactionRequest {
  transactionId: string;
  amount: number;
  reason: string;
}

@Injectable()
class RefundPixTransaction {
  async execute({
    transactionId,
    amount,
    reason,
  }: IRefundPixTransactionRequest): Promise<RefundPixResponse> {
    try {
      const response = await apiPayMee.post<RefundPixResponse>(
        `/transactions/${transactionId}/refund`,
        {
          amount,
          reason,
        },
      );

      return response.data;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export { RefundPixTransaction };
