(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_about_about_module_ts"],{

/***/ 31232:
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 89786);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 45938:
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 31232);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 89786);







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage]
    })
], AboutPageModule);



/***/ }),

/***/ 89786:
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./about.page.html */ 20866);
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss */ 27629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 34595);






let AboutPage = class AboutPage {
    constructor(router, navctrl) {
        this.router = router;
        this.navctrl = navctrl;
        this.configdata = this.router.snapshot.params;
        console.log(this.configdata);
    }
    ngOnInit() {
    }
    back() {
        this.navctrl.pop();
    }
};
AboutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutPage);



/***/ }),

/***/ 27629:
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.89);\n  font-size: 19px;\n  padding: 0px;\n}\n\n.backicn {\n  font-size: 25px;\n  color: rgba(255, 255, 255, 0.89);\n}\n\np {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtFQUVBLGdDQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoiYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5KTtcclxuICAgIC8vIG1hcmdpbi10b3A6MzBweDtcclxuICAgIGZvbnQtc2l6ZToxOXB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbn1cclxuLmJhY2tpY257XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODkpO1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjpibGFjaztcclxufSJdfQ== */");

/***/ }),

/***/ 20866:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <div class=\"ht_25\"></div> -->\n    <ion-row style=\"margin-top:30px;\">\n      <ion-col size=\"1\">\n        <ion-icon name=\"arrow-back-outline\" class=\"backicn\" (click)=\"back()\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-title>{{configdata.name}}</ion-title>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_15\"></div>\n<!-- <div class=\"ml_15\">\n  {{configdata.value}}\n</div> -->\n<p class=\"ml_15\">{{configdata.value}}</p>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_about_about_module_ts.js.map