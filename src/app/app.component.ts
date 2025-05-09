import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookFormComponent } from './components/book-form/book-form.component';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onBookAdded(newBook: Book): void {
    console.log('New book added:', newBook);
    // Här kan vi senare lägga logik för att uppdatera listan
  }
}
