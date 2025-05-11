import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnChanges {
  @Input() editBook?: Book;
  @Output() bookAdded = new EventEmitter<Book>();

  book: Book = {
    title: '',
    author: '',
    publishedYear: new Date().getFullYear(),
    genre: '',
  };

  constructor(private bookService: BookService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editBook'] && changes['editBook'].currentValue) {
      this.book = { ...changes['editBook'].currentValue };
    }
  }

  onSubmit(): void {
    if (this.book._id) {
      this.updateBook();
    } else {
      this.addBook();
    }
  }

  private addBook(): void {
    this.bookService.createBook(this.book).subscribe({
      next: (newBook) => {
        this.bookAdded.emit(newBook);
        this.resetForm();
      },
      error: (err) => console.error('Failed to create book:', err),
    });
  }

  private updateBook(): void {
    this.bookService.updateBook(this.book._id!, this.book).subscribe({
      next: (updatedBook) => {
        this.bookAdded.emit(updatedBook);
        this.resetForm();
      },
      error: (err) => console.error('Failed to update book:', err),
    });
  }

  private resetForm(): void {
    this.book = {
      title: '',
      author: '',
      publishedYear: new Date().getFullYear(),
      genre: '',
    };
  }
}
