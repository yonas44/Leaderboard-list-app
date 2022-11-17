const loadLists = async (lists) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/654ILmSsTWImQipsiZEo/scores')
    .then((res) => res.json())
    .then((data) => {
      lists = data.result;
      return lists;
    });

  const listSection = document.querySelector('.lists');
  listSection.classList.add('on');
  const message = document.querySelector('.message');
  message.classList.remove('on');
  const scoreHolder = document.querySelector('.score-holder');
  while (scoreHolder.hasChildNodes()) {
    scoreHolder.removeChild(scoreHolder.firstChild);
  }
  lists.map((list) => {
    const tableRow = document.createElement('tr');
    const tableData = document.createElement('td');
    tableData.innerHTML = `${list.user}: ${list.score}`;
    tableRow.appendChild(tableData);
    scoreHolder.appendChild(tableRow);
    return lists;
  });
};

exports.loadLists = loadLists;
