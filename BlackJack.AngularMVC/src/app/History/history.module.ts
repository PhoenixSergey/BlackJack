import { NgModule } from '@angular/core';
import { AllGameComponent } from 'src/app/History/all-game/all-game.component';
import { GameDetailsComponent } from 'src/app/History/game-details/game-details.component';
import { HistoryRoutingModule } from './history-routing.module';
import { SharedModule } from 'src/shared/shared.module';
@NgModule({
    imports: [
        SharedModule,
        HistoryRoutingModule,
    ],
    declarations: [
        AllGameComponent,
        GameDetailsComponent
    ]
})
export class HistoryModule { }
