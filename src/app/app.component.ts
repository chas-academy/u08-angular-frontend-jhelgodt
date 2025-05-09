import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookFormComponent, BookListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newBook?: Book;

  onBookAdded(newBook: Book): void {
    console.log('New book added:', newBook);
    this.newBook = newBook; // Skickas vidare till BookListComponent
  }
}
