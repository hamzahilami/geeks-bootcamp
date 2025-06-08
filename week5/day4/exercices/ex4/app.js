import { TodoList } from './todo.js';

const todoList = new TodoList();
todoList.addTask("Learn JavaScript modules");
todoList.addTask("Build a todo app");
todoList.addTask("Test the app");

todoList.markComplete(1);

todoList.listTasks();
