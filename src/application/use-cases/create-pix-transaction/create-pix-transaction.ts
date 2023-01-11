import { TransactionsRepository } from '@application/repositories/transactions-repository';
import { BadGatewayException, Injectable } from '@nestjs/common';
import { ICreatePixTransaction } from '@shared/infra/http/dtos/paymee/request/create-pix-transaction/ICreatePixTransaction';
import { CreatePixTransactionFullResponse } from '@shared/infra/http/dtos/paymee/response/create-pix-transaction/create-pix-transaction-full-response';
import { apiPayMee } from '@shared/services/api';
import { CreatePixTransactionMapper } from './mappers/create-pix-transaction-mapper';

@Injectable()
class CreatePixTransaction {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async execute(request: ICreatePixTransaction): Promise<any> {
    try {
      const { data } = await apiPayMee.post<CreatePixTransactionFullResponse>(
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
