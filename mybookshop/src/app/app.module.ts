import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { InvisblenavComponent } from './auth/invisblenav/invisblenav.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './book/books/books.component';
import { FiltercontrolsComponent } from './book/filtercontrols/filtercontrols.component';
import { BookitemComponent } from './book/books/bookitem/bookitem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './footer/footer.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookEditControlComponent } from './book/book-edit/book-edit-control/book-edit-control.component';
import { BookEditListComponent } from './book/book-edit/book-edit-list/book-edit-list.component';
import { BookEditListItemComponent } from './book/book-edit/book-edit-list/book-edit-list-item/book-edit-list-item.component';
import { BookService } from './book/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthIntercepter } from './auth/auth.intercepter';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    InvisblenavComponent,
    BookComponent,
    BooksComponent,
    FiltercontrolsComponent,
    BookitemComponent,
    FooterComponent,
    BookEditComponent,
    BookDetailsComponent,
    BookEditControlComponent,
    BookEditListComponent,
    BookEditListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthIntercepter,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
