import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data',
  standalone: false,
  
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  data: string[];

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }

  addItem(newItem: string): void {
    this.dataService.addItem(newItem);
    this.data = this.dataService.getData()
  }
}
