import NavLinks from '@/app/ui/hub/nav-links';
import { ThemeSwitcher } from '@/app/ui/hub/theme-switcher';

export default function SideNav() {
  return (
    <div className="flex h-full flex-row justify-between bg-[#f9fafb] p-2 pt-6 dark:bg-[#18181b] md:flex-col">
      <NavLinks />
      <ThemeSwitcher />
    </div>
  );
}
