import { Metadata } from "next";
import LoginForm from "@/app/ui/login/login-form";

export const metadata: Metadata = {
  title: 'Login',
};

export default async function Page() {
  return (
    <>
      <div className="min-h-screen w-full px-8 md:px-5 md:w-[500px]  flex flex-col mx-auto justify-center gap-5"></div>
      <LoginForm />
    </>
  );
}