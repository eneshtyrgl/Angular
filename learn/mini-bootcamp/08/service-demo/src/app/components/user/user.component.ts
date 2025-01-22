import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: { name: string, age: number }[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  addUser(name: string, age: number): void {
    this.userService.addUser(name, age);
    this.users = this.userService.getUsers();
  }
}
