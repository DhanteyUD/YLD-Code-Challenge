class Lazy {
  add(fn, ...args) {
    return this;
  }

  evaluate(value) {}
}

const computation = new Lazy();

computation.add(Math.sqrt);
computation.evaluate([1, 2, 3, 3]);
