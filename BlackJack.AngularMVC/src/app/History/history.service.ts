import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllGamesHistoryView } from 'models/history-model/AllGamesHistoryView';
import { GameDetailsHistoryView } from 'models/history-model/GameDetailsHistoryView';


@Injectable()
export class HistoryService {

    public url: string = "http://localhost:58816/api/History/"
    constructor(private http: HttpClient) { }

    public getAllGames(): Observable<AllGamesHistoryView> {
        return this.http.get<AllGamesHistoryView>(this.url + "AllGames");
    }

    
}
