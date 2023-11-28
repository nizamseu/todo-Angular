import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todos } from '../../Todo';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo: any;
  @Output() todoDelete: EventEmitter<Todos> = new EventEmitter();

  handleDelete(item: any) {
    this.todoDelete.emit(this.todo);
  }
}
