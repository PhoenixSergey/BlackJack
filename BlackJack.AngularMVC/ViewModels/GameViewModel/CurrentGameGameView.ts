import { ResultEnumView } from "../EnumViewModel/ResultEnumView";
import { RoleEnumView } from "../EnumViewModel/RoleEnumView";
import { GameEnd } from "../EnumViewModel/GameEnd";

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