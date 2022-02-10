//Imports components needed for the profile-list-item component
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-list-item',
  templateUrl: './profile-list-item.component.html',
  styleUrls: ['./profile-list-item.component.css']
})
export class ProfileListItemComponent implements OnInit {

  //Input from the mother component
  @Input() pokemon!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
