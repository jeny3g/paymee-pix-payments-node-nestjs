import { TransactionsRepository } from "@application/repositories/transactions-repository";
import { Injectable } from "@nestjs/common";
import { ICreatePixTransaction } from "@shared/infra/http/dtos/ICreatePixTransaction/ICreatePixTransaction";
import { IPayMeeResponse } from "@shared/infra/http/dtos/IPayMeeResponse/IPayMeeResponse";
import { CreatePixError } from "@shared/infra/http/errors/create-pix-error";
import { apiPayMee } from "@shared/services/api";


@Injectable()
class CreatePixTransaction {
  constructor(private readonly transactionsRepository: TransactionsRepository){}

  async execute(request: ICreatePixTransaction): Promise<IPayMeeResponse> {
    this.mapDefaultPayMeeRequest(request);

    if (!request.amount) {
      throw new CreatePixError({
        name: 'AMOUNT_IS_REQUIRED',
        message: 'Amount is required',
        cause: new Error('Amount is required'),
      });
    }

    try {
      const response = await apiPayMee.post<IPayMeeResponse>(
        "checkout/transparent",
        request
      );

      return response.data;
    } catch (error) {
      throw new CreatePixError({
        name: 'CREATE_PIX_ERROR',
        message: 'Error creating pix transaction in api',
        cause: error,
      });
    }
  }

  private mapDefaultPayMeeRequest(request: ICreatePixTransaction): ICreatePixTransaction {
    request.currency = request.currency || "BRL";
    request.paymentMethod = request.paymentMethod || "PIX";

    return request;
  }
}

export { CreatePixTransaction };
