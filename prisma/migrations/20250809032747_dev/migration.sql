/*
  Warnings:

  - The `status` column on the `ToDo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('BACKLOG', 'IN_PROGRESS', 'DONE', 'CANCELED');

-- CreateEnum
CREATE TYPE "public"."Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "public"."ToDo" ADD COLUMN     "priority" "public"."Priority" NOT NULL DEFAULT 'LOW',
DROP COLUMN "status",
ADD COLUMN     "status" "public"."Status" NOT NULL DEFAULT 'BACKLOG';
