import { BadRequestException, Injectable } from '@nestjs/common';
import { PixTransactionFullResponse } from '@shared/infra/http/dtos/paymee/response/get-pix-transaction/pix-transaction-full-reponse';
import { apiPayMee } from '@shared/services/api';

@Injectable()
class GetTransaction {
  async execute(transactionId: string): Promise<PixTransactionFullResponse> {
    try {
      const response = await apiPayMee.get<PixTransactionFullResponse>(
        `transactions/${transactionId}`,
      );

      return response.data;
    } catch (error) {
      throw new BadRequestException(error.message, {
        cause: error,
        description: 'Error on get transaction',
      });
    }
  }
}

export { GetTransaction };
