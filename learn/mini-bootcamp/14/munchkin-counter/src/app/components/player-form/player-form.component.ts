import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../../services/player.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-player-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {
  playerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService
  ) {
    this.playerForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      color: ['#FFFFFF']
    });
  }

  onSubmit(): void {
    if (this.playerForm.valid) {
      const newPlayer = {
        ...this.playerForm.value,
        level: 1,
        gear: 0,
        power: 1,
        wins: 0
      };
      this.playerService.addPlayer(newPlayer);
      this.playerForm.reset();
    }
  }
}