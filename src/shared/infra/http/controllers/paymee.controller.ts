import { CreatePixTransaction } from "@application/use-cases/create-pix-transaction/create-pix-transaction";
import { GetPixTransaction } from "@application/use-cases/get-pix-transaction/get-pix-transaction";
import { GetTransaction } from "@application/use-cases/get-transaction/get-transaction";
import { NoticePixTransaction, IPayMeeNoticeRequest } from "@application/use-cases/notice-transaction/notice-transaction";
import { RefundPixTransaction, IRefundPixTransactionRequest } from "@application/use-cases/refund-pix-transaction/refund-pix-transaction";
import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ICreatePixTransaction } from "../dtos/ICreatePixTransaction/ICreatePixTransaction";

@Controller('api/v1/paymee')
export class PaymeeController {
  constructor(
    private readonly getPixTransaction: GetPixTransaction,
    private readonly createPixTransaction: CreatePixTransaction,
    private readonly getTransaction: GetTransaction,
    private readonly noticePixTransaction: NoticePixTransaction,
    private readonly refundPixTransaction: RefundPixTransaction
  ) {}

  @Get('transactions/:transactionId')
  async getTransactionController(
    @Param('transactionId') transactionId: string,
  ) {
    return await this.getTransaction.execute(transactionId);
  }

  @Get('transactions/pix/:transactionId')
  async getPixTransactionController(
    @Param('transactionId') transactionId: string,
  ) {
    const response = await this.getPixTransaction.execute(transactionId);

    return response;
  }

  @Post('transactions/pix')
    async createPixTransactionController(@Body() body: ICreatePixTransaction){
      const response = await this.createPixTransaction.execute(body)

      return response
    }

    @Post('transactions/notice')
    async noticePixTransactionController(@Body() body: IPayMeeNoticeRequest){
      await this.noticePixTransaction
        .execute(body)

      return { message: 'ok' }
    }

    @Post('transactions/:transactionId/refund')
    async refundPixTransactionController(
      @Param('transactionId') transactionId: string,
      @Body() body: IRefundPixTransactionRequest
    ){
      const {amount, reason} = body;

      const response = await this.refundPixTransaction
        .execute({
          transactionId,
          amount,
          reason
        });


      return response;
    }
}
