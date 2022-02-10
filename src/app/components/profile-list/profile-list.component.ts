//Imports components needed for the profile-list component
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  //Input from the mother component
  @Input() pokemons: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
