export type InitialPokemonProps = {
    initialPokemon: {
        previous: string,
        next: string,
        results: SinglePokemon[]
    }
}

export type SinglePokemon = {
        name: string;
        url: {
          types: PokemonType[]
        }
  };
  
export type PokemonProps = {
  index: number;
  monster: SinglePokemon;
};

export type PokemonType = {
  slot: number
  type: {
    name: string;
  }
}

export type PokemonStats = {
  base_stat: string;
  stat: {
    name: string;
  }
}

export type PokemonPageProps = {
  pokemonPageData: {
    name: string;
    id: number;
    types: PokemonType[]
    stats: PokemonStats[]
  }
}

type getBackgroundProps = (value: string) => void;

export const getBackgroundColor: getBackgroundProps = (pokemonType: string) => {
  return pokemonType === "grass"
    ? "grass"
    : pokemonType === "fire"
    ? "fire"
    : pokemonType === "water"
    ? "water"
    : pokemonType === "poison"
    ? "poison"
    : pokemonType === "electric"
    ? "electric"
    : pokemonType === "ice"
    ? "ice"
    : pokemonType === "fighting"
    ? "fighting"
    : pokemonType === "ground"
    ? "ground"
    : pokemonType === "flying"
    ? "flying"
    : pokemonType === "psychic"
    ? "psychic"
    : pokemonType === "bug"
    ? "bug"
    : pokemonType === "rock"
    ? "rock"
    : pokemonType === "ghost"
    ? "ghost"
    : pokemonType === "dark"
    ? "dark"
    : pokemonType === "dragon"
    ? "dragon"
    : pokemonType === "steel"
    ? "steel"
    : pokemonType === "fairy"
    ? "fairy"
    : "normal";
};