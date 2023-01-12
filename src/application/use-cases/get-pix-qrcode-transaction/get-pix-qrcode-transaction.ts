import { BadRequestException, Injectable } from '@nestjs/common';
import { PixQRCodeRequest } from '@shared/infra/http/dtos/paymee/request/get-pix-qrcode-transaction/pix-qrcode-request';
import { QRCodeFullResponseResponse } from '@shared/infra/http/dtos/paymee/response/get-pix-qrcode-transaction/qr-code-full-response';
import { PayMeeService } from '@shared/services/paymee/paymee.service';

@Injectable()
class GetPixQRCodeTransaction {
  constructor(private readonly paymeeService: PayMeeService) {}

  async execute({
    transactionId,
  }: PixQRCodeRequest): Promise<QRCodeFullResponseResponse> {
    try {
      const { data } = await this.paymeeService
        .api()
        .get<QRCodeFullResponseResponse>(`transactions/pix/${transactionId}`);

      return data;
    } catch (error) {
      throw new BadRequestException(error.message, {
        cause: error,
        description: 'Error on get pix qrcode transaction',
      });
    }
  }
}

export { GetPixQRCodeTransaction };
