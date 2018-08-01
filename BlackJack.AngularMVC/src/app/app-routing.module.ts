import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        loadChildren: 'src/app/game/start/start.module#StartModule'
        
    },
    {
        path: 'currentGame/:id',
        loadChildren: 'src/app/game/current-game/current.module#CurrentModule'
    },
    {
        path: 'endGame/:id',
        loadChildren: 'src/app/game/end-game/end.module#EndModule'
    },
    {
        path: 'allGames',
        loadChildren: 'src/app/history/history.module#HistoryModule'
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
