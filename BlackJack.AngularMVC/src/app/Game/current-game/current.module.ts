import { NgModule } from '@angular/core';
import { CurrentRoutingModule } from './current-routing.module';
import { CurrentGameComponent } from 'src/app/Game/current-game/current-game-component/current-game.component';
import { SharedModule } from 'Shared/shared.module'
@NgModule({
    imports: [
        SharedModule,
        CurrentRoutingModule,
    ],
    declarations: [CurrentGameComponent]
})
export class CurrentModule { }
