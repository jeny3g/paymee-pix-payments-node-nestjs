import { Module } from "@nestjs/common";
import { CreatePixTransaction } from "src/application/use-cases/create-pix-transaction/create-pix-transaction";
import { GetPixTransaction } from "src/application/use-cases/get-pix-transaction/get-pix-transaction";
import { GetTransaction } from "src/application/use-cases/get-transaction/get-transaction";
import { NoticePixTransaction } from "src/application/use-cases/notice-transaction/notice-transaction";
import { RefundPixTransaction } from "src/application/use-cases/refund-pix-transaction/refund-pix-transaction";
import { DatabaseModule } from "../database/database-module";
import { PaymeeController } from "./controllers/paymee.controller";


@Module({
  imports: [DatabaseModule],
  controllers: [PaymeeController],
  providers: [
    GetPixTransaction,
    CreatePixTransaction,
    GetTransaction,
    NoticePixTransaction,
    RefundPixTransaction
  ],
})
export class HttpModule {}
