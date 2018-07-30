(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./models/enum-model/GameEnd.ts":
/*!**************************************!*\
  !*** ./models/enum-model/GameEnd.ts ***!
  \**************************************/
/*! exports provided: GameEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEnd", function() { return GameEnd; });
var GameEnd;
(function (GameEnd) {
    GameEnd[GameEnd["None"] = 0] = "None";
    GameEnd[GameEnd["EndGame"] = 1] = "EndGame";
    GameEnd[GameEnd["ContinueGame"] = 2] = "ContinueGame";
})(GameEnd || (GameEnd = {}));


/***/ }),

/***/ "./models/enum-model/ResultEnumView.ts":
/*!*********************************************!*\
  !*** ./models/enum-model/ResultEnumView.ts ***!
  \*********************************************/
/*! exports provided: ResultEnumView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultEnumView", function() { return ResultEnumView; });
var ResultEnumView;
(function (ResultEnumView) {
    ResultEnumView[ResultEnumView["None"] = 0] = "None";
    ResultEnumView[ResultEnumView["InGame"] = 1] = "InGame";
    ResultEnumView[ResultEnumView["Winner"] = 2] = "Winner";
    ResultEnumView[ResultEnumView["Looser"] = 3] = "Looser";
    ResultEnumView[ResultEnumView["Draw"] = 4] = "Draw";
    ResultEnumView[ResultEnumView["BlackJack"] = 5] = "BlackJack";
})(ResultEnumView || (ResultEnumView = {}));


/***/ }),

/***/ "./models/enum-model/RoleEnumView.ts":
/*!*******************************************!*\
  !*** ./models/enum-model/RoleEnumView.ts ***!
  \*******************************************/
/*! exports provided: RoleEnumView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleEnumView", function() { return RoleEnumView; });
var RoleEnumView;
(function (RoleEnumView) {
    RoleEnumView[RoleEnumView["None"] = 0] = "None";
    RoleEnumView[RoleEnumView["Dealer"] = 1] = "Dealer";
    RoleEnumView[RoleEnumView["Bot"] = 2] = "Bot";
    RoleEnumView[RoleEnumView["Human"] = 3] = "Human";
})(RoleEnumView || (RoleEnumView = {}));


/***/ }),

/***/ "./models/game-model/gameStartInfo.ts":
/*!********************************************!*\
  !*** ./models/game-model/gameStartInfo.ts ***!
  \********************************************/
/*! exports provided: StartInfoGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartInfoGame", function() { return StartInfoGame; });
var StartInfoGame = /** @class */ (function () {
    function StartInfoGame() {
    }
    return StartInfoGame;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Game/current-game/current-game.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Game/current-game/current-game.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table1 {\r\n    font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", Sans-Serif;\r\n    width: 1000px;\r\n    font-size: 14px;\r\n    border-radius: 10px;\r\n    border-spacing: 0;\r\n    text-align: center;\r\n    height: 50px;\r\n    background-color: #222;\r\n}\r\n\r\n    .table1 th {\r\n        background: #222;\r\n        color: white;\r\n        height: 50px;\r\n        text-shadow: 0 1px 1px #9e6868;\r\n        padding: 10px 20px;\r\n    }\r\n\r\n    .table1 th, td {\r\n        border-style: solid;\r\n        border-width: 0 1px 1px 0;\r\n        border-color: white;\r\n    }\r\n\r\n    .table1 th:first-child, td:first-child {\r\n            text-align: left;\r\n        }\r\n\r\n    .table1 th:first-child {\r\n            border-top-left-radius: 10px;\r\n        }\r\n\r\n    .table1 th:last-child {\r\n            border-top-right-radius: 10px;\r\n            border-right: none;\r\n        }\r\n\r\n    .table1 td {\r\n        padding: 10px 20px;\r\n        background: #6be0e0;\r\n    }\r\n\r\n    .table1 tr:last-child td:first-child {\r\n        border-radius: 0 0 0 10px;\r\n    }\r\n\r\n    .table1 tr:last-child td:last-child {\r\n        border-radius: 0 0 10px 0;\r\n    }\r\n\r\n    .table1 tr td:last-child {\r\n        border-right: none;\r\n    }\r\n"

/***/ }),

/***/ "./src/app/Game/current-game/current-game.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Game/current-game/current-game.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Game number {{gameId}}</h4>\r\n<table class=\"table1\">\r\n    <tr><th>Name </th><th>Role </th><th>Cards </th><th>Total points </th><th>Status </th></tr>\r\n    <tr *ngFor=\"let player of currentGame.playersList\">\r\n        <td>{{player.name}}</td>\r\n        <td>{{getTypeRole(player.role)}}</td>\r\n        <td> \r\n            <div *ngFor=\"let card of player.playerCards\">\r\n                {{card.name}} {{card.suit}} {{card.value}}\r\n            </div>\r\n            <br />\r\n        </td>\r\n        <td>\r\n            {{player.cardSum}}\r\n        </td>\r\n        <td>\r\n            {{getTypeResult(player.result)}}\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>{{currentGame.dealerPlayer.name}}</td>\r\n        <td>{{getTypeRole(currentGame.dealerPlayer.role)}}</td>\r\n        <td> \r\n            <div *ngFor=\"let card of currentGame.dealerPlayer.playerCards\">\r\n                {{card.name}} {{card.suit}} {{card.value}}\r\n            </div>\r\n            <br />\r\n        </td>\r\n        <td>\r\n            {{currentGame.dealerPlayer.cardSum}}\r\n        </td>\r\n        <td>\r\n            -\r\n        </td>\r\n    </tr>\r\n</table>\r\n<br>\r\n<br />\r\n<button kendoButton (click)=\"createNextRound()\">Take more</button>\r\n<br />\r\n<br />\r\n<button kendoButton (click)=\"endGame()\">Enough</button>"

/***/ }),

