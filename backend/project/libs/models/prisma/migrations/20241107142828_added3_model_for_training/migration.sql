/*
  Warnings:

  - The `level` column on the `trainings` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "trainings" DROP COLUMN "level",
ADD COLUMN     "level" TEXT NOT NULL DEFAULT '';
