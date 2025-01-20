import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: false,

  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  users = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 },
    { name: 'Alice Johnson', age: 35 },
  ];
}
