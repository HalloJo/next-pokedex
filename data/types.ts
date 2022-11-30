export type PokemonItem = {
    image: string;
    name: string;
    url: string;
  };

export type PokemonProps = {
    pokemon: PokemonItem[];
  };

export type DataResultProps = {
  result: {
    image: string;
    name: string;
    url: string;
  };
};