const { Entry, Lists } = require('./src/modules/lists.js');

describe('Add score', () => {
  it('Add_score_to_list', () => {
    const list = new Lists();
    const name = 'yonas';
    const score = 89;
    const testTry = new Entry(name, score);
    expect(list.appendList(testTry)).toEqual([{ name: 'Yonas', score: 89 }]);
  });
});
