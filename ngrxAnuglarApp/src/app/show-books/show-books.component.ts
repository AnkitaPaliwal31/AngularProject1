import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent {

  book$: Observable<number>;
 
  constructor(private store:Store<{book:number}>) {
    this.book$=store.select('book');
  }
}
