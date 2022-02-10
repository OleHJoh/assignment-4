//Pokemon model
export interface Pokemon {
    name: string;
    url: string;
    id: number;
}

//PokemonResponseModel
export interface PokemonResponse{
    count: number;
    next: string;
    previous: string | null;
    results: Pokemon[]
}