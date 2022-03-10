class Lazy {
  constructor() {
    this.actions = [];
  }
  add(fn, ...input) {
    if (input.length === 0) {
      this.actions.push(fn);
      return this;
    }
    this.actions.push((a) => fn(...input, a));
    return this;
  }
  evaluate(target) {
    const result = target.map((val) => {
      return this.actions.reduce((acc, action) => {
        return action(acc);
      }, val);
    });
    return result;
  }
}
