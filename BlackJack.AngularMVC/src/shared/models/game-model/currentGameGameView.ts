import { ResultEnumView } from "src/shared/models/enum-model/ResultEnumView";
import { RoleEnumView } from "src/shared/models/enum-model/RoleEnumView";
import { GameEndView } from "src/shared/models/enum-model/GameEndView";

export class CurrentGameGameView {
    public players: Array<PlayerCurrentGameGameViewItem>;
    public dealerPlayer: PlayerCurrentGameGameViewItem;
    public checkEndGame: GameEndView;
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