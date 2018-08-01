import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
    imports: [
        GridModule,
        DropDownsModule,
        CommonModule,
        ButtonsModule,
        FormsModule
    ],
    declarations: [],
    exports: [
        GridModule,
        DropDownsModule,
        CommonModule,
        ButtonsModule,
        FormsModule
    ]
})
export class SharedModule { }
