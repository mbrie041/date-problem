const gapAnalysis = function (list, min, max) {
  const gapArray = [];
  const listValues = list.map(([minVal, maxVal]) => rangeMaker(minVal, maxVal));
  const listedRange = [];
  const gapArrayValues = rangeMaker(min, max);

  //check new range for duplication and push values into a new array
  listValues.forEach((nestedArray) => {
    nestedArray.forEach((element) => {
      if (!listedRange.includes(element)) {
        listedRange.push(element);
      }
    });
  });
  console.log(listedRange);

  //check if gapArrayValues are included in listedRange
  gapArrayValues.forEach((element, index) => {
    if (!listedRange.includes(element)) {
      gapArray.push(element);
    }
  });

  //turn the new array into an array of nested arrays

  console.log(gapArray);
  return gapArray;
};

const rangeMaker = function (min, max) {
  const output = [];

  for (let x = min; x <= max; x++) {
    output.push(x);
  }
  return output;
};

module.exports = {
  gapAnalysis,
  rangeMaker,
};
const list = [
  [3, 5],
  [6, 8],
];
const min = 1;
const max = 10;
gapAnalysis(list, min, max);
// rangeMaker(1, 3);
