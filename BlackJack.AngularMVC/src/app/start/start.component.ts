import { Component, OnInit } from '@angular/core';
import { StartInfoGameView } from 'models/game-model/StartInfoGameView';
import { GameService } from 'src/app/game-service.service';
import { StartInfoGame } from 'models/game-model/gameStartInfo'
@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {


    public humanPlayers: string[]=[];
    public countBots: Array<number> = [1, 2, 3, 4, 5];
    constructor(private gameService: GameService) { }

    ngOnInit() {
        this.start();
    }

    start(): void {
        this.gameService.start()
            .subscribe(heroes => {
                for (var i = 0; i < heroes.humanPlayers.length; i++) {
                    this.humanPlayers[i] = heroes.humanPlayers[i].name
                }
            });
    }

    startInfoGame: StartInfoGame = new StartInfoGame();
    gameId: number;
    createGame(startInfoGame: StartInfoGame): number {
        this.gameService.createGame(startInfoGame)
            .subscribe(gameId => this.gameId = gameId);
        return this.gameId;

    }

}
