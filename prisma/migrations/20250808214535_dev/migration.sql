/*
  Warnings:

  - You are about to drop the column `completed` on the `ToDo` table. All the data in the column will be lost.
  - Added the required column `title` to the `ToDo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ToDo" DROP COLUMN "completed",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "title" VARCHAR NOT NULL,
ALTER COLUMN "description" SET DATA TYPE VARCHAR;
