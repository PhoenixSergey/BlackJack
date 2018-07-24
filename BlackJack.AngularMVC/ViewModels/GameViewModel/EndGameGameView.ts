import { ResultEnumView } from "../EnumViewModel/ResultEnumView";
import { RoleEnumView } from "../EnumViewModel/RoleEnumView";
import { GameEnd } from "../EnumViewModel/GameEnd";

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