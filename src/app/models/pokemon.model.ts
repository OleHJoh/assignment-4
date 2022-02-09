export interface Pokemon {
    name: string;
    url: string;
    id: number;
}

export interface PokemonResponse{
    count: number;
    next: string;
    previous: string | null;
    results: Pokemon[]
}

export interface PokemonData{
    form_name: string,
    form_names: string[],
    form_order: number,
    id: number,
    is_battle_only: boolean,
    is_default: boolean,
    is_mega: boolean,
    name: string,
    names: string[],
    order: number,
    pokemon: {
        name: string,
        url: string
    },
    sprites: {
        back_default: string | null,
        back_female: string | null,
        back_shiny: string | null,
        back_shiny_female: string | null,
        front_default: string | null,
        front_female: string | null,
        front_shiny: string | null,
        front_shiny_female: string | null
    },
    types: [
        {
            slot: number,
            type: {
                name: string,
                url: string
            }
        },
        {
            slot: number,
            type: {
                name: string,
                url: string
            }
        }
    ],
    version_group: {
        name: string,
        url: string
    }
}