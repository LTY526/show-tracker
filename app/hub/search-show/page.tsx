import { Metadata } from 'next';
import SearchInput from '@/app/ui/hub/search-show/search-input';
import SearchResult from '@/app/ui/hub/search-show/search-result';
import { Suspense } from 'react';
import { ShowsSkeleton } from '@/app/ui/hub/search-show/show-skeleton';
import { SearchTvShows } from '@/lib/tmdb-apis';
import SearchPagination from '@/app/ui/hub/search-show/search-pagination';
import ResultType from '@/app/ui/hub/search-show/result-type';

export const metadata: Metadata = {
  title: 'Search for shows',
};

export default async function Page({
  searchParams,
}: {
  searchParams: { type: 'shows' | 'movies'; keyword: string; page: number };
}) {
  const keyword = searchParams.keyword || '';
  const page = searchParams.page || 1;
  const type = searchParams.type || 'shows';
  const searchResult = await SearchTvShows(type, keyword, page);

  return (
    <>
      <SearchInput />
      <p className="m-2">
        You are looking for {keyword != '' ? keyword : 'nothing'}
      </p>
      <ResultType />
      <Suspense key={keyword + page} fallback={<ShowsSkeleton />}>
        <SearchResult type={type} showsResult={searchResult.results} />
      </Suspense>
      {searchResult.total_pages > 0 && searchResult.results.length > 0 && (
        <SearchPagination total={searchResult.total_pages} />
      )}
      {/* <SearchPagination total={searchResult.total_pages} />  */}
    </>
  );
}
