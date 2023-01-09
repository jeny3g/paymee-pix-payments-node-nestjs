import { Injectable } from "@nestjs/common";
import { apiPayMee } from "src/application/services/api";
import { IPayMeeRefundResponse } from "src/infra/http/dtos/IPayMeeRefundResponse/IPayMeeRefundResponse";
import { AppError } from "src/infra/http/errors/app-error";

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
