"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var all_game_component_1 = require("src/app/History/all-game/all-game.component");
var game_details_component_1 = require("src/app/History/game-details/game-details.component");
var history_routing_module_1 = require("./history-routing.module");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var shared_module_1 = require("Shared/shared.module");
var HistoryModule = /** @class */ (function () {
    function HistoryModule() {
    }
    HistoryModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                history_routing_module_1.HistoryRoutingModule,
                kendo_angular_grid_1.GridModule
            ],
            declarations: [
                all_game_component_1.AllGameComponent,
                game_details_component_1.GameDetailsComponent
            ]
        })
    ], HistoryModule);
    return HistoryModule;
}());
exports.HistoryModule = HistoryModule;
//# sourceMappingURL=history.module.js.map