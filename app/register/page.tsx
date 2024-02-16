import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import RegisterForm from '../ui/register/register-form';

export const metadata: Metadata = {
  title: 'Register',
};

export default async function Page() {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }
  return <RegisterForm />;
}
