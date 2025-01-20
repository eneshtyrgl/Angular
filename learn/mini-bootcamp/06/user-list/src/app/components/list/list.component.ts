import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  users = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Alice Johnson' },
  ];

  removeUser() {
    this.users.pop();
  }
}
