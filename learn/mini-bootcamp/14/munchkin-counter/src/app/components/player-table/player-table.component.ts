import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../services/player.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-player-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PlayerTableComponent {
  players$;
  private draggedIndex: number | null = null;

  constructor(private playerService: PlayerService) {
    this.players$ = this.playerService.players$;
  }

  onDragStart(event: DragEvent, index: number): void {
    this.draggedIndex = index;
    if (event.dataTransfer) {
      event.dataTransfer.setData('text/plain', index.toString());
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent, dropIndex: number): void {
    event.preventDefault();
    if (this.draggedIndex !== null) {
      const players = this.playerService['players'].getValue();
      const draggedPlayer = players[this.draggedIndex];
      players.splice(this.draggedIndex, 1);
      players.splice(dropIndex, 0, draggedPlayer);
      this.playerService.updatePlayers(players);
      this.draggedIndex = null;
    }
  }

  toggleGender(index: number): void {
    const players = this.playerService['players'].getValue();
    const player = { ...players[index] };
    player.gender = player.gender === 'Male' ? 'Female' : 'Male';
    this.playerService.updatePlayer(index, player);
  }

  editLevel(index: number): void {
    const players = this.playerService['players'].getValue();
    const player = { ...players[index] };
    const newLevel = prompt('Enter new level (1-10):', player.level.toString());
    if (newLevel) {
      const level = parseInt(newLevel);
      if (level >= 1 && level <= 10) {
        player.level = level;
        player.power = level + player.gear;
        this.playerService.updatePlayer(index, player);
      }
    }
  }

  editGear(index: number): void {
    const players = this.playerService['players'].getValue();
    const player = { ...players[index] };
    const newGear = prompt('Enter new gear (0-30):', player.gear.toString());
    if (newGear) {
      const gear = parseInt(newGear);
      if (gear >= 0 && gear <= 30) {
        player.gear = gear;
        player.power = player.level + gear;
        this.playerService.updatePlayer(index, player);
      }
    }
  }

  removePlayer(index: number): void {
    this.playerService.removePlayer(index);
  }

  incrementWins(index: number): void {
    const players = this.playerService['players'].getValue();
    const player = { ...players[index] };
    player.wins++;
    this.playerService.updatePlayer(index, player);
  }

  changeLevel(event: WheelEvent, index: number): void {
    const players = this.playerService['players'].getValue();
    const player = { ...players[index] };
    const delta = event.deltaY < 0 ? 1 : -1;
    const newLevel = player.level + delta;
    if (newLevel >= 1 && newLevel <= 10) {
      player.level = newLevel;
      player.power = player.level + player.gear;
      this.playerService.updatePlayer(index, player);
    }
  }

  changeGear(event: WheelEvent, index: number): void {
    const players = this.playerService['players'].getValue();
    const player = { ...players[index] };
    const delta = event.deltaY < 0 ? 1 : -1;
    const newGear = player.gear + delta;
    if (newGear >= 0 && newGear <= 30) {
      player.gear = newGear;
      player.power = player.level + player.gear;
      this.playerService.updatePlayer(index, player);
    }
  }

  changeWins(event: WheelEvent, index: number): void {
    const players = this.playerService['players'].getValue();
    const player = { ...players[index] };
    const delta = event.deltaY < 0 ? 1 : -1;
    const newWins = player.wins + delta;
    if (newWins >= 0) {
      player.wins = newWins;
      this.playerService.updatePlayer(index, player);
    }
  }
}
