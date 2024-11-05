(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_menu_menu_module_ts"],{

/***/ 61020:
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageRoutingModule": () => (/* binding */ MenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page */ 72713);




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_0__.MenuPage
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ 7056:
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageModule": () => (/* binding */ MenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 61020);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 72713);







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuPageRoutingModule
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage]
    })
], MenuPageModule);



/***/ }),

/***/ 72713:
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu.page.html */ 21755);
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss */ 59289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 47531);






let MenuPage = class MenuPage {
    constructor(navctrl, config) {
        this.navctrl = navctrl;
        this.config = config;
        this.config.refresh();
    }
    ngOnInit() {
    }
    godetail(category) {
        this.navctrl.navigateForward(['/userguide', { category }]);
    }
    home() {
        this.navctrl.navigateForward('/home');
    }
    chat() {
        this.navctrl.navigateForward('/chat');
    }
    notification() {
        this.navctrl.navigateForward('/notification');
    }
    profile() {
        this.navctrl.navigateForward('/profile');
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService }
];
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenuPage);



/***/ }),

/***/ 59289:
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.89);\n  margin-top: 30px;\n  font-size: 19px;\n}\n\n.headingdiv {\n  text-align: center;\n  font-weight: bold;\n  font-size: 21px;\n}\n\n.maincard {\n  width: 100%;\n  height: 135px;\n  padding: 18px 0px;\n  text-align: center;\n  color: black;\n  font-weight: bold;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFHSiIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OSk7XHJcbiAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICBmb250LXNpemU6MTlweDtcclxufVxyXG4uaGVhZGluZ2RpdntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbi5tYWluY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjEzNXB4O1xyXG4gICAgcGFkZGluZzoxOHB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ 21755:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>User Directory</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_10\"></div>\n  <div class=\"headingdiv\">Choose User Guide</div>\n  <div class=\"ht_15\"></div>\n  <ion-row class=\"row_95\">\n    <ion-col>\n      <ion-card class=\"maincard\" (click)=\"godetail('Supplier')\">\n        <img src=\"assets/image/supplier.png\">\n        <div>Supplier</div>\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card class=\"maincard\" (click)=\"godetail('Contractor')\">\n        <img src=\"assets/image/contractor.png\">\n        <div>Contractor</div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"row_95\">\n    <ion-col>\n      <ion-card class=\"maincard\" (click)=\"godetail('Design & Engineering Consultancy')\">\n        <img src=\"assets/image/design.png\" style=\"margin-top: -10px;\">\n        <div>Design & Engineering Consultancy</div>\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card class=\"maincard\" (click)=\"godetail('Manufacturer')\">\n        <img src=\"assets/image/manufactorer.png\">\n        <div>Manufacturer</div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"row_95\">\n    <ion-col>\n      <ion-card class=\"maincard\" (click)=\"godetail('Service Provider')\">\n        <img src=\"assets/image/service.png\">\n        <div>Service Provider</div>\n      </ion-card>\n    </ion-col>\n    <ion-col>\n     \n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-footer>\n  <div class=\"ht_5\"></div>\n  <ion-row class=\"row_95 footerrow\">\n    <ion-col (click)=\"home()\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"list\"  class=\"selecttab\"></ion-icon>\n    </ion-col>\n     <ion-col (click)=\"chat()\">\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.counter > 0\" class=\"showbagde\">{{config.counter}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"notification()\">\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.get_badge > 0\" class=\"showbagde\">{{config.get_badge}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"profile()\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_menu_menu_module_ts.js.map