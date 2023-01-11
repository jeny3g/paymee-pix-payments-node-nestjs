import { makeCreatePixNotificationFactory } from '../create-pix-transaction/create-pix-notification.spec';
import { GetTransaction } from './get-transaction';

describe('GetPixTransaction', () => {
  it('should be able to get a pix transaction', async () => {
    const createdPixTransaction = await makeCreatePixNotificationFactory();

    const getTransaction = new GetTransaction();

    const pixQRCodeTransaction = await getTransaction.execute(
      createdPixTransaction.response.uuid,
    );

    expect(pixQRCodeTransaction).toHaveProperty('situation');
  });

  it('should not be able to get a pix transaction with invalid uuid', async () => {
    const getTransaction = new GetTransaction();

    await expect(getTransaction.execute('invalid-uuid')).rejects.toThrowError();
  });
});
