import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-edit-list',
  templateUrl: './book-edit-list.component.html',
  styleUrls: ['./book-edit-list.component.css']
})
export class BookEditListComponent implements OnInit {
  
  booklist:Book[];

  constructor(private booksvc:BookService) { }

  ngOnInit() {
       this.booklist = this.booksvc.getBookList();
       this.booksvc.bookListerner().subscribe((bList:Book[])=>{
          console.log(bList);
          this.booklist = bList;  
       })
  }

  // onUpdateBook(index){
  //   console.log('run with index',index);
  //   this.booksvc.bookupdate.emit(index);
  // }
}
