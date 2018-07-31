import { NgModule } from '@angular/core';
import { EndGameComponent } from 'src/app/Game/end-game/end-game-component/end-game.component';
import { EndRoutingModule } from './end-routing.module';

import { SharedModule } from 'Shared/shared.module'
@NgModule({
    imports: [
        SharedModule,
        EndRoutingModule
    ],
    declarations: [EndGameComponent]
})
export class EndModule { }
