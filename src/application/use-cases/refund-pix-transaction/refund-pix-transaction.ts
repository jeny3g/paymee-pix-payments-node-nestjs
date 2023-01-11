import { BadRequestException, Injectable } from '@nestjs/common';
import { RefundPixRequest } from '@shared/infra/http/dtos/paymee/request/refund-pix-transaction/refund-pix-request';
import { RefundPixResponse } from '@shared/infra/http/dtos/paymee/response/refund-pix-transaction/refund-pix-response';
import { apiPayMee } from '@shared/services/api';

@Injectable()
class RefundPixTransaction {
  async execute({
    transactionId,
    amount,
    reason,
  }: RefundPixRequest): Promise<RefundPixResponse> {
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
      console.log(error);
      throw new BadRequestException(error.message, {
        cause: error,
        description: 'Error on refund pix transaction',
      });
    }
  }
}

export { RefundPixTransaction };
