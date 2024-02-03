'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Card, CardHeader, Input } from '@nextui-org/react';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/16/solid';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({ defaultValues: { email: '', password: '' } });

  const onSubmit: SubmitHandler<Record<string, string>> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="xs:w-[440px] mx-auto flex h-screen w-full flex-col justify-center px-8 sm:w-[500px]">
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
                  message: 'Invalid email address',
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
            variant="faded"
            type="submit"
            startContent={<ArrowRightStartOnRectangleIcon />}
          >
            <span className="xs:block hidden">Login</span>
          </Button>
        </Card>
      </div>
    </form>
  );
}
