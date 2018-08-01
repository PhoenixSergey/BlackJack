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
var router_1 = require("@angular/router");
var game_service_service_1 = require("src/shared/services/game-service.service");
var RoleEnumView_1 = require("src/shared/models/enum-model/RoleEnumView");
var ResultEnumView_1 = require("src/shared/models/enum-model/ResultEnumView");
var GameEndView_1 = require("src/shared/models/enum-model/GameEndView");
var CurrentGameComponent = /** @class */ (function () {
    function CurrentGameComponent(gameService, activateRoute, route) {
        this.gameService = gameService;
        this.activateRoute = activateRoute;
        this.route = route;
        this.gameId = this.activateRoute.snapshot.params['id'];
    }
    CurrentGameComponent.prototype.ngOnInit = function () {
        this.createFirstRound(this.gameId);
    };
    CurrentGameComponent.prototype.createFirstRound = function (gameId) {
        var _this = this;
        this.gameService.currentGame(gameId)
            .subscribe(function (currentGame) {
            _this.currentGame = currentGame;
            if (currentGame.checkEndGame == GameEndView_1.GameEndView.EndGame) {
                _this.endGame();
            }
        });
    };
    CurrentGameComponent.prototype.createNextRound = function () {
        var _this = this;
        this.gameService.nextRound(this.gameId)
            .subscribe(function (nextRound) {
            _this.currentGame = nextRound;
            if (nextRound.checkEndGame == GameEndView_1.GameEndView.EndGame) {
                _this.endGame();
            }
        });
    };
    CurrentGameComponent.prototype.endGame = function () {
        this.route.navigate(['/endGame', this.gameId]);
    };
    CurrentGameComponent.prototype.getTypeRole = function (id) {
        return RoleEnumView_1.RoleEnumView[id];
    };
    CurrentGameComponent.prototype.getTypeResult = function (id) {
        return ResultEnumView_1.ResultEnumView[id];
    };
    CurrentGameComponent.prototype.onButtonClick = function () {
        console.log('click');
    };
    CurrentGameComponent = __decorate([
        core_1.Component({
            selector: 'app-current-game',
            templateUrl: './current-game.component.html',
            styleUrls: ['./current-game.component.css']
        }),
        __metadata("design:paramtypes", [game_service_service_1.GameService, router_1.ActivatedRoute, router_1.Router])
    ], CurrentGameComponent);
    return CurrentGameComponent;
}());
exports.CurrentGameComponent = CurrentGameComponent;
//# sourceMappingURL=current-game.component.js.map