(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatform{\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 50px;\n  background-color: #eee;\n}\n\n\n@media screen and (min-width: 900px) {\n .chatform{\n  width: 50%;\n\n\t}\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7Q0FDeEI7OztBQUdEO0NBQ0M7RUFDQyxXQUFXOztFQUVYO0NBQ0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0Zm9ybXtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAuY2hhdGZvcm17XG4gIHdpZHRoOiA1MCU7XG5cblx0fVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Chat with Cleo</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Contact</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">FAQ</a>\n      </li>\n    </ul>\n  </div>\n</nav> -->\n\n<div class=\"chatform\">\n  <message-list [messages]=\"messages\"></message-list>\n  <message-form [message]=\"message\" [messages]=\"messages\"></message-form>\n</div>"

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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.message = new _models__WEBPACK_IMPORTED_MODULE_1__["Message"]('', 'assets/user.png', "Você", new Date());
        this.messages = [
            new _models__WEBPACK_IMPORTED_MODULE_1__["Message"]('Seja bem-vindo', 'assets/bot.png', "Bot", new Date())
        ];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/message-list/message-list.component */ "./src/app/components/message-list/message-list.component.ts");
/* harmony import */ var _components_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/message-item/message-item.component */ "./src/app/components/message-item/message-item.component.ts");
/* harmony import */ var _components_message_form_message_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/message-form/message-form.component */ "./src/app/components/message-form/message-form.component.ts");
/* harmony import */ var _services_dialogflow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/dialogflow.service */ "./src/app/services/dialogflow.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_3__["MessageListComponent"],
                _components_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_4__["MessageItemComponent"],
                _components_message_form_message_form_component__WEBPACK_IMPORTED_MODULE_5__["MessageFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"]
            ],
            providers: [_services_dialogflow_service__WEBPACK_IMPORTED_MODULE_6__["DialogflowService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/message-form/message-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/message-form/message-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatcontrol {\n  float: left;\n  width: 100%;\n}\n.chatcontrol .chatinput {\n  width: 80%;\n  float: left;\n  border-radius: 0;\n}\n.chatcontrol .sendbtn {\n  width: 20%;\n  float: left;\n  border-radius: 0;\n  text-transform: uppercase;\n}\n@media screen and (min-width: 400px) {\n \t\n \t.chatcontrol .sendbtn {\n  width: 30%;\n}\n\n.chatcontrol .chatinput {\n  width: 70%;\n\n}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlLWZvcm0vbWVzc2FnZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtDQUNiO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMEJBQTBCO0NBQzNCO0FBR0Q7O0VBRUU7RUFDQSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXOztDQUVaOztDQUVBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlLWZvcm0vbWVzc2FnZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdGNvbnRyb2wge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hhdGNvbnRyb2wgLmNoYXRpbnB1dCB7XG4gIHdpZHRoOiA4MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmNoYXRjb250cm9sIC5zZW5kYnRuIHtcbiAgd2lkdGg6IDIwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiBcdFxuIFx0LmNoYXRjb250cm9sIC5zZW5kYnRuIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmNoYXRjb250cm9sIC5jaGF0aW5wdXQge1xuICB3aWR0aDogNzAlO1xuXG59XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/message-form/message-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/message-form/message-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatcontrol\"> \n  <input type=\"text\" class=\"form-control chatinput\" [(ngModel)]=\"message.content\" (keyup.enter)=\"sendMessage()\"/>\n  <button class=\"btn btn-success sendbtn\" (click)=\"sendMessage()\"><i class=\"fas fa-paper-plane\"></i></button>\n</div>"

/***/ }),

