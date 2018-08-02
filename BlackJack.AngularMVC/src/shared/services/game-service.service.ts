import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StartInfoGameView } from 'src/shared/models/game-model/StartInfoGameView';
import { CurrentGameGameView } from 'src/shared/models/game-model/CurrentGameGameView';
import { EndGameGameView } from 'src/shared/models/game-model/EndGameGameView';
import { CreateGameGameView } from 'src/shared/models/game-model/createGameGameView'
import { environment } from 'src/environments/environment';
@Injectable()

export class GameService {

    private gameAPIControllerUrl = environment.gameAPIControllerUrl;
    constructor(private http: HttpClient) { }

    public start(): Observable<StartInfoGameView> {
        return this.http.get<StartInfoGameView>(this.gameAPIControllerUrl+"Start");
    }

    public createGame(createGameGameView: CreateGameGameView): Observable<number> {
        if (createGameGameView.ourPlayer == undefined) {
            createGameGameView.ourPlayer = "";
        }
        const body = { ourPlayer: createGameGameView.ourPlayer, botCounts: createGameGameView.botCounts };
        return this.http.post<number>(this.gameAPIControllerUrl + "CreateGame", body);
    }

    public currentGame(gameId: number): Observable<CurrentGameGameView> {
        return this.http.get<CurrentGameGameView>(this.gameAPIControllerUrl + "CurrentGame/" + gameId);
    }

    public nextRound(gameId: number): Observable<CurrentGameGameView> {
        return this.http.get<CurrentGameGameView>(this.gameAPIControllerUrl + "NextRound/" + gameId);
    }

    public endGame(gameId: number): Observable<EndGameGameView> {
        return this.http.get<EndGameGameView>(this.gameAPIControllerUrl + "EndGame/" + gameId);
    }
}
