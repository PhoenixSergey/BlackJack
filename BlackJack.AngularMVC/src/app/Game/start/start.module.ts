import { NgModule } from '@angular/core';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from 'src/app/Game/start/start-component/start.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { SharedModule } from 'Shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        StartRoutingModule,
        DropDownsModule
    ],
    declarations: [StartComponent]
})
export class StartModule { }
