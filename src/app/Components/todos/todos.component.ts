import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todos } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
})
export class TodosComponent {
  todos: Todos[] | undefined;

  constructor() {
    this.todos = [
      {
        no: 1,
        title: 'Title',
        description: 'Description',
      },
      {
        no: 2,
        title: 'Title 2',
        description: 'Description 2',
      },
      {
        no: 3,
        title: 'Title 3',
        description: 'Description 3',
      },
    ];
  }
  todoDelete(todo: Todos) {
    const index: any = this.todos?.indexOf(todo);
    this.todos?.splice(index, 1);
    console.log('Clieked', todo);
  }
}
