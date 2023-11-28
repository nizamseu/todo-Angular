import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { TodosComponent } from './Components/todos/todos.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, TodosComponent, RouterModule],
})
export class AppComponent {
  title = 'my-app';

  name = 'Nizam';
  constructor() {}
}
