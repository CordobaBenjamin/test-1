(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 77991:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 43962);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 82711)).then(m => m.HomePageModule)
            },
            {
                path: 'userguide',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_userguide_userguide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../userguide/userguide.module */ 77837)).then(m => m.UserguidePageModule)
            },
            {
                path: 'chat',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../chat/chat.module */ 52312)).then(m => m.ChatPageModule)
            },
            {
                path: 'notification',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../notification/notification.module */ 92101)).then(m => m.NotificationPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 47350)).then(m => m.ProfilePageModule)
            },
            {
                path: 'addlisting',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_imagecropper_imagecropper_page_ts"), __webpack_require__.e("src_app_addlisting_addlisting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../addlisting/addlisting.module */ 63676)).then(m => m.AddlistingPageModule)
            },
            {
                path: 'mylisting',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mylisting_mylisting_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../mylisting/mylisting.module */ 99374)).then(m => m.MylistingPageModule)
            },
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 86432:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 77991);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 43962);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 43962:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 97665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 24427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 47531);





let TabsPage = class TabsPage {
    constructor(config) {
        this.config = config;
        this.config.refresh();
        console.log('tabe_badge =>', this.config.get_badge);
        this.showtab = '1';
    }
    ionViewWillEnter() {
        this.config.refresh();
        // this.showtab = '1'
        console.log('tabe_badge =>', this.config.get_badge);
    }
    tebselc(id) {
        this.showtab = id;
    }
};
TabsPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 24427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-tab-button {\n  --color: gray;\n  --color-selected: #f68546;\n}\n\n.showbagde {\n  margin-top: -2px;\n  margin-left: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBRko7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBREoiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuc2VsZWN0dGFiaWNuIHtcbi8vICAgICBjb2xvcjogI2Y2ODU0Njtcbi8vIH1cbmlvbi10YWItYnV0dG9uIHtcbiAgICAtLWNvbG9yOiBncmF5O1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICNmNjg1NDY7XG4gICB9XG4uc2hvd2JhZ2Rle1xuICAgIG1hcmdpbi10b3A6LTJweDtcbiAgICBtYXJnaW4tbGVmdDotNXB4O1xufVxuIl19 */");

/***/ }),

/***/ 97665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-tabs>\n  <!-- <ion-tab-bar slot=\"bottom\" *ngIf=\"config.logindata.type == '1' || config.logindata.type == '0'\"> -->\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\" (click)=\"tebselc('1')\">\n      <ion-icon [name]=\"(showtab == '1')?'home':'home-outline'\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"userguide\" (click)=\"tebselc('2')\">\n      <ion-icon [name]=\"(showtab == '2')?'list':'list-outline'\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"chat\" (click)=\"tebselc('3')\">\n      <ion-icon [name]=\"(showtab == '3')?'chatbubbles':'chatbubbles-outline'\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"notification\" (click)=\"tebselc('4')\">\n      <ion-badge *ngIf=\"config.get_badge > 0\" class=\"showbagde\">{{config.get_badge}}</ion-badge>\n      <ion-icon [name]=\"(showtab == '4')?'notifications':'notifications-outline'\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\" (click)=\"tebselc('5')\">\n      <ion-icon [name]=\"(showtab == '5')?'person':'person-outline'\"></ion-icon>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n  <!-- <ion-tab-bar slot=\"bottom\" *ngIf=\"config.logindata.type == '2'\">\n    <ion-tab-button tab=\"mylisting\" (click)=\"tebselc('1')\">\n      <ion-icon [name]=\"(showtab == '1')?'home':'home-outline'\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"addlisting\" (click)=\"tebselc('2')\">\n      <ion-icon [name]=\"(showtab == '2')?'list':'list-outline'\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"chat\" (click)=\"tebselc('3')\">\n      <ion-icon [name]=\"(showtab == '3')?'chatbubbles':'chatbubbles-outline'\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\" (click)=\"tebselc('5')\">\n      <ion-icon [name]=\"(showtab == '5')?'person':'person-outline'\"></ion-icon>\n    </ion-tab-button>\n\n  </ion-tab-bar> -->\n\n</ion-tabs>");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map