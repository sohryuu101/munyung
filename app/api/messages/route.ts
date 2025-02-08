import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Handle GET requests (fetch all messages)
export async function GET() {
    try {
      // Test the database connection
      await prisma.$connect();
      console.log('Database connected successfully!');
  
      // Fetch all messages
      const messages = await prisma.message.findMany();
      return NextResponse.json(messages, { status: 200 });
    } catch (error) {
      console.error('Error fetching messages:', error);
      return NextResponse.json(
        { error: 'Failed to fetch messages' },
        { status: 500 }
      );
    } finally {
      await prisma.$disconnect();
    }
  }

// Handle POST requests (add a new message)
export async function POST(request: Request) {
    try {
      // Parse the request body
      const body = await request.json();
  
      // Validate the request body
      if (!body || typeof body !== 'object') {
        return NextResponse.json(
          { error: 'Invalid request body' },
          { status: 400 }
        );
      }
  
      const { sender, message } = body;
  
      if (!sender || !message) {
        return NextResponse.json(
          { error: 'Sender and message are required' },
          { status: 400 }
        );
      }
  
      // Create a new message in the database
      const newMessage = await prisma.message.create({
        data: { sender, message },
      });
  
      return NextResponse.json(newMessage, { status: 201 });
    } catch (error) {
      console.error('Error adding message:', error);
      return NextResponse.json(
        { error: 'Failed to add message' },
        { status: 500 }
      );
    } finally {
      await prisma.$disconnect();
    }
  }