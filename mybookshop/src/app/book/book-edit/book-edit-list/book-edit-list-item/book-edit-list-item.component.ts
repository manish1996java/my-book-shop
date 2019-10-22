import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/book/book.service';

@Component({
  selector: 'app-book-edit-list-item',
  templateUrl: './book-edit-list-item.component.html',
  styleUrls: ['./book-edit-list-item.component.css']
})
export class BookEditListItemComponent implements OnInit {
  @Input() book:Book;
  @Input() index:number;
  
  constructor(private booksvc:BookService) { }

  ngOnInit() {
    console.log(this.book);
  }
  
  update(){
    // console.log(this.index)
    this.booksvc.bookupdate.emit(this.index);
  }
  delete(){
    // console.log(this.book.id);
    this.booksvc.deleteBook(this.book.id);
  }

}
