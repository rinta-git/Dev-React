const { default: sum } = require("../sum");

test("sum function should calculate sum of two numbers", () => {
  const result = sum(5, 8);
  expect(result).toBe(13);
});
