'use strict';

module.exports = (totalSetSize, sampleSize) => {
  // build totalSet => array of integers from 0 to totalSetSize
  const totalSet = [];
  for (let n = 0; n < totalSetSize; n++) {
    totalSet.push(n);
  }

  const lastSliceOfTotalSet = totalSet.slice(totalSet.length-sampleSize+1, totalSet.length).toString();
  const highVal = totalSet[totalSet.length-1];
  const results = [];

  let changeIdx;
  let build;
  let firstIdx = 0;


  while (firstIdx <= totalSet.length-sampleSize) {
    build = totalSet.slice(firstIdx, firstIdx+sampleSize); // set/reset build
    results.push(build.slice());
    changeIdx = sampleSize-1; // set/reset changeIdx
    buildCycle();
    firstIdx++;
  }

  return results;


  function bumpLeftOfChangeIdx() {
    const buildCopy = build.slice();
    for (var x = changeIdx-1; x > 0; x--) {
      buildCopy[x] = buildCopy[x] + 1;
      results.push(buildCopy.slice());
    }
  }

  function bumpAtChangeIdx() {
    build[changeIdx] = build[changeIdx] + 1;
    results.push(build.slice());
  }

  function buildCycle() {
    // we're building up the last (sampleSize-1) digits of `build` until they match the last (sampleSize-1) digits of totalSet
    const lastSliceOfBuild = build.slice(1).toString();
    const lastSlicesMatch = lastSliceOfBuild === lastSliceOfTotalSet; // ex (7C5): "2,3,4,5,6"

    // if last slices match then we're ready to increment firstIdx
    if (!lastSlicesMatch) {
      bumpAtChangeIdx();

      // for i = 1 and greater, build[i] should never exceed build[i+1]-1 (if build[i+1] exists) or highVal
      const buildIdxLimit = build[changeIdx + 1] ? (build[changeIdx + 1] - 1) : highVal;
      const shouldDecChangeIdx = build[changeIdx] === buildIdxLimit;

      if (shouldDecChangeIdx) {
        changeIdx--;
      } else {
        bumpLeftOfChangeIdx();
      }

      // we've either decremented changeIdx or bumpedLeft
      buildCycle();
    }
  }
}
