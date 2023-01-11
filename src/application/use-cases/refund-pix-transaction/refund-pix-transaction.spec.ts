import { RefundPixTransaction } from './refund-pix-transaction';

describe('RefundPixTransaction', () => {
  it('should not be able to refund a pix transaction with invalid uuid', async () => {
    const refundPixTransaction = new RefundPixTransaction();

    await expect(
      refundPixTransaction.execute({
        transactionId: 'invalid-uuid',
        amount: 100,
        reason: 'did not receive the product',
      }),
    ).rejects.toThrowError();
  });
});
