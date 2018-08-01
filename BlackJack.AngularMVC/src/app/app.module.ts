import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { HashLocationStrategy, LocationStrategy, CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GameService } from 'src/shared/services/game-service.service';
import { HistoryService } from 'src/shared/services/history.service';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,     
    ],
    imports: [
        BrowserModule,
        SharedModule,
        BrowserAnimationsModule,
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