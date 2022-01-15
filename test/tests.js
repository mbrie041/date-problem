const assert = require("chai").assert;
const expect = require("chai").expect;
const gapAnalysis = require("../date-problem").gapAnalysis;
const rangeMaker = require("../date-problem").rangeMaker;
const rangeFinder = require("../date-problem").rangeFinder;

// const list = [
//   [3, 5],
//   [6, 8],
// ];
// const min = 1;
// const max = 10;
// expected result = gaps [[1,2], [9-10]]

// const list = [[1,7], [2,5], [3,8]]
// expected result = gaps [[9-10]]
// const list = [[0,11]]
// expected result = gaps []
// const list = [[3,5], [0,11]]
// expected result = gaps []
// const list = [[2,5], [7,9]]
// expected result = gaps [day 1, day 6, day 10] = [[1,2], [6,7], [9,10]]?

describe("date problem", function () {
  // it("should return an array", function () {
  //   const list = [
  //     [3, 5],
  //     [6, 8],
  //   ];
  //   const min = 1;
  //   const max = 10;
  //   const result = gapAnalysis(list, min, max);
  //   assert.typeOf(result, "array");
  // });

  // it("should return an array of all numbers between min and max", function () {
  //   const min = 1;
  //   const max = 3;
  //   const expectedResult = [1, 2, 3];
  //   const result = rangeMaker(min, max);
  //   expect(expectedResult).to.eql(result);
  // });

  // it("should return an array of a single value when give that as a range", function () {
  //   const min = 1;
  //   const max = 1;
  //   const expectedResult = [1];
  //   const result = rangeMaker(min, max);
  //   expect(expectedResult).to.eql(result);
  // });

  // it("should return an array with the gaps from the given list", function () {
  //   const list = [
  //     [1, 7],
  //     [2, 5],
  //     [3, 8],
  //   ];

  //   const min = 1;
  //   const max = 10;

  //   const expectedResult = [[9, 10]];
  //   const result = gapAnalysis(list, min, max);
  //   expect(expectedResult).to.eql(result);
  // });

  // it("should return an array with the gaps from the given list", function () {
  //   const list = [
  //     [3, 5],
  //     [6, 8],
  //   ];
  //   const min = 1;
  //   const max = 10;
  //   const expectedResult = [
  //     [1, 2],
  //     [9, 10],
  //   ];
  //   const result = gapAnalysis(list, min, max);
  //   expect(expectedResult).to.eql(result);
  // });

  it("rangeFinder should return an array", function () {
    const values = [1, 2, 3, 4, 5, 6];
    const result = rangeFinder(values);
    assert.typeOf(result, "array");
  });

  it("rangeFinder should return an array of a range given an array of increasing values", function () {
    const values = [1, 2, 3, 4, 5, 6];
    const result = rangeFinder(values);
    const expectedResult = [1, 6];
    expect(expectedResult).to.eql(result);
  });

  it("rangeFinder should return an array of multiple ranges given an array of increasing values and a gap", function () {
    const values = [1, 2, 4, 5, 6];
    const result = rangeFinder(values);
    const expectedResult = [
      [1, 2],
      [4, 6],
    ];
    expect(expectedResult).to.eql(result);
  });

  it("rangeFinder should return an array of multiple ranges given an array of increasing values and a gap", function () {
    const values = [1, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const result = rangeFinder(values);
    const expectedResult = [
      [1, 2],
      [9, 20],
    ];
    expect(expectedResult).to.eql(result);
  });
});
