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
//import { FormsModule } from '@angular/forms';
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require(".//app-routing.module");
//import { GridModule } from '@progress/kendo-angular-grid';
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var app_component_1 = require("./app.component");
var game_service_service_1 = require("src/app/Game/game-service.service");
var history_service_1 = require("src/app/History/history.service");
var shared_module_1 = require("Shared/shared.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                shared_module_1.SharedModule,
                animations_1.BrowserAnimationsModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                app_routing_module_1.AppRoutingModule,
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
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