import './style.css';

const { Lists, Entry } = require('./modules/lists.js');
const { loadLists } = require('./modules/loadList.js');
const { pushTask } = require('./modules/pushTask.js');

const list = new Lists();

const form = document.querySelector('.input');
const message = document.querySelector('.message');
message.classList.toggle('on');
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

// Event listener for the refresh button

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  loadLists(list.store);
});

// Change background for form and dashborad section

const dashboardSection = document.querySelector('.dashboard');
const formSection = document.querySelector('.form');
dashboardSection.addEventListener('click', () => {
  dashboardSection.classList.add('bg');
  formSection.classList.remove('bg');
});
formSection.addEventListener('click', () => {
  dashboardSection.classList.remove('bg');
  formSection.classList.add('bg');
});

// Event listener for home button

const homeBG = document.querySelector('.home-bg');
const homeBtn = document.querySelector('#first-btn');
const title = document.querySelector('h1');
homeBtn.addEventListener('click', () => {
  title.classList.add('on');
  homeBG.classList.add('up');
  dashboardSection.classList.add('animate');
  formSection.classList.add('animate');
});