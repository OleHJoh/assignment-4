//Imports components needed for the pokemon-list-item component
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {

  //Input from the mother component
  @Input() pokemon!: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
