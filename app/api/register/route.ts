import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10),
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return NextResponse.json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error registering!', detail: error },
      { status: 500 },
    );
  }
}
