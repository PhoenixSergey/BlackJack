import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentGameGameView } from 'src/shared/models/game-model/CurrentGameGameView';
import { GameService } from 'src/shared/services/game-service.service';
import { Subscription } from 'rxjs';
import { RoleEnumView } from 'src/shared/models/enum-model/RoleEnumView';
import { ResultEnumView } from 'src/shared/models/enum-model/ResultEnumView';
import { GameEndView } from 'src/shared/models/enum-model/GameEndView';


@Component({
    selector: 'app-current-game',
    templateUrl: './current-game.component.html',
    styleUrls: ['./current-game.component.css']
})
export class CurrentGameComponent implements OnInit {
    private gameId: number;
    constructor(private gameService: GameService, private activateRoute: ActivatedRoute, private route: Router) {
        this.gameId = this.activateRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.createFirstRound(this.gameId);
    }


    currentGame: CurrentGameGameView;
    createFirstRound(gameId: number) {
        this.gameService.currentGame(gameId)
            .subscribe(currentGame => {
                this.currentGame = currentGame
                if (currentGame.checkEndGame == GameEndView.EndGame) {
                    this.endGame();
                }
            });

    }

    createNextRound() {
        this.gameService.nextRound(this.gameId)
            .subscribe(nextRound => {
                this.currentGame = nextRound
                if (nextRound.checkEndGame == GameEndView.EndGame) {
                    this.endGame();
                }
            });
    }

    endGame() {
                this.route.navigate(['/endGame', this.gameId])        
    }

    getTypeRole(id: number): any
    {
        return RoleEnumView[id];
    }
    getTypeResult (id: number): any {
        return ResultEnumView[id];
    }
    onButtonClick() {
        console.log('click');
    }
}
