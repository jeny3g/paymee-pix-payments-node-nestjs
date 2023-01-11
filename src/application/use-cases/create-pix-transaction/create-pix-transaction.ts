import { TransactionsRepository } from '@application/repositories/transactions-repository';
import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreatePixTransactionRequest } from '@shared/infra/http/dtos/paymee/request/create-pix-transaction/create-pix-transaction-request';
import { CreatePixTransactionFullResponse } from '@shared/infra/http/dtos/paymee/response/create-pix-transaction/create-pix-transaction-full-response';
import { apiPayMeeProduction } from '@shared/services/api';
import { CreatePixTransactionMapper } from './mappers/create-pix-transaction-mapper';

@Injectable()
class CreatePixTransaction {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async execute(
    request: CreatePixTransactionRequest,
  ): Promise<CreatePixTransactionFullResponse> {
    try {
      console.log(request);
      const { data } = await apiPayMeeProduction({
        apiKey: request.apiKey,
        apiToken: request.apiToken,
      }).post<CreatePixTransactionFullResponse>(
        'checkout/transparent',
        request,
      );

      const transaction = CreatePixTransactionMapper.toDomain(data);

      await this.transactionsRepository.create(transaction);

      return data;
    } catch (error) {
      throw new BadGatewayException(error.message, {
        cause: error,
        description: 'Error on create pix transaction',
      });
    }
  }
}

export { CreatePixTransaction };
