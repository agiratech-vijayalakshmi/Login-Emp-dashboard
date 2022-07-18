import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(){
    localStorage.setItem('username', 'viji')
  }
  loginForm = new FormGroup({
    'username': new FormControl(''),
    'password': new FormControl('')
});
constructor(private fb:FormBuilder, private route: Router){
this.createForm();
}
createForm() {
  this.loginForm = this.fb.group({
    username: '',
    password: ''
  });
}
onSubmit(){
  console.log(this.loginForm.value);
  var userName = localStorage.getItem('username');
  if(this.loginForm.value.username ==userName ){
    console.log('submitted');
    this.route.navigate(['\emp-dashboard'])
  }
  else{
    alert('Enter valid username');

  }
}


}
