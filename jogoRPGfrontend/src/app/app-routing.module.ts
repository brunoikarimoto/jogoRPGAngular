import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerAddComponent } from './components/player-add/player-add.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerUpdateComponent } from './components/player-update/player-update.component';
import { PlayerDeleteComponent } from './components/player-delete/player-delete.component';

const routes: Routes = [
  {
    path: 'adicionarPlayer',
    component: PlayerAddComponent,
  },
  {
    path: 'player',
    component: PlayerComponent,
  },
  {
    path: 'atualizarPlayer',
    component: PlayerUpdateComponent,
  },
  {
    path: 'deletarPlayer',
    component: PlayerDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
