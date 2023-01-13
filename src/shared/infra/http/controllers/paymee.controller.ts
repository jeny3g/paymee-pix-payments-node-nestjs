import { CreatePixTransaction } from '@application/use-cases/create-pix-transaction/create-pix-transaction';
import { GetPixQRCodeTransaction } from '@application/use-cases/get-pix-qrcode-transaction/get-pix-qrcode-transaction';
import { GetTransaction } from '@application/use-cases/get-transaction/get-transaction';
import { NoticePixTransaction } from '@application/use-cases/notice-transaction/notice-transaction';
import { RefundPixTransaction } from '@application/use-cases/refund-pix-transaction/refund-pix-transaction';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CreatePixTransactionRequest } from '../dtos/paymee/request/create-pix-transaction/create-pix-transaction-request';
import { NoticePixTransactionRequest } from '../dtos/paymee/request/notice-pix-transaction/notice-pix-transaction-request';
import { RefundPixRequest } from '../dtos/paymee/request/refund-pix-transaction/refund-pix-request';
import { CreatePixTransactionFullResponse } from '../dtos/paymee/response/create-pix-transaction/create-pix-transaction-full-response';
import { QRCodeFullResponseResponse } from '../dtos/paymee/response/get-pix-qrcode-transaction/qr-code-full-response';
import { PixTransactionFullResponse } from '../dtos/paymee/response/get-pix-transaction/pix-transaction-full-reponse';
import { RefundPixResponse } from '../dtos/paymee/response/refund-pix-transaction/refund-pix-response';

@Controller('api/v1/paymee')
@ApiSecurity('paymeeApiKey')
@ApiSecurity('paymeeApiToken')
@ApiTags('paymee-transactions')
export class PaymeeController {
  constructor(
    private readonly getPixTransaction: GetPixQRCodeTransaction,
    private readonly createPixTransaction: CreatePixTransaction,
    private readonly getTransaction: GetTransaction,
    private readonly noticePixTransaction: NoticePixTransaction,
    private readonly refundPixTransaction: RefundPixTransaction,
  ) {}

  @ApiOkResponse({
    type: PixTransactionFullResponse,
    description:
      'Returns PayMee response after creating a pix-transaction with QRCODE instructions',
  })
  @Get('transactions/:transactionId')
  async getTransactionController(
    @Param('transactionId') transactionId: string,
  ): Promise<PixTransactionFullResponse> {
    return await this.getTransaction.execute({
      transactionId,
    });
  }

  @ApiOkResponse({
    type: QRCodeFullResponseResponse,
    description:
      'Returns PayMee response after creating a pix-transaction with QRCODE instructions',
  })
  @Get('transactions/pix/:transactionId')
  async getPixTransactionController(
    @Param('transactionId') transactionId: string,
  ): Promise<QRCodeFullResponseResponse> {
    const response = await this.getPixTransaction.execute({
      transactionId,
    });

    return response;
  }

  @ApiOkResponse({
    type: CreatePixTransactionFullResponse,
    description:
      'Returns PayMee response after creating a pix-transaction with QRCODE',
  })
  @Post('transactions/pix')
  async createPixTransactionController(
    @Body() body: CreatePixTransactionRequest,
  ): Promise<CreatePixTransactionFullResponse> {
    const response = await this.createPixTransaction.execute(body);

    return response;
  }

  @ApiOkResponse({
    type: NoticePixTransactionRequest,
    description:
      'Returns PayMee status response after creating a pix-transaction',
  })
  @Post('transactions/notice')
  async noticePixTransactionController(
    @Body() body: NoticePixTransactionRequest,
  ): Promise<NoticePixTransactionRequest> {
    return await this.noticePixTransaction.execute(body);
  }

  @ApiOkResponse({
    type: RefundPixResponse,
    description: 'Returns PayMee response after refunding a pix-transaction',
  })
  @Post('transactions/:transactionId/refund')
  async refundPixTransactionController(
    @Param('transactionId') transactionId: string,
    @Body() body: RefundPixRequest,
  ): Promise<RefundPixResponse> {
    const { amount, reason } = body;

    const response = await this.refundPixTransaction.execute({
      transactionId,
      amount,
      reason,
    });

    return response;
  }
}
console.log('Funcionalidade de listagem de pix 😼')
