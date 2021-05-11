import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    //console.log("state",state);
    console.log("route",next);
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    console.log("from guard",activeUser);
    if(activeUser) {
      //console.log(state.url);
      const id_in_url = Number( state.url.split("/").pop());
      //console.log("id in url", id_in_url);
      if(id_in_url === Number(activeUser.id)){
        return true;
      }else{
        this.router.navigate(['/']);
        return false;
      }
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
