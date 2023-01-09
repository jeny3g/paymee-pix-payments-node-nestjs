import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreatePixTransaction } from "src/application/use-cases/create-pix-transaction/create-pix-transaction";
import { GetPixTransaction } from "src/application/use-cases/get-pix-transaction/get-pix-transaction";
import { GetTransaction } from "src/application/use-cases/get-transaction/get-transaction";
import { IPayMeeNoticeRequest, NoticePixTransaction } from "src/application/use-cases/notice-transaction/notice-transaction";
import { IRefundPixTransactionRequest, RefundPixTransaction } from "src/application/use-cases/refund-pix-transaction/refund-pix-transaction";
import { IPayMeeRequest } from "../dtos/IPayMeeRequest/IPayMeeRequest";


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
    async createPixTransactionController(@Body() body: IPayMeeRequest){
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
