import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartInfoGameView } from 'src/shared/models/game-model/StartInfoGameView';
import { GameService } from 'src/shared/services/game-service.service';
import { CreateGameGameView } from 'src/shared/models/game-model/createGameGameView'
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {


    public humanPlayers: string[] = [];
    public botCounts: Array<number> = [1, 2, 3, 4, 5];
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

    createGameGameView: CreateGameGameView = new CreateGameGameView();
    gameId: number;
    createGame(createGameGameView: CreateGameGameView) {
        this.gameService.createGame(createGameGameView).subscribe(result => {

            this.gameId = result;
            console.log(this.gameId);
            this.route.navigate(['/currentGame', this.gameId])
            error => { alert(error) }
        });

    }

}
