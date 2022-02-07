import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonCaptured, User } from '../models/user.model';

const USER_KEY = 'username';
const URL = environment.userAPI

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _username: string = '';
  private _pokemons: PokemonCaptured[] = [];

  get username(): string {
    return this._username;
  }

  get pokemons(): PokemonCaptured[]{
    return this._pokemons;
  }

  set username(username: string) {
    sessionStorage.setItem(USER_KEY, username);
    this._username = username;
  }

  constructor(private http: HttpClient) {
    this._username = sessionStorage.getItem(USER_KEY) || '';
  }

  getUserData(): void{
    this.http.get<User>(`${URL}?username=${this._username}`)
    .pipe(
      map((response: User) => {
        return response.pokemon
      })
    )
    .subscribe({
      next: (pokemons: PokemonCaptured[]) => {
        this._pokemons = pokemons
        console.log(this._pokemons);
        
      }
    })
  }
}
