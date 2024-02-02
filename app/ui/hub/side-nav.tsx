import NavLinks from "@/app/ui/hub/nav-links";
import { ThemeSwitcher } from "@/app/ui/hub/theme-switcher";

export default function SideNav() {
  return (
    <div className='bg-[#f9fafb] dark:bg-[#18181b] h-full flex flex-row md:flex-col justify-between pt-6 p-2'>
      <NavLinks />
      <ThemeSwitcher />
    </div>
  );
}