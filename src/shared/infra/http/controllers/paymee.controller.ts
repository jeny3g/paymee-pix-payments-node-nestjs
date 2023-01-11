import { CreatePixTransaction } from '@application/use-cases/create-pix-transaction/create-pix-transaction';
import { GetPixQRCodeTransaction } from '@application/use-cases/get-pix-qrcode-transaction/get-pix-qrcode-transaction';
import { GetTransaction } from '@application/use-cases/get-transaction/get-transaction';
import {
  IPayMeeNoticeRequest,
  NoticePixTransaction,
} from '@application/use-cases/notice-transaction/notice-transaction';
import {
  IRefundPixTransactionRequest,
  RefundPixTransaction,
} from '@application/use-cases/refund-pix-transaction/refund-pix-transaction';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreatePixTransactionRequest } from '../dtos/paymee/request/create-pix-transaction/create-pix-transaction-request';
import { CreatePixTransactionFullResponse } from '../dtos/paymee/response/create-pix-transaction/create-pix-transaction-full-response';

@Controller('api/v1/paymee')
@ApiTags("paymee-transactions")
export class PaymeeController {
  constructor(
    private readonly getPixTransaction: GetPixQRCodeTransaction,
    private readonly createPixTransaction: CreatePixTransaction,
    private readonly getTransaction: GetTransaction,
    private readonly noticePixTransaction: NoticePixTransaction,
    private readonly refundPixTransaction: RefundPixTransaction,
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

  @ApiOkResponse({
    type: CreatePixTransactionFullResponse,
    description: 'Returns PayMee response after creating a pix-transaction with QRCODE',
  })
  @Post('transactions/pix')
  async createPixTransactionController(
    @Body() body: CreatePixTransactionRequest,
  ) {
    const response = await this.createPixTransaction.execute(body);

    return response;
  }

  @Post('transactions/notice')
  async noticePixTransactionController(@Body() body: IPayMeeNoticeRequest) {
    await this.noticePixTransaction.execute(body);

    return { message: 'ok' };
  }

  @Post('transactions/:transactionId/refund')
  async refundPixTransactionController(
    @Param('transactionId') transactionId: string,
    @Body() body: IRefundPixTransactionRequest,
  ) {
    const { amount, reason } = body;

    const response = await this.refundPixTransaction.execute({
      transactionId,
      amount,
      reason,
    });

    return response;
  }
}
