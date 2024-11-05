(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_report_report_module_ts"],{

/***/ 47680:
/*!*************************************************!*\
  !*** ./src/app/report/report-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPageRoutingModule": () => (/* binding */ ReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.page */ 114);




const routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_0__.ReportPage
    }
];
let ReportPageRoutingModule = class ReportPageRoutingModule {
};
ReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportPageRoutingModule);



/***/ }),

/***/ 22229:
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPageModule": () => (/* binding */ ReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-routing.module */ 47680);
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.page */ 114);







let ReportPageModule = class ReportPageModule {
};
ReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportPageRoutingModule
        ],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_1__.ReportPage]
    })
], ReportPageModule);



/***/ }),

/***/ 114:
/*!***************************************!*\
  !*** ./src/app/report/report.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPage": () => (/* binding */ ReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./report.page.html */ 5984);
/* harmony import */ var _report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.page.scss */ 53445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ 35881);








let ReportPage = class ReportPage {
    constructor(service, router, navctrl, loader) {
        this.service = service;
        this.router = router;
        this.navctrl = navctrl;
        this.loader = loader;
        this.logindata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
        console.log(this.logindata);
        this.report_user_id = this.router.snapshot.params.report_id;
        console.log(this.report_user_id);
    }
    ngOnInit() {
        this.getreason();
    }
    back() {
        this.navctrl.pop();
    }
    login() {
        this.navctrl.navigateRoot('/login');
    }
    getreason() {
        this.service.GetReportreason()
            .then((results) => this.hadleReason(results));
    }
    hadleReason(results) {
        console.log(results);
        if (results.ResponseCode == '1') {
            this.reason = results.data;
        }
        else {
            this.loader.showAlert("Error", results.ResponseMsg);
        }
    }
    send() {
        this.loader.showLoader();
        var params = {
            user_id: this.logindata.id,
            reported_user_id: this.report_user_id,
            type: this.type,
            comment: this.comment
        };
        console.log(params);
        this.service.Report(params)
            .then((results) => this.handleReport(results));
    }
    handleReport(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.loader.showToast("Successfully Reported");
            this.navctrl.navigateForward('/home');
        }
        else {
            this.loader.showAlert("Error", results.ResponseMsg);
        }
    }
};
ReportPage.ctorParameters = () => [
    { type: _service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService }
];
ReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-report',
        template: _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReportPage);



/***/ }),

/***/ 53445:
/*!*****************************************!*\
  !*** ./src/app/report/report.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".headericn {\n  color: gray;\n  font-size: 25px;\n}\n\n.hedertxt {\n  font-weight: bold;\n  margin-top: 5px;\n  text-align: center;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\nion-select {\n  width: 100%;\n}\n\nion-select::part(text) {\n  white-space: normal !important;\n  transform: none !important;\n}\n\n.commentbox {\n  width: 90%;\n  height: 125px;\n  background-color: #fbf7f4;\n  margin: auto;\n  border: 1px solid #b3b3b3;\n  color: #000000;\n}\n\n.alert-wrapper.sc-ion-alert-md {\n  width: 100% !important;\n}\n\n.alert-radio-icon.sc-ion-alert-md {\n  left: 17px;\n}\n\n.alert-radio-label.sc-ion-alert-md {\n  padding-inline-start: 31px !important;\n  padding-inline-end: 26px;\n}\n\n.alert-radio-label.sc-ion-alert-md {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLDRFQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7QUFJSjs7QUFGQTtFQUNJLDhCQUFBO0VBQ0EsMEJBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkE7RUFDSSxzQkFBQTtBQU9KOztBQUxBO0VBQ0ksVUFBQTtBQVFKOztBQU5BO0VBRUkscUNBQUE7RUFFQyx3QkFBQTtBQVNMOztBQVBBO0VBQ0kscUJBQUE7QUFVSiIsImZpbGUiOiJyZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcmljbiB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4uaGVkZXJ0eHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ0bmNsYXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI0OGRlZywgI2Y3OGE0NiAwJSwgI2VlNzg0OCAzNCUsICNlYTZiNGEgMTAwJSk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbmlvbi1zZWxlY3R7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbW1lbnRib3h7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OjEyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmJmN2Y0O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigxNzksIDE3OSwgMTc5KTtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIHtcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgbGVmdDogMTdweDtcclxufVxyXG4uYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1kIHtcclxuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMzFweDtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAzMXB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMjZweDtcclxuICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDI2cHg7IFxyXG59XHJcbi5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59Il19 */");

/***/ }),

/***/ 5984:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div *ngIf=\"logindata.id == '0'\">\n    <div class=\"ht_15\"></div>\n    <div class=\"ht_300\"></div>\n    <div class=\"notlogin\">Please Login as the Individual in app</div>\n    <div class=\"ht_5\"></div>\n    <ion-button class=\"loginbtnclass\" (click)=\"login()\">Login</ion-button>\n  </div>\n\n  <div *ngIf=\"logindata.id != '0'\">\n    <div class=\"ht_40\"></div>\n    <ion-row class=\"row_95\">\n      <ion-col class=\"ion-no-padding text-center\" size=\"1\">\n        <ion-icon name=\"arrow-back-outline\" class=\"headericn\" (click)=\"back()\"></ion-icon>\n      </ion-col>\n      <ion-col class=\"ion-no-padding text-center\" size=\"11\">\n        <div class=\"hedertxt\">Report</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Reason</div>\n    <ion-item class=\"inputitem\">\n      <ion-select [(ngModel)]=\"type\" placeholde=\"Select Type\">\n        <ion-select-option *ngFor=\"let types of reason\" value=\"{{types.reason}}\">{{types.reason}}</ion-select-option>\n      </ion-select>\n      <!-- <ion-input type=\"text\" [(ngModel)]=\"type\"></ion-input> -->\n      <!-- <ion-icon slot=\"end\" name=\"mail-outline\" class=\"logoicn\"></ion-icon> -->\n    </ion-item>\n    <div class=\"ht_20\"></div>\n    <div class=\"labeldiv\">Comment</div>\n    <div class=\"ht_10\"></div>\n    <!-- <ion-item class=\"inputitem\"> -->\n      <ion-textarea type=\"text\" class=\"commentbox\" placeholder=\"Type your comment here\" [(ngModel)]=\"comment\"></ion-textarea>\n      <!-- <ion-icon slot=\"end\" name=\"eye-outline\" class=\"logoicn\"></ion-icon> -->\n    <!-- </ion-item> -->\n    <div class=\"ht_25\"></div>\n    <ion-button class=\"btnclass\" (click)=\"send()\">Send</ion-button>\n </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_report_report_module_ts.js.map