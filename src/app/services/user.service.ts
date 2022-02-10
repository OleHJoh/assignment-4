//Imports the needed components for the user service
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

//Creates the session string hey from environment
const USER_KEY = 'username';
//Gets the user api link from environment
const URL = environment.userAPI

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //Makes private objects for this class
  private _username: string = '';
  private _user: User = {
    id: 0,
    username: '',
    pokemon: []

  };

  //Get function for the username type string
  get username(): string {
    //Returns the private username string
    return this._username;
  }

  //Get function for user type User
  get user(): User{
    //Returns the private object user
    return this._user;
  }

  //Get function for pokemon name string array
  get pokemons(): string[]{
    //Returns private object user's pokemon name array
    return this._user.pokemon;
  }

  //Set function for username of type string
  set username(username: string) {
    //Sets session username to the username with the session key
    sessionStorage.setItem(USER_KEY, username);
    //Sets the private username string object to the username
    this._username = username;
  }

  //Set function for the user's pokemon name array
  set capturePokemons(name: string){
    //Pushes the pokemon's name into the array
    //This fails for the reason that it can't detect that the pokemon name array is an array??
    this._user.pokemon.push(name);
  }

  //Constructs the different objects of type of other components in the application
  constructor(private http: HttpClient) {
    this._username = sessionStorage.getItem(USER_KEY) || '';
  }

  //Function for getting the user data for a specific user
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
