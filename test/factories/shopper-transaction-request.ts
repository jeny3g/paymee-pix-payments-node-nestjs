import { IPaymeeShopper } from "@shared/infra/http/dtos/IPaymeeShopper";
import { randomUUID } from "crypto";
import { makeDocumentTranscationFactory } from "./document-transaction-request";
import { makePhoneTranscationFactory } from "./phone-transaction-request";

type Override = Partial<IPaymeeShopper>;

export function makeShopperTranscationFactory(
  override: Override = {
  },
): IPaymeeShopper {
  return {
    name: 'John Doe',
    email: 'john_doe@gmail.com',
    document: makeDocumentTranscationFactory(),
    phone: makePhoneTranscationFactory(),
    ...override,
  };
}
