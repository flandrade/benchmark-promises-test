"use strict";

import * as Promise from "bluebird";

import scenario from "../../src/scenario-01";
import { expect } from "./init";

describe("Scenario", function() {
  return runScenario(200);
});

function runScenario(times: number): void {
  const values = [...Array(times).keys()];
  values.map(value => {
    describe(`test #${value}`, function() {
      context("when all promises are resolved", function() {
        it("returns the values", function() {
          return expect(
            scenario()
          ).to.not.be.rejected;
        });
      });
    });
  });
}
