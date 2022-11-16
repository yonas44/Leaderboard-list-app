import './style.css';

const { Lists, Entry } = require('./modules/lists.js');
const { loadLists } = require('./modules/loadList.js');
const { pushTask } = require('./modules/pushTask.js');

const list = new Lists();

const form = document.querySelector('.input');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const entry = new Entry(name, score);
  pushTask(entry);
  setTimeout(() => {
    loadLists(list.store);
  }, 1000);
  form.reset();
});

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  loadLists(list.store);
});
