import { ICreatePixTransaction } from "@shared/infra/http/dtos/ICreatePixTransaction/ICreatePixTransaction";
import { randomUUID } from "crypto";
import { makePhoneTranscationFactory } from "./phone-transaction-request";
import { makeShopperTranscationFactory } from "./shopper-transaction-request";


type Override = Partial<ICreatePixTransaction>;


export function makeCreatePixTranscationFactory(
  override: Override = {
  },
): ICreatePixTransaction {
  return {
    currency: 'BRL',
    amount: 1.00,
    referenceCode: randomUUID(),
    maxAge: 60,
    paymentMethod: 'PIX',
    callbackURL: "https://foo.bar/paymeeListener",
    shopper: makeShopperTranscationFactory(),
    ...override,
  };
}