/***/ "./src/app/Game/current-game/current-game.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Game/current-game/current-game.component.ts ***!
  \*************************************************************/
/*! exports provided: CurrentGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentGameComponent", function() { return CurrentGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Game_game_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Game/game-service.service */ "./src/app/Game/game-service.service.ts");
/* harmony import */ var models_enum_model_RoleEnumView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! models/enum-model/RoleEnumView */ "./models/enum-model/RoleEnumView.ts");
/* harmony import */ var models_enum_model_ResultEnumView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! models/enum-model/ResultEnumView */ "./models/enum-model/ResultEnumView.ts");
/* harmony import */ var models_enum_model_GameEnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! models/enum-model/GameEnd */ "./models/enum-model/GameEnd.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CurrentGameComponent = /** @class */ (function () {
    function CurrentGameComponent(gameService, activateRoute, route) {
        this.gameService = gameService;
        this.activateRoute = activateRoute;
        this.route = route;
        this.gameId = this.activateRoute.snapshot.params['id'];
    }
    CurrentGameComponent.prototype.ngOnInit = function () {
        this.createFirstRound(this.gameId);
    };
    CurrentGameComponent.prototype.createFirstRound = function (gameId) {
        var _this = this;
        this.gameService.currentGame(gameId)
            .subscribe(function (currentGame) {
            _this.currentGame = currentGame;
            if (currentGame.checkEndGame == models_enum_model_GameEnd__WEBPACK_IMPORTED_MODULE_5__["GameEnd"].EndGame) {
                _this.endGame();
            }
        });
    };
    CurrentGameComponent.prototype.createNextRound = function () {
        var _this = this;
        this.gameService.nextRound(this.gameId)
            .subscribe(function (nextRound) {
            _this.currentGame = nextRound;
            if (nextRound.checkEndGame == models_enum_model_GameEnd__WEBPACK_IMPORTED_MODULE_5__["GameEnd"].EndGame) {
                _this.endGame();
            }
        });
    };
    CurrentGameComponent.prototype.endGame = function () {
        this.route.navigate(['/endGame', this.gameId]);
    };
    CurrentGameComponent.prototype.getTypeRole = function (id) {
        return models_enum_model_RoleEnumView__WEBPACK_IMPORTED_MODULE_3__["RoleEnumView"][id];
    };
    CurrentGameComponent.prototype.getTypeResult = function (id) {
        return models_enum_model_ResultEnumView__WEBPACK_IMPORTED_MODULE_4__["ResultEnumView"][id];
    };
    CurrentGameComponent.prototype.onButtonClick = function () {
        console.log('click');
    };
    CurrentGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-game',
            template: __webpack_require__(/*! ./current-game.component.html */ "./src/app/Game/current-game/current-game.component.html"),
            styles: [__webpack_require__(/*! ./current-game.component.css */ "./src/app/Game/current-game/current-game.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Game_game_service_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CurrentGameComponent);
    return CurrentGameComponent;
}());



/***/ }),

