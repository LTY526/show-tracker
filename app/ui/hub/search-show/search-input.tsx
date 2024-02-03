'use client';

import { Input } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchInput() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const onKeywordChange = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('keyword', term);
      params.set('page', '1');
    } else {
      params.delete('keyword');
      params.delete('page');
    }
    replace(`${pathname}?${params.toString()}`);
  };
  const debouncedOnKeywordChange = useDebouncedCallback(onKeywordChange, 500);

  return (
    <Input
      size="md"
      type="text"
      placeholder="Search for a movie or TV show..."
      defaultValue={searchParams.get('keyword')?.toString()}
      onChange={(e) => debouncedOnKeywordChange(e.target.value)}
    />
  );
}
