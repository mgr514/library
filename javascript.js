const newBook = document.querySelector("#newBook")
const bookContainer = document.querySelector(".book-container")
const bookShelf = document.querySelector(".bookshelf")
const form = document.querySelector("#form")
const popUp = document.querySelector(".popup")
const closeButton = document.querySelector(".close")

let books = JSON.parse(localStorage.getItem("books"))

function Book (title, author, read) {
  this.id = bookId
  this.title = title
  this.author = author
  this.read = read
}

Book.prototype.createId


function addBook() {
  let bookSection = document.createElement("div")
  book.classList.add("book")

  const title = document.createElementById("title")
  let titleNode= document.createElement("h2")
  title.innerHTML = "Title"

  const author = document.createElementById("author")
  let authorNode = document.createElement("h3")
  author.innerHTML = "Author"

  const read = document.createElementbyId("read")
  let readNode= document.createElement("h3")
  read.innerHTML ="Read"

  const book = new Book (title, author, read)
  books.push(Book)
  localStorage.setItem("books", stringify(books))
  bookSection.appendChild(title)
  bookSection.appendChild(author)
  bookSection.appendChild(read)
  bookShelf.appendChild(bookSection)
}

function formOpenOrClose(){
  if (formOpen) {

  } else {

  }
}

newBook.addEventListener ("click", )
closeButton.addEventListener("click", )
form.addEventListener("submit", (e) =>
    { e.preventDefault()
      addBook()
})