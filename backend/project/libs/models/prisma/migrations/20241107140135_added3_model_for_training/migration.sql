/*
  Warnings:

  - Changed the type of `level` on the `trainings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "UserLevel" AS ENUM ('Beginner', 'Amateur', 'Pro');

-- AlterTable
ALTER TABLE "trainings" DROP COLUMN "level",
ADD COLUMN     "level" "UserLevel" NOT NULL;
