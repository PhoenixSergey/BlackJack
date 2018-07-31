"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var start_routing_module_1 = require("./start-routing.module");
var start_component_1 = require("src/app/Game/start/start-component/start.component");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var shared_module_1 = require("Shared/shared.module");
var StartModule = /** @class */ (function () {
    function StartModule() {
    }
    StartModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                start_routing_module_1.StartRoutingModule,
                kendo_angular_dropdowns_1.DropDownsModule
            ],
            declarations: [start_component_1.StartComponent]
        })
    ], StartModule);
    return StartModule;
}());
exports.StartModule = StartModule;
//# sourceMappingURL=start.module.js.map