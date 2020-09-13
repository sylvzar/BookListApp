// Book Class to Represent a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Class to Handle UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'Book One',
        author: 'sylv',
        isbn: '1',
      },
      {
        title: 'book',
        author: 'zar',
        isbn: '2',
      },
    ];
    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#list');

    const row = document.createElement('tr');

    row.innerHTML = `
<td>${book.isbn}</td>
<td>${book.title}</td>
<td>${book.author}</td>
<td><a href="#" class="btn btndanger btn-sm delete">X</a></td>
`;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Add book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Instantiate book
  const book = new Book(isbn, title, author);

  // Add book to UI
  UI.addBookToList(book);

  // Clear fields
  UI.clearFields();
});

// Event: Remove a Book
document.querySelector('#list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});

// Stopped on 31 min of tutorial - validation
