import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryService } from 'src/shared/services/history.service';
import { GameDetailsHistoryView } from 'src/shared/models/history-model/GameDetailsHistoryView';
import { RoleEnumView } from 'src/shared/models/enum-model/RoleEnumView';
import { ResultEnumView } from 'src/shared/models/enum-model/ResultEnumView';
@Component({
    selector: 'app-game-details',
    templateUrl: './game-details.component.html',
    styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
    private gameId: number;
    constructor(private historyService: HistoryService, private activateRoute: ActivatedRoute, private route: Router) {
        this.gameId = this.activateRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.getGameDetails(this.gameId);
    }

    gameDetails: GameDetailsHistoryView;
    getGameDetails(gameId: number) {
        this.historyService.getGameDetails(gameId)
            .subscribe(gameDetails => {
                this.gameDetails = gameDetails
            });

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
