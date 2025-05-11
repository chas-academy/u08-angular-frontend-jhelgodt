# U08 - Angular Frontend for Book Management

This project is a frontend application built with Angular for managing books. It connects to a REST API that was created in U05 and implements full CRUD functionality with a user-friendly interface.

## 🌐 Live Demo

You can access the deployed application here:  
[https://u08-books.netlify.app/](https://u08-books.netlify.app/)

## 📦 Repository

The full source code is available at:  
[https://github.com/chas-academy/u08-angular-frontend-jhelgodt](https://github.com/chas-academy/u08-angular-frontend-jhelgodt)

---

## 🚀 Features

- **View All Books:** Displays a list of books with options to edit or delete each entry.
- **Add a New Book:** Form to add a new book to the list.
- **Edit a Book:** Update existing book details.
- **Delete a Book:** Remove a book from the list.
- **View Book Details:** Click a book to see more information.
- **Routing:** Implemented with Angular Router.
- **Responsive Design:** Optimized for both desktop and mobile screens (e.g., iPhone 13).

---

## 🛠️ Technologies Used

- Angular (Standalone Components)
- TypeScript
- RxJS
- SCSS for styling
- Karma & Jasmine for testing
- Netlify for deployment

---

## 📝 Installation

1. Clone the repository:  
   `https://github.com/chas-academy/u08-angular-frontend-jhelgodt`

2. Navigate to the project directory:  
   `cd u08-angular-frontend-jhelgodt`

3. Install dependencies:  
   `npm install`

4. Run the application locally:  
   `ng serve`

---

## ✅ Testing

The project includes basic tests for the `BookFormComponent`. To run the tests:

`ng test`

Tests included:

- Verifies component creation.
- Verifies form submission with a new book.
- Verifies form submission with an updated book.

---

## 🌐 Deployment

The application is deployed via Netlify.

Deployment link:  
[https://u08-books.netlify.app/](https://u08-books.netlify.app/)

---

## 📚 API Endpoint

The application communicates with the REST API created in U05.  
API Base URL: `https://u05-typescript.onrender.com/api/v1/books`

Available endpoints:

- **GET** /books - Retrieve all books
- **GET** /books/:id - Retrieve a specific book by ID
- **POST** /books - Create a new book
- **PUT** /books/:id - Update a book by ID
- **DELETE** /books/:id - Delete a book by ID

---

## 🔧 How to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with a descriptive message.
4. Push your branch and create a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for more details.
