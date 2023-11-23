import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { PlayerService } from './player.service';
import { QuestService } from './quest.service';
import { PlayerAddComponent } from './components/player-add/player-add.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerUpdateComponent } from './components/player-update/player-update.component';
import { PlayerDeleteComponent } from './components/player-delete/player-delete.component';

@NgModule({
  declarations: [AppComponent, PlayerAddComponent, PlayerComponent, PlayerUpdateComponent, PlayerDeleteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule, PlayerService, QuestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
