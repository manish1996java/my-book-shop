import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from '../book.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  length:number = 100;
  pageSize:number = 3;
  currentpage:number = 1;
  pageOption:number[] = [10,20,30,40,50];
  cardlist:number[] = [1,2,3,4,5,6,7,8,9];
  booklist:Book[];

  constructor(private booksvc:BookService) { }

  ngOnInit() {
       this.booksvc.getBookPage(this.pageSize,this.currentpage);
       this.booklist = this.booksvc.getBookList();
       this.booksvc.bookListerner().subscribe((bList:Book[])=>{
          this.booklist = bList;  
       })
  }

  getPage(pagedata:PageEvent){
    this.currentpage = pagedata.pageIndex+1;
    this.pageSize = pagedata.pageSize;
    console.log(pagedata);
    this.booksvc.getBookPage(this.pageSize,this.currentpage);
  }
}
