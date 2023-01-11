import { Injectable } from '@nestjs/common';
import { PixTransactionFullResponse } from '@shared/infra/http/dtos/paymee/response/get-pix-transaction/pix-transaction-full-reponse';
import { AppError } from '@shared/infra/http/errors/app-error';
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
      throw new AppError(error.message);
    }
  }
}

export { GetTransaction };
