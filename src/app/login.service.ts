import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor() { }
  isLoggedIn:boolean | undefined;
check()
{
 
if(JSON.parse(localStorage.getItem('currentuser')!)!=null){
this.isLoggedIn = true;

return this.isLoggedIn;

}
else{
this.isLoggedIn= false;

return this.isLoggedIn;

}
  }}
