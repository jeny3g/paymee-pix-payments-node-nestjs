import { Transaction, TransactionProps } from '@application/entities/transaction';
import { TransactionsRepository } from '@application/repositories/transactions-repository';
import { Injectable } from '@nestjs/common';
import { PrismaTransactionMapper } from '../mappers/prisma-transaction-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaTransactionRepository implements TransactionsRepository {
  constructor(private prismaService: PrismaService) {}

  public async create(transaction: TransactionProps): Promise<void> {
    const raw = PrismaTransactionMapper.toPrisma(transaction);


    await this.prismaService.transaction.create({ data: raw });
  }
}
