import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon, PokemonData, PokemonResponse } from '../models/pokemon.model';

const POKEMON_KEY = 'pokemons';
const URL = environment.pokemonAPI;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _pokemons: Pokemon[] = [];
  private _loading: boolean = false;

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  get loading(): boolean {
    return this._loading;
  }

  constructor(private http: HttpClient) {
    const str = sessionStorage.getItem(POKEMON_KEY) || '';
    if(str.length > 2){
      this._pokemons = JSON.parse(str);}
   }

  getAllPokemons(): void {
    this._loading = true;
    this.http.get<PokemonResponse>(URL)
    .pipe(
      map((response: PokemonResponse) => {
        console.log(response.results);
        
        return response.results;
      }),
      finalize(() => {
        this._loading = false;
      })
    )
    .subscribe({
      next: (pokemons: Pokemon[]) => {
        for (let i = 0; i < pokemons.length; i++) {
          this.getAllPokemonId(pokemons[i]);
        }
        console.log(pokemons);
        
        this._pokemons = pokemons;
        sessionStorage.setItem(POKEMON_KEY, JSON.stringify(this._pokemons));
      }
    });
  }

  getAllPokemonId(pokemon: Pokemon): void {
    this.http.get<PokemonData>(pokemon.url)
    .pipe(
      map((response: PokemonData) => {
        return response;
      })
    )
    .subscribe({
      next: (data: PokemonData) => {
        pokemon.id = data.id;
      }
    });
  }

}
