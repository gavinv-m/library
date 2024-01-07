const addButton = document.getElementById('add-book');
const dialog = document.getElementById('dialog');
const form = document.getElementById('form');
const library = document.querySelector('.books-library');

const formAuthorName = document.getElementById('book-author');
const formBookName = document.getElementById('book-name');
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

    if (!formBookName.value) {
        return;
    }

    authorName = formAuthorName.value;
    nameOfBook = formBookName.value;
    pages = formPages.value;

    

    const newEntry = new Book(nameOfBook, authorName, pages);
 
    formBookName.value = '';
    formAuthorName.value = '';
    formPages.value = '';

    addBookToLibrary(newEntry); 
});


function Book (bookName, bookAuthor, pages) {
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.pages = pages;

    return;
}


function addBookToLibrary(newObject) {

    myLibrary.push(newObject);

    let indexedObjectsArray = myLibrary.map((currentBookObject, index) => {
        return { ...currentBookObject, index};
    });
    console.log(indexedObjectsArray);

    displayBooks(indexedObjectsArray);
}


function displayBooks(array) {

    let books = document.getElementsByClassName('book');

    while (books.length > 0) {
        library.removeChild(books[0]);
    }

    array.forEach(element => {
         
        authorName = element.bookAuthor;
        let index = element.index;
        nameOfBook = element.bookName;
        pages = element.pages;
        
        const bookContainerDiv = document.createElement('div');
        bookContainerDiv.classList.add('book'); 

        let bookNumber = createBookNumber(index);
        bookContainerDiv.appendChild(bookNumber);

        let authorAndBook = createBookAndAuthor(nameOfBook, authorName);
        bookContainerDiv.appendChild(authorAndBook);

        const numberOfPages = document.createElement('h3');
        numberOfPages.classList.add('pages');
        numberOfPages.textContent = pages;
        bookContainerDiv.appendChild(numberOfPages);

        let status = createCheckbox();
        bookContainerDiv.appendChild(status);

        let deleteEntry = createDeleteIcon(); 
        bookContainerDiv.appendChild(deleteEntry); 

        // Add entire book div to books-library
        library.appendChild(bookContainerDiv);
        
    });

    
}


function createBookAndAuthor(book, nameOfAuthor) {

    const titleAndAuthor = document.createElement('div');
    titleAndAuthor.classList.add('book-and-author');

    const bookTitle = document.createElement('h4');
    bookTitle.textContent = book;
    titleAndAuthor.appendChild(bookTitle); 

    const author = document.createElement('h5');
    author.textContent = nameOfAuthor; 
    titleAndAuthor.appendChild(author);
    
    return titleAndAuthor; 

}


function createBookNumber(number) {

    const bookNumber = document.createElement('h3');
    bookNumber.classList.add('number');
    bookNumber.textContent = number + 1;
    
    return bookNumber;
}


function createCheckbox() {

    const status = document.createElement('div');
    status.id = 'status';

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    status.appendChild(checkbox);

    return status;
}


function createDeleteIcon() {

    const deleteEntry = document.createElement('div');
    deleteEntry.id = 'delete';
    
    let svg = createSvg();
    deleteEntry.appendChild(svg);

    return deleteEntry;
}


function createSvg() {
    // Create the SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id', 'Isolation_Mode');
    svg.setAttribute('data-name', 'Isolation Mode');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');

    // Create the path element and set its attribute
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M23,3H18V2.5A2.5,2.5,0,0,0,15.5,0h-7A2.5,2.5,0,0,0,6,2.5V3H1V6H3V21a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V6h2ZM18,21H6V6H18Z');

    // Create the rect elements and set their attributes
    const rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect1.setAttribute('x', '8');
    rect1.setAttribute('y', '9');
    rect1.setAttribute('width', '3');
    rect1.setAttribute('height', '9');

    const rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect2.setAttribute('x', '13');
    rect2.setAttribute('y', '9');
    rect2.setAttribute('width', '3');
    rect2.setAttribute('height', '9');

    // Append the path and rect elements to the SVG
    svg.appendChild(path);
    svg.appendChild(rect1);
    svg.appendChild(rect2);

    return svg; 
}