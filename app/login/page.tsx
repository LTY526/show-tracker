import { Metadata } from 'next';
import LoginForm from '@/app/ui/login/login-form';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Login',
};

export default async function Page() {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }
  return <LoginForm />;
}
