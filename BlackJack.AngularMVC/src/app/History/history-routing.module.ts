import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameDetailsComponent } from 'src/app/History/game-details/game-details.component';
import { AllGameComponent } from 'src/app/History/all-game/all-game.component';

const routes: Routes = [
    {
        path: '',
        component: AllGameComponent
    },
    {
        path: 'gameDetails/:id',
        component: GameDetailsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
