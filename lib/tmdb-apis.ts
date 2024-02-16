import { TMDBApiResult } from '@/lib/definitions';

export async function SearchTvShows(
  type: 'shows' | 'movies',
  keyword: string,
  page: number,
): Promise<TMDBApiResult> {
  if (keyword == null || keyword === '') {
    return Promise.resolve({
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    });
  }

  const url = `https://api.themoviedb.org/3/search/${type == 'movies' ? 'movie' : 'tv'}?query=${keyword}&include_adult=false&language=en-US&page=${page}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    return await fetch(url, options).then((res) => res.json());
  } catch (error) {
    throw new Error('Failed to fetch result.');
  }
}
