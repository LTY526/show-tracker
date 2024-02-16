'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Button,
  Card,
  CardHeader,
  Divider,
  Input,
  Link,
} from '@nextui-org/react';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = z
  .object({
    name: z.string().min(1, { message: 'This field is required' }),
    email: z.string().min(1, { message: 'This field is required' }).email({
      message: 'This email address is invalid',
    }),
    password: z.string().min(6, {
      message: 'This field is required and must be atleast 6 characters',
    }),
    confirmPassword: z.string().min(1, { message: 'This field is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

type ValidationSchema = z.infer<typeof validationSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

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
      fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        if (res.ok) {
          showToast('success', 'Registration successful! Redirecting...');
          setTimeout(() => {
            router.push('/login');
          }, 1000);
          return;
        }
        showToast('error', 'Registration failed!');
        console.log(res);
        setLoading(false);
      });
    } catch (error) {
      showToast('error', 'Registration failed!');
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
            <p className="font-bold">
              Please fill in the information to register
            </p>
          </CardHeader>
          <div>
            <Input
              size="sm"
              type="text"
              label="Name"
              {...register('name', {
                onChange: () => trigger('name'),
              })}
              isInvalid={errors.name != undefined}
              errorMessage={errors.name && `${errors.name.message}`}
            />
          </div>
          <div>
            <Input
              size="sm"
              type="email"
              label="Email"
              {...register('email', {
                onChange: () => trigger('email'),
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
              })}
              isInvalid={errors.password != undefined}
              errorMessage={errors.password && `${errors.password.message}`}
            />
          </div>
          <div>
            <Input
              size="sm"
              type="password"
              label="Confirm Password"
              {...register('confirmPassword', {
                onChange: () => trigger('confirmPassword'),
              })}
              isInvalid={errors.confirmPassword != undefined}
              errorMessage={
                errors.confirmPassword && `${errors.confirmPassword.message}`
              }
            />
          </div>
          <Button
            isLoading={loading}
            variant="faded"
            type="submit"
            startContent={!loading && <ArrowRightStartOnRectangleIcon />}
          >
            <span className="hidden xs:block">Register</span>
          </Button>
          <Divider />
          <div className="w-full">
            <Link className="flex justify-center" href="/login">
              <p>Already have an account? Login here</p>
            </Link>
          </div>
        </Card>
      </div>
    </form>
  );
}
