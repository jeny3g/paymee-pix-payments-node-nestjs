import { TransactionsRepository } from '@application/repositories/transactions-repository';
import { CreatePixTransaction } from '@application/use-cases/create-pix-transaction/create-pix-transaction';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: TransactionsRepository,
      useClass: CreatePixTransaction,
    },
  ],
  exports: [TransactionsRepository],
})
export class DatabaseModule {}
