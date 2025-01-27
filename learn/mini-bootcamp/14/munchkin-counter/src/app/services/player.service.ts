import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private players = new BehaviorSubject<Player[]>([]);
  players$ = this.players.asObservable();
  private playersUrl = 'http://localhost:3000/api/players';

  constructor(private http: HttpClient) {
    this.loadPlayers();
  }

  private loadPlayers(): void {
    this.http.get<Player[]>(this.playersUrl).subscribe((players) => {
      this.players.next(players);
    });
  }

  private savePlayers(players: Player[]): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put(this.playersUrl, players, { headers }).subscribe();
  }

  addPlayer(player: Player): void {
    const currentPlayers = this.players.getValue();
    const updatedPlayers = [...currentPlayers, player];
    this.players.next(updatedPlayers);
    this.savePlayers(updatedPlayers);
  }

  updatePlayer(index: number, player: Player): void {
    const currentPlayers = this.players.getValue();
    currentPlayers[index] = player;
    this.players.next([...currentPlayers]);
    this.savePlayers(currentPlayers);
  }

  updatePlayers(players: Player[]): void {
    this.players.next([...players]);
    this.savePlayers(players);
  }

  removePlayer(index: number): void {
    const currentPlayers = this.players.getValue();
    currentPlayers.splice(index, 1);
    this.players.next([...currentPlayers]);
    this.savePlayers(currentPlayers);
  }
}