import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { Book } from './models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    BookFormComponent,
    BookListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newBook?: Book;
  updatedBook?: Book;
  editableBook?: Book;

  onBookAdded(book: Book): void {
    if (book._id) {
      this.updatedBook = book;
    } else {
      this.newBook = book;
    }

    this.editableBook = undefined;
  }

  onEditBook(book: Book): void {
    this.editableBook = book;
  }
}
