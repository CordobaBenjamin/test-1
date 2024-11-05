(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_changepwd_changepwd_module_ts"],{

/***/ 3719:
/*!*******************************************************!*\
  !*** ./src/app/changepwd/changepwd-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepwdPageRoutingModule": () => (/* binding */ ChangepwdPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _changepwd_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepwd.page */ 20096);




const routes = [
    {
        path: '',
        component: _changepwd_page__WEBPACK_IMPORTED_MODULE_0__.ChangepwdPage
    }
];
let ChangepwdPageRoutingModule = class ChangepwdPageRoutingModule {
};
ChangepwdPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangepwdPageRoutingModule);



/***/ }),

/***/ 8046:
/*!***********************************************!*\
  !*** ./src/app/changepwd/changepwd.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepwdPageModule": () => (/* binding */ ChangepwdPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _changepwd_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepwd-routing.module */ 3719);
/* harmony import */ var _changepwd_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepwd.page */ 20096);







let ChangepwdPageModule = class ChangepwdPageModule {
};
ChangepwdPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _changepwd_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangepwdPageRoutingModule
        ],
        declarations: [_changepwd_page__WEBPACK_IMPORTED_MODULE_1__.ChangepwdPage]
    })
], ChangepwdPageModule);



/***/ }),

/***/ 20096:
/*!*********************************************!*\
  !*** ./src/app/changepwd/changepwd.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepwdPage": () => (/* binding */ ChangepwdPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_changepwd_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./changepwd.page.html */ 89162);
/* harmony import */ var _changepwd_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepwd.page.scss */ 56509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ 35881);







let ChangepwdPage = class ChangepwdPage {
    constructor(navctrl, service, loader) {
        this.navctrl = navctrl;
        this.service = service;
        this.loader = loader;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off-outline';
        this.passwordType1 = 'password';
        this.passwordIcon1 = 'eye-off-outline';
        this.passwordType2 = 'password';
        this.passwordIcon2 = 'eye-off-outline';
        this.logindata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
        console.log(this.logindata);
    }
    ngOnInit() {
    }
    back() {
        this.navctrl.pop();
    }
    hideShowPassword() {
        console.log('showpass');
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
    }
    hideShowPassword1() {
        console.log('showpass');
        this.passwordType1 = this.passwordType1 === 'text' ? 'password' : 'text';
        this.passwordIcon1 = this.passwordIcon1 === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
    }
    hideShowPassword2() {
        console.log('showpass');
        this.passwordType2 = this.passwordType2 === 'text' ? 'password' : 'text';
        this.passwordIcon2 = this.passwordIcon2 === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
    }
    validate() {
        if (!this.old_pwd) {
            this.loader.showAlert("Error", "Please Enter Old Password");
            return false;
        }
        if (!this.new_pwd) {
            this.loader.showAlert("Error", "Please Enter New Password");
            return false;
        }
        if (!this.confirm_pwd) {
            this.loader.showAlert("Error", "Please Enter Confirm Password");
            return false;
        }
        if (this.new_pwd != this.confirm_pwd) {
            this.loader.showAlert("Error", "New password does not match");
            return false;
        }
        return true;
    }
    submit() {
        if (this.validate()) {
            this.loader.showLoader();
            var params = {
                user_id: this.logindata.id,
                new_password: this.new_pwd,
                old_password: this.old_pwd
            };
            console.log(params);
            this.service.Chnagepassword(params)
                .then((result) => this.handleContact(result));
        }
    }
    handleContact(result) {
        console.log(result);
        this.loader.dissmissLoader();
        if (result.ResponseCode == '1') {
            this.loader.showToast(result.ResponseMsg);
            this.navctrl.navigateForward('/setting');
        }
        else {
            this.loader.showAlert("Error", result.ResponseMsg);
        }
    }
};
ChangepwdPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService }
];
ChangepwdPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-changepwd',
        template: _raw_loader_changepwd_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_changepwd_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChangepwdPage);



/***/ }),

/***/ 56509:
/*!***********************************************!*\
  !*** ./src/app/changepwd/changepwd.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.89);\n  font-size: 19px;\n  padding: 0px;\n}\n\n.backicn {\n  font-size: 25px;\n  color: rgba(255, 255, 255, 0.89);\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZXB3ZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFFQSxnQ0FBQTtBQUFKOztBQUVBO0VBQ0ksNEVBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNKIiwiZmlsZSI6ImNoYW5nZXB3ZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODkpO1xyXG4gICAgLy8gbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgZm9udC1zaXplOjE5cHg7XHJcbiAgICBwYWRkaW5nOjBweDtcclxufVxyXG4uYmFja2ljbntcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIC8vIG1hcmdpbi10b3A6MzBweDtcclxuICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OSk7XHJcbn1cclxuLmJ0bmNsYXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI0OGRlZywgI2Y3OGE0NiAwJSwgI2VlNzg0OCAzNCUsICNlYTZiNGEgMTAwJSk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ 89162:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changepwd/changepwd.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-row style=\"margin-top:30px;\">\n      <ion-col size=\"1\">\n        <ion-icon name=\"arrow-back-outline\" class=\"backicn\" (click)=\"back()\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-title>Change Password</ion-title>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_15\"></div>\n  <div class=\"labeldiv\">Old Password</div>\n  <ion-item class=\"inputitem\">\n    <ion-input [type]=\"passwordType\" [(ngModel)]=\"old_pwd\"></ion-input>\n    <ion-icon item-end [name]=\"passwordIcon\" class=\"logoicn\" (click)='hideShowPassword()'></ion-icon>\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">New Password</div>\n  <ion-item class=\"inputitem\">\n    <ion-input [type]=\"passwordType1\" [(ngModel)]=\"new_pwd\"></ion-input>\n    <ion-icon item-end [name]=\"passwordIcon1\" class=\"logoicn\" (click)='hideShowPassword1()'></ion-icon>\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Confirm Password</div>\n  <ion-item class=\"inputitem\">\n    <ion-input [type]=\"passwordType2\" [(ngModel)]=\"confirm_pwd\"></ion-input>\n    <ion-icon item-end [name]=\"passwordIcon2\" class=\"logoicn\" (click)='hideShowPassword2()'></ion-icon>\n  </ion-item>\n  <div class=\"ht_25\"></div>\n  <ion-button class=\"btnclass\" (click)=\"submit()\">Submit</ion-button>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_changepwd_changepwd_module_ts.js.map