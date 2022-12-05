export type InitialPokemonProps = {
    initialPokemon: {
        previous: string,
        next: string,
        results: SinglePokemon[]
    }
}

export type SinglePokemon = {
        name: string;
        url: string;
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

export type PokemonPageProps = {
  pokemonPageData: {
    name: string;
    id: number;
    types: PokemonType[]
  }
}