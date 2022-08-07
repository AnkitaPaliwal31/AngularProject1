import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addBook, buyBook } from '../ngrx/actions/books.action';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  book$: Observable<number>;
 
  constructor(private store:Store<{book:number}>) {
    this.book$=store.select('book');
  }
 
  addBook() {
    this.store.dispatch(addBook());
  }
 
  buyBook() {
    this.store.dispatch(buyBook());
  }


}
