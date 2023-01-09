import { makeCreatePixTranscationFactory } from "@tests/factories/pix-transaction-request";
import { InMemoryTransactionsRepository } from "@tests/repositories/in-memory-transactions-repository";
import { CreatePixTransaction } from "./create-pix-transaction";

describe("CreatePixNotification", () => {
  it('should be able to create a pix transaction', async () => {
    const createPixRequest = makeCreatePixTranscationFactory();
    const transactionsRepository = new InMemoryTransactionsRepository();

    const createPixTransaction = new CreatePixTransaction(
      transactionsRepository,
    );

    const createdPixTransaction = await createPixTransaction.execute(
      createPixRequest,
    );

    expect(createdPixTransaction).toHaveProperty('status');
    expect(createdPixTransaction).toHaveProperty('message');
    expect(createdPixTransaction).toHaveProperty('response');
  });
})
