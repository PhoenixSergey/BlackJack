import { ResultEnumView } from "../EnumViewModel/ResultEnumView";
import { RoleEnumView } from "../EnumViewModel/RoleEnumView";
import { GameEnd } from "../EnumViewModel/GameEnd";

export class GameDetailsHistoryView {
    public playersList: Array<PlayerGameDetailsHistoryViewItem>;
    public dealerPlayer: PlayerGameDetailsHistoryViewItem;
    public checkEndGame: GameEnd;
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