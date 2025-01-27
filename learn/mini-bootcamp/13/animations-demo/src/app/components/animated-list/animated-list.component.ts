import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-animated-list',
  imports: [CommonModule],
  templateUrl: './animated-list.component.html',
  styleUrl: './animated-list.component.css',
  animations: [
    trigger('listAnimation', [
      state('start', style({ opacity: 1, transform: 'translateX(0)' })),
      state('end', style({ opacity: 0, transform: 'translateX(100%)' })),
      transition('void => start', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('0.5s ease-in'),
      ]),
      transition('start => end', [
        animate(
          '0.5s ease-out',
          style({ opacity: 0, transform: 'translateX(100%)' })
        ),
      ]),
      transition('end => start', [
        animate(
          '0.5s ease-in',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ],
})
export class AnimatedListComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  removeItem() {
    this.items.pop();
  }
}
