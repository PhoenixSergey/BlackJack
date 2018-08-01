import { NgModule } from '@angular/core';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from 'src/app/Game/start/start-component/start.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        StartRoutingModule,
      ],
    declarations: [StartComponent]
})
export class StartModule { }
