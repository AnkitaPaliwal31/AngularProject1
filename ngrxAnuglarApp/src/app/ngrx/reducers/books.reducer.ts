import { createReducer, on } from '@ngrx/store';
import { addBook, buyBook } from '../actions/books.action';

export const initialState = 0;

export const booksReducer = createReducer(
  initialState,
  on(buyBook, (state) => state - 1),
  on(addBook, (state) => state + 1)
);