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
var game_service_service_1 = require("src/app/game-service.service");
var RoleEnumView_1 = require("models/enum-model/RoleEnumView");
var ResultEnumView_1 = require("models/enum-model/ResultEnumView");
var EndGameComponent = /** @class */ (function () {
    function EndGameComponent(gameService, activateRoute, route) {
        this.gameService = gameService;
        this.activateRoute = activateRoute;
        this.route = route;
        this.gameId = this.activateRoute.snapshot.params['id'];
    }
    EndGameComponent.prototype.ngOnInit = function () {
        this.endGame(this.gameId);
    };
    EndGameComponent.prototype.endGame = function (gameId) {
        var _this = this;
        this.gameService.endGame(gameId)
            .subscribe(function (endGame) {
            return _this.endGameInfo = endGame;
        });
    };
    EndGameComponent.prototype.startNewGame = function () {
        this.route.navigate(['/start']);
    };
    EndGameComponent.prototype.getTypeRole = function (id) {
        return RoleEnumView_1.RoleEnumView[id];
    };
    EndGameComponent.prototype.getTypeResult = function (id) {
        return ResultEnumView_1.ResultEnumView[id];
    };
    EndGameComponent = __decorate([
        core_1.Component({
            selector: 'app-end-game',
            templateUrl: './end-game.component.html',
            styleUrls: ['./end-game.component.css']
        }),
        __metadata("design:paramtypes", [game_service_service_1.GameService, router_1.ActivatedRoute, router_1.Router])
    ], EndGameComponent);
    return EndGameComponent;
}());
exports.EndGameComponent = EndGameComponent;
//# sourceMappingURL=end-game.component.js.map