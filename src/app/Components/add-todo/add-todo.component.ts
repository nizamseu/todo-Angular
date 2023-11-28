import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Todos } from '../../Todo';
@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  title: any;
  description: any;
  @Output() todoAdd: EventEmitter<Todos> = new EventEmitter();
  handleSubmit() {
    const todo = {
      no: 8,
      title: this.title,
      description: this.description,
    };
    this.todoAdd.emit(todo);
  }
}
