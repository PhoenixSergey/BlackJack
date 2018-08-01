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
var game_service_service_1 = require("src/shared/services/game-service.service");
var createGameGameView_1 = require("src/shared/models/game-model/createGameGameView");
var router_1 = require("@angular/router");
var StartComponent = /** @class */ (function () {
    function StartComponent(gameService, route) {
        this.gameService = gameService;
        this.route = route;
        this.humanPlayers = [];
        this.botCounts = [1, 2, 3, 4, 5];
        this.createGameGameView = new createGameGameView_1.CreateGameGameView();
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
    StartComponent.prototype.createGame = function (createGameGameView) {
        var _this = this;
        this.gameService.createGame(createGameGameView).subscribe(function (result) {
            _this.gameId = result;
            console.log(_this.gameId);
            _this.route.navigate(['/currentGame', _this.gameId]);
            (function (error) { alert(error); });
        });
    };
    StartComponent = __decorate([
        core_1.Component({
            selector: 'app-start',
            templateUrl: './start.component.html',
            styleUrls: ['./start.component.css']
        }),
        __metadata("design:paramtypes", [game_service_service_1.GameService, router_1.Router])
    ], StartComponent);
    return StartComponent;
}());
exports.StartComponent = StartComponent;
//# sourceMappingURL=start.component.js.map