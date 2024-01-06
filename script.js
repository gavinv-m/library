const addButton = document.getElementById('add-book');
const dialog = document.getElementById('dialog');
const form = document.getElementById('form');

const formBookName = document.getElementById('book-name');
const formAuthorName = document.getElementById('book-author');
const formPages = document.getElementById('number-of-pages'); 

const myLibrary = [];

let authorName = '';
let nameOfBook = '';
let pages;


addButton.addEventListener('click', () => {
    dialog.showModal();
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    authorName = formAuthorName.value;
    nameOfBook = formBookName.value;
    pages = formPages.value;

    const newEntry = new Book(nameOfBook, authorName, pages);
    myLibrary.push(newEntry);
 
    formBookName.value = '';
    formAuthorName.value = '';
    formPages.value = '';

});


function Book (bookName, bookAuthor, pages) {
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.pages = pages;

    return;
}