import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UiProvider from "@/app/ui-provider";
import SideNav from "@/app/ui/hub/side-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Show Tracker",
  description: "To keep track of your watch list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
    <html lang="en">
      <body className={inter.className}>
        <UiProvider>
          {/* <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
            <div className="flex-none w-full md:w-64">
              <SideNav />
            </div>
            <div className="p-6 grow md:overflow-y-auto md:p-12">{children}</div>
          </div> */}
          {children}
        </UiProvider>
      </body>
    </html>
  );
}
