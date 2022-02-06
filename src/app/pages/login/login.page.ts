import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  onLoginSubmit(form: NgForm): void {
    const { username } = form.value
    this.userService.username = username
    this.router.navigateByUrl("/catalogue")
  }

}
