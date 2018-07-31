import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EndGameComponent } from 'src/app/Game/end-game/end-game-component/end-game.component';
const routes: Routes = [
    {
        path: '',
        component: EndGameComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EndRoutingModule { }
