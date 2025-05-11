import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form.component';
import { BookService } from '../../services/book.service';
import { of } from 'rxjs';

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;
  let bookService: BookService;

  const mockBook = {
    _id: '123',
    title: 'Test Book',
    author: 'Test Author',
    publishedYear: 2021,
    genre: 'Test Genre',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, BookFormComponent],
      providers: [BookService],
    }).compileComponents();

    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    bookService = TestBed.inject(BookService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit bookAdded when onSubmit() is called with a new book', () => {
    spyOn(component.bookAdded, 'emit');
    spyOn(bookService, 'createBook').and.returnValue(of(mockBook));

    component.book = { ...mockBook, _id: undefined };
    component.onSubmit();
    fixture.detectChanges();

    expect(component.bookAdded.emit).toHaveBeenCalledWith(mockBook);
  });

  it('should emit bookAdded when onSubmit() is called with an updated book', () => {
    spyOn(component.bookAdded, 'emit');
    spyOn(bookService, 'updateBook').and.returnValue(of(mockBook));

    component.book = { ...mockBook };
    component.onSubmit();
    fixture.detectChanges();

    expect(component.bookAdded.emit).toHaveBeenCalledWith(mockBook);
  });
});
