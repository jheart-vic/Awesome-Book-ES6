const navlists = Array.from(document.querySelectorAll('.ul')[0].children);
const addBook = document.querySelector('.addBook');
const contact = document.querySelector('.contact');
const show = document.querySelector('.show');
const display = document.querySelector('.display-text');
const text = document.querySelector('h2');

export default function navActions(key) {
  switch (key) {
    case 'text':
      addBook.classList.add('hidden');
      contact.classList.add('hidden');
      display.classList.remove('hidden');
      show.classList.remove('hidden');
      break;

    case 'my-list':
      addBook.classList.add('hidden');
      contact.classList.add('hidden');
      show.classList.remove('hidden');
      display.classList.remove('hidden');
      break;

    case 'add-new':
      show.classList.add('hidden');
      display.classList.add('hidden');
      addBook.classList.remove('hidden');
      contact.classList.add('hidden');
      break;

    case 'contact-li':
      show.classList.add('hidden');
      addBook.classList.add('hidden');
      display.classList.add('hidden');
      contact.classList.remove('hidden');
      break;

    default:
      break;
  }
}

navlists.forEach((item) => {
  item.addEventListener('click', (e) => {
    navActions(e.target.parentElement.id);
  });
});

text.addEventListener('click', (e) => {
  navActions(e.target.id);
});