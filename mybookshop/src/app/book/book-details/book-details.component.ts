import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes, Params } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { BookService } from '../book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookId:number;
  book:Book;
  constructor(private route:ActivatedRoute,private routes:Router,private booksvc:BookService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
        this.bookId = params['id'];
        this.book = this.booksvc.getBookById(this.bookId);
    })
  }

}
