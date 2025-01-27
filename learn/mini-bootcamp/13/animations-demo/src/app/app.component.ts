import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimatedListComponent } from './components/animated-list/animated-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnimatedListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'animations-demo';
}
