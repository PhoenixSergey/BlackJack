import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartComponent } from './Game/start/start.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GameService } from 'src/app/Game/game-service.service';
import { HistoryService } from 'src/app/History/history.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrentGameComponent } from './Game/current-game/current-game.component';
import { AppRoutingModule } from './/app-routing.module';
import { EndGameComponent } from './Game/end-game/end-game.component';
import { AllGameComponent } from 'src/app/History/all-game/all-game.component';
import { GameDetailsComponent } from 'src/app/History/game-details/game-details.component';

@NgModule({
    declarations: [
        AppComponent,
        StartComponent,
        CurrentGameComponent,
        EndGameComponent,
        AllGameComponent,
        GameDetailsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ButtonsModule,
        BrowserAnimationsModule,
        DropDownsModule,
        AppRoutingModule
    ],
    providers: [
        GameService,
        HistoryService
    ],
    exports: [
        HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule { }