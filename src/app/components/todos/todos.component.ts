import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
    this.updateLocalStorage();
  }

  deleteTodo(id: number) {
    if (confirm("Are you sure you want to delete this todo?")) {
      this.todos = this.todos.filter((v, i) => i !== id);
      this.updateLocalStorage();
    }
  }

  addTodo() {
    if (this.inputTodo.length) {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
      this.updateLocalStorage();
    }
    this.inputTodo = "";
  }

  updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
