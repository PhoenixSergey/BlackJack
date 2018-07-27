import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { StartComponent } from 'src/app/Game/start/start.component';
import { CurrentGameComponent } from 'src/app/Game/current-game/current-game.component';
import { EndGameComponent } from 'src/app/Game/end-game/end-game.component';
import { AllGameComponent } from 'src/app/History/all-game/all-game.component';
import { GameDetailsComponent } from 'src/app/History/game-details/game-details.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: StartComponent
    },
    {
        path: 'currentGame/:id',
        component: CurrentGameComponent
    },
    {
        path: 'endGame/:id',
        component: EndGameComponent
    },
    {
        path: 'allGame',
        component: AllGameComponent
    },   
    {
        path: 'gameDetails/:id',
        component: GameDetailsComponent
    }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
