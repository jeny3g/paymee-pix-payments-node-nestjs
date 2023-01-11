import { Injectable } from '@nestjs/common';
import { QRCodeFullResponseResponse } from '@shared/infra/http/dtos/paymee/response/get-pix-qrcode-transaction/qr-code-full-response';
import { AppError } from '@shared/infra/http/errors/app-error';
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
      throw new AppError(error.message);
    }
  }
}

export { GetPixQRCodeTransaction };
