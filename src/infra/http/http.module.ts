import { Module } from "@nestjs/common";
import { GetPixTransaction } from "src/application/use-cases/get-pix-transaction/get-pix-transaction";
import { PaymeeController } from "./controllers/paymee.controller";


@Module({
  imports: [],
  controllers: [PaymeeController],
  providers: [
    GetPixTransaction,
  ],
})
export class HttpModule {}
