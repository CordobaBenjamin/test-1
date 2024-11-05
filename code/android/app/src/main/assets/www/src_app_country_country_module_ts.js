(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_country_country_module_ts"],{

/***/ 91289:
/*!***************************************************!*\
  !*** ./src/app/country/country-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryPageRoutingModule": () => (/* binding */ CountryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _country_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country.page */ 26482);




const routes = [
    {
        path: '',
        component: _country_page__WEBPACK_IMPORTED_MODULE_0__.CountryPage
    }
];
let CountryPageRoutingModule = class CountryPageRoutingModule {
};
CountryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CountryPageRoutingModule);



/***/ }),

/***/ 95447:
/*!*******************************************!*\
  !*** ./src/app/country/country.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryPageModule": () => (/* binding */ CountryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _country_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-routing.module */ 91289);
/* harmony import */ var _country_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country.page */ 26482);







let CountryPageModule = class CountryPageModule {
};
CountryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _country_routing_module__WEBPACK_IMPORTED_MODULE_0__.CountryPageRoutingModule
        ],
        declarations: [_country_page__WEBPACK_IMPORTED_MODULE_1__.CountryPage]
    })
], CountryPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_country_country_module_ts.js.map