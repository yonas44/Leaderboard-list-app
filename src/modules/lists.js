/* eslint-disable max-classes-per-file */
class Entry {
  constructor(name, score) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    this.user = name;
    this.score = score;
  }
}

class Lists {
  constructor() {
    this.store = [];
  }
}

module.exports = { Entry, Lists };
