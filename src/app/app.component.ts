import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookFormComponent } from './components/book-form/book-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'temp-project';
}
