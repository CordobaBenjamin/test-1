(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_getstarted_getstarted_module_ts"],{

/***/ 37418:
/*!*********************************************************!*\
  !*** ./src/app/getstarted/getstarted-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetstartedPageRoutingModule": () => (/* binding */ GetstartedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _getstarted_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getstarted.page */ 60605);




const routes = [
    {
        path: '',
        component: _getstarted_page__WEBPACK_IMPORTED_MODULE_0__.GetstartedPage
    }
];
let GetstartedPageRoutingModule = class GetstartedPageRoutingModule {
};
GetstartedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GetstartedPageRoutingModule);



/***/ }),

/***/ 77234:
/*!*************************************************!*\
  !*** ./src/app/getstarted/getstarted.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetstartedPageModule": () => (/* binding */ GetstartedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _getstarted_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getstarted-routing.module */ 37418);
/* harmony import */ var _getstarted_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getstarted.page */ 60605);







let GetstartedPageModule = class GetstartedPageModule {
};
GetstartedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _getstarted_routing_module__WEBPACK_IMPORTED_MODULE_0__.GetstartedPageRoutingModule
        ],
        declarations: [_getstarted_page__WEBPACK_IMPORTED_MODULE_1__.GetstartedPage]
    })
], GetstartedPageModule);



/***/ }),

/***/ 60605:
/*!***********************************************!*\
  !*** ./src/app/getstarted/getstarted.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetstartedPage": () => (/* binding */ GetstartedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_getstarted_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./getstarted.page.html */ 64201);
/* harmony import */ var _getstarted_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getstarted.page.scss */ 23852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);





let GetstartedPage = class GetstartedPage {
    constructor(navctrl) {
        this.navctrl = navctrl;
    }
    ngOnInit() {
        console.log('Get Started page');
    }
    login() {
        this.navctrl.navigateForward('/login');
    }
    newlogin() {
        this.navctrl.navigateForward('/signup');
    }
    guestlogin() {
        localStorage.setItem("Marketplace_Logindata", JSON.stringify({ 'id': '0' }));
        this.navctrl.navigateForward('/home');
    }
};
GetstartedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
GetstartedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-getstarted',
        template: _raw_loader_getstarted_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_getstarted_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GetstartedPage);



/***/ }),

/***/ 23852:
/*!*************************************************!*\
  !*** ./src/app/getstarted/getstarted.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: white;\n}\n\n.backcolordiv {\n  position: relative;\n  width: 100%;\n  height: 415px;\n}\n\n.imag {\n  width: 100%;\n  height: 415px;\n  background-color: #fd9345;\n  -webkit-clip-path: ellipse(80% 60% at 59% 35%);\n          clip-path: ellipse(80% 60% at 59% 35%);\n}\n\n.inner {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 365px;\n  background-color: #f78427;\n  -webkit-clip-path: ellipse(80% 60% at 46% 35%);\n          clip-path: ellipse(80% 60% at 46% 35%);\n}\n\n.back2 {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 328px;\n  background-color: #f9771f;\n  -webkit-clip-path: ellipse(80% 61% at 29% 35%);\n          clip-path: ellipse(80% 61% at 29% 35%);\n}\n\n.circle {\n  position: absolute;\n  top: 20px;\n  height: 35%;\n  right: 0;\n}\n\n.tinytxt {\n  position: absolute;\n  color: white;\n  font-size: 22px;\n  top: 75px;\n  left: 25px;\n}\n\n.talltxt {\n  position: absolute;\n  color: white;\n  top: 105px;\n  left: 25px;\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.txt {\n  position: absolute;\n  color: rgba(255, 255, 255, 0.54);\n  font-size: 14px;\n  letter-spacing: 0.33px;\n  bottom: 145px;\n  left: 25px;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\n.btn {\n  --background: white;\n  --border-radius: 22px;\n  border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n  color: black;\n  font-weight: 400px;\n  --box-shadow: none;\n  border: 1.5px solid black;\n}\n\n.btn:active {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n  color: white;\n  font-weight: 400px;\n  --box-shadow: none;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldHN0YXJ0ZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFTSjs7QUFQQTtFQUNJLDRFQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFVSjs7QUFSQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFXSjs7QUFUQTtFQUNJLDRFQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFZSiIsImZpbGUiOiJnZXRzdGFydGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLmJhY2tjb2xvcmRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDE1cHg7XHJcbn1cclxuLmltYWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkOTM0NTtcclxuICAgIGNsaXAtcGF0aDogZWxsaXBzZSg4MCUgNjAlIGF0IDU5JSAzNSUpO1xyXG59XHJcbi5pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzY1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc4NDI3O1xyXG4gICAgY2xpcC1wYXRoOiBlbGxpcHNlKDgwJSA2MCUgYXQgNDYlIDM1JSk7XHJcbn1cclxuLmJhY2syIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMjhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTc3MWY7XHJcbiAgICBjbGlwLXBhdGg6IGVsbGlwc2UoODAlIDYxJSBhdCAyOSUgMzUlKTtcclxufVxyXG4uY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGhlaWdodDogMzUlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuLnRpbnl0eHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdG9wOiA3NXB4O1xyXG4gICAgbGVmdDogMjVweDtcclxufVxyXG4udGFsbHR4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0b3A6IDEwNXB4O1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi50eHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDU0JSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zM3B4O1xyXG4gICAgYm90dG9tOiAxNDVweDtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbn1cclxuLmJ0bmNsYXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI0OGRlZywgI2Y3OGE0NiAwJSwgI2VlNzg0OCAzNCUsICNlYTZiNGEgMTAwJSk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uYnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNDAwcHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5idG46YWN0aXZlIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI0OGRlZywgI2Y3OGE0NiAwJSwgI2VlNzg0OCAzNCUsICNlYTZiNGEgMTAwJSk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDBweDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 64201:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/getstarted/getstarted.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"backcolordiv\">\n    <div class=\"imag\"></div>\n    <div class=\"inner\"></div>\n    <div class=\"back2\"></div>\n    <img class=\"circle\" src=\"assets/image/circle.jpg\">\n    <div class=\"tinytxt\">Welcome To</div>\n    <div class=\"talltxt\"><b>Marketplace</b></div>\n    <div class=\"txt\">\n      Lorem ipsum dolor sit amet,consectetur<br>\n      adipiscing elit,sed do eiusmod tempor<br>\n      incididunt ut labore et dolor megna aliqua.<br>\n      Ut enim ad minim veniam, quis nostrud<br>\n      exercitation ullamco laboris nisi ut aliquip ex<br>\n      ea commodo consequet.\n    </div>\n  </div>\n\n  <ion-button class=\"btn\" (click)=\"login()\">Log In</ion-button>\n  <div class=\"ht_15\"></div>\n  <ion-button class=\"btn\" (click)=\"guestlogin()\">Guest Log In</ion-button>\n  <div class=\"ht_15\"></div>\n  <ion-button class=\"btn\" (click)=\"newlogin()\">Create New Account</ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_getstarted_getstarted_module_ts.js.map