import { NgModule } from '@angular/core';
import { AllGameComponent } from 'src/app/History/all-game/all-game.component';
import { GameDetailsComponent } from 'src/app/History/game-details/game-details.component';
import { HistoryRoutingModule } from './history-routing.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { SharedModule } from 'Shared/shared.module';
@NgModule({
    imports: [
        SharedModule,
        HistoryRoutingModule,
        GridModule
    ],
    declarations: [
        AllGameComponent,
        GameDetailsComponent
    ]
})
export class HistoryModule { }
