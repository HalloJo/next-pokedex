// export type PokemonItem = {
//     image: string;
//     name: string;
//     url: string;
//   };

// export type PokemonProps = {
//     pokemon: PokemonItem[];
//   };

// export type DataResultProps = {
//   result: {
//     image: string;
//     name: string;
//     url: string;
//   };
// };

export type InitialPokemonProps = {
    initialPokemon: {
        previous?: string,
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