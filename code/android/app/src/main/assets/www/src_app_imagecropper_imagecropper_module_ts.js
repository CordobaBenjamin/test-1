(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_imagecropper_imagecropper_module_ts"],{

/***/ 25584:
/*!*************************************************************!*\
  !*** ./src/app/imagecropper/imagecropper-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagecropperPageRoutingModule": () => (/* binding */ ImagecropperPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _imagecropper_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagecropper.page */ 14306);




const routes = [
    {
        path: '',
        component: _imagecropper_page__WEBPACK_IMPORTED_MODULE_0__.ImagecropperPage
    }
];
let ImagecropperPageRoutingModule = class ImagecropperPageRoutingModule {
};
ImagecropperPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImagecropperPageRoutingModule);



/***/ }),

/***/ 28972:
/*!*****************************************************!*\
  !*** ./src/app/imagecropper/imagecropper.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagecropperPageModule": () => (/* binding */ ImagecropperPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _imagecropper_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagecropper-routing.module */ 25584);
/* harmony import */ var _imagecropper_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imagecropper.page */ 14306);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ 42945);








let ImagecropperPageModule = class ImagecropperPageModule {
};
ImagecropperPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__.ImageCropperModule,
            _imagecropper_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImagecropperPageRoutingModule
        ],
        declarations: [_imagecropper_page__WEBPACK_IMPORTED_MODULE_1__.ImagecropperPage]
    })
], ImagecropperPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_imagecropper_imagecropper_module_ts.js.map