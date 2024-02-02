import { Card, Skeleton } from "@nextui-org/react";

export function ShowSkeleton() {
  return (
    <Card className="p-4 space-y-5 w-52" radius="lg">
      <Skeleton className="rounded-xl">
        <div className="h-56 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-30 rounded-xl">
          <div className="h-3 w-30 bg-default-30"></div>
        </Skeleton>
        <Skeleton className="w-20 rounded-xl">
          <div className="w-20 h-3 bg-default-30"></div>
        </Skeleton>
      </div>
    </Card>
  );
}

export function ShowsSkeleton() {
  return (
    <div className="mx-auto max-w-full pt-8 px-8 w-[1000px]">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
        <ShowSkeleton />
        <ShowSkeleton />
        <ShowSkeleton />
        <ShowSkeleton />
        <ShowSkeleton />
        <ShowSkeleton />
        <ShowSkeleton />
        <ShowSkeleton />
      </div>
    </div>
  );
}