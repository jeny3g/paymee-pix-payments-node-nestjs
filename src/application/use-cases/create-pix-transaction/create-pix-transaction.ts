import { Injectable } from "@nestjs/common";
import { IPayMeeRequest } from "@shared/infra/http/dtos/IPayMeeRequest/IPayMeeRequest";
import { IPayMeeResponse } from "@shared/infra/http/dtos/IPayMeeResponse/IPayMeeResponse";
import { AppError } from "@shared/infra/http/errors/app-error";
import { apiPayMee } from "@shared/services/api";


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
