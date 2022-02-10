//Imports components needed for the authorization component
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  //Constructs the different objects of type of other components in the application
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  //canActivate function that let's the guard control if a user
  //have authorization to access curtain pages in tha application
  //by using if-statements
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userService.username !== "") {
      return true;
    }
    else
    this.router.navigateByUrl("/")
    return false;
  }
  
}
