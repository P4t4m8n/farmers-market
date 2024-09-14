/*
  Warnings:

  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `calories` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `protein` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fat` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `carbohydrates` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fiber` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "calories" SET NOT NULL,
ALTER COLUMN "protein" SET NOT NULL,
ALTER COLUMN "fat" SET NOT NULL,
ALTER COLUMN "carbohydrates" SET NOT NULL,
ALTER COLUMN "fiber" SET NOT NULL;
