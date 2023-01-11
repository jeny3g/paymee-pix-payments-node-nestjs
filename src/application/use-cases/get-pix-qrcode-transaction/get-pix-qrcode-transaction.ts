import { BadRequestException, Injectable } from '@nestjs/common';
import { PixQRCodeRequest } from '@shared/infra/http/dtos/paymee/request/get-pix-qrcode-transaction/pix-qrcode-request';
import { QRCodeFullResponseResponse } from '@shared/infra/http/dtos/paymee/response/get-pix-qrcode-transaction/qr-code-full-response';
import { apiPayMeeProduction } from '@shared/services/api';

@Injectable()
class GetPixQRCodeTransaction {
  async execute({
    transactionId,
    apiKey,
    apiToken,
  }: PixQRCodeRequest): Promise<QRCodeFullResponseResponse> {
    try {
      const { data } = await apiPayMeeProduction({
        apiKey,
        apiToken,
      }).get<QRCodeFullResponseResponse>(`transactions/pix/${transactionId}`);

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
