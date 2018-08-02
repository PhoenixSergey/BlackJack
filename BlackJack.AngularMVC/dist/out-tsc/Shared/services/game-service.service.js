"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("src/environments/environment");
var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
        this.gameAPIControllerUrl = environment_1.environment.gameAPIControllerUrl;
    }
    GameService.prototype.start = function () {
        return this.http.get(this.gameAPIControllerUrl + "Start");
    };
    GameService.prototype.createGame = function (createGameGameView) {
        if (createGameGameView.ourPlayer == undefined) {
            createGameGameView.ourPlayer = "";
        }
        var body = { ourPlayer: createGameGameView.ourPlayer, botCounts: createGameGameView.botCounts };
        return this.http.post(this.gameAPIControllerUrl + "CreateGame", body);
    };
    GameService.prototype.currentGame = function (gameId) {
        return this.http.get(this.gameAPIControllerUrl + "CurrentGame/" + gameId);
    };
    GameService.prototype.nextRound = function (gameId) {
        return this.http.get(this.gameAPIControllerUrl + "NextRound/" + gameId);
    };
    GameService.prototype.endGame = function (gameId) {
        return this.http.get(this.gameAPIControllerUrl + "EndGame/" + gameId);
    };
    GameService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
//# sourceMappingURL=game-service.service.js.map