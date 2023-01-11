import { makeCreatePixNotificationFactory } from '../create-pix-transaction/create-pix-notification.spec';
import { GetPixQRCodeTransaction } from './get-pix-qrcode-transaction';

describe('GetPixQRCodeTransaction', () => {
  it('should be able to get a pix transaction', async () => {
    const createdPixTransaction = await makeCreatePixNotificationFactory();

    const getPixQRCodeTransaction = new GetPixQRCodeTransaction();

    const pixQRCodeTransaction = await getPixQRCodeTransaction.execute(
      createdPixTransaction.response.uuid,
    );

    expect(pixQRCodeTransaction).toHaveProperty('qrCode');
  });

  it('should not be able to get a pix transaction with invalid uuid', async () => {
    const getPixQRCodeTransaction = new GetPixQRCodeTransaction();

    await expect(
      getPixQRCodeTransaction.execute('invalid-uuid'),
    ).rejects.toThrowError();
  });
});
