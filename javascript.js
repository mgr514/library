const newBook = document.getElementById("new-book")
const bookContainer = document.querySelector(".book-container")
const bookShelf = document.querySelector("[book-shelf]")
const form = document.querySelector("#form")
const popUp = document.querySelector(".popup")
const closeButton = document.querySelector(".close")
const overlay = document.querySelector(".overlay")

const bookTitle = document.getElementById("title")
const bookAuthor = document.getElementById("author")
const bookRead = document.getElementById("read")

let books = JSON.parse(localStorage.getItem("books")) ?? []

window.addEventListener("load", () => {
  localStorage.setItem("books", JSON.stringify([]))
})

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
  console. log("addBook() called")

  let bookCard = document.createElement("div")
  bookCard.classList.add("book-card")

  let titleNode= document.createElement("h2")
  titleNode.classList.add("book-title")
  titleNode.innerHTML = bookTitle.value

  let authorNode = document.createElement("h3")
  authorNode.classList.add("book-author")
  authorNode.innerHTML = bookAuthor.value

  let readNode = document.createElement("h3")
  readNode.classList.add("book-read")
  readNode.innerHTML = bookRead.value

  let updateNode = document.createElement("button")
  updateNode.classList.add("update")
  updateNode.innerHTML = "update"
  updateNode.addEventListener("click", () =>{
    new_book.read = !new_book.read 
    readNode.innerHTML = new_book.read ? "Read" : "Not Read"
    localStorage.setItem("books", JSON.stringify(books))
  })

  let deleteNode = document.createElement("button")
  deleteNode.classList.add("delete-book")
  deleteNode.innerHTML = "delete"
  deleteNode.addEventListener("click", () => {
    deleteBook(new_book)
    const deleteBook = (book)=>{
      localStorage.setItem("books", JSON.stringify(books))
      bookShelf.removeChild(bookCard)
    }
  })

  const new_book = createBook(
    bookTitle.value,
    bookAuthor.value,
    bookRead.value,
  )

  console.log(new_book)

  books.push(new_book)
  console.log(books)
  localStorage.setItem("books", JSON.stringify(books))

  bookCard.appendChild(titleNode)
  bookCard.appendChild(authorNode)
  bookCard.appendChild(readNode)
  bookCard.appendChild(updateNode)
  bookCard.appendChild(deleteNode)
  bookShelf.appendChild(bookCard)
}

newBook.addEventListener ("click", () => {
  overlay.style.display = "flex"
})

closeButton.addEventListener ("click", () => {
  overlay.style.display = "none"
})

form.addEventListener("submit", (e) => { 
      e.preventDefault()
      overlay.style.display = "none"
      addBook()
})

window.addEventListener("click", (e) => {
  if(e.target === overlay) {
    overlay.style.display = "none"
  }
})