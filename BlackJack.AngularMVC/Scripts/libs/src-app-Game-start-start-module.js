(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-game-start-start-module"],{

/***/ "./src/app/Game/start/start-component/start.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Game/start/start-component/start.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Game/start/start-component/start.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Game/start/start-component/start.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to the game</h1>\r\n<h4>Enter your name or select player</h4>\r\n<kendo-combobox [(ngModel)]=\"createGameGameView.ourPlayer\"\r\n                [data]=\"humanPlayers\"\r\n                [allowCustom]=\"true\">\r\n</kendo-combobox>\r\n<h4>Choose count bot-player</h4>\r\n<kendo-dropdownlist [data]=\"botCounts\"\r\n                    [value]=\"0\"\r\n                    [(ngModel)]=\"createGameGameView.botCounts\">\r\n</kendo-dropdownlist>\r\n<h4>and start game</h4>\r\n<button kendoButton (click)=\"createGame(createGameGameView)\">Start</button>\r\n"

/***/ }),

/***/ "./src/app/Game/start/start-component/start.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Game/start/start-component/start.component.ts ***!
  \***************************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_shared_services_game_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/services/game-service.service */ "./src/shared/services/game-service.service.ts");
/* harmony import */ var src_shared_models_game_model_createGameGameView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/models/game-model/createGameGameView */ "./src/shared/models/game-model/createGameGameView.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartComponent = /** @class */ (function () {
    function StartComponent(gameService, route) {
        this.gameService = gameService;
        this.route = route;
        this.humanPlayers = [];
        this.botCounts = [1, 2, 3, 4, 5];
        this.createGameGameView = new src_shared_models_game_model_createGameGameView__WEBPACK_IMPORTED_MODULE_2__["CreateGameGameView"]();
    }
    StartComponent.prototype.ngOnInit = function () {
        this.start();
    };
    StartComponent.prototype.start = function () {
        var _this = this;
        this.gameService.start()
            .subscribe(function (heroes) {
            for (var i = 0; i < heroes.humanPlayers.length; i++) {
                _this.humanPlayers[i] = heroes.humanPlayers[i].name;
            }
        });
    };
    StartComponent.prototype.createGame = function (createGameGameView) {
        var _this = this;
        this.gameService.createGame(createGameGameView).subscribe(function (result) {
            _this.gameId = result;
            console.log(_this.gameId);
            _this.route.navigate(['/currentGame', _this.gameId]);
            (function (error) { alert(error); });
        });
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/Game/start/start-component/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/Game/start/start-component/start.component.css")]
        }),
        __metadata("design:paramtypes", [src_shared_services_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/game/start/start-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/game/start/start-routing.module.ts ***!
  \****************************************************/
/*! exports provided: StartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartRoutingModule", function() { return StartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Game_start_start_component_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Game/start/start-component/start.component */ "./src/app/Game/start/start-component/start.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: src_app_Game_start_start_component_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"]
    }
];
var StartRoutingModule = /** @class */ (function () {
    function StartRoutingModule() {
    }
    StartRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StartRoutingModule);
    return StartRoutingModule;
}());



/***/ }),

/***/ "./src/app/game/start/start.module.ts":
/*!********************************************!*\
  !*** ./src/app/game/start/start.module.ts ***!
  \********************************************/
/*! exports provided: StartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartModule", function() { return StartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-routing.module */ "./src/app/game/start/start-routing.module.ts");
/* harmony import */ var src_app_Game_start_start_component_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Game/start/start-component/start.component */ "./src/app/Game/start/start-component/start.component.ts");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StartModule = /** @class */ (function () {
    function StartModule() {
    }
    StartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _start_routing_module__WEBPACK_IMPORTED_MODULE_1__["StartRoutingModule"],
            ],
            declarations: [src_app_Game_start_start_component_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"]]
        })
    ], StartModule);
    return StartModule;
}());



/***/ }),

/***/ "./src/shared/models/game-model/createGameGameView.ts":
/*!************************************************************!*\
  !*** ./src/shared/models/game-model/createGameGameView.ts ***!
  \************************************************************/
/*! exports provided: CreateGameGameView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGameGameView", function() { return CreateGameGameView; });
var CreateGameGameView = /** @class */ (function () {
    function CreateGameGameView() {
    }
    return CreateGameGameView;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-game-start-start-module.js.map