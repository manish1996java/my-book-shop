import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form:FormGroup;
  constructor(private authsvc:AuthService) { }

  ngOnInit() {
    
    this.form = new FormGroup({
      'userName':new FormControl(null,[Validators.email,Validators.required]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(6)]),
    })
    // console.log(this.form);
  }
  
  onSubmit(){
    console.log(this.form);
    let username = this.form.get('userName').value;
    let password = this.form.get('password').value;
    this.authsvc.login(username,password);
  }

}
