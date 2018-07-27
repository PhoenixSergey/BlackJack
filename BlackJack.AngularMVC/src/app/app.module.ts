import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { StartComponent } from './start/start.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GameService } from 'src/app/game-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrentGameComponent } from './current-game/current-game.component';
import { AppRoutingModule } from './/app-routing.module';
import { EndGameComponent } from './end-game/end-game.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        StartComponent,
        CurrentGameComponent,
        EndGameComponent,
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
        GameService
     
        // no need to place any providers due to the `providedIn` flag...
    ],
    exports: [
        HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule { }