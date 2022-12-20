/* todo.js */

/**
 * @typedef {{title: String, isCompleted: Boolean, icon: String, category: String, author: Object}} Todo
 *
 * @param {object} data
 */
export function createTodo(data) {
  const newTodo = {};
  const entries = Object.entries(data);
  while (entries.length) {
    const [key, value] = entries.pop();
    if (value != null && typeof value == "object") {
      for (let deepKey in value) {
        const newValue = data[key][deepKey];
        if (newTodo[key]) {
          newTodo[key][deepKey] = newValue;
        } else {
          newTodo[key] = { [deepKey]: newValue };
        }
      }
    } else {
      newTodo[key] = value;
    }
  }
  return newTodo;
}

/**
 * @param {Todo[]} todos
 * @param {Todo} todo
 */
export function addTodo(todos, todo) {
  todos.push(todo);
  return todos;
}

/**
 * @param {Todo[]} todos
 */
export function countTodos(todos) {
  const total = todos.length;
  return total;
}

/**
 * @param {Todo[]} todos
 */
export function firstTodoTitle(todos) {
  const firstTodos = todos[0].todoTitle;
  return firstTodos;
}

/**
 * @param {Todo[]} todos
 */
export function lastTodoTitle(todos) {
  const lastTodos = todos[todos.length - 1].todoTitle;
  return lastTodos;
}

/**
 * @param {Todo[]} todos
 */
export function exportTitles(todos) {
  const titles = todos.map(function (todo) {
    return todo.todoTitle;
  });
  return titles;
}
