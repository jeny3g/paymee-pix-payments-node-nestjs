import { Transaction } from "@application/entities/transaction";
import { TransactionsRepository } from "@application/repositories/transactions-repository";

export class InMemoryTransactionsRepository implements TransactionsRepository {
  public transactions: Transaction[] = [];

  public async create(transaction: Transaction): Promise<void> {
    this.transactions.push(transaction);
  }
}
