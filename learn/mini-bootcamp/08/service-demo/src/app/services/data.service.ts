import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = [];

  constructor() { 
    this.data = ['Item 1', 'Item 2', 'Item 3'];
  }

  getData(): string[] {
    return this.data;
  }

  addItem(item: string): void {
    this.data.push(item);
  }
}
