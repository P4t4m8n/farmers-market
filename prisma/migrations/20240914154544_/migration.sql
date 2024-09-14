/*
  Warnings:

  - Changed the type of `unitAmountType` on the `ProductQuantity` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `unitQuantity` on the `ProductQuantity` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ProductQuantity" DROP COLUMN "unitAmountType",
ADD COLUMN     "unitAmountType" "Quantity" NOT NULL,
DROP COLUMN "unitQuantity",
ADD COLUMN     "unitQuantity" INTEGER NOT NULL;
