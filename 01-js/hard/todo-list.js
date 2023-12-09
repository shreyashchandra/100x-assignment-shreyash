/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos
  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.result = [];
  }

  add(todo) {
    this.result.push(todo);
  }
  remove(i) {
    this.result.splice(i, 1);
  }
  update(i, todo) {
    if (i < this.result.length) {
      this.result[i] = todo;
    }
  }
  getAll() {
    return this.result;
  }
  get(i) {
    if (i >= this.result.length) {
      return null;
    }
    return this.result[i];
  }
  clear() {
    this.result = [];
  }
}

module.exports = Todo;
