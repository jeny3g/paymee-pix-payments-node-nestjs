import { Transaction } from "@application/entities/transaction";
import { TransactionsRepository } from "@application/repositories/transactions-repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";


@Injectable()
export class PrismaTransactionRepository implements TransactionsRepository {
  constructor(private prismaService: PrismaService) {}

  public async create(transaction: Transaction): Promise<void> {
    // const raw = Prisma
  }
}
