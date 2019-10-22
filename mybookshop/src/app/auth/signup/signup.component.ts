import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  roles:string[] = ["buyer","seller"];
  form:FormGroup;
  constructor(private authsvc:AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'firstName':new FormControl(),
      'lastName':new FormControl(),
      'userName':new FormControl(),
      'password':new FormControl(),
      'cnfPassword':new FormControl(),
      'role':new FormControl()
    })
  }

  onSubmit(){
    let fname = this.form.get('firstName').value;
    let lname = this.form.get('lastName').value;
    let uname = this.form.get('userName').value;
    let pass = this.form.get('cnfPassword').value;
    let role = this.form.get('role').value;
    let user = new User(fname,lname,uname,pass,role);
    this.authsvc.signUp(user);
  }

}
