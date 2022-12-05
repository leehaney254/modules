// select the items
export const title = document.querySelector('#title');
export const author = document.querySelector('#author');
export const displayArea = document.querySelector('#showBooks');
export const list = document.querySelector('#booksshow');
export const addNew = document.querySelector('#new');
export const contact = document.querySelector('#contact');
export const addBook = document.querySelector('#adding');
export const contactInfo = document.querySelector('#reachme');

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  storeData() {
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const book = new Books(bookTitle, bookAuthor);
    // Check if local storage is empty
    if (localStorage.getItem('books') === null) {
      const bookShelf = [];
      bookShelf.push(book);
      localStorage.setItem('books', JSON.stringify(bookShelf));
    } else {
      const bookShelfstr = localStorage.getItem('books');
      const bookArray = JSON.parse(bookShelfstr);
      bookArray.push(book);
      localStorage.setItem('books', JSON.stringify(bookArray));
    }
    // Clear input
    title.value = '';
    author.value = '';
    this.displayBooks();
  }

  displayBooks() {
    const wrapper = document.createElement('div');
    const head = document.createElement('h1');
    const line = document.createElement('hr');
    const bookShelfstr = localStorage.getItem('books');
    const tits = document.createElement('div');
    tits.innerText = this.author;
    head.innerText = 'All awesome books';
    head.classList.add('bookhead');
    displayArea.appendChild(head);
    const bookArray = JSON.parse(bookShelfstr);
    if (bookArray && bookArray.length) {
      bookArray.forEach((element, index) => {
        const displayTitle = document.createElement('p');
        const displayAuth = document.createElement('p');
        const deletebtn = document.createElement('div');
        const container = document.createElement('div');
        const words = document.createElement('div');
        // set attributes
        displayTitle.innerText = `"${element.title}" by`;
        displayAuth.innerText = element.author;
        deletebtn.innerHTML = `<button class="btn borders" onclick='deleteItem(${index})'>Remove</button>`;
        deletebtn.classList.add('deleteBook');
        container.classList.add('flexing', 'centers');
        words.classList.add('flexing');
        displayAuth.classList.add('word');
        // apend children
        words.appendChild(displayTitle);
        words.appendChild(displayAuth);
        container.appendChild(words);
        container.appendChild(deletebtn);
        wrapper.appendChild(container);
      });
      displayArea.appendChild(wrapper);
    } else {
      const nothing = document.createElement('p');
      nothing.classList.add('nothing');
      nothing.innerText = 'There are no books to display';
      displayArea.appendChild(nothing);
    }
    line.classList.add('line');
    displayArea.appendChild(line);
  }

  removeBook(index) {
    const bookShelfstr = localStorage.getItem('books');
    const tits = document.createElement('div');
    tits.innerText = this.author;
    const bookArray = JSON.parse(bookShelfstr);
    bookArray.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(bookArray));
    displayArea.innerHTML = '';
    this.displayBooks();
  }

  showNew() {
    list.classList.remove('linkcol');
    contact.classList.remove('linkcol');
    addNew.classList.add('linkcol');
    const tits = document.createElement('div');
    tits.innerText = this.author;
    // section
    displayArea.classList.add('disappear');
    contactInfo.classList.add('disappear');
    addBook.classList.add('appear');
    addBook.classList.remove('disappear');
    displayArea.classList.remove('appear');
    contactInfo.classList.remove('appear');
  }

  showContact() {
    list.classList.remove('linkcol');
    addNew.classList.remove('linkcol');
    contact.classList.add('linkcol');
    const tits = document.createElement('div');
    tits.innerText = this.author;
    // section
    displayArea.classList.add('disappear');
    addBook.classList.add('disappear');
    contactInfo.classList.add('appear');
    contactInfo.classList.remove('disappear');
    displayArea.classList.remove('appear');
    addBook.classList.remove('appear');
  }

  showList() {
    addNew.classList.remove('linkcol');
    contact.classList.remove('linkcol');
    list.classList.add('linkcol');
    const tits = document.createElement('div');
    tits.innerText = this.author;
    // section
    contactInfo.classList.add('disappear');
    addBook.classList.add('disappear');
    displayArea.classList.add('appear');
    displayArea.classList.remove('disappear');
    contactInfo.classList.remove('appear');
    addBook.classList.remove('appear');
  }
}

export default Books;