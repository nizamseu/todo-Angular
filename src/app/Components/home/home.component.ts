import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      home works!
    </p>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
name="Nizam"
constructor(){
  this.name="new Title"

  setTimeout(()=>{},2000)
}
}
