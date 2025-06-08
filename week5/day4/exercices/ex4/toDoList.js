export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    this.tasks.push({ description, completed: false });
  }

  markComplete(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
    }
  }

  listTasks() {
    this.tasks.forEach((task, i) => {
      console.log(`${i + 1}. [${task.completed ? 'x' : ' '}] ${task.description}`);
    });
  }
}
