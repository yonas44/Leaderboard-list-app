/* eslint-disable max-classes-per-file */
class Entry {
  constructor(name, score) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    this.name = name;
    this.score = score;
  }
}

class Lists {
  constructor() {
    this.store = [];
  }

  appendList(entry) {
    this.store.push(entry);
    return this.store;
  }
}

module.exports = { Entry, Lists };
