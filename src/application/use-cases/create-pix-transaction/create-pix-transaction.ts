import { Injectable } from "@nestjs/common";
import { apiPayMee } from "src/application/services/api";
import { IPayMeePaymentConfirmationRequest } from "src/infra/http/dtos/IPayMeePaymentConfirmationResponse/IPayMeePaymentConfirmationRequest";
import { IPayMeeRequest } from "src/infra/http/dtos/IPayMeeRequest/IPayMeeRequest";
import { IPayMeeResponse } from "src/infra/http/dtos/IPayMeeResponse/IPayMeeResponse";
import { AppError } from "src/infra/http/errors/app-error";

@Injectable()
class CreatePixTransaction {
  async execute(request: IPayMeeRequest): Promise<IPayMeeResponse> {
    this.mapDefaultPayMeeRequest(request);

    if (!request.amount) {
      throw new AppError("Amount is required");
    }

    try {
      const response = await apiPayMee.post<IPayMeeResponse>(
        "checkout/transparent",
        request
      );

      return response.data;
    } catch (error) {
      throw new AppError(error.message);
    }
  }

  private mapDefaultPayMeeRequest(request: IPayMeeRequest): IPayMeeRequest {
    request.currency = request.currency || "BRL";
    request.paymentMethod = request.paymentMethod || "PIX";

    return request;
  }
}

export { CreatePixTransaction };
