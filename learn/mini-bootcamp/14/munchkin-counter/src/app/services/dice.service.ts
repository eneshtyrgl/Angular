import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiceService {
  private diceResult = new BehaviorSubject<number>(0);
  diceResult$ = this.diceResult.asObservable();

  rollDice(): void {
    let counter = 0;
    const interval = setInterval(() => {
      const randomDice = Math.floor(Math.random() * 6) + 1;
      this.diceResult.next(randomDice);
      counter++;
      if (counter >= 10) {
        clearInterval(interval);
        const finalDice = Math.floor(Math.random() * 6) + 1;
        this.diceResult.next(finalDice);
      }
    }, 80);
  }
}
