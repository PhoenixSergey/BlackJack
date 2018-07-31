import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
//import { GridModule } from '@progress/kendo-angular-grid';
import { HashLocationStrategy, LocationStrategy, CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AppComponent } from './app.component';
import { GameService } from 'src/app/Game/game-service.service';
import { HistoryService } from 'src/app/History/history.service';
import { SharedModule } from 'Shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,     
    ],
    imports: [
        BrowserModule,
        SharedModule,
        BrowserAnimationsModule,
        DropDownsModule,
        AppRoutingModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        GameService,
        HistoryService
    ],
    exports: [
        HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule { }