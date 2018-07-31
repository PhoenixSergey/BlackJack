import { Component, OnInit } from '@angular/core';
import { AllGamesHistoryView } from 'Shared/models/history-model/AllGamesHistoryView';
import { HistoryService } from 'src/app/History/history.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-game',
  templateUrl: './all-game.component.html',
  styleUrls: ['./all-game.component.css']
})
export class AllGameComponent implements OnInit {

    constructor(private historyService: HistoryService, private route: Router) { }
    public countBots: Array<number> = [1, 2, 3, 4, 5];
    ngOnInit() {
        this.getAllGames();
    }
    public allgames: AllGamesHistoryView;
    getAllGames(): void {
        this.historyService.getAllGames()
            .subscribe(games => {
                this.allgames = games 
            });
    }
    showDetails(gameId: number) {
        this.route.navigate(['allGames/gameDetails', gameId])         
    }
    startNewGame() {
        this.route.navigate(['/start']);
    }
}
