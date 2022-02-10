//Imports the components needed for the catalogue component
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.css']
})
export class CataloguePage implements OnInit {

  //Get function for type pokemon array
  get pokemons(): Pokemon[] {
    //Returns the pokemon array from pokemonService
    return this.pokemonService.pokemons;
  }

  //Get function for username of type string
  get username(): string {
    //Returns the username string from userService
    return this.userService.username;
  }
//Constructs the different objects of type of other components in the application
  constructor(
    private userService: UserService,
    private pokemonService: PokemonService) { }

    //Initiate the function getUserData when component is loaded into the view or by an another component
  ngOnInit(): void {
    this.userService.getUserData();
  }

  //Function that gets activated when it receives a message from the child element
  onCaptured(pokemon: Pokemon){
    alert(pokemon.name + " was captured")
    this.userService.pokemons.push(pokemon.name);
    console.log(this.userService.user);
    
  }

}
