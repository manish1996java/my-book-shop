import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient} from '@angular/common/http'
import { Routes, Route, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token:string;
  private Authenticate:boolean =false;
  private timer:any;
  private isAuth:Subject<boolean> = new Subject<boolean>();

  constructor(private http:HttpClient,private route:Router) {
    
   }

  login(uName:string,pwd:string){    
    var obj = {
      userName:uName,
      password:pwd
    }
    this.http.post<{message:string,token:string,expiresIn:number}>('http://localhost:1123/user/login',obj).subscribe((res)=>{
        if(res.message === "successfull login" && res.token){
          let token:string = res.token;
          let expiresIn:number = res.expiresIn;
          this.setTimer(expiresIn);
          let now = new Date();
          let expireDate = new Date(now.getTime() + expiresIn * 1000);
          this.saveAuthLocal(token,expireDate);
          this.token = token;
          this.Authenticate = true;
          this.isAuth.next(true);
          this.route.navigate(['/'])
        }
    })
  }


  logout(){
    console.log('logout call');
    this.token = null;
    this.Authenticate = false;
    // console.log("here-->",this);
    this.isAuth.next(false);
    this.clearAuthLocal();
    clearTimeout(this.timer);
    this.route.navigate(['/login']);
  }

  signUp(user:User){
    this.http.post('http://localhost:1123/user/signup',user).subscribe((res)=>{
      console.log(res);
    })
  }

  saveAuthLocal(token:string,expireDate:Date){
    localStorage.setItem('token',token);
    localStorage.setItem('expireDate',expireDate.toISOString());
  }
  
  clearAuthLocal(){
    localStorage.removeItem('token');
    localStorage.removeItem('expireDate');
  }

  autoAuthUser(){
    let user = this.getAuthFrmLocal();
    if(!user){
      return;
    }else{
      let currentDate = new Date();
      let expirein = user.expireDate.getTime() - currentDate.getTime();
      console.log(user.expireDate.getTime());
      console.log(currentDate.getTime());
      console.log(expirein);
      if(expirein>0){
        this.setTimer(expirein/1000);
        this.Authenticate = true;
        this.isAuth.next(true);
      }
    }
  }

  setTimer(time:number){
    console.log(time);
    this.timer = setTimeout(()=>{
      this.logout()
    },time);
  }

  getAuthFrmLocal(){
    let token = localStorage.getItem('token');
    let expireDate = localStorage.getItem('expireDate');
    if(!token && !expireDate){
      return;
    }else{
      return {
        token:token,
        expireDate: new Date(expireDate)
      }
    }
  }
  
  getAuth(){
    return this.Authenticate;
  }
  isAuthLt(){
    return this.isAuth.asObservable();
  }
  getTokken(){
    return this.token;
  }

  testing(){
    console.log("hello");
  }
}