/***/ "./src/app/components/message-form/message-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/message-form/message-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessageFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageFormComponent", function() { return MessageFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageFormComponent = /** @class */ (function () {
    function MessageFormComponent(dialogFlowService) {
        this.dialogFlowService = dialogFlowService;
    }
    MessageFormComponent.prototype.ngOnInit = function () {
    };
    MessageFormComponent.prototype.sendMessage = function () {
        var _this = this;
        this.message.timestamp = new Date();
        this.messages.push(this.message);
        this.dialogFlowService.getResponse(this.message.content).subscribe(function (res) {
            _this.messages.push(new _models__WEBPACK_IMPORTED_MODULE_1__["Message"](res.result.fulfillment.speech, 'assets/bot.png', "Bot", new Date()));
        });
        this.message = new _models__WEBPACK_IMPORTED_MODULE_1__["Message"]('', 'assets/user.png', "Você", this.message.timestamp);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('message'),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_1__["Message"])
    ], MessageFormComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('messages'),
        __metadata("design:type", Array)
    ], MessageFormComponent.prototype, "messages", void 0);
    MessageFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'message-form',
            template: __webpack_require__(/*! ./message-form.component.html */ "./src/app/components/message-form/message-form.component.html"),
            styles: [__webpack_require__(/*! ./message-form.component.css */ "./src/app/components/message-form/message-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["DialogflowService"]])
    ], MessageFormComponent);
    return MessageFormComponent;
}());



/***/ }),

/***/ "./src/app/components/message-item/message-item.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/message-item/message-item.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 15px;\n  font-weight: 400;\n}\n\n.timestamp {\n  font-size: 0.6em;\n  float: right;\n}\n\n.avatar {\n  width: 50px;\n  margin-right: 20px;\n  margin-left: 20px;\n  margin-top: 20px;\n  float:left;\n}\n\n.user-msg {\n float: right;\n background-color: #fff  !important ;\n color: #000 !important;\n margin-right: 20px;\n}\n\n.user-avatar {\n  float: right;\n  margin-left: 5px !important;\n}\n\n.user-name {\n  float: right;\n}\n\n.list-group-item {\n  display: inline-block;\n  max-width: 70%;\n  background-color : #0088cc;\n  color: #fff;\n  margin-top: 8px;\n  border-radius: 25px;\n  border: none;\n}\n\n.list-group-item:after {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -11px;\n  right: auto;\n  top: 35px;\n  bottom: auto;\n  border: 20px solid;\n  border-color: #0088cc transparent transparent transparent;\n}\n\n.user-msg:after {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: auto;\n  right: -11px;\n  top: 35px;\n  bottom: auto;\n  border: 20px solid;\n  border-color: #fff transparent transparent transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlLWl0ZW0vbWVzc2FnZS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtDQUNDLGFBQWE7Q0FDYixvQ0FBb0M7Q0FDcEMsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQjs7QUFFRDtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwREFBMEQ7Q0FDM0Q7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1REFBdUQ7Q0FDeEQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2UtaXRlbS9tZXNzYWdlLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50aW1lc3RhbXAge1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZmxvYXQ6bGVmdDtcbn1cblxuLnVzZXItbXNnIHtcbiBmbG9hdDogcmlnaHQ7XG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAgIWltcG9ydGFudCA7XG4gY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi51c2VyLWF2YXRhciB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4udXNlci1uYW1lIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvciA6ICMwMDg4Y2M7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTphZnRlciB7XG4gIGNvbnRlbnQ6ICcgJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBsZWZ0OiAtMTFweDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogMzVweDtcbiAgYm90dG9tOiBhdXRvO1xuICBib3JkZXI6IDIwcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzAwODhjYyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLnVzZXItbXNnOmFmdGVyIHtcbiAgY29udGVudDogJyAnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTFweDtcbiAgdG9wOiAzNXB4O1xuICBib3R0b206IGF1dG87XG4gIGJvcmRlcjogMjBweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/message-item/message-item.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/message-item/message-item.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timeform\">\n\t<!--<span [ngClass]=\"{'user-name': message.name === 'Você'}\">{{message.name}}</span> -->\n</div>\n<img [src]=\"message.avatar\" class=\"avatar\" [ngClass]=\"{'user-avatar': message.name === 'Você'}\"/>\n<li  [ngClass]=\"{'user-msg': message.name === 'Você'}\" class=\"list-group-item\">\n  <div class=\"message\"  >\n    {{message.content}}\n  </div>\n   <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> <span class=\"timestamp\">{{message.timestamp | date : 'hh:mm' }}</span>\n</li>"

/***/ }),

