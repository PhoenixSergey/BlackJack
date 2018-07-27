import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartInfoGameView } from 'models/game-model/StartInfoGameView';
import { GameService } from 'src/app/Game/game-service.service';
import { StartInfoGame } from 'models/game-model/gameStartInfo'
import { Router } from '@angular/router';
@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {


    public humanPlayers: string[] = [];
    public countBots: Array<number> = [1, 2, 3, 4, 5];
    constructor(private gameService: GameService, private route: Router) { }

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
    createGame(startInfoGame: StartInfoGame) {
        this.gameService.createGame(startInfoGame).subscribe(result => {

            this.gameId = result;
            console.log(this.gameId);
            this.route.navigate(['/currentGame',  this.gameId ])

        });

    }

}
