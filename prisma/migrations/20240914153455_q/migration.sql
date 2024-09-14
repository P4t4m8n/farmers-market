/*
  Warnings:

  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "price";

-- CreateTable
CREATE TABLE "ProductQuantity" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "unitAmountType" INTEGER NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 5,
    "unitQuantity" "Quantity" NOT NULL,
    "unit" "Quantity" NOT NULL,

    CONSTRAINT "ProductQuantity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductQuantity_productId_key" ON "ProductQuantity"("productId");

-- AddForeignKey
ALTER TABLE "ProductQuantity" ADD CONSTRAINT "ProductQuantity_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
