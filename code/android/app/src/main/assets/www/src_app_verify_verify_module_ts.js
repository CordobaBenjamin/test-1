(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_verify_verify_module_ts"],{

/***/ 20804:
/*!*************************************************!*\
  !*** ./src/app/verify/verify-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPageRoutingModule": () => (/* binding */ VerifyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify.page */ 80432);




const routes = [
    {
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_0__.VerifyPage
    }
];
let VerifyPageRoutingModule = class VerifyPageRoutingModule {
};
VerifyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyPageRoutingModule);



/***/ }),

/***/ 36936:
/*!*****************************************!*\
  !*** ./src/app/verify/verify.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPageModule": () => (/* binding */ VerifyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _verify_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-routing.module */ 20804);
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify.page */ 80432);







let VerifyPageModule = class VerifyPageModule {
};
VerifyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verify_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyPageRoutingModule
        ],
        declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_1__.VerifyPage]
    })
], VerifyPageModule);



/***/ }),

/***/ 80432:
/*!***************************************!*\
  !*** ./src/app/verify/verify.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyPage": () => (/* binding */ VerifyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_verify_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./verify.page.html */ 85516);
/* harmony import */ var _verify_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify.page.scss */ 18793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ 35881);








let VerifyPage = class VerifyPage {
    constructor(navctrl, alert, service, activRout) {
        this.navctrl = navctrl;
        this.alert = alert;
        this.service = service;
        this.activRout = activRout;
        this.logindata = localStorage.getItem("Marketplace_Sign");
        console.log(this.logindata);
        var ddd = activRout.snapshot.params['otpsend'];
        console.log(ddd);
        if (ddd == 'mobile') {
            this.showoption = 'mobile';
            this.showoptionsec = 'number';
        }
        else {
            this.showoption = 'email';
            this.showoptionsec = 'address';
        }
        // this.type = this.router.snapshot.params.type
        // console.log(this.type)
    }
    ngOnInit() {
        console.log('verfication page');
    }
    otpController(event, next, prev) {
        if (event.target.value.length < 1 && prev) {
            prev.setFocus();
        }
        else if (next && event.target.value.length > 0) {
            next.setFocus();
        }
        else {
            return 0;
        }
    }
    verify() {
        this.code = this.code1.toString() + this.code2.toString() + this.code3.toString() + this.code4.toString() + this.code5.toString() + this.code6.toString();
        this.alert.showLoader();
        var params = {
            user_id: this.logindata,
            otp: this.code
        };
        console.log(params);
        // if(this.type == 'business'){
        this.service.Verifyotp(params)
            .then((results) => this.handleVerify(results));
        // }
        // if(this.type == 'testmaker'){
        //   this.service.Verifyotp(params)
        //   .then((results) => this.handleVerify(results))
        // }
    }
    handleVerify(results) {
        console.log(results);
        this.alert.dissmissLoader();
        if (results.ResponseCode == '1') {
            // this.alert.showToast(results.ResponseMsg)
            //  this.thankyou()
            this.alert.showAlert("", "Successfully registered an account");
            this.navctrl.navigateForward('/login');
        }
        else {
            this.alert.showToast(results.ResponseMsg);
        }
    }
    back() {
        this.navctrl.pop();
    }
};
VerifyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
VerifyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-verify',
        template: _raw_loader_verify_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_verify_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VerifyPage);



/***/ }),

