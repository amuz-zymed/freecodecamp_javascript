const books = [
  { title: "The Hobbit", authorName: "J.R.R. Tolkien", releaseYear: 1937 },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "The Alchemist", authorName: "Paulo Coelho", releaseYear: 1988 }
];

function sortByYear(book1, book2){
  if (book1["releaseYear"] < book2["releaseYear"])
    return -1;
    if (book1["releaseYear"] > book2["releaseYear"])
    return 1;
    if (book1["releaseYear"] == book2["releaseYear"])
    return 0
}

const filteredBooks = books.filter((book) => (book.releaseYear <= 1950))


filteredBooks.sort(sortByYear)
console.log(filteredBooks);

