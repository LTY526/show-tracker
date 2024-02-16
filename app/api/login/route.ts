import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user != null) {
      const matched = await bcrypt.compare(password, user.password || '');
      if (matched) {
        return NextResponse.json({
          id: user.id,
          email: user.email,
        });
      }
    }
    return NextResponse.json(null);
  } catch (error) {
    return NextResponse.json(null);
  }
}
