(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_setting_setting_module_ts"],{

/***/ 24703:
/*!***************************************************!*\
  !*** ./src/app/setting/setting-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageRoutingModule": () => (/* binding */ SettingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.page */ 84815);




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_0__.SettingPage
    }
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingPageRoutingModule);



/***/ }),

/***/ 93660:
/*!*******************************************!*\
  !*** ./src/app/setting/setting.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageModule": () => (/* binding */ SettingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-routing.module */ 24703);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page */ 84815);







let SettingPageModule = class SettingPageModule {
};
SettingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingPageRoutingModule
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_1__.SettingPage]
    })
], SettingPageModule);



/***/ }),

/***/ 84815:
/*!*****************************************!*\
  !*** ./src/app/setting/setting.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPage": () => (/* binding */ SettingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./setting.page.html */ 3536);
/* harmony import */ var _setting_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page.scss */ 40773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 47531);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 35881);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 82649);
/* harmony import */ var _logoutpop_logoutpop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logoutpop/logoutpop.component */ 32421);










let SettingPage = class SettingPage {
    constructor(navctrl, service, config, splashScreen, popover, loader) {
        this.navctrl = navctrl;
        this.service = service;
        this.config = config;
        this.splashScreen = splashScreen;
        this.popover = popover;
        this.loader = loader;
        this.config.refresh();
        this.logindata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
        this.notification = this.config.loginnotify;
        //this.notification = this.logindata.send_notification;
        this.type = this.config.logindata.type;
        console.log(this.notification);
        console.log(this.type);
    }
    ngOnInit() {
        this.getdata();
    }
    getdata() {
        this.loader.showLoader();
        this.service.Getcanfig()
            .then((result) => this.handleConfigdata(result));
    }
    handleConfigdata(result) {
        console.log(result);
        this.loader.dissmissLoader();
        if (result.ResponseCode == '1') {
            this.configdata = result.data;
        }
        else {
            this.loader.showAlert("Error", result.ResponseMsg);
        }
    }
    back() {
        this.navctrl.pop();
    }
    contact() {
        this.navctrl.navigateForward('/contact');
    }
    changepwd() {
        this.navctrl.navigateForward('/changepwd');
    }
    notify() {
        localStorage.setItem("Marketplace_Notification", JSON.stringify(this.notification));
        console.log(this.notification);
        if (this.notification == true) {
            var notification = 1;
        }
        else {
            var notification = 0;
        }
        var params = {
            user_id: this.logindata.id,
            notification: notification
        };
        console.log(params);
        this.service.Chnagenotification(params)
            .then((result) => this.handlenotification(result));
    }
    handlenotification(res) {
    }
    /*
    localStorage.setItem("Marketplace_Notification", JSON.stringify(this.notification))
    // window.location.reload();
    if (this.splashScreen) {
      this.splashScreen.show();
      window.location.reload();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 500);
    } else {
      window.location.reload();
    }
    this.config.refresh()
    */
    about(id) {
        console.log(id);
        for (var i = 0; i < this.configdata.length; i++) {
            if (id == this.configdata[i].id) {
                console.log(this.configdata[i].id);
                this.navctrl.navigateForward(['/about', { 'name': this.configdata[i].key_name, 'value': this.configdata[i].value }]);
            }
        }
    }
    editprofile() {
        this.navctrl.navigateForward(['/editbusiness', { 'type': this.type }]);
    }
    // edit(id) {
    //   console.log(this.tabactive)
    //   if (this.config.type == '1') {
    //     if (this.tabactive != '1') {
    //       this.tabactive = '1'
    //     }
    //     this.editprofile = id
    //   }
    //   if (this.type == '2') {
    //     this.navctrl.navigateForward('/editbusiness')
    //   }
    // }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const pop = yield this.popover.create({
                component: _logoutpop_logoutpop_component__WEBPACK_IMPORTED_MODULE_6__.LogoutpopComponent,
                cssClass: "logoutpopover"
            });
            pop.present();
        });
    }
};
SettingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__.SplashScreen },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
SettingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-setting',
        template: _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_setting_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingPage);



