import { ResultEnumView } from "Shared/models/enum-model/ResultEnumView";
import { RoleEnumView } from "Shared/models/enum-model/RoleEnumView";
import { GameEnd } from "Shared/models/enum-model/GameEnd";

export class GameDetailsHistoryView {
    public playersList: Array<PlayerGameDetailsHistoryViewItem>;
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