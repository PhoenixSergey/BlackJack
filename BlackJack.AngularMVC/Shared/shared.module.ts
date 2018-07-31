import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ButtonsModule,
        FormsModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        ButtonsModule,
        FormsModule
    ]
})
export class SharedModule { }
