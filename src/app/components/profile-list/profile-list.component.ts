import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  @Input() user: User = {
    id: 0,
    username: '',
    pokemon: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
