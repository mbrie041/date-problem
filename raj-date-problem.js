const min = 1;
const max = 10;
// const list = [[0, 11]];
// expected result = gaps []
// const list = [[0, 2]];
// expected result = gaps [3, 10]
// const list = [[4, 12]];
// expected result = gaps [1, 3]
// const list = [[4, 6]];
// expected result = gaps [[1, 3], [7-10]]
// const list = [
//   [3, 5],
//   [6, 8],
// ];
// expected result = gaps [[1,2], [9-10]]
// const list = [
//   [3, 5],
//   [7, 8],
// ];
// expected result = gaps [[1,2], [6,6], [9-10]]
// const list = [
//   [1, 7],
//   [2, 5],
//   [3, 8],
// ];
// expected result = gaps [[9-10]]
// const list = [
//   [3, 5],
//   [0, 11],
// ];
// expected result = gaps []
// const list = [
//   [2, 5],
//   [7, 9],
// ];
// expected result = gaps [day 1, day 6, day 10] = [[1,2], [6,7], [9,10]]?
function gapAnalysis(list, min, max) {
  let gapArray = [[min, max]];
  // do something
  list.forEach((item) => {
    const start = item[0];
    const end = item[1]; // add condition for when not applicable
    let updatedGapArray = [];
    let addAtIndex = -1;
    gapArray.forEach((gap) => {
      addAtIndex++;
      const first = gap[0];
      const last = gap[1];
      console.log("Start, End: ", start, ",", end);
      console.log("First, Last: ", first, ",", last);
      // scenario 1
      if (start > last) {
        updatedGapArray[addAtIndex] = [first, last];
        return;
      }
      // scenario 2
      if (start === first || start < first) {
        // check end against last
        // scenario 2.1
        if (end > last) {
          updatedGapArray[addAtIndex] = [];
          return;
        }
        // scenario 2.1
        if (end < last) {
          updatedGapArray[addAtIndex] = [end + 1, last];
          return;
        }
      }
      // scenario 3
      if (start > first) {
        updatedGapArray[addAtIndex] = [first, start - 1];
        // scenario 3.1
        if (end > last || end === last) {
          return;
        }
        // scenario 3.2
        if (end < last) {
          addAtIndex++;
          updatedGapArray[addAtIndex] = [end + 1, last];
          // updatedGapArray.splice(index,);
        }
      }
    });
    console.log("Update Gap Array at the end of loop: ", updatedGapArray);
    gapArray = [...updatedGapArray];
  });
  if (gapArray.flat().length === 0) return gapArray.flat();
  return gapArray;
}
const gaps = gapAnalysis(list, min, max);
console.log("List, Min, Max: ", list, ",", min, ",", max);
console.log("Gaps: ", gaps);
