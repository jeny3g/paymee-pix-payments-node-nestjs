import { CreatePixTransactionFullResponse } from '@shared/infra/http/dtos/paymee/response/create-pix-transaction/create-pix-transaction-full-response';
import { makeCreatePixTranscationFactory } from '@tests/factories/pix-transaction-request';
import { InMemoryPayMeeServiceRepository } from '@tests/repositories/in-memory-paymee-service-repository';
import { InMemoryTransactionsRepository } from '@tests/repositories/in-memory-transactions-repository';
import { CreatePixTransaction } from './create-pix-transaction';

export const makeCreatePixTransactionFactory =
  async (): Promise<CreatePixTransactionFullResponse> => {
    const createPixRequest = makeCreatePixTranscationFactory();

    const transactionsRepository = new InMemoryTransactionsRepository();
    const payMeeServiceRepository = new InMemoryPayMeeServiceRepository();

    const createPixTransaction = new CreatePixTransaction(
      transactionsRepository,
      payMeeServiceRepository,
    );

    const createdPixTransaction = await createPixTransaction.execute(
      createPixRequest,
    );

    return createdPixTransaction;
  };

describe('CreatePixTransaction', () => {
  it('should be able to create a pix transaction', async () => {
    const createdPixTransaction = await makeCreatePixTransactionFactory();

    expect(createdPixTransaction).toHaveProperty('status');
    expect(createdPixTransaction).toHaveProperty('message');
    expect(createdPixTransaction).toHaveProperty('response');
  });
});
