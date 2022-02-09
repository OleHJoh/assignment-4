import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
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

  get user(): User{
    return this.userService.user;
  }

  constructor(
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserData();
    console.log(this.userService.user);
    
  }

}
