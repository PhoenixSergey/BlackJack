import { ResultEnumView } from "src/shared/models/enum-model/ResultEnumView";
import { RoleEnumView } from "src/shared/models/enum-model/RoleEnumView";
import { GameEndView } from "src/shared/models/enum-model/GameEndView";

export class GameDetailsHistoryView {
    public players: Array<PlayerGameDetailsHistoryViewItem>;
    public dealerPlayer: PlayerGameDetailsHistoryViewItem;
    public gameId: number;
}

export class PlayerGameDetailsHistoryViewItem {
    public id: number;
    public name: string;
    public cardSum: number;
    public result: ResultEnumView;
    public role: RoleEnumView;
    public playerCards: Array<CardGameDetailsHistoryViewItem>;
}

export class CardGameDetailsHistoryViewItem {
    public id: number;
    public name: string;
    public value: number;
    public suit: string;
}