import { Component, Input, OnInit } from '@angular/core';
import { PokemonCaptured } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-list-item',
  templateUrl: './profile-list-item.component.html',
  styleUrls: ['./profile-list-item.component.css']
})
export class ProfileListItemComponent implements OnInit {

  @Input() pokemon!: PokemonCaptured

  constructor() { }

  ngOnInit(): void {
  }

}
