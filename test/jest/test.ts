import * as Promise from "bluebird";
import "jest";

import scenario from "../../src/scenario-01";

describe("Scenario", () => {
  return runScenario(500);
});

function runScenario(times: number): void {
  const values = [...Array(times).keys()];
  values.map(value => {
    describe(`test with jest #${value}`, () => {
      describe("when all promises are resolved", () => {
        it("returns the values", () => {
          return expect(
            scenario(500)
          ).resolves.toContain(1);
        });
      });
    });
  });
}
