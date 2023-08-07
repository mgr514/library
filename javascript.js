const newBook = document.querySelector("#newBook")
const bookContainer = document.querySelector(".book-container")
const bookShelf = document.querySelector(".bookshelf")

let books = JSON.parse(localStorage.getItem.("books"))

function Book()

function addBook() {
  let bookSection = document.createElement("div")
  book.classList.add("book")

  const title = document.createElementById("title")
  let title = document.createElement("h2")
  title.innerHTML = "Title"

  const author = document.createElementById("author")
  let author = document.createElement("h3")
  author.innerHTML = "Author"

  const read = document.createElementbyId("read")
  let read = document.createElement("h3")
  read.innerHTML ="Read"

  const book = new Book (title, author, read)
  books.push(Book)
  localStorage.setItem("books", stringify(books))
  bookSection.appendChild(title)
  bookSection.appendChild(author)
  bookSection.appendChild(read)
  bookShelf.appendChild(bookSection)
}

