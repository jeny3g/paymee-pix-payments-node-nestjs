export abstract class TransactionsRepository {
  abstract create(): Promise<void>
}
