import { Card, Skeleton } from '@nextui-org/react';

export function ShowSkeleton() {
  return (
    <Card className="w-52 space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-xl">
        <div className="h-56 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-30 rounded-xl">
          <div className="w-30 bg-default-30 h-3"></div>
        </Skeleton>
        <Skeleton className="w-20 rounded-xl">
          <div className="bg-default-30 h-3 w-20"></div>
        </Skeleton>
      </div>
    </Card>
  );
}

export function ShowsSkeleton() {
  return (
    <div className="mx-auto w-[1000px] max-w-full px-8 pt-8">
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
