'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Card, CardHeader, Input } from '@nextui-org/react';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';

export default function LoginForm() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Record<string, string>> = (data) => {
    setLoading(true);
    console.log(data);
    setLoading(false);
  };

  if (!mounted) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
