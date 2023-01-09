import { Injectable } from "@nestjs/common";
import { IPayMeeRefundResponse } from "@shared/infra/http/dtos/IPayMeeRefundResponse/IPayMeeRefundResponse";
import { AppError } from "@shared/infra/http/errors/app-error";
import { apiPayMee } from "@shared/services/api";

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
  }: IRefundPixTransactionRequest): Promise<IPayMeeRefundResponse> {
    try {
      const response = await apiPayMee.post<IPayMeeRefundResponse>(
        `/transactions/${transactionId}/refund`,
        {
          amount,
          reason,
        }
      );

      return response.data;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export { RefundPixTransaction };
