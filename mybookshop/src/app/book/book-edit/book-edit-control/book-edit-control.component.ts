import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-edit-control',
  templateUrl: './book-edit-control.component.html',
  styleUrls: ['./book-edit-control.component.css']
})
export class BookEditControlComponent implements OnInit {
  editMode:Boolean = false;
  form:FormGroup;
  fetchedBookId:number;
  constructor(private booksvc:BookService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'title':new FormControl('',[Validators.required]),
      'price':new FormControl('',[Validators.required]),
      'description':new FormControl('',[Validators.required]),
      'url': new FormControl('',[Validators.required]),
      'authorName': new FormControl('',[Validators.required])
    })
    this.booksvc.bookupdate.subscribe((index)=>{
      let book = this.booksvc.getBookById(index);
      this.fetchedBookId = book.id;
      this.form.setValue({
        title:book.title,
        price:book.price,
        description:book.description,
        url:book.image,
        authorName:book.author
      })
      this.editMode = true;
    })
  }

  onSubmit(){
    const title = this.form.get('title').value;
    const price = this.form.get('price').value;
    const description = this.form.get('description').value;
    const url = this.form.get('url').value;
    const author = this.form.get('authorName').value;
    // this.booksvc.setBook(new Book(title,price,description,author,url));
    if(this.editMode){
      this.booksvc.updateBook(this.fetchedBookId,title,price,description,url,author);
    }else{
      this.booksvc.setBookToServer(title,price,description,url,author);
    }
    this.resetForm();
  }

  resetForm(){
    this.editMode = false;
    this.form.reset();
  }
  

}
