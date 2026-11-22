// Faster drop-in for makefun-site 1.0.0: run(input) is the same build, with the three local speed-ups.
// vendor/makefun-site/ carries make.fun's own code with its LICENSE and NOTICE (SOURCE.txt says what it derives from).

import * as lib from "./vendor/makefun-site/index.js";

const fn = lib["build"] ?? (lib.default != null && typeof lib.default["build"] === 'function' ? lib.default["build"].bind(lib.default) : undefined);
if (typeof fn !== 'function') throw new Error("makefun-site 1.0.0 exports no function build from index.js");

/** makefun-site 1.0.0's answer for one case's input. */
export function run(input) {
  return fn(input);
}
