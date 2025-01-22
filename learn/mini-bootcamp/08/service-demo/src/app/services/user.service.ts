import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: { name: string, age: number }[] = [];

  constructor() { 
    this.users = [
      { name: 'User 1', age: 20 },
      { name: 'User 2', age: 25 },
      { name: 'User 3', age: 30 }
    ]
  }

  getUsers(): { name: string, age: number }[] {
    return this.users;
  }

  addUser(name: string, age: number): void {
    this.users.push({ name, age });
  }
}
