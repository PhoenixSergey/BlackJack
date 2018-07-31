import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentGameComponent } from 'src/app/Game/current-game/current-game-component/current-game.component';
const routes: Routes = [
    {
        path: '',
        component: CurrentGameComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentRoutingModule { }
