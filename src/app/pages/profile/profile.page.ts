//Imports the needed components for the profile component
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css']
})
export class ProfilePage implements OnInit {

  //Get function for username type of string
  get username(): string {
    //Returns the username string from userService 
    return this.userService.username;
  }

  //Get function for user of type User
  get user(): User{
    //Return the user from userService
    //This for some reason I couldn't figure out can be accessed but the child elements can't
    return this.userService.user;
  }

  //Get function for type string array
  get pokemons(): string[]{
    //Returns the string array with names from userService
    return this.userService.pokemons;
  }

  //Constructs the different objects of type of other components in the application
  constructor(
    private userService: UserService) { }

    //Initiate the function getUserData when component is loaded
  ngOnInit(): void {
    this.userService.getUserData();
    
  }

}
