import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todos } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-todos',
  standalone: true,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
})
export class TodosComponent {
  locatItem: string | null | undefined;
  todos: Todos[] | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.locatItem = localStorage.getItem('todos');
      if (this.locatItem === null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.locatItem);
      }
    }
  }
  todoDelete(todo: Todos) {
    const index: any = this.todos?.indexOf(todo);
    this.todos?.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  todoAdd(todo: Todos) {
    if (this.todos) {
      this.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
