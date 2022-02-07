export interface User{
    id: number,
    username: string,
    pokemon: PokemonCaptured[]
}

export interface PokemonCaptured{
    name: string
}