'use client'

import { useForm, SubmitHandler } from "react-hook-form"

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit: SubmitHandler<Record<string, string>> = data => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register("password", { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}