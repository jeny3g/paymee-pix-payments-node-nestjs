import { Transaction } from "@application/entities/transaction";

export abstract class TransactionsRepository {
  abstract create(transaction: Transaction): Promise<void>
}
