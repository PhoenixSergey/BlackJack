import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StartInfoGameView } from 'models/game-model/StartInfoGameView';
import { CurrentGameGameView } from 'models/game-model/CurrentGameGameView';
import { EndGameGameView } from 'models/game-model/EndGameGameView';
import { StartInfoGame } from 'models/game-model/gameStartInfo'

@Injectable()
export class HistoryService {

  constructor() { }
}
