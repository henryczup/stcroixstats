-- CreateTable
CREATE TABLE "BoatData" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BoatData_pkey" PRIMARY KEY ("id")
);
