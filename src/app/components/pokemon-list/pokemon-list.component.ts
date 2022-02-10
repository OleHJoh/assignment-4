//Imports components needed for the pokemon-list component
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  //Gets an input from the mother component
  @Input() pokemons: Pokemon[] = [];
  //Sends a message back to the mother component saying an action has ocurred
  @Output() captured: EventEmitter<Pokemon> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //Function from when a pokemon has been clicked
  onPokemonClicked(pokemon: Pokemon){
    console.log("Pokemon captured", pokemon.name);
    this.captured.emit(pokemon);
  }
}
