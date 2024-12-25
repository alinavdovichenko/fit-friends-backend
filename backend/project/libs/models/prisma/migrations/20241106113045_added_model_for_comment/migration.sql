-- CreateTable
CREATE TABLE "users" (
    "user_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL DEFAULT '',
    "user_avatar" TEXT DEFAULT '',
    "role" TEXT NOT NULL DEFAULT '',
    "user_mail" TEXT NOT NULL DEFAULT '',
    "backgraund_image" TEXT NOT NULL DEFAULT '',
    "sex" TEXT NOT NULL DEFAULT '',
    "birth_day" TIMESTAMP(3),
    "description" TEXT DEFAULT '',
    "location" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_level" TEXT NOT NULL DEFAULT '',
    "types_of_traning" TEXT[],
    "password_hash" TEXT NOT NULL DEFAULT '',
    "is_ready" BOOLEAN NOT NULL DEFAULT false,
    "certificates" TEXT[],
    "achievements" TEXT DEFAULT '',
    "calories_lose" INTEGER NOT NULL DEFAULT 0,
    "calories_day" INTEGER NOT NULL DEFAULT 0,
    "time_training" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "trainings" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "backgraund_image" TEXT NOT NULL DEFAULT '',
    "level" TEXT NOT NULL DEFAULT '',
    "type" TEXT NOT NULL DEFAULT '',
    "duration" TEXT NOT NULL DEFAULT '',
    "price" INTEGER NOT NULL DEFAULT 0,
    "calories" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userSex" TEXT NOT NULL DEFAULT '',
    "video" TEXT NOT NULL DEFAULT '',
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "coach_id" TEXT NOT NULL,
    "is_special" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "trainings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "training_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_mail_key" ON "users"("user_mail");

-- CreateIndex
CREATE INDEX "comments_training_id_idx" ON "comments"("training_id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "trainings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
