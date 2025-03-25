const apiUrl = "https://your-api-endpoint.com/books";

let booksData = [];

// Fetch data from the API
async function fetchBooks() {
  try {
    const response = await fetch(apiUrl);
    booksData = await response.json();
    displayBooks(booksData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Display books on the page
function displayBooks(books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Clear the previous books

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
        `;
    bookList.appendChild(bookCard);
  });
}

// Search functionality: Filter books by title
document.getElementById("searchInput").addEventListener("input", function () {
  const searchQuery = this.value.toLowerCase();
  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchQuery)
  );
  displayBooks(filteredBooks);
});



// Initialize the app and fetch books data
fetchBooks();
