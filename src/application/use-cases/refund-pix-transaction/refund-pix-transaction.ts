import { PayMeeServiceRepository } from '@application/repositories/paymee-service-repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { RefundPixRequest } from '@shared/infra/http/dtos/paymee/request/refund-pix-transaction/refund-pix-request';
import { RefundPixResponse } from '@shared/infra/http/dtos/paymee/response/refund-pix-transaction/refund-pix-response';

@Injectable()
class RefundPixTransaction {
  constructor(private readonly paymeeService: PayMeeServiceRepository) {}

  async execute({
    transactionId,
    amount,
    reason,
  }: RefundPixRequest): Promise<RefundPixResponse> {
    try {
      const { data } = await this.paymeeService
        .api()
        .post<RefundPixResponse>(`/transactions/${transactionId}/refund`, {
          amount,
          reason,
        });

      return data;
    } catch (error) {
      throw new BadRequestException(error.message, {
        cause: error,
        description: 'Error on refund pix transaction',
      });
    }
  }
}

export { RefundPixTransaction };
