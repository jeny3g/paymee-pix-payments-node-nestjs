import { ApiProperty } from "@nestjs/swagger";
import { PaymeeTransactionStatus } from "@shared/constants/paymee-transaction-status";

export class NoticePixTransactionRequest {
  @ApiProperty({
    description: "Unique identifier for the transaction",
    type: String,
  })
  referenceCode: string;

  @ApiProperty({
    description: "Status of the transaction",
    type: PaymeeTransactionStatus
  })
  newStatus: PaymeeTransactionStatus;
}
