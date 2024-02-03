import { Metadata } from 'next';
import LoginForm from '@/app/ui/login/login-form';

export const metadata: Metadata = {
  title: 'Login',
};

export default async function Page() {
  return (
    <>
      <div className="mx-auto flex min-h-screen w-full flex-col  justify-center gap-5 px-8 md:w-[500px] md:px-5"></div>
      <LoginForm />
    </>
  );
}
