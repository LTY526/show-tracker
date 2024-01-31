import { PokemonApiResult } from "@/app/lib/definitions";

export async function GetPokemonDataSimple(): Promise<PokemonApiResult> {
  return await fetch('https://pokeapi.co/api/v2/pokemon?limit=20').then((res) => res.json());
}

export async function GetPokemonDataPaginate(size: number, page: number): Promise<PokemonApiResult> {
  const offset = (page - 1) * size;
  return await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${size}&offset=${offset}`).then((res) => res.json());
}
