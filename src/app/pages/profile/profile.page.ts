import { Component, OnInit } from '@angular/core';
import { PokemonCaptured } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css']
})
export class ProfilePage implements OnInit {

  get username(): string {
    return this.userService.username;
  }

  get pokemons(): PokemonCaptured[]{
    return this.userService.pokemons;
  }

  constructor(
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserData();
    console.log(this.userService.pokemons);
    
  }

}
