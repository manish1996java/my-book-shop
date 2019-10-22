import { Injectable, EventEmitter } from '@angular/core';
import { Book } from '../models/book';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookupdate = new EventEmitter();
  private bookLt = new Subject();
  
  private booklist:Book[] = [];

  
  
  constructor(private http:HttpClient) {
    this.getBooksFrmServer();
    console.log(this.booklist);
    // this.booklist = [
    //   new Book('jaws',300,'long description of half girl friend novel','peter Benchley','https://media1.popsugar-assets.com/files/thumbor/GD60tXqFF5-DncD99uD_j-Hvp1k/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/11/12/985/n/1922283/32be03105bea00f0969de5.49967920_/i/Novels-Based-True-Stories.jpg'),
    //   new Book('halfgirlfriend',250,'long description of half girl friend novel ','chetan bhagat','https://images-na.ssl-images-amazon.com/images/I/51IpHUkHttL._SX326_BO1,204,203,200_.jpg'),
    //   new Book('Harry Potter Chamer of Secret',700,'long description of half girl friend novel','J.k. RowLings','https://kbimages1-a.akamaihd.net/645388ae-94f7-41fe-8416-f3929f43414f/353/569/90/False/harry-potter-and-the-chamber-of-secrets-5.jpg'),
    //   new Book('the book of God',800,'long description of half girl friend novel','Walter','https://images.gr-assets.com/books/1328847563l/965733.jpg'),
    //   new Book('A thousand splendid suns',390,'long description of half girl friend novel','Khaled hosseini','https://jamesclear.com/wp-content/uploads/2017/04/A-Thousand-Splendid-Suns-by-Khaled-Hosseini-456x700.gif'),
    //   new Book('scribe',450,'long description of half girl friend novel','Metthew Guinn','https://www.daedalusbooks.com/graphics/products/regular/D80165.jpg'),
    //   new Book('you must be brave',200,'long description of half girl friend novel','Frances Liardet','https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1556052668-418uvaLQDjL.jpg')
    // ];
   }
  
  getBooksFrmServer(){
    console.log("this is running");
    this.http.get<{message:string,books:any}>('http://localhost:1123/book/books')
    .pipe(map((bookdata)=>{
      return bookdata.books.map((sngbook)=>{
          return {
            id:sngbook._id,
            title:sngbook.title,
            price:sngbook.price,
            description:sngbook.description,
            author:sngbook.author,
            image:sngbook.image
          }
      })
    }))
    .subscribe((book:Book[])=>{
        this.booklist = book;
        this.bookLt.next([...this.booklist]);
    })
  }



  setBookToServer(title:string,price:number,description:string,image:string,author:string){
    let book = {
        title:title,
        price:price,
        description:description,
        image:image,
        author:author
    }
    this.http.post<{message:string}>('http://localhost:1123/book/upload',book).subscribe((res)=>{
        console.log(res);
        this.getBooksFrmServer();
    })
  }


  updateBook(id:number,title:string,price:number,description:string,image:string,author:string){
    let book = {
        title:title,
        price:price,
        description:description,
        image:image,
        author:author
      }
      
    this.http.put('http://localhost:1123/book/update/'+id,book).subscribe((result)=>{
      console.log(result);
    })
  }
  
  deleteBook(id:number){
    this.http.delete('http://localhost:1123/book/delete/'+id).subscribe((result)=>{
        console.log(result);
        this.getBooksFrmServer();
    });
  }

  getBookPage(pagesize,currentpage){
    console.log("pagesize: ",pagesize);
    console.log("currentpage: ",currentpage);
    let query = `?pagesize=${pagesize}&page=${currentpage}`;
    this.http.get('http://localhost:1123/book/getbooks'+query).subscribe((books:Book[])=>{
    console.log(books);  
    // this.booklist = books;
    })
  }


  getBookList(){
    return [...this.booklist]; 
  }
  setBook(book:Book){
    this.booklist.push(book);
    this.bookLt.next([...this.booklist]);
  }
  bookListerner(){
    return this.bookLt.asObservable();
  }
  getBookById(index:number){
    return this.booklist[index];
  }
}
