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

  registerError: string = "";

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
    private userService: UserService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons();
  }

  onLoginSubmit(form: NgForm): void {
    const { username } = form.value;
    this.loginService.login(username).subscribe({
      next: (response: User | undefined) => {
        console.log('REGISTER', response);
        this.userService.username = username;
        this.router.navigateByUrl("/catalogue");
        },
        error: (error) => {
          console.log(error);
          this.registerError = error;
        }
    });
  }

}
