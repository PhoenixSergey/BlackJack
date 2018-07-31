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
var history_service_1 = require("src/app/History/history.service");
var router_1 = require("@angular/router");
var AllGameComponent = /** @class */ (function () {
    function AllGameComponent(historyService, route) {
        this.historyService = historyService;
        this.route = route;
        this.countBots = [1, 2, 3, 4, 5];
    }
    AllGameComponent.prototype.ngOnInit = function () {
        this.getAllGames();
    };
    AllGameComponent.prototype.getAllGames = function () {
        var _this = this;
        this.historyService.getAllGames()
            .subscribe(function (games) {
            _this.allgames = games;
        });
    };
    AllGameComponent.prototype.showDetails = function (gameId) {
        this.route.navigate(['allGames/gameDetails', gameId]);
    };
    AllGameComponent.prototype.startNewGame = function () {
        this.route.navigate(['/start']);
    };
    AllGameComponent = __decorate([
        core_1.Component({
            selector: 'app-all-game',
            templateUrl: './all-game.component.html',
            styleUrls: ['./all-game.component.css']
        }),
        __metadata("design:paramtypes", [history_service_1.HistoryService, router_1.Router])
    ], AllGameComponent);
    return AllGameComponent;
}());
exports.AllGameComponent = AllGameComponent;
//# sourceMappingURL=all-game.component.js.map