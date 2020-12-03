import { Unqueue } from "./";
test("create object", () => {
  const queue = new Unqueue();
  expect(queue).toBeDefined();
});
