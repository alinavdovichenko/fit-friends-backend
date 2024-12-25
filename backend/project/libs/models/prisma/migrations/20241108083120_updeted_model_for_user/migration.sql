/*
  Warnings:

  - The primary key for the `trainings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `backgraund_image` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the column `calories` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the column `coach_id` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the column `is_special` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the column `training_id` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the column `userSex` on the `trainings` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `achievements` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `backgraund_image` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `birth_day` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `calories_day` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `calories_lose` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `certificates` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `is_ready` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `sex` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `time_training` on the `users` table. All the data in the column will be lost.
  - The `user_id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `trainer_id` to the `trainings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "trainings" DROP CONSTRAINT "trainings_pkey",
DROP COLUMN "backgraund_image",
DROP COLUMN "calories",
DROP COLUMN "coach_id",
DROP COLUMN "is_special",
DROP COLUMN "level",
DROP COLUMN "training_id",
DROP COLUMN "type",
DROP COLUMN "userSex",
ADD COLUMN     "backgraund_picture" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "calories_qtt" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "is_promo" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "level_of_user" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "sex" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "trainer_id" INTEGER NOT NULL,
ADD COLUMN     "type_of_training" TEXT NOT NULL DEFAULT '',
ADD CONSTRAINT "trainings_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "achievements",
DROP COLUMN "backgraund_image",
DROP COLUMN "birth_day",
DROP COLUMN "calories_day",
DROP COLUMN "calories_lose",
DROP COLUMN "certificates",
DROP COLUMN "is_ready",
DROP COLUMN "role",
DROP COLUMN "sex",
DROP COLUMN "time_training",
ADD COLUMN     "birth_date" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_role" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "user_sex" TEXT NOT NULL DEFAULT '',
DROP COLUMN "user_id",
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("user_id");

-- DropEnum
DROP TYPE "UserLevel";

-- CreateTable
CREATE TABLE "feed_backs" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "training_id" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "text" TEXT NOT NULL DEFAULT '',
    "user_name" TEXT NOT NULL DEFAULT '',
    "user_avatar" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "feed_backs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "time_of_training" TEXT NOT NULL DEFAULT '',
    "calory_losing_plan_total" INTEGER NOT NULL DEFAULT 0,
    "calory_losing_plan_daily" INTEGER NOT NULL DEFAULT 0,
    "is_ready" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trainers" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "merits" TEXT NOT NULL DEFAULT '',
    "personal_training" BOOLEAN DEFAULT false,
    "certificate" TEXT[],

    CONSTRAINT "trainers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "id" SERIAL NOT NULL,
    "tokenId" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "expires_in" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_balances" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "training_id" INTEGER NOT NULL,
    "training_qtt" INTEGER NOT NULL,

    CONSTRAINT "user_balances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL DEFAULT '',
    "trainer_id" INTEGER NOT NULL,
    "training_id" INTEGER NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "sum_price" INTEGER NOT NULL DEFAULT 0,
    "typeOfPayment" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personal_order" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "target_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order_status" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "personal_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friends" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "friend_id" INTEGER NOT NULL,
    "is_confirmed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "friends_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "files" (
    "id" SERIAL NOT NULL,
    "hashName" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "original_name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "size" INTEGER NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscribers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "trainer_id" INTEGER NOT NULL,

    CONSTRAINT "subscribers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" SERIAL NOT NULL,
    "target_user_id" TEXT NOT NULL,
    "text" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_user_id_key" ON "clients"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "trainers_user_id_key" ON "trainers"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "tokens_tokenId_key" ON "tokens"("tokenId");

-- AddForeignKey
ALTER TABLE "feed_backs" ADD CONSTRAINT "feed_backs_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "trainings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainers" ADD CONSTRAINT "trainers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_balances" ADD CONSTRAINT "user_balances_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personal_order" ADD CONSTRAINT "personal_order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "friends_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
