import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// To-do: create zod schema for request body

export default async function POST(request: Request) {
    const body = await request.json();
    const { count, timestamp } = body;

    try {
        await prisma.boatData.create({
            data: {
                count,
                timestamp: new Date(timestamp),
            },
        });
        return new Response(JSON.stringify({ error: 'Boat data saved to database' }), { status: 200 });
    } catch (error) {
        console.error('Error saving boat data:', error);
        return new Response(JSON.stringify({ error: 'Error saving boat data' }), { status: 500 });
    }
}