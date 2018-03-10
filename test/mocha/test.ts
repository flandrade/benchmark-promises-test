import * as Promise from "bluebird";
import "mocha";

import { expect } from "../../config/init-mocha";
import scenario from "../../src/scenario-01";

describe("Scenario", function() {
  return runScenario(500);
});

function runScenario(times: number): void {
  const values = [...Array(times).keys()];
  values.map(value => {
    describe(`test with mocha #${value}`, function() {
      context("when all promises are resolved", function() {
        it("returns the values", function() {
          return expect(
            scenario(500)
          ).to.not.be.rejected;
        });
      });
    });
  });
}