/***/ "./src/app/components/message-item/message-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/message-item/message-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItemComponent", function() { return MessageItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageItemComponent = /** @class */ (function () {
    function MessageItemComponent() {
    }
    MessageItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('message'),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_1__["Message"])
    ], MessageItemComponent.prototype, "message", void 0);
    MessageItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'message-item',
            template: __webpack_require__(/*! ./message-item.component.html */ "./src/app/components/message-item/message-item.component.html"),
            styles: [__webpack_require__(/*! ./message-item.component.css */ "./src/app/components/message-item/message-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageItemComponent);
    return MessageItemComponent;
}());



/***/ }),

/***/ "./src/app/components/message-list/message-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/message-list/message-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatlist{\n  height: 600px;\n  overflow-y: scroll;\n}\n\n\n@media screen and (max-height: 700px) {\n\n\t.chatlist{\n \t\theight: 400px;\n\t}\t\n\n}\n\n\n@media screen and (max-height: 500px) {\n\n\t.chatlist{\n \t\theight: 250px;\n\t}\t\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlLWxpc3QvbWVzc2FnZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0NBQ3BCOzs7QUFHRDs7Q0FFQztHQUNFLGNBQWM7RUFDZjs7Q0FFRDs7O0FBRUQ7O0NBRUM7R0FDRSxjQUFjO0VBQ2Y7O0NBRUQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2UtbGlzdC9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0bGlzdHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3MDBweCkge1xuXG5cdC5jaGF0bGlzdHtcbiBcdFx0aGVpZ2h0OiA0MDBweDtcblx0fVx0XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG5cblx0LmNoYXRsaXN0e1xuIFx0XHRoZWlnaHQ6IDI1MHB4O1xuXHR9XHRcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/message-list/message-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/message-list/message-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatlist\" #chatlist>\n  <ul class=\"list-group\">\n    <message-item *ngFor=\"let msg of messages\" [message]=\"msg\"></message-item>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/message-list/message-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/message-list/message-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/message-item/message-item.component */ "./src/app/components/message-item/message-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageListComponent = /** @class */ (function () {
    function MessageListComponent() {
    }
    MessageListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.chatItems.changes.subscribe(function (elements) {
            _this.scrollToBottom();
        });
    };
    MessageListComponent.prototype.scrollToBottom = function () {
        try {
            this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log('Could not find the "chatList" element.');
        }
    };
    MessageListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('messages'),
        __metadata("design:type", Array)
    ], MessageListComponent.prototype, "messages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatlist', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MessageListComponent.prototype, "chatList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_components_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_1__["MessageItemComponent"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MessageListComponent.prototype, "chatItems", void 0);
    MessageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/components/message-list/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message-list.component.css */ "./src/app/components/message-list/message-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/app/models/message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _message__WEBPACK_IMPORTED_MODULE_0__["Message"]; });




/***/ }),

/***/ "./src/app/models/message.ts":
/*!***********************************!*\
  !*** ./src/app/models/message.ts ***!
  \***********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(content, avatar, name, timestamp) {
        this.content = content;
        this.timestamp = timestamp;
        this.avatar = avatar;
        this.name = name;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/services/dialogflow.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/dialogflow.service.ts ***!
  \************************************************/
/*! exports provided: DialogflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogflowService", function() { return DialogflowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogflowService = /** @class */ (function () {
    function DialogflowService(http) {
        this.http = http;
        this.baseURL = "https://api.dialogflow.com/v1/query?v=20150910";
        this.token = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].token;
    }
    DialogflowService.prototype.getResponse = function (query) {
        var data = {
            query: query,
            lang: 'en',
            sessionId: '12345'
        };
        return this.http
            .post("" + this.baseURL, data, { headers: this.getHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    DialogflowService.prototype.getHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', "Bearer " + this.token);
        return headers;
    };
    DialogflowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DialogflowService);
    return DialogflowService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: DialogflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialogflow_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogflow.service */ "./src/app/services/dialogflow.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogflowService", function() { return _dialogflow_service__WEBPACK_IMPORTED_MODULE_0__["DialogflowService"]; });




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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    token: '28bf3fa2b5e74722ba9d5c1083f5fee8'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/leoassuncao/lia-chatbot/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map