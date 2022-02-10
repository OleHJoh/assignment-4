//Imports components needed for the navbar component
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Gets the image for showing a bran image
  get brandImage(): string {
    return "assets/img/pokeball_PNG8.png";
  }

  constructor() { }

  ngOnInit(): void {
  }

  //Boolean and function for showing the navbar when it turns to a hamburger menu
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
