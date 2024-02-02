'use client';

import { Tab, Tabs } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Key } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function ResultType() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  
  const onResultTypeChange = (type: Key) => {
    const params = new URLSearchParams(searchParams);
    if (type) {
      params.set('type', type.toString());
      params.set('page', '1');
    } else {
      params.delete('type');
    }
    replace(`${pathname}?${params.toString()}`);
  }
  const debouncedOnResultTypeChange = useDebouncedCallback(onResultTypeChange, 250);

  return (
    <div className="flex justify-center">
      <Tabs aria-label="Type" defaultSelectedKey={searchParams.get('type')?.toString() || 'shows'}
        onSelectionChange={debouncedOnResultTypeChange}>
        <Tab key="shows" title="Shows" />
        <Tab key="movies" title="Movies" />
      </Tabs>
    </div>
  );
}