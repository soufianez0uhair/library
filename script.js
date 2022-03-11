// an array to store user's books
let myLibrary = [];
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
    displayBooks();
    event.preventDefault();
}
let addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', (event) => addBookToLibrary(event))
// a function that loops through myLibrary and display books
function displayBooks() {
    let myLibraryGrid = document.querySelector('.mylibrary');
    myLibraryGrid.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div');
        book.setAttribute('class','card');
        book.setAttribute('id',i);
        book.innerHTML = `<h2>${myLibrary[i].title}</h2><p>by <em>${myLibrary[i].author}</em></p><p>${myLibrary[i].read}</p><i id="${i}" class="fa-solid fa-trash"></i>`;
        myLibraryGrid.appendChild(book)
    }
    let bins = document.querySelectorAll('.fa-trash');
    bins.forEach(bin => bin.addEventListener('click', () => deleteBook(bin.id)));
}
// a function that deletes the selected book
function deleteBook(id) {
    myLibrary = myLibrary.filter(item => myLibrary.indexOf(item) != id);
    displayBooks();
}