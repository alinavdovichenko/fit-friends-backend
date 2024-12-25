/*
  Warnings:

  - The primary key for the `comments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `comments` table. All the data in the column will be lost.
  - The primary key for the `trainings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `trainings` table. All the data in the column will be lost.
  - The required column `comment_id` was added to the `comments` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `training_id` was added to the `trainings` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_training_id_fkey";

-- AlterTable
ALTER TABLE "comments" DROP CONSTRAINT "comments_pkey",
DROP COLUMN "id",
ADD COLUMN     "comment_id" TEXT NOT NULL,
ADD CONSTRAINT "comments_pkey" PRIMARY KEY ("comment_id");

-- AlterTable
ALTER TABLE "trainings" DROP CONSTRAINT "trainings_pkey",
DROP COLUMN "id",
ADD COLUMN     "training_id" TEXT NOT NULL,
ADD CONSTRAINT "trainings_pkey" PRIMARY KEY ("training_id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "trainings"("training_id") ON DELETE CASCADE ON UPDATE CASCADE;
