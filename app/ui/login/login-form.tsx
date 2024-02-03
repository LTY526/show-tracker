'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@nextui-org/react';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<Record<string, string>> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto flex min-h-screen w-full flex-col  justify-center gap-5 px-8 md:w-[500px] md:px-5">
        <div>
          <Input
            size="sm"
            type="email"
            label="Email"
            {...register('email', { required: true })}
          />

          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <Input
            size="sm"
            type="password"
            label="Password"
            {...register('password', { required: true })}
          />

          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
