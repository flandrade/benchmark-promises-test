"use strict";

import * as Promise from "bluebird";

export default function(): Promise<number[]> {
  const numPromises: number[] = Array(100).fill(1);
  const promises: Array<Promise<number>> = numPromises.map(num => generate(num));
  return Promise.all(promises);
}

function generate(value: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    if (value === 1) {
      return resolve(1);
    }
    return reject(0);
  });
}
