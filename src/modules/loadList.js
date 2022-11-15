function loadLists(lists) {
  const scoreHolder = document.querySelector('.score-holder');
  while (scoreHolder.hasChildNodes()) {
    scoreHolder.removeChild(scoreHolder.firstChild);
  }
  lists.map((list) => {
    const tableRow = document.createElement('tr');
    const tableData = document.createElement('td');
    tableData.innerHTML = `${list.name}: ${list.score}`;
    tableRow.appendChild(tableData);
    scoreHolder.appendChild(tableRow);
    return lists;
  });
}

exports.loadLists = loadLists;
