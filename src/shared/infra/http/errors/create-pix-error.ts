import { ErrorBase } from "./error-base";

export class CreatePixError extends ErrorBase<"CREATE_PIX_ERROR" | "AMOUNT_IS_REQUIRED">
{
}
