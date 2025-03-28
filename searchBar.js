const searchBar = document.getElementById("search-bar");
const addBookButton = document.getElementById("add-book");
const bookTitleInput = document.getElementById("book-title");
const bookAuthorInput = document.getElementById("book-author");
const bookList = document.getElementById("book-list");
let books = [];
function displayBooks(filteredBooks) {
  bookList.innerHTML = "";
  filteredBooks.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>by ${book.author}</p>
      <button onclick="removeBook(${book.id})">Remove</button>
    `;

    bookList.appendChild(bookCard);
  });
}
function addBook(title, author) {
  const newBook = {
    id: Date.now(),
    title,
    author,
  };
  books.push(newBook);
  displayBooks(books);
}
function removeBook(id) {
  books = books.filter((book) => book.id !== id);
  displayBooks(books);
}
function searchBooks(query) {
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
  );
  displayBooks(filteredBooks);
}
addBookButton.addEventListener("click", () => {
  const title = bookTitleInput.value;
  const author = bookAuthorInput.value;

  if (title && author) {
    addBook(title, author);
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
  }
});
searchBar.addEventListener("input", (e) => {
  searchBooks(e.target.value);
});
displayBooks(books);
