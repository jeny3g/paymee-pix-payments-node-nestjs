import { TransactionsRepository } from '@application/repositories/transactions-repository';
import { Module } from '@nestjs/common';
import { PrismaTransactionRepository } from './prisma/prisma-transactions-repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: TransactionsRepository,
      useClass: PrismaTransactionRepository,
    },
  ],
  exports: [TransactionsRepository],
})
export class DatabaseModule {}
