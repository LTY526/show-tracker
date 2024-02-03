import SideNav from "@/app/ui/hub/side-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
      <div className="flex-none w-full md:w-64">
        <SideNav />
      </div>
      <div className="p-6 grow md:p-12 md:overflow-y-auto">{children}</div>
    </div>
  );
}