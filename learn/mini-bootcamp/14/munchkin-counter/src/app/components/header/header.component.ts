import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceService } from '../../services/dice.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  diceResult$;

  constructor(private diceService: DiceService) {
    this.diceResult$ = this.diceService.diceResult$;
  }

  rollDice(): void {
    this.diceService.rollDice();
  }
}
