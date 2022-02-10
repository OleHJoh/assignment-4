//Imports the components needed for login service component
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, of, tap, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

//Gets the user api link from environment
const URL = environment.userAPI;
//Gets the user api key from environment
const apiKey = environment.userApiKey;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // Create a user in the database.
  createUser(username: string): Observable<User | undefined> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    });
    // new user, id will be created on API
    // Initialize to an empty pokemon array.
    const newUser = {
      username,
      pokemon: [],
    };
    // Use a post method
    return this.http
      .post<User>(URL, newUser, {
        headers,
      })
      .pipe(
        tap((user: User) => {
          if (!user) {
            throwError(() => new Error('Could not create user'));
          }
        })
      );
  }

  // Check if a user exists in the database
  // Could return either a user, or undefined if not matches are found
  checkUsername(username: string): Observable<User | undefined> {
    // Use a query parameter to get an array of users matching the username
    return this.http.get<User[]>(`${URL}?username=${username}`).pipe(
      map((response: User[]) => {
        // pop() returns undefined if the array is empty.
        return response.pop();
      })
    );
  }

  //Runs checkUsername if the user exists
  login(username: string): Observable<User | undefined> {
    return this.checkUsername(username).pipe(
      switchMap((user: User | undefined) => {
        //If he user doesn't exist runs createUser
        if (user === undefined) {
          return this.createUser(username);
        }
        //If user exists returns the user, subscribe can be found in login.page.ts
        return of(user);
      })
    );
  }

  updateUser(user: User) {}



}
