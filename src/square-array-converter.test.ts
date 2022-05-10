import bigArrayOfNumbers from "./big-array-of-numbers";
import convertToSquareArray from "./square-array-converter";

test("validates a basic example", () => {
  expect(convertToSquareArray([-3, 0, 2])).toEqual([0, 4, 9]);
});

test("validates test case one", () => {
  expect(convertToSquareArray([1, 2, 3, 5, 6, 8, 9])).toEqual([1, 4, 9, 25, 36, 64, 81]);
});

test("validates test case two", () => {
  expect(convertToSquareArray([-2, -1])).toEqual([1, 4]);
});

test("validates test case three", () => {
  expect(convertToSquareArray([-10, -5, 0, 5, 10])).toEqual([0, 25, 25, 100, 100]);
});

test("just comparing a simple sorting and the current algorithm", () => {
  const numbers = bigArrayOfNumbers;
  numbers.sort((a, b) => a - b);

  console.log("Before simple conversion:", new Date());
  simpleConversion(numbers);
  console.log("After simple conversion:", new Date());

  convertToSquareArray(numbers);
  console.log("After square array conversion:", new Date());
});

const simpleConversion = (numbers: number[]) =>
  numbers.map(number => number * number)
    .sort((first, second) => first - second);
