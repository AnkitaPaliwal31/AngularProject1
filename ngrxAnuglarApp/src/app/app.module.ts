import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { booksReducer } from './ngrx/reducers/books.reducer';
import { ShowBooksComponent } from './show-books/show-books.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ShowBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({book:booksReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
