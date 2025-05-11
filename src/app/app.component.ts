import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail.component';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BookFormComponent,
    BookListComponent,
    BookDetailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newBook?: Book;
  updatedBook?: Book;
  editableBook?: Book;
  viewBookId?: string;

  onBookAdded(book: Book): void {
    if (book._id) {
      this.updatedBook = book;
    } else {
      this.newBook = book;
    }
    this.editableBook = undefined;
    this.viewBookId = undefined;
  }

  onEditBook(book: Book): void {
    this.editableBook = book;
    this.viewBookId = undefined;
  }

  onViewBook(bookId: string): void {
    this.viewBookId = bookId;
    this.editableBook = undefined;
  }
}
