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
  private _user: User = {
    id: 0,
    username: '',
    pokemon: []

  };

  get username(): string {
    return this._username;
  }

  get user(): User{
    return this._user;
  }

  set username(username: string) {
    sessionStorage.setItem(USER_KEY, username);
    this._username = username;
  }

  constructor(private http: HttpClient) {
    this._username = sessionStorage.getItem(USER_KEY) || '';
  }

  getUserData(): void{
    this.http.get<User>(`${URL}?username=${this.username}`)
    .subscribe({
      next: (user: User) => {
        this._user = user;
        console.log(this._user);
        
      }
    });
  }
}
