(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_notificationdetail_notificationdetail_module_ts"],{

/***/ 42260:
/*!*************************************************************************!*\
  !*** ./src/app/notificationdetail/notificationdetail-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationdetailPageRoutingModule": () => (/* binding */ NotificationdetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _notificationdetail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificationdetail.page */ 24963);




const routes = [
    {
        path: '',
        component: _notificationdetail_page__WEBPACK_IMPORTED_MODULE_0__.NotificationdetailPage
    }
];
let NotificationdetailPageRoutingModule = class NotificationdetailPageRoutingModule {
};
NotificationdetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationdetailPageRoutingModule);



/***/ }),

/***/ 37881:
/*!*****************************************************************!*\
  !*** ./src/app/notificationdetail/notificationdetail.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationdetailPageModule": () => (/* binding */ NotificationdetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _notificationdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificationdetail-routing.module */ 42260);
/* harmony import */ var _notificationdetail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificationdetail.page */ 24963);







let NotificationdetailPageModule = class NotificationdetailPageModule {
};
NotificationdetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notificationdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationdetailPageRoutingModule
        ],
        declarations: [_notificationdetail_page__WEBPACK_IMPORTED_MODULE_1__.NotificationdetailPage]
    })
], NotificationdetailPageModule);



/***/ }),

/***/ 24963:
/*!***************************************************************!*\
  !*** ./src/app/notificationdetail/notificationdetail.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationdetailPage": () => (/* binding */ NotificationdetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_notificationdetail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notificationdetail.page.html */ 46161);
/* harmony import */ var _notificationdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificationdetail.page.scss */ 69592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 47531);







let NotificationdetailPage = class NotificationdetailPage {
    constructor(router, navctrl, config) {
        this.router = router;
        this.navctrl = navctrl;
        this.config = config;
        this.config.refresh();
        this.notification = this.router.snapshot.params;
        console.log(this.notification);
    }
    ngOnInit() {
    }
    back() {
        this.navctrl.pop();
    }
};
NotificationdetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService }
];
NotificationdetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-notificationdetail',
        template: _raw_loader_notificationdetail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notificationdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationdetailPage);



/***/ }),

/***/ 69592:
/*!*****************************************************************!*\
  !*** ./src/app/notificationdetail/notificationdetail.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".username {\n  color: black;\n  font-weight: bold;\n  width: 90%;\n  margin: auto;\n}\n\n.msgdiv {\n  margin: auto;\n  color: black;\n  width: 90%;\n  word-break: break-all;\n}\n\n.backicn {\n  color: gray;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbmRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0QscUJBQUE7QUFDSDs7QUFDQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBRUoiLCJmaWxlIjoibm90aWZpY2F0aW9uZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VybmFtZXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICAvLyBtYXJnaW4tbGVmdDotNXB4O1xyXG59XHJcbi5tc2dkaXZ7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcbi5iYWNraWNuIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59Il19 */");

/***/ }),

/***/ 46161:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notificationdetail/notificationdetail.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"config.logindata.id != '0'\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"1.5\">\n        <ion-icon name=\"arrow-back-outline\" class=\"backicn\" (click)=\"back()\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-title>Notification</ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_10\"></div>\n  <div class=\"username\">{{notification.title}}</div>\n  <div class=\"ht_10\"></div>\n  <div class=\"msgdiv\">{{notification.message}}</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_notificationdetail_notificationdetail_module_ts.js.map