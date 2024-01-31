import ShowCard from "@/app/ui/search-show/show-card";
import { TMDBItem } from "@/app/lib/definitions";

export default async function SearchResult({ type, showsResult }: {
  type: 'shows' | 'movies', showsResult: TMDBItem[]
}) {
  return (
    <>
      <div className="mx-auto max-w-full pt-8 px-8 w-[1000px]">
        {/* {JSON.stringify(showsResult)} */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {showsResult.map((tvShow: TMDBItem) => (
            <ShowCard type={type} key={tvShow.id} item={tvShow} />
          ))}
        </div>
      </div>
    </>
  );
}