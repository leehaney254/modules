import * as bookz from './modules/Books.js';
import Books from './modules/Books.js';
import time from './modules/luxons.js';

const form = document.querySelector('#postBook');
const dates = document.querySelector('#date');

// what happens when a person presses submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Check if title and author field is empty or not
  if (bookz.title.value === '') {
    alert('Please enter a book title');
  } else if (bookz.author.value === '') {
    alert('Please enter a book author');
  } else {
    bookz.displayArea.innerHTML = '';
    const book = new Books();
    book.storeData();
  }
});

const bigBook = new Books();
window.deleteItem = (id) => {
  bigBook.removeBook(id);
};

bookz.list.addEventListener('click', () => {
  bigBook.showList();
});
bookz.addNew.addEventListener('click', () => {
  bigBook.showNew();
});
bookz.contact.addEventListener('click', () => {
  bigBook.showContact();
});

dates.innerHTML = time();

window.addEventListener('load', bigBook.displayBooks());