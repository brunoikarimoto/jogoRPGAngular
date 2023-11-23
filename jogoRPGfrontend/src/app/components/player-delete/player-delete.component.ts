import { Component } from '@angular/core';
import { Player } from 'src/app/Player';
import { PlayerService } from 'src/app/player.service';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css'],
})
export class PlayerDeleteComponent {
  formulario: any;
  erros: string = '';

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null),
    });
  }

  enviarFormulario(): void {
    let player: Player = this.formulario.value;
    this.erros = '';

    this.playerService.excluir(player.nome).subscribe(
      (result) => {
        alert('Player deletado com sucesso.');
        console.log(result);
      },
      (error) => {
        console.log(error);
        this.erros = error.error.mensagem;
      }
    );
  }
}