/***/ }),

/***/ 40773:
/*!*******************************************!*\
  !*** ./src/app/setting/setting.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".headericn {\n  color: gray;\n  font-size: 25px;\n}\n\n.hedertxt {\n  font-weight: bold;\n  margin-top: 5px;\n}\n\n.lbldiv {\n  font-weight: bold;\n  margin-left: 25px;\n  color: black;\n}\n\n.cardrow {\n  box-shadow: 0px 0px 10px #dddddd;\n  border-radius: 10px;\n  padding: 6px 12px;\n  padding-bottom: 10px;\n  color: black;\n  background-color: #ffffff;\n}\n\n.settingtxt {\n  margin-top: 11px;\n  font-size: 14px;\n  color: black;\n}\n\n.card {\n  border-radius: 10px;\n  box-shadow: 0px 0px 12px silver;\n  padding: 10px 5px;\n  width: 90%;\n  margin: auto;\n  color: black;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBS0o7O0FBRkE7RUFDSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUtKIiwiZmlsZSI6InNldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcmljbiB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4uaGVkZXJ0eHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmxibGRpdiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuLmNhcmRyb3cge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbn1cclxuLnNldHRpbmd0eHQge1xyXG4gICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggcmdiKDE5MiwgMTkyLCAxOTIpO1xyXG4gICAgcGFkZGluZzoxMHB4IDVweDtcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 3536:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"ht_35\"></div>\n  <ion-row class=\"row_95\">\n    <ion-col class=\"ion-no-padding text-center\" size=\"1\">\n      <ion-icon name=\"arrow-back-outline\" class=\"headericn\" (click)=\"back()\"></ion-icon>\n    </ion-col>\n    <ion-col class=\"ion-no-padding text-center\" size=\"11\">\n      <div class=\"hedertxt\">Settings</div>\n    </ion-col>\n  </ion-row>\n  <div class=\"ht_15\"></div>\n  <div class=\"lbldiv\">Account</div>\n  <div class=\"ht_20\"></div>\n  <ion-row class=\"row_90 cardrow\">\n    <ion-col size=\"9\" class=\"ion-no-padding\">\n      <div class=\"settingtxt\">Notifications</div>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-no-padding\">\n      <ion-toggle [(ngModel)]=\"notification\" (ionChange)=\"notify()\"></ion-toggle>\n    </ion-col>\n  </ion-row>\n  <div class=\"ht_20\"></div>\n  <div class=\"lbldiv\">Others</div>\n  <div class=\"ht_25\"></div>\n  <ion-card class=\"card\">\n    <div class=\"ht_10\"></div>\n    <ion-row class=\"row_90\" (click)=\"about('1')\">\n      <ion-col size=\"11\">\n        <div>Terms & Conditions</div>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_10\"></div>\n    <ion-row class=\"row_90\" (click)=\"about('2')\">\n      <ion-col size=\"11\">\n        <div>Privacy Policy</div>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_10\"></div>\n    <ion-row class=\"row_90\" (click)=\"about('3')\">\n      <ion-col size=\"11\">\n        <div>About Us</div>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_10\"></div>\n    <ion-row class=\"row_90\" (click)=\"about('4')\">\n      <ion-col size=\"11\">\n        <div>FAQs</div>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_10\"></div>\n    <ion-row class=\"row_90\" (click)=\"contact()\">\n      <ion-col size=\"11\">\n        <div>Contact Form</div>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_10\"></div>\n    <ion-row class=\"row_90\" (click)=\"changepwd()\">\n      <ion-col size=\"11\">\n        <div>Change Password</div>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_10\"></div>\n    <ion-row class=\"row_90\" (click)=\"editprofile()\">\n      <ion-col size=\"11\">\n        <div>Edit Profile</div>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_10\"></div>\n    <ion-row class=\"row_90\" (click)=\"logout()\">\n      <ion-col size=\"11\">\n        <div>Logout</div>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_setting_setting_module_ts.js.map