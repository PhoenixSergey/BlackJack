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
        loadChildren: 'src/app/Game/start/start.module#StartModule'
        
    },
    {
        path: 'currentGame/:id',
        loadChildren: 'src/app/Game/current-game/current.module#CurrentModule'
    },
    {
        path: 'endGame/:id',
        loadChildren: 'src/app/Game/end-game/end.module#EndModule'
    },
    {
        path: 'allGames',
        loadChildren: 'src/app/History/history.module#HistoryModule'
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
