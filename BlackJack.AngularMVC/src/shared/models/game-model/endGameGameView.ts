import { ResultEnumView } from "src/shared/models/enum-model/ResultEnumView";
import { RoleEnumView } from "src/shared/models/enum-model/RoleEnumView";
import { GameEndView } from "src/shared/models/enum-model/GameEndView";

export class EndGameGameView {
    public players: Array<PlayerEndGameGameViewItem>;
    public dealerPlayer: PlayerEndGameGameViewItem;
    public checkEndGame: GameEndView;
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