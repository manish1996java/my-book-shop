import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookEditControlComponent } from './book/book-edit/book-edit-control/book-edit-control.component';
import { BookEditListComponent } from './book/book-edit/book-edit-list/book-edit-list.component';

const routes: Routes = [
  {path:'',pathMatch:"full",component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'books',component:BookComponent},
  {path:'books/bookdetails/:id',component:BookDetailsComponent},
  {path:'bookedit',component:BookEditComponent},

];
var route: Route

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