/***/ "./src/app/Game/end-game/end-game.component.css":
/*!******************************************************!*\
  !*** ./src/app/Game/end-game/end-game.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table1 {\r\n    font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", Sans-Serif;\r\n    width: 1000px;\r\n    font-size: 14px;\r\n    border-radius: 10px;\r\n    border-spacing: 0;\r\n    text-align: center;\r\n    height: 50px;\r\n    background-color: #222;\r\n}\r\n\r\n    .table1 th {\r\n        background: #222;\r\n        color: white;\r\n        height: 50px;\r\n        text-shadow: 0 1px 1px #9e6868;\r\n        padding: 10px 20px;\r\n    }\r\n\r\n    .table1 th, td {\r\n        border-style: solid;\r\n        border-width: 0 1px 1px 0;\r\n        border-color: white;\r\n    }\r\n\r\n    .table1 th:first-child, td:first-child {\r\n            text-align: left;\r\n        }\r\n\r\n    .table1 th:first-child {\r\n            border-top-left-radius: 10px;\r\n        }\r\n\r\n    .table1 th:last-child {\r\n            border-top-right-radius: 10px;\r\n            border-right: none;\r\n        }\r\n\r\n    .table1 td {\r\n        padding: 10px 20px;\r\n        background: #6be0e0;\r\n    }\r\n\r\n    .table1 tr:last-child td:first-child {\r\n        border-radius: 0 0 0 10px;\r\n    }\r\n\r\n    .table1 tr:last-child td:last-child {\r\n        border-radius: 0 0 10px 0;\r\n    }\r\n\r\n    .table1 tr td:last-child {\r\n        border-right: none;\r\n    }\r\n"

/***/ }),

/***/ "./src/app/Game/end-game/end-game.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Game/end-game/end-game.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>End of Game</h2>\r\n<h2>Result</h2>\r\n<table class=\"table1\">\r\n    <tr><th>Name </th><th>Role </th><th>Cards </th><th>Total points </th><th>Status </th></tr>\r\n    <tr *ngFor=\"let player of endGameInfo.playersList\">\r\n        <td>{{player.name}}</td>\r\n        <td>{{getTypeRole(player.role)}}</td>\r\n        <td>\r\n            <div *ngFor=\"let card of player.playerCards\">\r\n                {{card.name}} {{card.suit}} {{card.value}}\r\n            </div>\r\n            <br />\r\n        </td>\r\n        <td>\r\n            {{player.cardSum}}\r\n        </td>\r\n        <td>\r\n            {{getTypeResult(player.result)}}\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>{{endGameInfo.dealerPlayer.name}}</td>\r\n        <td>{{getTypeRole(endGameInfo.dealerPlayer.role)}}</td>\r\n        <td>\r\n            <div *ngFor=\"let card of endGameInfo.dealerPlayer.playerCards\">\r\n                {{card.name}} {{card.suit}} {{card.value}}\r\n            </div>\r\n            <br />\r\n        </td>\r\n        <td>\r\n            {{endGameInfo.dealerPlayer.cardSum}}\r\n        </td>\r\n        <td>\r\n            -\r\n        </td>\r\n    </tr>\r\n</table>\r\n<br>\r\n<br />\r\n<button kendoButton (click)=\"startNewGame()\">Start new game</button>\r\n"

/***/ }),

/***/ "./src/app/Game/end-game/end-game.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Game/end-game/end-game.component.ts ***!
  \*****************************************************/
/*! exports provided: EndGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndGameComponent", function() { return EndGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Game_game_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Game/game-service.service */ "./src/app/Game/game-service.service.ts");
/* harmony import */ var models_enum_model_RoleEnumView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! models/enum-model/RoleEnumView */ "./models/enum-model/RoleEnumView.ts");
/* harmony import */ var models_enum_model_ResultEnumView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! models/enum-model/ResultEnumView */ "./models/enum-model/ResultEnumView.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EndGameComponent = /** @class */ (function () {
    function EndGameComponent(gameService, activateRoute, route) {
        this.gameService = gameService;
        this.activateRoute = activateRoute;
        this.route = route;
        this.gameId = this.activateRoute.snapshot.params['id'];
    }
    EndGameComponent.prototype.ngOnInit = function () {
        this.endGame(this.gameId);
    };
    EndGameComponent.prototype.endGame = function (gameId) {
        var _this = this;
        this.gameService.endGame(gameId)
            .subscribe(function (endGame) {
            return _this.endGameInfo = endGame;
        });
    };
    EndGameComponent.prototype.startNewGame = function () {
        this.route.navigate(['/start']);
    };
    EndGameComponent.prototype.getTypeRole = function (id) {
        return models_enum_model_RoleEnumView__WEBPACK_IMPORTED_MODULE_3__["RoleEnumView"][id];
    };
    EndGameComponent.prototype.getTypeResult = function (id) {
        return models_enum_model_ResultEnumView__WEBPACK_IMPORTED_MODULE_4__["ResultEnumView"][id];
    };
    EndGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-end-game',
            template: __webpack_require__(/*! ./end-game.component.html */ "./src/app/Game/end-game/end-game.component.html"),
            styles: [__webpack_require__(/*! ./end-game.component.css */ "./src/app/Game/end-game/end-game.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Game_game_service_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EndGameComponent);
    return EndGameComponent;
}());



