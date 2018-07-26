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
var game_service_service_1 = require("src/app/game-service.service");
var gameStartInfo_1 = require("models/game-model/gameStartInfo");
var StartComponent = /** @class */ (function () {
    function StartComponent(gameService) {
        this.gameService = gameService;
        this.humanPlayers = [];
        this.countBots = [1, 2, 3, 4, 5];
        this.startInfoGame = new gameStartInfo_1.StartInfoGame();
    }
    StartComponent.prototype.ngOnInit = function () {
        this.start();
    };
    StartComponent.prototype.start = function () {
        var _this = this;
        this.gameService.start()
            .subscribe(function (heroes) {
            for (var i = 0; i < heroes.humanPlayers.length; i++) {
                _this.humanPlayers[i] = heroes.humanPlayers[i].name;
            }
        });
    };
    StartComponent.prototype.createGame = function (startInfoGame) {
        var _this = this;
        this.gameService.createGame(startInfoGame)
            .subscribe(function (gameId) { return _this.gameId = gameId; });
        return this.gameId;
    };
    StartComponent = __decorate([
        core_1.Component({
            selector: 'app-start',
            templateUrl: './start.component.html',
            styleUrls: ['./start.component.css']
        }),
        __metadata("design:paramtypes", [game_service_service_1.GameService])
    ], StartComponent);
    return StartComponent;
}());
exports.StartComponent = StartComponent;
//# sourceMappingURL=start.component.js.map