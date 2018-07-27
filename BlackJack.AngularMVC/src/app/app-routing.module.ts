import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { StartComponent } from 'src/app/start/start.component';
import { CurrentGameComponent } from 'src/app/current-game/current-game.component';
import { EndGameComponent } from 'src/app/end-game/end-game.component';

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
