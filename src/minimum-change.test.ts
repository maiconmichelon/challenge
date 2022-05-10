import getMinimumChange from "./minimum-change";

test("validates a basic example", () => {
  expect(getMinimumChange([1, 2, 5])).toBe(4);
});

test("validates test case one", () => {
  expect(getMinimumChange([5, 7, 1, 1, 2, 3, 22])).toBe(20);
});

test("validates test case two", () => {
  expect(getMinimumChange([1, 1, 1, 1, 1])).toBe(6);
});

test("validates test case three", () => {
  expect(getMinimumChange([1, 1, 1, 1, 5, 10, 15, 20, 100])).toBe(55);
});
