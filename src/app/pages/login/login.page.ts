//Imports the components needed for the login page component
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  //Error message string for the login api request
  registerError: string = "";

  //Constructs the different objects of type of other components in the application
  constructor(
    private router: Router,
    private pokemonService: PokemonService,
    private userService: UserService,
    private loginService: LoginService) { }

    //Initiate the function getAllPokemons when this component is loaded
  ngOnInit(): void {
    this.pokemonService.getAllPokemons();
  }

  //Submit function for the login form
  onLoginSubmit(form: NgForm): void {
    const { username } = form.value;
    //The subscribe action for the login user function from login.service
    this.loginService.login(username).subscribe({
      next: (response: User | undefined) => {
        //If no error occurred it saves the username to the session storage, and navigates to the pokemon catalogue
        console.log('REGISTER', response);
        this.userService.username = username;
        this.router.navigateByUrl("/catalogue");
        },
        //If error occurred it print out the error message in the html
        error: (error) => {
          console.log(error);
          this.registerError = error;
        }
    });
  }

}
