import { Prisma } from '@prisma/client';

import { TransactionProps } from '@application/entities/transaction';

export class PrismaTransactionMapper {
  static toPrisma(
    transaction: TransactionProps,
  ): Prisma.TransactionCreateInput {
    const raw = {
      id: transaction.id,
      amount: transaction.amount,
      status: transaction.status,
      createdAt: transaction.createdAt,
      qrCode: {
        create: {
          id: transaction.qrCode.id,
          base64: transaction.qrCode.base64,
          plain: transaction.qrCode.plain,
          url: transaction.qrCode.url,
          createdAt: transaction.qrCode.createdAt,
        },
      },
      customer: {
        create: {
          id: transaction.customer.id,
          name: transaction.customer.name,
          email: transaction.customer.email,
          phone: {
            create: {
              type: transaction.customer.phone.type,
              number: transaction.customer.phone.number,
            },
          },
          document: {
            create: {
              type: transaction.customer.document.type,
              number: transaction.customer.document.number,
            },
          },
        },
      },
    };

    return raw;
  }
}
