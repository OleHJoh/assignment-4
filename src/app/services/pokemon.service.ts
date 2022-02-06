import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, map } from 'rxjs';
import { Pokemon, PokemonResponse } from '../models/pokemon.model';

const URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

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
    return this._loading
  }

  constructor(private http: HttpClient) { }

  getAllPokemons(): void {
    this._loading = true;
    this.http.get<PokemonResponse>(URL)
    .pipe(
      map((response: PokemonResponse) => {
        return response.results
      }),
      finalize(() => {
        this._loading = false;
      })
    )
    .subscribe({
      next: (pokemons: Pokemon[]) => {
        this._pokemons = pokemons
      }
    });
  }

}
