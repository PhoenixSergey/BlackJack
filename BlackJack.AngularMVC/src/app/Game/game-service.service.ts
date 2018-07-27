import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StartInfoGameView } from 'models/game-model/StartInfoGameView';
import { CurrentGameGameView } from 'models/game-model/CurrentGameGameView';
import { EndGameGameView } from 'models/game-model/EndGameGameView';
import { StartInfoGame } from 'models/game-model/gameStartInfo'
@Injectable()

export class GameService {

    public url: string = "http://localhost:58816/api/Game/"
    constructor(private http: HttpClient) { }

    public start(): Observable<StartInfoGameView> {
        return this.http.get<StartInfoGameView>(this.url+"Start");
    }

    public createGame(startInfoGame: StartInfoGame): Observable<number> {
        const body = { ourPlayers: startInfoGame.ourPlayers, countBot: startInfoGame.countBot };
        return this.http.post<number>(this.url + "CreateGame", body);
    }

    public currentGame(gameId: number): Observable<CurrentGameGameView> {
        return this.http.get<CurrentGameGameView>(this.url + "CurrentGame/" + gameId);
    }

    public nextRound(gameId: number): Observable<CurrentGameGameView> {
        return this.http.get<CurrentGameGameView>(this.url + "NextRound/" + gameId);
    }

    public endGame(gameId: number): Observable<EndGameGameView> {
        return this.http.get<EndGameGameView>(this.url + "EndGame/" + gameId);
    }
}
