import { BadRequestException, Injectable } from '@nestjs/common';
import { PixTransactionRequest } from '@shared/infra/http/dtos/paymee/request/get-pix-transaction/pix-transaction-request';
import { PixTransactionFullResponse } from '@shared/infra/http/dtos/paymee/response/get-pix-transaction/pix-transaction-full-reponse';
import { PayMeeService } from '@shared/services/paymee/paymee.service';

@Injectable()
class GetTransaction {
  constructor(private readonly paymeeService: PayMeeService) {}

  async execute({
    transactionId,
    apiKey,
    apiToken,
  }: PixTransactionRequest): Promise<PixTransactionFullResponse> {
    try {
      const { data } = await this.paymeeService
        .api()
        .get<PixTransactionFullResponse>(`transactions/${transactionId}`);

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
