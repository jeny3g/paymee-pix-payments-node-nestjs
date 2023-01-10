import { TransactionProps } from '@application/entities/transaction';

export abstract class TransactionsRepository {
  abstract create(transaction: TransactionProps): Promise<void>;
}
