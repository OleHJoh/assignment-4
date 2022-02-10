//Imports the needed components for the pokemon service component
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon, PokemonResponse } from '../models/pokemon.model';

//Creates session string key from environment
const POKEMON_KEY = 'pokemons';
//Gets the pokemon api link from environment
const URL = environment.pokemonAPI;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //Makes private objects in this class
  private _pokemons: Pokemon[] = [];
  private _loading: boolean = false;

  //Get function for type pokemon array
  get pokemons(): Pokemon[] {
    //Returns the private pokemon array
    return this._pokemons;
  }

  //Get function for the loading boolean
  get loading(): boolean {
    //Returns the private boolean
    return this._loading;
  }

  //Constructs the different objects of type of other components in the application
  constructor(private http: HttpClient) {
    const str = sessionStorage.getItem(POKEMON_KEY) || '';
    //Checks if the string exists by it being bigger than 1
    //If the string exists updates the private pokemon array with the saved one from session storage
    if(str.length > 1){
      this._pokemons = JSON.parse(str);
    }
   }

   //Get all the pokemon function
  getAllPokemons(): void {
    this._loading = true;
    //Gets the data from the api
    this.http.get<PokemonResponse>(URL)
    .pipe(
      //Maps it so only the result array from the response get sent through
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
        //For loop for getting the pokemon id from the response
        for (let i = 0; i < pokemons.length; i++) {
          pokemons[i].id = this.slideIdFromUrl(pokemons[i].url);
        }
        console.log(pokemons);
        
        this._pokemons = pokemons;
        sessionStorage.setItem(POKEMON_KEY, JSON.stringify(this._pokemons));
      }
    });
  }

  //Function for getting the id from the url belonging to a pokemon
  private slideIdFromUrl(url: string): number {
    return Number(url.split('/').filter(Boolean).pop());
  }

}
