"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var game_details_component_1 = require("src/app/History/game-details/game-details.component");
var all_game_component_1 = require("src/app/History/all-game/all-game.component");
var routes = [
    {
        path: '',
        component: all_game_component_1.AllGameComponent
    },
    {
        path: 'gameDetails/:id',
        component: game_details_component_1.GameDetailsComponent
    },
];
var HistoryRoutingModule = /** @class */ (function () {
    function HistoryRoutingModule() {
    }
    HistoryRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], HistoryRoutingModule);
    return HistoryRoutingModule;
}());
exports.HistoryRoutingModule = HistoryRoutingModule;
//# sourceMappingURL=history-routing.module.js.map