import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { TitleComponent } from './title/title.component';
import { TriesComponent } from './tries/tries.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    TitleComponent,
    TriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
