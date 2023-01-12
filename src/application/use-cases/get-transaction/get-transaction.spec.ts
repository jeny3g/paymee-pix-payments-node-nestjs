import { InMemoryPayMeeServiceRepository } from '@tests/repositories/in-memory-paymee-service-repository';
import { makeCreatePixTransactionFactory } from '../create-pix-transaction/create-pix-transaction.spec';
import { GetTransaction } from './get-transaction';

const payMeeServiceRepository = new InMemoryPayMeeServiceRepository();

describe('GetPixTransaction', () => {
  it('should be able to get a pix transaction', async () => {
    const createdPixTransaction = await makeCreatePixTransactionFactory();

    const getTransaction = new GetTransaction(payMeeServiceRepository);

    const transactionId = await createdPixTransaction.response.uuid;

    const pixQRCodeTransaction = await getTransaction.execute({
      transactionId,
    });

    expect(pixQRCodeTransaction).toHaveProperty('situation');
  });

  it('should not be able to get a pix transaction with invalid uuid', async () => {
    const getTransaction = new GetTransaction(payMeeServiceRepository);

    await expect(
      getTransaction.execute({
        transactionId: 'invalid-uuid',
      }),
    ).rejects.toThrowError();
  });
});
