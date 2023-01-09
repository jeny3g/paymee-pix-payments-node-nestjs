import { Module } from "@nestjs/common";
import { CreatePixTransaction } from "src/application/use-cases/create-pix-transaction/create-pix-transaction";
import { GetPixTransaction } from "src/application/use-cases/get-pix-transaction/get-pix-transaction";
import { GetTransaction } from "src/application/use-cases/get-transaction/get-transaction";
import { NoticeTransaction } from "src/application/use-cases/notice-transaction/notice-transaction";
import { PaymeeController } from "./controllers/paymee.controller";


@Module({
  imports: [],
  controllers: [PaymeeController],
  providers: [
    GetPixTransaction,
    CreatePixTransaction,
    GetTransaction,
    NoticeTransaction
  ],
})
export class HttpModule {}
