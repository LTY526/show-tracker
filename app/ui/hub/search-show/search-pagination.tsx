'use client';

import { Pagination } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchPagination({ total }: { total: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const onPageNumberChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex justify-center mt-8">
      <Pagination total={total} initialPage={Number(searchParams.get('page') || 1)}
        defaultValue={Number(searchParams.get('page') || 1)} onChange={(e) => onPageNumberChange(e)} />
    </div>
  );
}