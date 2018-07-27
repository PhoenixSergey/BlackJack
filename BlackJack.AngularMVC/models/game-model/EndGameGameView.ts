import { ResultEnumView } from "models/enum-model/ResultEnumView";
import { RoleEnumView } from "models/enum-model/RoleEnumView";
import { GameEnd } from "models/enum-model/GameEnd";

export class EndGameGameView {
    public playersList: Array<PlayerEndGameGameViewItem>;
    public dealerPlayer: PlayerEndGameGameViewItem;
    public checkEndGame: GameEnd;
    public gameId: number;
}

export class PlayerEndGameGameViewItem {
    public id: number;
    public name: string;
    public cardSum: number;
    public result: ResultEnumView;
    public role: RoleEnumView;
    public playerCards: Array<CardEndGameGameViewItem>;
}

export class CardEndGameGameViewItem {
    public id: number;
    public name: string;
    public value: number;
    public suit: string;
}