/***/ 18793:
/*!*****************************************!*\
  !*** ./src/app/verify/verify.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".hdrow {\n  margin: auto;\n  width: 90%;\n  color: #f9771f;\n  font-size: 24px;\n}\n\n.hdtxt {\n  text-align: center;\n  margin: auto;\n  color: #f9771f;\n  font-size: 20px;\n  font-family: Arial, sans-serif;\n}\n\n.txtparagraph {\n  text-align: center;\n  font-size: 12px;\n  font-family: Lato, sans-serif;\n  color: #a9a9a9;\n  letter-spacing: 0.33px;\n}\n\n.txtparagraph1 {\n  text-align: center;\n  font-size: 12px;\n  font-family: Lato, sans-serif;\n  color: #a9a9a9;\n  letter-spacing: 0.33px;\n  margin-top: 3px;\n}\n\n.txtparagraph2 {\n  text-align: center;\n  font-size: 12px;\n  font-family: Lato, sans-serif;\n  color: #a9a9a9;\n  letter-spacing: 0.33px;\n  margin-top: 1px;\n}\n\n.txt {\n  margin: auto;\n  text-align: center;\n  color: #ee595f;\n  font-size: 12px;\n}\n\nion-input {\n  display: inline-block;\n  width: 40px;\n  height: 45px;\n  margin: 5px;\n  border-radius: 11px;\n  text-align: center;\n  --padding-start: 0px;\n  --padding-top: 12px;\n  border: 1px solid gray;\n  color: black;\n}\n\nion-input:focus {\n  display: inline-block;\n  width: 40px;\n  height: 45px;\n  margin: 5px;\n  border-radius: 11px;\n  text-align: center;\n  --padding-start: 0px;\n  --padding-top: 12px;\n  border: 1px solid #d60c0c;\n  color: black;\n}\n\n.otprow {\n  margin: auto;\n  display: table;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBT0o7O0FBTEE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQVNKOztBQVBBO0VBQ0ksNEVBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVVKIiwiZmlsZSI6InZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGRyb3cge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGNvbG9yOiAjZjk3NzFmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5oZHR4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjb2xvcjogI2Y5NzcxZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4udHh0cGFyYWdyYXBoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNhOWE5YTk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zM3B4O1xyXG59XHJcbi50eHRwYXJhZ3JhcGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNhOWE5YTk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi50eHRwYXJhZ3JhcGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNhOWE5YTk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcbi50eHQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNlZTU5NWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbmlvbi1pbnB1dDpmb2N1cyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTQsIDEyLCAxMik7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG4ub3Rwcm93IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi5idG5jbGFzcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNDhkZWcsICNmNzhhNDYgMCUsICNlZTc4NDggMzQlLCAjZWE2YjRhIDEwMCUpO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 85516:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n    <div class=\"ht_30\"></div>\n    <ion-row class=\"hdrow\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"arrow-back-outline\" (click)=\"back()\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"hdtxt\"><b>VERIFICATION</b></div>\n      </ion-col>\n    </ion-row><br>\n\n    <div class=\"txtparagraph\">\n      An OTP has been sent to your registered {{showoption}}\n    </div>\n    <div class=\"txtparagraph1\">\n      {{showoptionsec}}, please enter the 6 digits below to verify\n    </div>\n    <div class=\"txtparagraph2\">\n      your account\n    </div><br>\n\n    <ion-row class=\"otprow\">\n      <ion-col>\n        <ion-input #otp1 type=\"number\" [(ngModel)]=\"code1\" required maxLength=\"1\" (keyup)=\"otpController($event,otp2,'')\"></ion-input>\n        <ion-input #otp2 type=\"number\" [(ngModel)]=\"code2\" required maxLength=\"1\" (keyup)=\"otpController($event,otp3,otp1)\">\n        </ion-input>\n        <ion-input #otp3 type=\"number\" [(ngModel)]=\"code3\" required maxLength=\"1\" (keyup)=\"otpController($event,otp4,otp2)\">\n        </ion-input>\n        <ion-input #otp4 type=\"number\" [(ngModel)]=\"code4\" required maxLength=\"1\" (keyup)=\"otpController($event,otp5,otp3)\">\n        </ion-input>\n        <ion-input #otp5 type=\"number\" [(ngModel)]=\"code5\" required maxLength=\"1\" (keyup)=\"otpController($event,otp6,otp4)\">\n        </ion-input>\n        <ion-input #otp6 type=\"number\" [(ngModel)]=\"code6\" required maxLength=\"1\" (keyup)=\"otpController($event,'',otp5)\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_15\"></div>\n    <div class=\"txt\">\n      Did not receive OTP? Click here to RESEND\n    </div>\n    <div class=\"ht_15\"></div>\n    <ion-button class=\"btnclass\" (click)=\"verify()\">Verify</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_verify_verify_module_ts.js.map