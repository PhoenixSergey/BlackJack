import { Component, OnInit } from '@angular/core';
import { AllGamesHistoryView } from 'src/shared/models/history-model/AllGamesHistoryView';
import { HistoryService } from 'src/shared/services/history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-game',
  templateUrl: './all-game.component.html',
  styleUrls: ['./all-game.component.css']
})
export class AllGameComponent implements OnInit {
    constructor(private historyService: HistoryService, private route: Router) { }
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
