import { Component, Input, OnInit } from '@angular/core';
import { PokemonCaptured } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  @Input() pokemons: PokemonCaptured[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
