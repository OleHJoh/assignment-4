import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.css']
})
export class CataloguePage implements OnInit {

  get pokemons(): Pokemon[] {
    return this.pokemonService.pokemons;
  }

  get username(): string {
    return this.userService.username;
  }

  constructor(
    private userService: UserService,
    private pokemonService: PokemonService,
    private router: Router) { }

  ngOnInit(): void {
    this.ifPokemonEmpty();
  }

  onCaptured(pokemon: Pokemon){
    alert(pokemon.name + " was captured")
  }

  ifPokemonEmpty(){
    if(this.pokemons.length === 0){
      alert('The catalogue is empty!!!\nPlease login again');
      this.router.navigateByUrl("");
    }
  }

}
