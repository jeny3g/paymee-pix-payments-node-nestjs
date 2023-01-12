import { InMemoryPayMeeServiceRepository } from '@tests/repositories/in-memory-paymee-service-repository';
import { makeCreatePixTransactionFactory } from '../create-pix-transaction/create-pix-transaction.spec';
import { GetPixQRCodeTransaction } from './get-pix-qrcode-transaction';

const payMeeServiceRepository = new InMemoryPayMeeServiceRepository();

describe('GetPixQRCodeTransaction', () => {
  it('should be able to get a pix transaction', async () => {
    const createdPixTransaction = await makeCreatePixTransactionFactory();
    const getPixQRCodeTransaction = new GetPixQRCodeTransaction(
      payMeeServiceRepository,
    );

    const transactionId = await createdPixTransaction.response.uuid;

    const pixQRCodeTransaction = await getPixQRCodeTransaction.execute({
      transactionId,
    });

    expect(pixQRCodeTransaction).toHaveProperty('qrCode');
  });

  it('should not be able to get a pix transaction with invalid uuid', async () => {
    const getPixQRCodeTransaction = new GetPixQRCodeTransaction(
      payMeeServiceRepository,
    );

    await expect(
      getPixQRCodeTransaction.execute({
        transactionId: 'invalid-uuid',
      }),
    ).rejects.toThrowError();
  });
});
