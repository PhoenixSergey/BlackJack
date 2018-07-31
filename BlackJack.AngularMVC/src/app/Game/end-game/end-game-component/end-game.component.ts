import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/Game/game-service.service';
import { Subscription } from 'rxjs';
import { RoleEnumView } from 'Shared/models/enum-model/RoleEnumView';
import { ResultEnumView } from 'Shared/models/enum-model/ResultEnumView';
import { EndGameGameView } from 'Shared/models/game-model/EndGameGameView';


@Component({
    selector: 'app-end-game',
    templateUrl: './end-game.component.html',
    styleUrls: ['./end-game.component.css']
})
export class EndGameComponent implements OnInit {

    private gameId: number;
    constructor(private gameService: GameService, private activateRoute: ActivatedRoute, private route: Router) {
        this.gameId = this.activateRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.endGame(this.gameId);
    }
    endGameInfo: EndGameGameView;

    endGame(gameId:number) {
        this.gameService.endGame(gameId)
            .subscribe(endGame =>
                this.endGameInfo = endGame
            );
    }

    startNewGame() {
        this.route.navigate(['/start']); 
    }

    openHistory() {
        this.route.navigate(['/allGames']);
    }

    getTypeRole(id: number): any {
        return RoleEnumView[id];
    }
    getTypeResult(id: number): any {
        return ResultEnumView[id];
    }
}
