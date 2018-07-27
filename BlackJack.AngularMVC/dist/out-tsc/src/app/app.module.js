"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var start_component_1 = require("./Game/start/start.component");
var kendo_angular_buttons_1 = require("@progress/kendo-angular-buttons");
var animations_1 = require("@angular/platform-browser/animations");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var game_service_service_1 = require("src/app/Game/game-service.service");
var history_service_1 = require("src/app/History/history.service");
var http_1 = require("@angular/common/http");
var current_game_component_1 = require("./Game/current-game/current-game.component");
var app_routing_module_1 = require(".//app-routing.module");
var end_game_component_1 = require("./Game/end-game/end-game.component");
var all_game_component_1 = require("src/app/History/all-game/all-game.component");
var game_details_component_1 = require("src/app/History/game-details/game-details.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                start_component_1.StartComponent,
                current_game_component_1.CurrentGameComponent,
                end_game_component_1.EndGameComponent,
                all_game_component_1.AllGameComponent,
                game_details_component_1.GameDetailsComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                kendo_angular_buttons_1.ButtonsModule,
                animations_1.BrowserAnimationsModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                game_service_service_1.GameService,
                history_service_1.HistoryService
            ],
            exports: [
                http_1.HttpClientModule
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map