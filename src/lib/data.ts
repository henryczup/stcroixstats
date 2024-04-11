import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getBoatData() {
    return prisma.boatData.findMany({
        orderBy: {
            timestamp: 'desc',
        },
        take: 100,
    });
}