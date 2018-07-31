"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var current_routing_module_1 = require("./current-routing.module");
var current_game_component_1 = require("src/app/Game/current-game/current-game-component/current-game.component");
var shared_module_1 = require("Shared/shared.module");
var CurrentModule = /** @class */ (function () {
    function CurrentModule() {
    }
    CurrentModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                current_routing_module_1.CurrentRoutingModule,
            ],
            declarations: [current_game_component_1.CurrentGameComponent]
        })
    ], CurrentModule);
    return CurrentModule;
}());
exports.CurrentModule = CurrentModule;
//# sourceMappingURL=current.module.js.map