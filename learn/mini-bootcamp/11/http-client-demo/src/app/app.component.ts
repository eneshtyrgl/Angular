import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-client-demo';
  data: any[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((response: any[]) => {
      this.data = response;
    });
  }
}
