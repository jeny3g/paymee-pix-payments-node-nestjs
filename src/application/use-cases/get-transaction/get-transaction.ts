import { BadRequestException, Injectable } from '@nestjs/common';
import { PixTransactionRequest } from '@shared/infra/http/dtos/paymee/request/get-pix-transaction/pix-transaction-request';
import { PixTransactionFullResponse } from '@shared/infra/http/dtos/paymee/response/get-pix-transaction/pix-transaction-full-reponse';
import { apiPayMeeProduction } from '@shared/services/api';

@Injectable()
class GetTransaction {
  async execute({
    transactionId,
    apiKey,
    apiToken,
  }: PixTransactionRequest): Promise<PixTransactionFullResponse> {
    try {
      const { data } = await apiPayMeeProduction({
        apiKey,
        apiToken,
      }).get<PixTransactionFullResponse>(`transactions/${transactionId}`);

      return data;
    } catch (error) {
      throw new BadRequestException(error.message, {
        cause: error,
        description: 'Error on get transaction',
      });
    }
  }
}

export { GetTransaction };
