import { BadRequestException, Injectable } from '@nestjs/common';
import { QRCodeFullResponseResponse } from '@shared/infra/http/dtos/paymee/response/get-pix-qrcode-transaction/qr-code-full-response';
import { apiPayMee } from '@shared/services/api';

@Injectable()
class GetPixQRCodeTransaction {
  async execute(transactionId: string): Promise<QRCodeFullResponseResponse> {
    try {
      const response = await apiPayMee.get<QRCodeFullResponseResponse>(
        `transactions/pix/${transactionId}`,
      );

      return response.data;
    } catch (error) {
      throw new BadRequestException(error.message, {
        cause: error,
        description: 'Error on get pix qrcode transaction',
      });
    }
  }
}

export { GetPixQRCodeTransaction };
