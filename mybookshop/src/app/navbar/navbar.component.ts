import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth:boolean;
  anyvar:String;

  constructor(private route:ActivatedRoute,private routes:Router,private authsvc:AuthService) { }
  
  ngOnInit() {
    this.isAuth =  this.authsvc.getAuth();
    this.authsvc.isAuthLt().subscribe((isAuth:boolean)=>{
      this.isAuth = isAuth;
    })
    this.route.params.subscribe((path)=>{
      console.log(path);
    })
  }

  logout(){
    this.authsvc.logout();
  }

}
