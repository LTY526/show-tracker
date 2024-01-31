import { Card, Tooltip } from "@nextui-org/react";
import { TMDBItem } from "@/app/lib/definitions";
import Image from "next/image";

export default function ShowCard({ type, item }: { type: 'shows' | 'movies', item: TMDBItem }) {
  return (
    <Card className="w-52 space-y-2 p-4" radius="lg">
      <div className="h-[264px] w-[176px] rounded-xl">
        {item.poster_path == null
          ? <div className="h-[264px] w-[176px] rounded-lg bg-default-100"></div>
          : <Image className="rounded-lg"
            src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
            alt={type == 'shows' ? item.name : item.title} width={200} height={300} />}
      </div>
      <div className="w-44 space-y-2">
        <Tooltip content={type == 'shows' ? item.name : item.title}>
          <p className="text-md font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
            {type == 'shows' ? item.name : item.title}
          </p>
        </Tooltip>
        <p className="text-xs text-default-500">
          {
            type == 'shows' && item.first_air_date != '' 
              ? new Date(item.first_air_date).getFullYear() 
              : type == 'movies' && item.release_date != '' 
                ? new Date(item.release_date).getFullYear()
                : 'Unknown'
          }
        </p>
      </div>
    </Card>
  );
}