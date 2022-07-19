import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
isLoggedIn ='false';
  constructor() { }
check()
{
 
if( localStorage.getItem( JSON.parse('currentuser'))!=null){
this.isLoggedIn = 'true';
console.log('service t');
return this.isLoggedIn;

}
else{
this.isLoggedIn= 'false';
console.log('service f');
return this.isLoggedIn;

}
  }}
