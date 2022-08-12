import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { EmployeeProfileService } from 'src/app/employee-profile.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

loginForm = new FormGroup({
  'username': new FormControl('', Validators.required),
  'password': new FormControl('',Validators.minLength(6))
});

  ngOnInit(): void{
    
    
        // localStorage.setItem('isLoggedIn', 'false');
  }
  


constructor( private route: Router, private loginservice:LoginService, private employeeservice: EmployeeProfileService){
//  console.log("login component");
}


onSubmit(){
 
  let data = {
    userName : this.loginForm.value.username,
    isLoggedIn : false
    
  };
  localStorage.setItem('currentuser', JSON.stringify(data));
  this.employeeservice.setEmployeeData();
  this.route.navigate(['\emp-dashboard']);
  
  

}


}
