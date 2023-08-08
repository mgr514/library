const newBook = document.getElementById("new-book")
const bookContainer = document.querySelector(".book-container")
const bookShelf = document.querySelector("[book-shelf]")
const form = document.querySelector("#form")
const overlay = document.querySelector(".overlay")
const popUp = document.querySelector(".popup")
const closeButton = document.querySelector(".close")

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookRead = document.getElementById('read');

let books = JSON.parse(localStorage.getItem("books")) ?? []

window.addEventListener('load', () => 
{
  localStorage.setItem('books', JSON.stringify([]))
})

// REQUIREMENTS
// 1. Adding a new book through the form should add a new card to our bookshelf with the appropriate data from inputs
// 2. Similarly, this will also append a new book in our Localstorage 'books' array
// 3. After submitting a book, the user can click the New Book button to add another book to their colletion
// BONUS: edit a book from the bookshelf by clicking a button on the card

const createBook = (title, author, read) =>
{
  return {
    title,
    author,
    read
  }
}

const addBook = () =>
{
  console.log('book added');

  let bookCard = document.createElement("div")
  bookCard.classList.add('book-card');

  let titleNode = document.createElement("h2")
  titleNode.classList.add('book-title');
  titleNode.innerHTML = bookTitle.value

  let authorNode = document.createElement("h3")
  authorNode.classList.add('book-author')
  authorNode.innerHTML = bookAuthor.value

  let readNode= document.createElement("h3")
  readNode.classList.add('book-read')
  readNode.innerHTML = bookRead.value

  const new_book = createBook(
    bookTitle.value,
    bookAuthor.value,
    bookRead.value
  )

  console.log(new_book)

  books.push(new_book)
  console.log(books)
  localStorage.setItem("books", JSON.stringify(books))

  bookCard.appendChild(titleNode)
  bookCard.appendChild(authorNode)
  bookCard.appendChild(readNode)
  bookShelf.appendChild(bookCard)
}

newBook.addEventListener ("click", () => {
  overlay.style.display = 'flex'
})

closeButton.addEventListener("click", () =>
{ 
  overlay.style.display = 'none';
})

form.addEventListener("submit", (e) =>
{ 
  e.preventDefault()
  overlay.style.display = 'none';
  addBook()
})

window.addEventListener('click', (e) =>
{
  if(e.target === overlay){
    overlay.style.display = 'none';
  }
})
