import { Component } from '@angular/core';
import { Player } from 'src/app/Player';
import { PlayerService } from 'src/app/player.service';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css'],
})
export class PlayerAddComponent {
  formulario: any;
  erros: string = '';

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      classe: new FormControl(null),
      nivel: new FormControl(null),
      forca: new FormControl(null),
      velocidade: new FormControl(null),
      inteligencia: new FormControl(null),
      resistencia: new FormControl(null),
      vida: new FormControl(null),
      qntBoss: new FormControl(null),
    });
  }

  enviarFormulario(): void {
    let player: Player = this.formulario.value;
    this.erros = '';

    if (player.classe === null) {
      player.classe = '';
    }
    if (player.nivel === null) {
      player.nivel = 0;
    }
    if (player.forca === null) {
      player.forca = 0;
    }
    if (player.velocidade === null) {
      player.velocidade = 0;
    }
    if (player.inteligencia === null) {
      player.inteligencia = 0;
    }
    if (player.resistencia === null) {
      player.resistencia = 0;
    }
    if (player.vida === null) {
      player.vida = 0;
    }
    if (player.qntBoss === null) {
      player.qntBoss = 0;
    }
    this.playerService.cadastrar(player).subscribe(
      (result) => {
        alert('Player inserido com sucesso.');
        console.log(result);
      },
      (error) => {
        console.log(error);
        this.erros = error.error.mensagem;
      }
    );
  }
}
