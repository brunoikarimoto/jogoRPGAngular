import { Component } from '@angular/core';
import { Player } from 'src/app/Player';
import { PlayerService } from 'src/app/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  lista: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.listar().subscribe((result) => {
      this.lista = result;
    });
  }
}
