const addButton = document.getElementById('add-book');
const dialog = document.getElementById('dialog');
const form = document.getElementById('form');

const myLibrary = [];

let authorName = '';
let nameOfBook = '';
let pages;


addButton.addEventListener('click', () => {
    dialog.showModal();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    authorName = document.getElementById('book-author').value;
    nameOfBook = document.getElementById('book-name').value; 
    pages = document.getElementById('number-of-pages').value;

    const newEntry = new Book(nameOfBook, authorName, pages);


})

function Book (bookName, bookAuthor, pages) {
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.pages = pages;

    console.log(this);
}