import { taskFirst, taskNext } from './0-const-or-let';

test('taskFirst should return the correct string', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});

test('taskNext should return the correct string', () => {
  expect(taskNext()).toBe('But sometimes let is okay');
});
