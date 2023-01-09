import { Injectable } from "@nestjs/common";
import { apiPayMee } from "src/shared/services/api";
import { IPayMeeQrCode } from "src/shared/infra/http/dtos/IPayMeeResponse/IPayMeeQrCode";
import { AppError } from "src/shared/infra/http/errors/app-error";


@Injectable()
class GetPixTransaction {
  async execute(transactionId: string): Promise<IPayMeeQrCode> {
    try {
      const response = await apiPayMee.get<IPayMeeQrCode>(
        `transactions/pix/${transactionId}`
      );

      return response.data;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export { GetPixTransaction };
