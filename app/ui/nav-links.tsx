'use client';

import { FilmIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Search Show', href: '/search-show', icon: FilmIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className='flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md',
              'bg-gray-50 dark:bg-[#18181b] dark:hover:bg-[#27272a] p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 dark:bg-[#27272a] text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
