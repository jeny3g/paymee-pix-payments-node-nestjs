import { PayMeeServiceRepository } from '@application/repositories/paymee-service-repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PixTransactionRequest } from '@shared/infra/http/dtos/paymee/request/get-pix-transaction/pix-transaction-request';
import { PixTransactionFullResponse } from '@shared/infra/http/dtos/paymee/response/get-pix-transaction/pix-transaction-full-reponse';

@Injectable()
class GetTransaction {
  constructor(private readonly paymeeService: PayMeeServiceRepository) {}

  async execute({
    transactionId,
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
