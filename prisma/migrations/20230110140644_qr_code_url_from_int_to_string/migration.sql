-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_QRCode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT NOT NULL,
    "base64" TEXT NOT NULL,
    "plain" TEXT NOT NULL
);
INSERT INTO "new_QRCode" ("base64", "createdAt", "id", "plain", "url") SELECT "base64", "createdAt", "id", "plain", "url" FROM "QRCode";
DROP TABLE "QRCode";
ALTER TABLE "new_QRCode" RENAME TO "QRCode";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
