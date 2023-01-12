import { TransactionsRepository } from '@application/repositories/transactions-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaTransactionRepository } from './prisma/repositories/prisma-transactions-repository';

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
