/*
  Warnings:

  - You are about to drop the column `email` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `booking` table. All the data in the column will be lost.
  - Added the required column `eventDescription` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventLocation` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventTime` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizerEmail` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizerName` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `servicePackage` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `booking` DROP COLUMN `email`,
    DROP COLUMN `name`,
    ADD COLUMN `eventDescription` VARCHAR(191) NOT NULL,
    ADD COLUMN `eventLocation` VARCHAR(191) NOT NULL,
    ADD COLUMN `eventTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `organizerEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `organizerName` VARCHAR(191) NOT NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `servicePackage` VARCHAR(191) NOT NULL;
