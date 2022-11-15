import './style.css';

const { Lists, Entry } = require('./modules/lists.js');
const { loadLists } = require('./modules/loadList.js');

const list = new Lists();

const form = document.querySelector('.input');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const entry = new Entry(name, score);
  list.appendList(entry);
  loadLists(list.store);
});

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  list.store = [];
  loadLists(list.store);
});
