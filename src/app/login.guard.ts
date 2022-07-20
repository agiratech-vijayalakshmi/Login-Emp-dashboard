import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private route:Router,private loginservice: LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      if(!!(JSON.parse(localStorage.getItem('currentuser')!)) && route.routeConfig?.path != 'emp-dashboard'){
      this.route.navigate(['/emp-dashboard']);
        
        return false;
      }
       else if (!(JSON.parse(localStorage.getItem('currentuser')!)) && route.routeConfig?.path != '') {
        this.route.navigate(['']);
        return false;
      } 
      else {
        return true;
      }

    
    }
}
