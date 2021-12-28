import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { ConnexionComponent } from './board/connexion/connexion.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  routes: Routes = [
    { path: 'Boardy', component: BoardComponent },
    { path: 'Boardy/Connexion', component: ConnexionComponent },
  ];
}
