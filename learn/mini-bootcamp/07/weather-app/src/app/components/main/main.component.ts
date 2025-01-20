import { Component } from '@angular/core';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-main',
  standalone: false,
  
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  cityName: string = '';
  cityInfo: any = null;
  cityNotFound: boolean = false;

  constructor(private cityService: CityService) {}

  ngOnInit(): void {}

  searchCity(): void {
    this.cityService.getCities().subscribe(cities => {
      this.cityInfo = cities.find((city: any) => city.name.toLowerCase() === this.cityName.toLowerCase());
      this.cityNotFound = !this.cityInfo;
    });
  }
}