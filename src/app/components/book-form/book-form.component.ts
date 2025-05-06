import { Component } from '@angular/core';
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
export class BookFormComponent {
  book: Book = {
    title: '',
    author: '',
    publishedYear: new Date().getFullYear(),
    genre: '',
  };

  constructor(private bookService: BookService) {}

  onSubmit(): void {
    this.bookService.createBook(this.book).subscribe({
      next: (newBook) => {
        console.log('Book created:', newBook);
        this.book = {
          title: '',
          author: '',
          publishedYear: new Date().getFullYear(),
          genre: '',
        };
      },
      error: (err) => {
        console.error('Failed to create book:', err);
      },
    });
  }
}
