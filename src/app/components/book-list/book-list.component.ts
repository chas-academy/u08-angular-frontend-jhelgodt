import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class BookListComponent implements OnChanges {
  @Input() newBook?: Book;
  books: Book[] = [];

  constructor(private bookService: BookService) {
    this.loadBooks();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newBook'] && changes['newBook'].currentValue) {
      this.books.push(changes['newBook'].currentValue);
    }
  }

  private loadBooks(): void {
    this.bookService.getAllBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        console.error('Failed to load books', err);
      },
    });
  }

  onDelete(bookId?: string): void {
    if (!bookId) return;

    this.bookService.deleteBook(bookId).subscribe({
      next: () => {
        this.books = this.books.filter((book) => book._id !== bookId);
        console.log(`Book with ID ${bookId} deleted`);
      },
      error: (err) => {
        console.error('Failed to delete book:', err);
      },
    });
  }
}
