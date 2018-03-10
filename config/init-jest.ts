import * as chai from "chai";

declare var global: any;

const originalNot = Object.getOwnPropertyDescriptor((chai as any).Assertion.prototype, "not").get;

Object.defineProperty((chai as any).Assertion.prototype, "not", {
  get() {
    Object.assign(this, this.assignedNot);
    return originalNot.apply(this);
  },
  set(newNot) {
    this.assignedNot = newNot;
    return newNot;
  },
});

const originalExpect = global.expect;

global.expect = (actual: any) => {
  const originalMatchers = originalExpect(actual);
  const chaiMatchers = chai.expect(actual);

  const { assertionsMade } = originalExpect.getState();
  Object.defineProperty(chaiMatchers, "to", {
    get() {
      originalExpect.setState({ assertionsMade: assertionsMade + 1 });
      return chai.expect(actual);
    },
  });

  const combinedMatchers = Object.assign(chaiMatchers, originalMatchers);
  return combinedMatchers;
};

Object.keys(originalExpect).forEach(key => (global.expect[key] = originalExpect[key]));
