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
var history_service_1 = require("src/shared/services/history.service");
var RoleEnumView_1 = require("src/shared/models/enum-model/RoleEnumView");
var ResultEnumView_1 = require("src/shared/models/enum-model/ResultEnumView");
var GameDetailsComponent = /** @class */ (function () {
    function GameDetailsComponent(historyService, activateRoute, route) {
        this.historyService = historyService;
        this.activateRoute = activateRoute;
        this.route = route;
        this.gameId = this.activateRoute.snapshot.params['id'];
    }
    GameDetailsComponent.prototype.ngOnInit = function () {
        this.getGameDetails(this.gameId);
    };
    GameDetailsComponent.prototype.getGameDetails = function (gameId) {
        var _this = this;
        this.historyService.getGameDetails(gameId)
            .subscribe(function (gameDetails) {
            _this.gameDetails = gameDetails;
        });
    };
    GameDetailsComponent.prototype.openHistory = function () {
        this.route.navigate(['/allGames']);
    };
    GameDetailsComponent.prototype.getTypeRole = function (id) {
        return RoleEnumView_1.RoleEnumView[id];
    };
    GameDetailsComponent.prototype.getTypeResult = function (id) {
        return ResultEnumView_1.ResultEnumView[id];
    };
    GameDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-game-details',
            templateUrl: './game-details.component.html',
            styleUrls: ['./game-details.component.css']
        }),
        __metadata("design:paramtypes", [history_service_1.HistoryService, router_1.ActivatedRoute, router_1.Router])
    ], GameDetailsComponent);
    return GameDetailsComponent;
}());
exports.GameDetailsComponent = GameDetailsComponent;
//# sourceMappingURL=game-details.component.js.map