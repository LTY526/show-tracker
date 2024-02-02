import { Metadata } from "next";
import LoginForm from "@/app/ui/login/login-form";

export const metadata: Metadata = {
  title: 'Login',
};

export default async function Page() {
  return (
    <>
      <LoginForm />
    </>
  );
}