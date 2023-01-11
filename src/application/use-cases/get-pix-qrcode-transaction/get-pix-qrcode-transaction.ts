import { Injectable } from '@nestjs/common';
import { IPayMeeQrCodeResponse } from '@shared/infra/http/dtos/paymee/response/get-qrcode-transaction/IPayMeeQrCode';
import { AppError } from '@shared/infra/http/errors/app-error';
import { apiPayMee } from '@shared/services/api';

@Injectable()
class GetPixQRCodeTransaction {
  async execute(transactionId: string): Promise<IPayMeeQrCodeResponse> {
    try {
      const response = await apiPayMee.get<IPayMeeQrCodeResponse>(
        `transactions/pix/${transactionId}`,
      );

      return response.data;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export { GetPixQRCodeTransaction };
