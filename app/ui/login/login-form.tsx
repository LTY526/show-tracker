'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Card, CardHeader, Input } from '@nextui-org/react';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const showToast = (type: 'error' | 'success', message: string) => {
    toast[type](message, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    });
  };

  const onSubmit: SubmitHandler<Record<string, string>> = (data) => {
    setLoading(true);
    try {
      signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
        // callbackUrl: '/',
      }).then((res) => {
        if (res && res.ok) {
          showToast('success', 'Login successfully! Redirecting...');
          router.push('/');
          router.refresh();
          return;
        }
        showToast('error', 'Incorrect email or password!');
        console.log(res);
        setLoading(false);
      });
    } catch (error) {
      showToast('error', 'Login failed!');
      console.error(error);
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <div className="mx-auto flex h-screen w-full flex-col justify-center px-8 xs:w-[440px] sm:w-[500px]">
        <Card className="flex w-full justify-center gap-5 px-8 pb-8 pt-6">
          <CardHeader className="justify-center p-0">
            <p className="font-bold">Please login</p>
          </CardHeader>

          <div>
            <Input
              size="sm"
              type="email"
              label="Email"
              {...register('email', {
                onChange: () => trigger('email'),
                required: {
                  value: true,
                  message: 'This field is required',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                  message: 'This email address is invalid',
                },
              })}
              isInvalid={errors.email != undefined}
              errorMessage={errors.email && `${errors.email.message}`}
            />
          </div>
          <div>
            <Input
              size="sm"
              type="password"
              label="Password"
              {...register('password', {
                onChange: () => trigger('password'),
                required: {
                  value: true,
                  message: 'This field is required',
                },
              })}
              isInvalid={errors.password != undefined}
              errorMessage={errors.password && `${errors.password.message}`}
            />
          </div>
          <Button
            isLoading={loading}
            variant="faded"
            type="submit"
            startContent={!loading && <ArrowRightStartOnRectangleIcon />}
          >
            <span className="hidden xs:block">Login</span>
          </Button>
        </Card>
      </div>
    </form>
  );
}
