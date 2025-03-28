// Initial sample data for books
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover:
      "https://isbndb.com/blog/wp-content/uploads/2024/04/book-cover-image.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    cover:
      "https://isbndb.com/blog/wp-content/uploads/2024/04/book-cover-image.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover:
      "https://isbndb.com/blog/wp-content/uploads/2024/04/book-cover-image.jpg",
  },
];

// Function to display all books
function displayBooks(bookList) {
  const bookListContainer = document.getElementById("book-list");
  bookListContainer.innerHTML = ""; // Clear existing content

  bookList.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");

    const bookCover = document.createElement("img");
    bookCover.src = book.cover;
    bookCover.alt = "Book Cover";
    bookCover.classList.add("book-cover");

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    bookItem.appendChild(bookCover);
    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);

    bookListContainer.appendChild(bookItem);
  });
}

// Function to search books by title or author
function searchBooks() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
  );
  displayBooks(filteredBooks);
}

// Function to add a new book
document.getElementById("add-book").addEventListener("click", () => {
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;

  if (title && author) {
    const newBook = {
      title: title,
      author: author,
      cover:
        "https://isbndb.com/blog/wp-content/uploads/2024/04/book-cover-image.jpg", // Placeholder cover image
    };

    books.push(newBook);
    displayBooks(books);
    document.getElementById("book-title").value = "";
    document.getElementById("book-author").value = "";
  } else {
    alert("Please enter both a book title and author.");
  }
});

// Initial display of books when the page loads
displayBooks(books);
