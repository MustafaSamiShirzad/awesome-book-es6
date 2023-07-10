import { Book } from './modules/book.js';
import { changeDisplayedPage } from './modules/changeDisplayedPage.js';
import { redIndicator } from './modules/redIndicator.js';
import { updateTime } from './modules/updateTime.js';

const addButton = document.querySelector('.add-button');
const navTime = document.querySelector('.date');

const bookObject = new Book();
addButton.addEventListener('click', () => {
  bookObject.addBook();
});
window.onload = bookObject.bookArray.forEach(bookObject.displayBookDetails);
const list = document.querySelector('#list');
const add = document.querySelector('#add');
const contact = document.querySelector('#contact');
const bookList = document.querySelector('.book-list');
const addBooks = document.querySelector('.add-books');
const contactInformation = document.querySelector('.contact-information');
list.addEventListener('click', () => {
  changeDisplayedPage(bookList, addBooks, contactInformation);
  redIndicator(list, add, contact);
});
add.addEventListener('click', () => {
  changeDisplayedPage(addBooks, bookList, contactInformation);
  redIndicator(add, list, contact);
});
contact.addEventListener('click', () => {
  changeDisplayedPage(contactInformation, addBooks, bookList);
  redIndicator(contact, list, add);
});

setInterval(() => {
  (updateTime(navTime));
}, 1000);
