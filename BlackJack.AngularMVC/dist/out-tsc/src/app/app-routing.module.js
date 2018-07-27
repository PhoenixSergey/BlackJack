"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var start_component_1 = require("src/app/start/start.component");
var current_game_component_1 = require("src/app/current-game/current-game.component");
var end_game_component_1 = require("src/app/end-game/end-game.component");
var routes = [
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: start_component_1.StartComponent
    },
    {
        path: 'currentGame/:id',
        component: current_game_component_1.CurrentGameComponent
    },
    {
        path: 'endGame/:id',
        component: end_game_component_1.EndGameComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forRoot(routes)
            ],
            declarations: [],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map