import { Injectable } from "@nestjs/common";
import { apiPayMee } from "src/application/services/api";
import { IPayMeePayoutResponse } from "src/infra/http/dtos/IPayMeeResponse/IPayMeePayoutResponse";
import { AppError } from "src/infra/http/errors/app-error";

@Injectable()
class GetTransaction {
  async execute(transactionId: string): Promise<IPayMeePayoutResponse> {
    try {
      const response = await apiPayMee.get<IPayMeePayoutResponse>(
        `transactions/${transactionId}`
      );

      return response.data;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export { GetTransaction };
