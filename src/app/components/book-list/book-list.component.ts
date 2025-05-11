import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 Lägg till RouterModule här
})
export class BookListComponent implements OnChanges {
  @Input() newBook?: Book;
  @Input() updatedBook?: Book;
  @Output() editBook = new EventEmitter<Book>();

  books: Book[] = [];

  constructor(private bookService: BookService) {
    this.loadBooks();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newBook'] && changes['newBook'].currentValue) {
      this.books.push(changes['newBook'].currentValue);
    }

    if (changes['updatedBook'] && changes['updatedBook'].currentValue) {
      const updatedBook = changes['updatedBook'].currentValue;
      const index = this.books.findIndex((b) => b._id === updatedBook._id);
      if (index !== -1) {
        this.books[index] = updatedBook;
      }
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
      },
      error: (err) => {
        console.error('Failed to delete book:', err);
      },
    });
  }

  onEdit(book: Book): void {
    this.editBook.emit(book);
  }
}
