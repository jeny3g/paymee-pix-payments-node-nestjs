import { Module } from "@nestjs/common";
import { CreatePixTransaction } from "src/application/use-cases/create-pix-transaction/create-pix-transaction";
import { GetPixTransaction } from "src/application/use-cases/get-pix-transaction/get-pix-transaction";
import { PaymeeController } from "./controllers/paymee.controller";


@Module({
  imports: [],
  controllers: [PaymeeController],
  providers: [
    GetPixTransaction,
    CreatePixTransaction
  ],
})
export class HttpModule {}
