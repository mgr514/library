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
  authorNode.innerHTML = `Author: ${bookAuthor.value}`

  let readNode = document.createElement("h3")
  readNode.classList.add("book-read")
  readNode.innerHTML = `Read: ${bookRead.value}`

  let updateNode = document.createElement("button")
  updateNode.classList.add("update")
  updateNode.innerHTML = "Update Read Status"
  updateNode.addEventListener("click", () =>{
    new_book.read = !new_book.read 
    readNode.innerHTML = `Read: ${new_book.read ? "No" : "Yes"}`
    //editBook = (new_book, bookTitle.value, bookAuthor.value)
    localStorage.setItem("books", JSON.stringify(books))
  })

  /*let editNode = document.createElement("button")
  editNode.classList.add("edit-book")
  editNode.innerHTML = "Edit"
  editNode.addEventListeneer("click", () => {
    editForm(new_book)
  })*/

  const deleteBook = (book)=>{
    const books = JSON.parse(localStorage.getItem("books"))
    bookShelf.removeChild(bookCard)
  }
  
    let deleteNode = document.createElement("button")
    deleteNode.classList.add("delete-book")
    deleteNode.innerHTML = "Delete"
    deleteNode.addEventListener("click", () => {
      deleteBook(new_book)
      })

  const new_book = createBook(
    bookTitle.value,
    bookAuthor.value,
    bookRead.value,
  )

  /*const editBook = (newTitle, newAuthor) => {
    book.title = newTitle
    new.author = newAuthor
    localStorage.setItem("books", JSON.stringify(books))
  }*/

  console.log(new_book)

  books.push(new_book)
  console.log(books)
  localStorage.setItem("books", JSON.stringify(books))

  bookCard.appendChild(titleNode)
  bookCard.appendChild(authorNode)
  bookCard.appendChild(readNode)
  bookCard.appendChild(updateNode)
  //bookCard.appendChild(editNode)
  bookCard.appendChild(deleteNode)
  bookShelf.appendChild(bookCard)
}
/*const editForm = (book) => {
  bookTitle.value = book.title
  bookAuthor.value = book.author
  overlay.style.display = "flex"
}*/

newBook.addEventListener ("click", () => {
  overlay.style.display = "flex"
})

closeButton.addEventListener ("click", () => {
  overlay.style.display = "none"
})

form.addEventListener("submit", (e) => { 
      e.preventDefault()
      overlay.style.display = "none"
      //editBook(bookTitle.value, bookAuthor.value)
      addBook()
})

window.addEventListener("click", (e) => {
  if(e.target === overlay) {
    overlay.style.display = "none"
  }
})