/***/ }),

/***/ "./src/app/Game/game-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Game/game-service.service.ts ***!
  \**********************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
        this.url = "http://localhost:58816/api/Game/";
    }
    GameService.prototype.start = function () {
        return this.http.get(this.url + "Start");
    };
    GameService.prototype.createGame = function (startInfoGame) {
        var body = { ourPlayers: startInfoGame.ourPlayers, countBot: startInfoGame.countBot };
        return this.http.post(this.url + "CreateGame", body);
    };
    GameService.prototype.currentGame = function (gameId) {
        return this.http.get(this.url + "CurrentGame/" + gameId);
    };
    GameService.prototype.nextRound = function (gameId) {
        return this.http.get(this.url + "NextRound/" + gameId);
    };
    GameService.prototype.endGame = function (gameId) {
        return this.http.get(this.url + "EndGame/" + gameId);
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/Game/start/start.component.css":
/*!************************************************!*\
  !*** ./src/app/Game/start/start.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Game/start/start.component.html":
/*!*************************************************!*\
  !*** ./src/app/Game/start/start.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to the game</h1>\r\n<h4>Enter your name or select player</h4>\r\n<kendo-combobox [(ngModel)]=\"startInfoGame.ourPlayers\"\r\n                [data]=\"humanPlayers\"\r\n                [allowCustom]=\"true\">\r\n</kendo-combobox>\r\n<h4>Choose count bot-player</h4>\r\n<kendo-dropdownlist [data]=\"countBots\"\r\n                    [value]=\"0\"\r\n                    [(ngModel)]=\"startInfoGame.countBot\">\r\n</kendo-dropdownlist>\r\n<h4>and start game</h4>\r\n<button kendoButton (click)=\"createGame(startInfoGame)\">Start</button>\r\n"

/***/ }),

/***/ "./src/app/Game/start/start.component.ts":
/*!***********************************************!*\
  !*** ./src/app/Game/start/start.component.ts ***!
  \***********************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Game_game_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Game/game-service.service */ "./src/app/Game/game-service.service.ts");
/* harmony import */ var models_game_model_gameStartInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/game-model/gameStartInfo */ "./models/game-model/gameStartInfo.ts");
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
        this.countBots = [1, 2, 3, 4, 5];
        this.startInfoGame = new models_game_model_gameStartInfo__WEBPACK_IMPORTED_MODULE_2__["StartInfoGame"]();
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
    StartComponent.prototype.createGame = function (startInfoGame) {
        var _this = this;
        this.gameService.createGame(startInfoGame).subscribe(function (result) {
            _this.gameId = result;
            console.log(_this.gameId);
            _this.route.navigate(['/currentGame', _this.gameId]);
        });
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/Game/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/Game/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Game_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/History/all-game/all-game.component.css":
/*!*********************************************************!*\
  !*** ./src/app/History/all-game/all-game.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/History/all-game/all-game.component.html":
/*!**********************************************************!*\
  !*** ./src/app/History/all-game/all-game.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  all-game works!\n</p>\n"

/***/ }),

/***/ "./src/app/History/all-game/all-game.component.ts":
/*!********************************************************!*\
  !*** ./src/app/History/all-game/all-game.component.ts ***!
  \********************************************************/
/*! exports provided: AllGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllGameComponent", function() { return AllGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllGameComponent = /** @class */ (function () {
    function AllGameComponent() {
    }
    AllGameComponent.prototype.ngOnInit = function () {
    };
    AllGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-game',
            template: __webpack_require__(/*! ./all-game.component.html */ "./src/app/History/all-game/all-game.component.html"),
            styles: [__webpack_require__(/*! ./all-game.component.css */ "./src/app/History/all-game/all-game.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AllGameComponent);
    return AllGameComponent;
}());



/***/ }),

