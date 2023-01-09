import { Transaction, TransactionProps } from "@application/entities/transaction";
import { makeCustomerFactory } from "./customer-factory";
import { makeQRCodeFactory } from "./qrcode-factory";

type Override = Partial<TransactionProps>;


export function makeTransactionFactory(override: Override = {}){
  const transaction = new Transaction({
    id: 'transaction-id',
    amount: 100,
    createdAt: new Date(),
    status: 'pending',
    customer: makeCustomerFactory(),
    qrCode: makeQRCodeFactory(),
    ...override
  });

  return transaction;
}
