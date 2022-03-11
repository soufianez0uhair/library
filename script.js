// an array to store user's books
const myLibrary = [];
// a constructor for books
function Book(title,author,read) {
    this.title = title
    this.author = author
    this.read = read
}
// function to call when user wanna add some new book
function addBookToLibrary(event) {
    // take user's title and add it to a new book object
    // take user's author and add it to the same new object
    // take user's read status and add it to the same new book object
    let  titleInput = document.querySelector('#title').value;
    let authorInput = document.querySelector('#author').value;
    let readInput = document.querySelector('#read-btn').value;
    let book = new Book(titleInput,authorInput,readInput);
    // add the new book object to the myLibrary array
    myLibrary.unshift(book);
    event.preventDefault();
    displayBooks();
}
let addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', (event) => addBookToLibrary(event))
// a function that loops through myLibrary and display books
function displayBooks() {
    let myLibraryGrid = document.querySelector('.mylibrary');
    let book = document.createElement('div');
    book.setAttribute('class','card');
    book.innerHTML = `<h2>${myLibrary[0].title}</h2><p>by <em>${myLibrary[0].author}</em></p><p>${myLibrary[0].read}</p>`;
    myLibraryGrid.insertBefore(book, myLibraryGrid.firstChild);
}