import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllGamesHistoryView } from 'src/shared/models/history-model/AllGamesHistoryView';
import { GameDetailsHistoryView } from 'src/shared/models/history-model/GameDetailsHistoryView';
import { environment } from 'src/environments/environment';

@Injectable()
export class HistoryService {

    private historyAPIControllerUrl = environment.historyAPIControllerUrl;
    constructor(private http: HttpClient) { }

    public getAllGames(): Observable<AllGamesHistoryView> {
        return this.http.get<AllGamesHistoryView>(this.historyAPIControllerUrl + "AllGames");
    }

    public getGameDetails(gameId: number): Observable<GameDetailsHistoryView> {
        return this.http.get<GameDetailsHistoryView>(this.historyAPIControllerUrl + "GameDetails/" + gameId);
    }
    
}
