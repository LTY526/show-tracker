import NavLinks from '@/app/ui/hub/nav-links';
import { ThemeSwitcher } from '@/app/ui/hub/theme-switcher';
import { getServerSession } from 'next-auth';
import { LogoutButton } from './logout-button';

export default async function SideNav() {
  const session = await getServerSession();
  return (
    <div className="flex h-full flex-row justify-between bg-[#f9fafb] p-2 pt-6 dark:bg-[#18181b] md:flex-col">
      <NavLinks />
      <div className="flex space-x-2">
        <ThemeSwitcher />
        {session && <LogoutButton />}
      </div>
    </div>
  );
}
