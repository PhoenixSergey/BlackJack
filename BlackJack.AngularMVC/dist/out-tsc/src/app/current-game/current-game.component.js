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
var CurrentGameComponent = /** @class */ (function () {
    function CurrentGameComponent() {
    }
    CurrentGameComponent.prototype.onButtonClick = function () {
        console.log('click');
    };
    CurrentGameComponent.prototype.ngOnInit = function () {
    };
    CurrentGameComponent = __decorate([
        core_1.Component({
            selector: 'app-current-game',
            templateUrl: './current-game.component.html',
            styleUrls: ['./current-game.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], CurrentGameComponent);
    return CurrentGameComponent;
}());
exports.CurrentGameComponent = CurrentGameComponent;
//# sourceMappingURL=current-game.component.js.map