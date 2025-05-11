import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class BookDetailComponent implements OnInit {
  @Input() bookId?: string;
  book?: Book;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    if (this.bookId) {
      this.loadBook(this.bookId);
    }
  }

  ngOnChanges(): void {
    if (this.bookId) {
      this.loadBook(this.bookId);
    }
  }

  private loadBook(id: string): void {
    this.bookService.getBookById(id).subscribe({
      next: (data) => {
        this.book = data;
      },
      error: (err) => {
        console.error('Failed to fetch book:', err);
      },
    });
  }
}
