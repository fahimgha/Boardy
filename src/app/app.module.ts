import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { ConnexionComponent } from './board/connexion/connexion.component';

@NgModule({
  declarations: [AppComponent, ConnexionComponent],
  imports: [BrowserModule, AppRoutingModule, BoardModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
