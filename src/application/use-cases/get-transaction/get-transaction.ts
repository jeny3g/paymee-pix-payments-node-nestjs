import { Injectable } from '@nestjs/common';
import { IPayMeePayoutResponse } from '@shared/infra/http/dtos/IPayMeeResponse/IPayMeePayoutResponse';
import { AppError } from '@shared/infra/http/errors/app-error';
import { apiPayMee } from '@shared/services/api';

@Injectable()
class GetTransaction {
  async execute(transactionId: string): Promise<IPayMeePayoutResponse> {
    try {
      const response = await apiPayMee.get<IPayMeePayoutResponse>(
        `transactions/${transactionId}`,
      );

      return response.data;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export { GetTransaction };
