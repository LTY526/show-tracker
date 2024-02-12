import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

export default async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const abc = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (abc == null) {
      return new Response('Invalid email or password', {
        status: 400,
      });
    }
    const matched = await bcrypt.compare(password, abc.password!);
    return abc;
  } catch (error) {
    return new Response('Failed to fetch result.', {
      status: 500,
    });
  }
}
