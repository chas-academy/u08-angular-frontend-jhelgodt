import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, BookFormComponent, BookListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newBook?: Book;
  editableBook?: Book;
  updatedBook?: Book;

  onBookAdded(book: Book): void {
    if (book._id) {
      this.updatedBook = book; // Skickar uppdaterad bok till listan
    } else {
      this.newBook = book; // Skickar ny bok till listan
    }

    this.editableBook = undefined;
  }

  onEditBook(book: Book): void {
    this.editableBook = book;
  }
}
