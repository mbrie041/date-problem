const gapAnalysis = function (list, min, max) {
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
  // console.log(listedRange);

  //check if gapArrayValues are included in listedRange
  const gapArray = gapArrayValues.filter(
    (element) => !listedRange.includes(element)
  );

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
//given an array of increasing values
//construct an array of ranges
const rangeFinder = function (values) {
  const sortedArray = values.slice().sort(function (a, b) {
    return a - b;
  });
  let startingValue = sortedArray[0];
  let endingValue = sortedArray[values.length - 1];
  const returnedArray = [];
  let previousElement;

  sortedArray.forEach((element) => {
    if (element > previousElement + 1) {
      returnedArray.push([startingValue, previousElement]);
      startingValue = element;
      previousElement = element;
    } else if (element === endingValue) {
      returnedArray.push([startingValue, element]);
    } else {
      previousElement = element;
    }
  });

  if (returnedArray.length === 1) {
    const newReturnedArray = returnedArray[0];
    return newReturnedArray;
  } else return returnedArray;
};

module.exports = {
  gapAnalysis,
  rangeMaker,
  rangeFinder,
};
const list = [
  [3, 5],
  [6, 8],
];
const min = 1;
const max = 20;
gapAnalysis(list, min, max);
// rangeMaker(1, 3);