/***/ "./src/app/History/game-details/game-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/History/game-details/game-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/History/game-details/game-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/History/game-details/game-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  game-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/History/game-details/game-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/History/game-details/game-details.component.ts ***!
  \****************************************************************/
/*! exports provided: GameDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDetailsComponent", function() { return GameDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameDetailsComponent = /** @class */ (function () {
    function GameDetailsComponent() {
    }
    GameDetailsComponent.prototype.ngOnInit = function () {
    };
    GameDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-details',
            template: __webpack_require__(/*! ./game-details.component.html */ "./src/app/History/game-details/game-details.component.html"),
            styles: [__webpack_require__(/*! ./game-details.component.css */ "./src/app/History/game-details/game-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameDetailsComponent);
    return GameDetailsComponent;
}());



/***/ }),

/***/ "./src/app/History/history.service.ts":
/*!********************************************!*\
  !*** ./src/app/History/history.service.ts ***!
  \********************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryService = /** @class */ (function () {
    function HistoryService(http) {
        this.http = http;
        this.url = "http://localhost:58816/api/History/";
    }
    HistoryService.prototype.getAllGames = function () {
        return this.http.get(this.url + "AllGames");
    };
    HistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HistoryService);
    return HistoryService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Game_start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Game/start/start.component */ "./src/app/Game/start/start.component.ts");
/* harmony import */ var src_app_Game_current_game_current_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Game/current-game/current-game.component */ "./src/app/Game/current-game/current-game.component.ts");
/* harmony import */ var src_app_Game_end_game_end_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Game/end-game/end-game.component */ "./src/app/Game/end-game/end-game.component.ts");
/* harmony import */ var src_app_History_all_game_all_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/History/all-game/all-game.component */ "./src/app/History/all-game/all-game.component.ts");
/* harmony import */ var src_app_History_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/History/game-details/game-details.component */ "./src/app/History/game-details/game-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: src_app_Game_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"]
    },
    {
        path: 'currentGame/:id',
        component: src_app_Game_current_game_current_game_component__WEBPACK_IMPORTED_MODULE_4__["CurrentGameComponent"]
    },
    {
        path: 'endGame/:id',
        component: src_app_Game_end_game_end_game_component__WEBPACK_IMPORTED_MODULE_5__["EndGameComponent"]
    },
    {
        path: 'allGame',
        component: src_app_History_all_game_all_game_component__WEBPACK_IMPORTED_MODULE_6__["AllGameComponent"]
    },
    {
        path: 'gameDetails/:id',
        component: src_app_History_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_7__["GameDetailsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 250%;\r\n}\r\n\r\nh2, h3 {\r\n    color: #444;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: lighter;\r\n}\r\n\r\nbody {\r\n    margin: 2em;\r\n}\r\n\r\nbody, input[text], button {\r\n    color: #888;\r\n    font-family: Cambria, Georgia;\r\n}\r\n\r\n/* everywhere else */\r\n\r\n* {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Game_start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Game/start/start.component */ "./src/app/Game/start/start.component.ts");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var src_app_Game_game_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Game/game-service.service */ "./src/app/Game/game-service.service.ts");
/* harmony import */ var src_app_History_history_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/History/history.service */ "./src/app/History/history.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Game_current_game_current_game_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Game/current-game/current-game.component */ "./src/app/Game/current-game/current-game.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _Game_end_game_end_game_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Game/end-game/end-game.component */ "./src/app/Game/end-game/end-game.component.ts");
/* harmony import */ var src_app_History_all_game_all_game_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/History/all-game/all-game.component */ "./src/app/History/all-game/all-game.component.ts");
/* harmony import */ var src_app_History_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/History/game-details/game-details.component */ "./src/app/History/game-details/game-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _Game_start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"],
                _Game_current_game_current_game_component__WEBPACK_IMPORTED_MODULE_11__["CurrentGameComponent"],
                _Game_end_game_end_game_component__WEBPACK_IMPORTED_MODULE_13__["EndGameComponent"],
                src_app_History_all_game_all_game_component__WEBPACK_IMPORTED_MODULE_14__["AllGameComponent"],
                src_app_History_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_15__["GameDetailsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__["DropDownsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
            ],
            providers: [
                src_app_Game_game_service_service__WEBPACK_IMPORTED_MODULE_8__["GameService"],
                src_app_History_history_service__WEBPACK_IMPORTED_MODULE_9__["HistoryService"]
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anuitex\source\repos\BlackJack\BlackJack.AngularMVC\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map