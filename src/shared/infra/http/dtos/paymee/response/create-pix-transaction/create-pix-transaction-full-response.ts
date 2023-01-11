import { CreatePixTransactionResponse } from './create-pix-transaction-response';

export type CreatePixTransactionFullResponse = {
  status: string;
  message: string;

  response: CreatePixTransactionResponse;
};
