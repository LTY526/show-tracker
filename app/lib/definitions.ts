export interface PokemonApiResult {
  count: number;
  next: string;
  previous: string;
  results: PokemonItem[];
}

export interface PokemonItem {
  name: string;
  url: string;
}

export interface TMDBApiResult {
  page: number;
  results: TMDBItem[];
  total_pages: number;
  total_results: number;
}

export interface TMDBItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
  original_title: string;
  title: string;
  release_date: string;
}
