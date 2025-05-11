import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-detail',
  template: `
    <h2>Book Details</h2>
    <div *ngIf="book">
      <p><strong>Title:</strong> {{ book.title }}</p>
      <p><strong>Author:</strong> {{ book.author }}</p>
      <p><strong>Year:</strong> {{ book.publishedYear }}</p>
      <p><strong>Genre:</strong> {{ book.genre }}</p>
    </div>
  `,
  styleUrls: ['./book-detail.component.scss'],
  standalone: true,
  imports: [CommonModule], // 👈 Lägg till CommonModule här
})
export class BookDetailComponent {
  book?: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe({
        next: (data) => (this.book = data),
        error: (err) => console.error('Failed to load book', err),
      });
    }
  }
}
