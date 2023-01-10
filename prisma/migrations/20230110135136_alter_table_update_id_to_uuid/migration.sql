/*
  Warnings:

  - The primary key for the `QRCode` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Transaction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_QRCode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" INTEGER NOT NULL,
    "base64" TEXT NOT NULL,
    "plain" TEXT NOT NULL
);
INSERT INTO "new_QRCode" ("base64", "createdAt", "id", "plain", "url") SELECT "base64", "createdAt", "id", "plain", "url" FROM "QRCode";
DROP TABLE "QRCode";
ALTER TABLE "new_QRCode" RENAME TO "QRCode";
CREATE TABLE "new_Transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "qRCodeId" TEXT,
    "customerId" TEXT,
    CONSTRAINT "Transaction_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Transaction_qRCodeId_fkey" FOREIGN KEY ("qRCodeId") REFERENCES "QRCode" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Transaction" ("amount", "createdAt", "customerId", "id", "qRCodeId", "status") SELECT "amount", "createdAt", "customerId", "id", "qRCodeId", "status" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
CREATE TABLE "new_Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneId" INTEGER,
    "documentId" INTEGER,
    "transactionId" TEXT,
    CONSTRAINT "Customer_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "Phone" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Customer_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Customer" ("createdAt", "documentId", "email", "id", "name", "phoneId") SELECT "createdAt", "documentId", "email", "id", "name", "phoneId" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
