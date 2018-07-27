import { ResultEnumView } from "models/enum-model/ResultEnumView";
import { RoleEnumView } from "models/enum-model/RoleEnumView";
import { GameEnd } from "models/enum-model/GameEnd";

export class CurrentGameGameView {
    public playersList: Array<PlayerCurrentGameGameViewItem>;
    public dealerPlayer: PlayerCurrentGameGameViewItem;
    public checkEndGame: GameEnd;
    public gameId: number;
}

export class PlayerCurrentGameGameViewItem {
    public id: number;
    public name: string;
    public cardSum: number;
    public result: ResultEnumView;
    public role: RoleEnumView;
    public playerCards: Array<CardCurrentGameGameViewItem>;
}

export class CardCurrentGameGameViewItem {
    public id: number;
    public name: string;
    public value: number;
    public suit: string;
}