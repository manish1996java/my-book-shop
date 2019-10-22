import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {
  @Input() bookindex:number;
  @Input() book:Book;
  constructor() { }

  ngOnInit() {
  }

}
