import { GetPixQRCodeTransaction } from '@application/use-cases/get-pix-qrcode-transaction/get-pix-qrcode-transaction';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ServiceModule } from '@shared/services/service.module';
import { CreatePixTransaction } from 'src/application/use-cases/create-pix-transaction/create-pix-transaction';
import { GetTransaction } from 'src/application/use-cases/get-transaction/get-transaction';
import { NoticePixTransaction } from 'src/application/use-cases/notice-transaction/notice-transaction';
import { RefundPixTransaction } from 'src/application/use-cases/refund-pix-transaction/refund-pix-transaction';
import { DatabaseModule } from '../database/database.module';
import { ApiKeyMiddleware } from '../middlewares/api-key.middleware';
import { PaymeeController } from './controllers/paymee.controller';

@Module({
  imports: [DatabaseModule, ServiceModule],
  controllers: [PaymeeController],
  providers: [
    GetPixQRCodeTransaction,
    CreatePixTransaction,
    GetTransaction,
    NoticePixTransaction,
    RefundPixTransaction,
  ],
})
export class HttpModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(ApiKeyMiddleware).forRoutes('*');
  }
}
