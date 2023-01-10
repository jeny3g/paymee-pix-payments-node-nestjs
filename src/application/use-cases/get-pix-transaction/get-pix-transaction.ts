import { Injectable } from '@nestjs/common';
import { IPayMeeQrCode } from '@shared/infra/http/dtos/IPayMeeResponse/IPayMeeQrCode';
import { AppError } from '@shared/infra/http/errors/app-error';
import { apiPayMee } from '@shared/services/api';

@Injectable()
class GetPixTransaction {
  async execute(transactionId: string): Promise<IPayMeeQrCode> {
    try {
      const response = await apiPayMee.get<IPayMeeQrCode>(
        `transactions/pix/${transactionId}`,
      );

      return response.data;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export { GetPixTransaction };
