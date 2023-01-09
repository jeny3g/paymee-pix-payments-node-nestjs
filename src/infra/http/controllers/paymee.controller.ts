import { Controller, Get, Param } from "@nestjs/common";
import { GetPixTransaction } from "src/application/use-cases/get-pix-transaction/get-pix-transaction";


@Controller('api/v1/paymee')
export class PaymeeController {
  constructor(private readonly getPixTransaction: GetPixTransaction) {}

  @Get('transactions/pix/:transactionId')
  async getPixTransactionController(
    @Param('transactionId') transactionId: string,
  ) {
    const response = await this.getPixTransaction.execute(transactionId);

    return response;
  }
}
