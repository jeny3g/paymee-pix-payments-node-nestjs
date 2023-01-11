import { BadRequestException, Injectable } from '@nestjs/common';
import { RefundPixRequest } from '@shared/infra/http/dtos/paymee/request/refund-pix-transaction/refund-pix-request';
import { RefundPixResponse } from '@shared/infra/http/dtos/paymee/response/refund-pix-transaction/refund-pix-response';
import { apiPayMeeProduction } from '@shared/services/api';

@Injectable()
class RefundPixTransaction {
  async execute({
    transactionId,
    amount,
    reason,
    apiKey,
    apiToken,
  }: RefundPixRequest): Promise<RefundPixResponse> {
    try {
      const { data } = await apiPayMeeProduction({
        apiKey,
        apiToken,
      }).post<RefundPixResponse>(`/transactions/${transactionId}/refund`, {
        amount,
        reason,
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.message, {
        cause: error,
        description: 'Error on refund pix transaction',
      });
    }
  }
}

export { RefundPixTransaction };
