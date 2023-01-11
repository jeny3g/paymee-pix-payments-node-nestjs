import { TransactionsRepository } from '@application/repositories/transactions-repository';
import { Injectable } from '@nestjs/common';
import { ICreatePixTransaction } from '@shared/infra/http/dtos/paymee/request/create-pix-transaction/ICreatePixTransaction';
import { CreatePixTransactionFullResponse } from '@shared/infra/http/dtos/paymee/response/create-pix-transaction/create-pix-transaction-full-response';
import { AppError } from '@shared/infra/http/errors/app-error';
import { CreatePixError } from '@shared/infra/http/errors/create-pix-error';
import { apiPayMee } from '@shared/services/api';
import { CreatePixTransactionMapper } from './mappers/create-pix-transaction-mapper';

@Injectable()
class CreatePixTransaction {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async execute(request: ICreatePixTransaction): Promise<any> {
    this.mapDefaultPayMeeRequest(request);

    if (!request.amount) {
      throw new CreatePixError({
        name: 'AMOUNT_IS_REQUIRED',
        message: 'Amount is required',
        cause: new Error('Amount is required'),
      });
    }

    try {
      const { data } = await apiPayMee.post<CreatePixTransactionFullResponse>(
        'checkout/transparent',
        request,
      );

      const transaction = CreatePixTransactionMapper.toDomain(data);

      await this.transactionsRepository.create(transaction);

      return data;
    } catch (error) {
      console.log(error);
      throw new AppError('Houve um erro ao criar a transação', 500, error);
    }
  }

  private mapDefaultPayMeeRequest(
    request: ICreatePixTransaction,
  ): ICreatePixTransaction {
    request.currency = request.currency || 'BRL';
    request.paymentMethod = request.paymentMethod || 'PIX';

    return request;
  }
}

export { CreatePixTransaction };
