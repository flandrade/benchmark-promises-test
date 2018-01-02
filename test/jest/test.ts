"use strict";

import * as Promise from "bluebird";
import "jest";

import scenario from "../../src/scenario-01";

test("Scenario", function() {
  return runScenario(200);
});

function runScenario(times: number): void {
  const values = [...Array(times).keys()];
  values.map(value => {
    describe(`test with jest #${value}`, function() {
      describe("when all promises are resolved", function() {
        it("returns the values", function() {
          return expect(
            scenario()
          ).resolves.toBe(1);
        });
      });
    });
  });
}
