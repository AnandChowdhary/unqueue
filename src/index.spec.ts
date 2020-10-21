import { Unqueue } from "./";
test("create object", () => {
  const queue = new Unqueue();
  expect(queue).toBeDefined();
});

test("add a task", () => {
  const queue = new Unqueue();
  expect(queue.getPendingTasks().length).toBe(0);
  queue.add(async () => {});
  expect(queue.running).toBeTruthy();
});
