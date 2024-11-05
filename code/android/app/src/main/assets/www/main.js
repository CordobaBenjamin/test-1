(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 70809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 86432)).then(m => m.TabsPageModule)
    },
    {
        path: 'snap',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_snap_snap_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./snap/snap.module */ 89652)).then(m => m.SnapPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 77641)).then(m => m.LoginPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 47350)).then(m => m.ProfilePageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 82711)).then(m => m.HomePageModule)
    },
    {
        path: 'getstarted',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_getstarted_getstarted_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./getstarted/getstarted.module */ 77234)).then(m => m.GetstartedPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 56650)).then(m => m.SignupPageModule)
    },
    {
        path: 'menu',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_menu_menu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./menu/menu.module */ 7056)).then(m => m.MenuPageModule)
    },
    {
        path: 'userguide',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_userguide_userguide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./userguide/userguide.module */ 77837)).then(m => m.UserguidePageModule)
    },
    {
        path: 'chat',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chat/chat.module */ 52312)).then(m => m.ChatPageModule)
    },
    {
        path: 'chatdetail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chatdetail_chatdetail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chatdetail/chatdetail.module */ 29994)).then(m => m.ChatdetailPageModule)
    },
    {
        path: 'makeoffer',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./makeoffer/makeoffer.module */ 51291)).then(m => m.MakeofferPageModule)
    },
    {
        path: 'userchat',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_userchat_userchat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./userchat/userchat.module */ 15304)).then(m => m.UserchatPageModule)
    },
    {
        path: 'setting',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_setting_setting_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./setting/setting.module */ 93660)).then(m => m.SettingPageModule)
    },
    {
        path: 'detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_detail_detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./detail/detail.module */ 76736)).then(m => m.DetailPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 92101)).then(m => m.NotificationPageModule)
    },
    {
        path: 'contact',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./contact/contact.module */ 64651)).then(m => m.ContactPageModule)
    },
    {
        path: 'changepwd',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_changepwd_changepwd_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./changepwd/changepwd.module */ 8046)).then(m => m.ChangepwdPageModule)
    },
    {
        path: 'addlisting',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_imagecropper_imagecropper_page_ts"), __webpack_require__.e("src_app_addlisting_addlisting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./addlisting/addlisting.module */ 63676)).then(m => m.AddlistingPageModule)
    },
    {
        path: 'mylisting',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mylisting_mylisting_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mylisting/mylisting.module */ 99374)).then(m => m.MylistingPageModule)
    },
    {
        path: 'editlist',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_imagecropper_imagecropper_page_ts"), __webpack_require__.e("src_app_editlist_editlist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./editlist/editlist.module */ 75174)).then(m => m.EditlistPageModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 45938)).then(m => m.AboutPageModule)
    },
    {
        path: 'filter',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./filter/filter.module */ 85254)).then(m => m.FilterPageModule)
    },
    {
        path: 'country',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_country_country_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./country/country.module */ 95447)).then(m => m.CountryPageModule)
    },
    {
        path: 'chatmenu',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./chatmenu/chatmenu.module */ 80001)).then(m => m.ChatmenuPageModule)
    },
    {
        path: 'report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_report_report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./report/report.module */ 22229)).then(m => m.ReportPageModule)
    },
    {
        path: 'userfilter',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./userfilter/userfilter.module */ 34217)).then(m => m.UserfilterPageModule)
    },
    {
        path: 'editbusiness',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_editbusiness_editbusiness_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./editbusiness/editbusiness.module */ 4141)).then(m => m.EditbusinessPageModule)
    },
    {
        path: 'verify',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_verify_verify_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./verify/verify.module */ 36936)).then(m => m.VerifyPageModule)
    },
    {
        path: 'chatprofile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chatprofile_chatprofile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chatprofile/chatprofile.module */ 86620)).then(m => m.ChatprofilePageModule)
    },
    {
        path: 'notificationdetail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notificationdetail_notificationdetail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notificationdetail/notificationdetail.module */ 37881)).then(m => m.NotificationdetailPageModule)
    },
    {
        path: 'sociallogin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sociallogin_sociallogin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sociallogin/sociallogin.module */ 61243)).then(m => m.SocialloginPageModule)
    },
    {
        path: 'searchpage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_searchpage_searchpage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./searchpage/searchpage.module */ 55265)).then(m => m.SearchpagePageModule)
    },
    {
        path: 'imagezoom',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./imagezoom/imagezoom.module */ 26936)).then(m => m.ImagezoomPageModule)
    },
    {
        path: 'imagecropper',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_imagecropper_imagecropper_page_ts"), __webpack_require__.e("src_app_imagecropper_imagecropper_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./imagecropper/imagecropper.module */ 28972)).then(m => m.ImagecropperPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 20721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ 59107);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ 34052);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service.service */ 35881);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ 47531);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 82649);











const firebaseConfig = {
    apiKey: "AIzaSyApvq9KgE_zITOljcBjdGEzZAAAIdcw1ag",
    authDomain: "marketplace-e5d6c.firebaseapp.com",
    projectId: "marketplace-e5d6c",
    storageBucket: "marketplace-e5d6c.appspot.com",
    messagingSenderId: "705742781820",
    appId: "1:705742781820:web:13da2156245fe3f199b8f9",
    measurementId: "G-QF0BJ40W2L"
};
firebase__WEBPACK_IMPORTED_MODULE_3__.default.initializeApp(firebaseConfig);
firebase__WEBPACK_IMPORTED_MODULE_3__.default.analytics();
let AppComponent = class AppComponent {
    constructor(platform, navCtrl, router, config, splashScreen, alertctrl, service, oneSignal) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.router = router;
        this.config = config;
        this.splashScreen = splashScreen;
        this.alertctrl = alertctrl;
        this.service = service;
        this.oneSignal = oneSignal;
        this.config.refresh();
        if (this.config.loginnotify == null) {
            localStorage.setItem("Marketplace_Notification", JSON.stringify(true));
            this.config.refresh();
        }
        this.intializeApp();
        if (this.config.logindata) {
            this.getcounter("");
            this.getnotify("");
        }
    }
    intializeApp() {
        this.platform.ready().then(() => {
            setTimeout(() => {
                this.splashScreen.hide();
            }, 300);
            if (this.platform.is('cordova')) {
                console.log('loginnotify =>', this.config.loginnotify);
                console.log('loginnotify =>', this.config.loginnotify);
                this.oneSignal.startInit('869ab27b-b390-4079-9837-07ce4697bbe3', '705742781820');
                this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
                if (this.config.loginnotify == true) {
                    console.log('notify', this.oneSignal.OSInFocusDisplayOption.Notification);
                    console.log('notify', this.oneSignal.handleNotificationReceived());
                    this.oneSignal.setSubscription(true);
                    this.oneSignal.handleNotificationReceived().subscribe((jsonData) => {
                        console.log('jsondata =>', jsonData);
                        this.notifytitle = jsonData.payload.title;
                        this.getnotify(jsonData.payload.title);
                        this.getcounter(jsonData.payload.title);
                        if (jsonData.payload.title == "Your offer Canceled " || jsonData.payload.title.startsWith("You have a new offer") || jsonData.payload.title.startsWith('New chat message')) {
                            // if (jsonData.payload.title == "Your offer Canceled " || jsonData.payload.title == "You have a new offer") {
                            this.openchat(jsonData.payload.title);
                        }
                        else if (jsonData.payload.title == "Your offer Rejected ") {
                            this.openchat(jsonData.payload.title);
                        }
                        else if (jsonData.payload.title == "Your offer Accepted ") {
                            this.openchat(jsonData.payload.title);
                        }
                        else {
                            this.openmsg(jsonData.payload.title);
                        }
                        console.log('notificationtitle =>', jsonData.payload.title);
                    });
                    this.oneSignal.handleNotificationOpened().subscribe((jsonData) => {
                        console.log('openjsondata =>', jsonData);
                        if (jsonData.notification.payload.title == "Your offer Canceled " ||
                            jsonData.notification.payload.title.startsWith("You have a new offer") ||
                            jsonData.notification.payload.title.startsWith('New chat message') ||
                            jsonData.notification.payload.title == "Your offer Rejected " ||
                            jsonData.notification.payload.title == "Your offer Accepted ") {
                            this.navCtrl.navigateForward('/chat');
                            // this.openmsg(jsonData.notification.payload.title)
                            // alert(jsonData.notification.payload.body)
                        }
                        else {
                            this.navCtrl.navigateForward('/notification');
                        }
                    });
                    this.oneSignal.endInit();
                }
                else {
                    this.oneSignal.setSubscription(false);
                    this.oneSignal.clearOneSignalNotifications();
                }
            }
            else {
                console.log('not cordova');
            }
            // if (this.config.logindata) {
            // } else {
            //   this.navCtrl.navigateRoot('/snap')
            // }
        });
        if (this.config.logindata) {
            this.navCtrl.navigateRoot('/home');
        }
        else {
            this.navCtrl.navigateRoot('/snap');
        }
    }
    getnotify(notification) {
        // console.log('notification = > ', notification)
        // if (notification != "" || ) {
        //   this.openmsg(notification)
        // }
        var params = {
            user_id: this.config.logindata.id
        };
        console.log(params);
        this.service.Notification(params)
            .then((results) => this.handleNotification(results));
    }
    handleNotification(results) {
        console.log(results);
        if (results.ResponseCode == '1') {
            this.badge_number = results.data.length;
            const get_badge = localStorage.getItem("Notification_Badge");
            const receive_badge = localStorage.getItem("Receive_Badge");
            console.log('get', get_badge);
            console.log('receive', receive_badge);
            if (get_badge) {
                if (this.badge_number != parseFloat(receive_badge)) {
                    this.badge_number = this.badge_number - parseFloat(receive_badge);
                    console.log('getbadge', get_badge);
                    localStorage.setItem("Notification_Badge", JSON.stringify(this.badge_number));
                    this.config.refresh();
                }
            }
            else {
                localStorage.setItem("Notification_Badge", JSON.stringify(this.badge_number));
                this.config.refresh();
            }
        }
    }
    getcounter(notification) {
        // console.log('notification = > ', notification)
        // if (notification != "") {
        //   this.openchat(notification)
        // }
        var params = {
            id: this.config.logindata.id
        };
        console.log(params);
        this.service.Getcounter(params)
            .then((results) => this.handlecounter(results));
    }
    handlecounter(results) {
        console.log('getcounte =>', results);
        this.counter = parseFloat(results.counter);
        localStorage.setItem("chat_Badge", JSON.stringify(this.counter));
        this.config.refresh();
    }
    openmsg(notification) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertctrl.create({
                header: '',
                // subHeader: Subtitle,
                message: notification,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.navCtrl.navigateForward('/notification');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openchat(notification) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!notification.startsWith('New chat message')) {
                const alert = yield this.alertctrl.create({
                    header: '',
                    // subHeader: Subtitle,
                    message: notification,
                    buttons: [
                        {
                            text: 'Ok',
                            handler: () => {
                                this.navCtrl.navigateForward('/chat');
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__.SplashScreen },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__.OneSignal }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 50023:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 93220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 70809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 20721);
/* harmony import */ var _logoutpop_logoutpop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logoutpop/logoutpop.component */ 32421);
/* harmony import */ var _makeoffer_makeoffer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makeoffer/makeoffer.module */ 51291);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 45103);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 61281);
/* harmony import */ var _filter_filter_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter/filter.module */ 85254);
/* harmony import */ var _chatmenu_chatmenu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chatmenu/chatmenu.module */ 80001);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 27570);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 44423);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 49704);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 79051);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ 5901);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 33606);
/* harmony import */ var _userfilter_userfilter_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./userfilter/userfilter.module */ 34217);
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.module */ 64651);
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ 59107);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 82649);
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-text-mask */ 90415);
/* harmony import */ var _imagezoom_imagezoom_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./imagezoom/imagezoom.module */ 26936);


























// import { SignInWithApple  } from '@ionic-native/sign-in-with-apple/ngx';
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _logoutpop_logoutpop_component__WEBPACK_IMPORTED_MODULE_2__.LogoutpopComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
            _makeoffer_makeoffer_module__WEBPACK_IMPORTED_MODULE_3__.MakeofferPageModule,
            _filter_filter_module__WEBPACK_IMPORTED_MODULE_6__.FilterPageModule,
            _chatmenu_chatmenu_module__WEBPACK_IMPORTED_MODULE_7__.ChatmenuPageModule,
            _userfilter_userfilter_module__WEBPACK_IMPORTED_MODULE_14__.UserfilterPageModule,
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__.TextMaskModule,
            _imagezoom_imagezoom_module__WEBPACK_IMPORTED_MODULE_19__.ImagezoomPageModule,
            _contact_contact_module__WEBPACK_IMPORTED_MODULE_15__.ContactPageModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonicRouteStrategy },
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera,
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_11__.Crop,
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__.ImagePicker,
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__.File,
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__.GooglePlus,
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__.Facebook,
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_16__.OneSignal,
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__.SocialSharing,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_17__.SplashScreen,
            // SignInWithApple,
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__.FileTransfer,],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 9786:
/*!*****************************************************!*\
  !*** ./src/app/chatmenu/chatmenu-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatmenuPageRoutingModule": () => (/* binding */ ChatmenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _chatmenu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatmenu.page */ 83114);




const routes = [
    {
        path: '',
        component: _chatmenu_page__WEBPACK_IMPORTED_MODULE_0__.ChatmenuPage
    }
];
let ChatmenuPageRoutingModule = class ChatmenuPageRoutingModule {
};
ChatmenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatmenuPageRoutingModule);



/***/ }),

/***/ 80001:
/*!*********************************************!*\
  !*** ./src/app/chatmenu/chatmenu.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatmenuPageModule": () => (/* binding */ ChatmenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _chatmenu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatmenu-routing.module */ 9786);
/* harmony import */ var _chatmenu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatmenu.page */ 83114);







let ChatmenuPageModule = class ChatmenuPageModule {
};
ChatmenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chatmenu_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatmenuPageRoutingModule
        ],
        declarations: [_chatmenu_page__WEBPACK_IMPORTED_MODULE_1__.ChatmenuPage]
    })
], ChatmenuPageModule);



/***/ }),

/***/ 83114:
/*!*******************************************!*\
  !*** ./src/app/chatmenu/chatmenu.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatmenuPage": () => (/* binding */ ChatmenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_chatmenu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chatmenu.page.html */ 87807);
/* harmony import */ var _chatmenu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatmenu.page.scss */ 13684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);





let ChatmenuPage = class ChatmenuPage {
    constructor(modalctrl, navctrl, navparams) {
        this.modalctrl = modalctrl;
        this.navctrl = navctrl;
        this.navparams = navparams;
        this.userstatus = this.navparams.get('usrstatus');
        this.userid = this.navparams.get('user_id');
        this.service_id = this.navparams.get('service_id');
        console.log(this.userstatus);
    }
    ngOnInit() {
    }
    block(id) {
        this.modalctrl.dismiss(id);
    }
    report() {
        this.modalctrl.dismiss();
        this.navctrl.navigateForward(['/report', { 'report_id': this.service_id }]);
    }
    dis() {
        this.modalctrl.dismiss();
    }
};
ChatmenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams }
];
ChatmenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-chatmenu',
        template: _raw_loader_chatmenu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chatmenu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatmenuPage);



/***/ }),

/***/ 47531:
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 31887);



let ConfigService = class ConfigService {
    constructor(http) {
        this.http = http;
        this.url = "https://appdevelopmentsingapore.com/marketplace/api/";
    }
    refresh() {
        this.logindata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
        this.loginnotify = JSON.parse(localStorage.getItem("Marketplace_Notification"));
        this.get_badge = localStorage.getItem("Notification_Badge");
        this.counter = localStorage.getItem("chat_Badge");
        console.log(this.logindata);
        console.log(this.loginnotify);
        console.log('notification-number =>', this.get_badge);
        console.log('chat-number =>', this.counter);
    }
};
ConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ConfigService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ConfigService);



/***/ }),

/***/ 41645:
/*!***************************************************!*\
  !*** ./src/app/contact/contact-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageRoutingModule": () => (/* binding */ ContactPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.page */ 2915);




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_0__.ContactPage
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ 64651:
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageModule": () => (/* binding */ ContactPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-routing.module */ 41645);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page */ 2915);







let ContactPageModule = class ContactPageModule {
};
ContactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactPageRoutingModule
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_1__.ContactPage]
    })
], ContactPageModule);



/***/ }),

/***/ 2915:
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact.page.html */ 99993);
/* harmony import */ var _contact_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page.scss */ 74396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ 35881);







let ContactPage = class ContactPage {
    constructor(navctrl, service, loader) {
        this.navctrl = navctrl;
        this.service = service;
        this.loader = loader;
        this.logindata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
        console.log(this.logindata);
    }
    ngOnInit() {
    }
    back() {
        this.navctrl.pop();
    }
    submit() {
        this.loader.showLoader();
        var params = {
            user_id: this.logindata.id,
            type: this.type,
            description: this.description
        };
        console.log(params);
        this.service.Contact(params)
            .then((result) => this.handleContact(result));
    }
    handleContact(result) {
        console.log(result);
        this.loader.dissmissLoader();
        if (result.ResponseCode == '1') {
            this.loader.showToast("Thank you for your feedback! We will get back to you soon");
            this.navctrl.navigateForward('/setting');
        }
        else {
            this.loader.showAlert("Error", result.ResponseMsg);
        }
    }
};
ContactPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService }
];
ContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-contact',
        template: _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactPage);



/***/ }),

/***/ 26482:
/*!*****************************************!*\
  !*** ./src/app/country/country.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryPage": () => (/* binding */ CountryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_country_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./country.page.html */ 57188);
/* harmony import */ var _country_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country.page.scss */ 13956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);





let CountryPage = class CountryPage {
    constructor(modalctrl, navparam) {
        this.modalctrl = modalctrl;
        this.navparam = navparam;
        this.cname = this.navparam.get('country');
        this.selected = this.cname;
    }
    ngOnInit() {
        fetch('./assets/country/country.json').then(res => res.json())
            .then(json => {
            this.country = json;
            console.log(this.country);
        });
    }
    search(ev) {
        this.data = this.country;
        console.log(this.data);
        let q = ev.target.value;
        console.log(q);
        if (q && q.trim() != '') {
            this.data = this.data.filter((result) => {
                this.res = result;
                return (result.name.toLowerCase().indexOf(q.toLowerCase()) > -1);
            });
        }
        // else {
        //   this.data = []
        // }
    }
    select(id) {
        this.value = id;
        var data = { id: id };
        console.log(data);
        // this.modalctrl.dismiss(data)
    }
    dimissok() {
        var data = { id: this.value };
        console.log(data);
        this.modalctrl.dismiss(data);
    }
    cancel() {
        this.modalctrl.dismiss();
    }
};
CountryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams }
];
CountryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-country',
        template: _raw_loader_country_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_country_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CountryPage);



/***/ }),

/***/ 323:
/*!*************************************************!*\
  !*** ./src/app/filter/filter-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPageRoutingModule": () => (/* binding */ FilterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.page */ 66955);




const routes = [
    {
        path: '',
        component: _filter_page__WEBPACK_IMPORTED_MODULE_0__.FilterPage
    }
];
let FilterPageRoutingModule = class FilterPageRoutingModule {
};
FilterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FilterPageRoutingModule);



/***/ }),

/***/ 85254:
/*!*****************************************!*\
  !*** ./src/app/filter/filter.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPageModule": () => (/* binding */ FilterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _filter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-routing.module */ 323);
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.page */ 66955);







let FilterPageModule = class FilterPageModule {
};
FilterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _filter_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilterPageRoutingModule
        ],
        declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_1__.FilterPage]
    })
], FilterPageModule);



/***/ }),

/***/ 66955:
/*!***************************************!*\
  !*** ./src/app/filter/filter.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPage": () => (/* binding */ FilterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_filter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./filter.page.html */ 11686);
/* harmony import */ var _filter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.page.scss */ 32957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _country_country_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../country/country.page */ 26482);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 35881);








let FilterPage = class FilterPage {
    constructor(modalctrl, service, navparams, loader) {
        this.modalctrl = modalctrl;
        this.service = service;
        this.navparams = navparams;
        this.loader = loader;
        this.valuepass = '1';
        this.categonmry = 'all';
        this.selecallt = '2';
        this.setcondition = 'new';
        this.setcondition1 = 'used';
        this.setcondition2 = 'refurbished';
        this.settype = 'for sale';
        this.settype1 = 'for rent';
        this.logindata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
        console.log(this.logindata);
        this.searchtxt = this.navparams.get('txt');
        this.category = this.navparams.get('cat_id');
        this.filterdata = this.navparams.get('filterdata');
        console.log(this.filterdata);
        if (this.filterdata) {
            this.category = this.filterdata.category.split(',');
            this.min_price = this.filterdata.min_price;
            this.max_price = this.filterdata.max_price;
            this.location = this.filterdata.location;
            if (this.filterdata.type == 'all') {
                this.settype = 'for sale';
                this.settype1 = 'for rent';
            }
            else {
                var settype = this.filterdata.type.split(',');
                if (settype) {
                    this.settype = settype[0];
                    this.settype1 = settype[1];
                }
            }
            var setcondition = this.filterdata.condition.split(',');
            if (setcondition) {
                this.setcondition = setcondition[0];
                this.setcondition1 = setcondition[1];
                this.setcondition2 = setcondition[2];
            }
            this.sortby = this.filterdata.sortby;
        }
        if (this.category == '0') {
            this.category = 'all';
            // this.cat = ['1', '2', '3', '4', '5', '6']
        }
        else {
            this.cat = this.category;
        }
        console.log(this.category);
        console.log(this.searchtxt);
        console.log(this.filterdata);
    }
    ngOnInit() {
        this.getcategory();
        fetch('./assets/country/country.json').then(res => res.json())
            .then(json => {
            this.allcountry = json;
            for (var i = 0; i < this.allcountry.length; i++) {
                if (this.location == this.allcountry[i].name) {
                    this.location = this.allcountry[i].name;
                }
            }
            console.log(this.allcountry);
        });
    }
    getcategory() {
        this.loader.showLoader();
        this.service.Getcategory()
            .then((results) => this.handleCategory(results));
    }
    handleCategory(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.allcategory = results.data;
            for (let x of results.data) {
                x['select'] = true;
                x['selecvalut'] = '1';
            }
            for (var i = 0; i < this.allcategory.length; i++) {
                if (this.cat_id == this.allcategory[i].id) {
                    this.category.push(this.allcategory[i].id);
                }
            }
            this.selectall();
        }
    }
    decimalvalidate(ev) {
        var regexp = /^\d+\.\d{2}$/;
        regexp.test(this.min_price);
        console.log(regexp.test(this.min_price));
        if (regexp.test(this.min_price) == true) {
            ev.preventDefault();
        }
    }
    max_pricedecimalvalidate(ev) {
        var regexp = /^\d+\.\d{2}$/;
        regexp.test(this.max_price);
        console.log(regexp.test(this.max_price));
        if (regexp.test(this.max_price) == true) {
            ev.preventDefault();
        }
    }
    enterprice(ev) {
        const pattern = /[0-9.,]/;
        let inputchar = String.fromCharCode(ev.charCode);
        if (!pattern.test(inputchar)) {
            ev.preventDEfault();
        }
    }
    sort(id) {
        this.sortby = id;
    }
    condition(id) {
        if (this.setcondition) {
            this.setcondition = '';
        }
        else {
            this.setcondition = id;
        }
    }
    conditionn(id) {
        if (this.setcondition1) {
            this.setcondition1 = '';
        }
        else {
            this.setcondition1 = id;
        }
    }
    conditioon(id) {
        if (this.setcondition2) {
            this.setcondition2 = '';
        }
        else {
            this.setcondition2 = id;
        }
    }
    type(id) {
        if (this.settype) {
            this.settype = '';
        }
        else {
            this.settype = id;
        }
    }
    type1(id) {
        if (this.settype1) {
            this.settype1 = '';
        }
        else {
            this.settype1 = id;
        }
    }
    cancel() {
        this.modalctrl.dismiss();
    }
    validate() {
        if (!this.category) {
            this.loader.showAlert("Error", "Please select Category");
            return false;
        }
        return true;
    }
    selectall() {
        console.log(this.category);
        if (this.category == 'all') {
            this.cat = [];
            for (var i = 0; i < this.allcategory.length; i++) {
                this.cat.push(this.allcategory[i].id);
                this.allcategory[i].select = true;
            }
        }
        else {
            this.cat = this.category;
        }
        console.log(this.cat);
    }
    allclick() {
        if (this.valuepass == '1') {
            this.valuepass = '2';
            console.log(this.category);
        }
        else {
            this.valuepass = '1';
            console.log(this.category);
        }
    }
    opennew() {
        this.valuepass = '2';
    }
    reset() {
        this.min_price = '';
        this.max_price = '';
        this.location = '';
        this.setcondition = 'new';
        this.setcondition1 = 'used';
        this.setcondition2 = 'refurbished';
        this.settype = 'for sale';
        this.settype1 = 'for rent';
        this.sortby = '';
    }
    getcountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loader.showLoader();
            const modalctrl = yield this.modalctrl.create({
                component: _country_country_page__WEBPACK_IMPORTED_MODULE_2__.CountryPage,
                cssClass: "backmodal",
            });
            modalctrl.onDidDismiss().then((result) => {
                if (result.data) {
                    this.location = result.data.id.name;
                    console.log(this.location);
                }
            });
            this.loader.dissmissLoader();
            yield modalctrl.present();
        });
    }
    apply() {
        if (this.location == 'All') {
            this.location = "";
        }
        var selecondi = [];
        console.log(this.setcondition);
        if (this.setcondition) {
            selecondi.push(this.setcondition);
        }
        if (this.setcondition1) {
            selecondi.push(this.setcondition1);
        }
        if (this.setcondition2) {
            selecondi.push(this.setcondition2);
        }
        console.log(selecondi);
        var selecpass;
        if (selecondi.length == 3) {
            //   selecpass = 'all'
            // } else {
            //   if (selecondi.length > 0) {
            selecpass = selecondi.toString();
            // }
        }
        else {
            selecpass = selecondi.toString();
        }
        console.log(selecpass);
        var styp = [];
        if (this.settype) {
            styp.push(this.settype);
        }
        if (this.settype1) {
            styp.push(this.settype1);
        }
        var stypepass;
        if (styp.length == 2) {
            stypepass = 'all';
        }
        else {
            if (styp.length > 0) {
                stypepass = styp.toString();
            }
        }
        console.log(this.cat);
        console.log(this.category);
        var catpass;
        this.cat = [];
        // if (this.category == 'all') {
        //   catpass = 'all'
        // } else {
        //   catpass = this.cat.toString()
        // }
        console.log(this.allcategory);
        if (this.selecallt == '2') {
            catpass = 'all';
        }
        else {
            for (var i = 0; i < this.allcategory.length; i++) {
                if (this.allcategory[i].selecvalut == '2') {
                    this.cat.push(this.allcategory[i].id);
                }
            }
            catpass = this.cat.toString();
        }
        if (this.validate()) {
            this.loader.showLoader();
            var params = {
                category: catpass || '',
                min_price: this.min_price || '',
                max_price: this.max_price || '',
                user_id: this.logindata.id,
                location: this.location || '',
                type: stypepass || '',
                condition: selecpass || '',
                sortby: this.sortby || '',
                txt: this.searchtxt || ''
            };
            console.log(params);
            this.service.Filter(params)
                .then((results) => this.handleFilter(results, params));
        }
    }
    handleFilter(results, params) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.data = results.data;
            var data = {
                filterdata: params,
                data: this.data,
                category: this.cat
            };
            this.modalctrl.dismiss(data);
        }
        else {
            var data = {
                filterdata: params,
                data: this.data,
                category: this.cat
            };
            this.modalctrl.dismiss(data);
            this.loader.showAlert("Error", results.ResponseMsg);
        }
    }
    selecdftall() {
        if (this.selecallt == '1') {
            this.selecallt = '2';
            // if (this.allcategory) {
            //   for (var i = 0; i < this.allcategory.length; i++) {
            //     this.allcategory[i].selecvalut = '2'
            //   }
            // }
        }
        else {
            this.selecallt = '1';
            // if (this.allcategory) {
            //   for (var i = 0; i < this.allcategory.length; i++) {
            //     this.allcategory[i].selecvalut = '1'
            //   }
            // }
        }
        if (this.allcategory) {
            for (var i = 0; i < this.allcategory.length; i++) {
                this.allcategory[i].selecvalut = '1';
            }
        }
    }
    selectonebyone(id) {
        console.log(id);
        if (this.selecallt == '2') {
            this.selecallt = '1';
        }
        if (this.allcategory[id].selecvalut == '1') {
            this.allcategory[id].selecvalut = '2';
        }
        else {
            this.allcategory[id].selecvalut = '1';
        }
        // this.checkfung()
    }
    checkfung() {
        for (var i = 0; i < this.allcategory.length; i++) {
            if (this.allcategory[i].selecvalut == '1') {
                this.selecallt = '1';
            }
        }
    }
    coselmodl() {
        this.valuepass = '1';
        var apsfg = [];
        var idfpu = [];
        if (this.selecallt == '2') {
            apsfg.push('all');
            for (var i = 0; i < this.allcategory.length; i++) {
                // if (this.allcategory[i].selecvalut == '2') {
                // apsfg.push(this.allcategory[i].name)
                idfpu.push(this.allcategory[i].id);
                // }
            }
        }
        if (this.selecallt == '1') {
            for (var i = 0; i < this.allcategory.length; i++) {
                if (this.allcategory[i].selecvalut == '2') {
                    apsfg.push(this.allcategory[i].name);
                    idfpu.push(this.allcategory[i].id);
                }
            }
        }
        this.categonmry = apsfg.toString();
        this.category = idfpu.toString();
    }
    cancoselmodl() {
        this.valuepass = '1';
    }
};
FilterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
FilterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-filter',
        template: _raw_loader_filter_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilterPage);



/***/ }),

/***/ 92519:
/*!*******************************************************!*\
  !*** ./src/app/imagezoom/imagezoom-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagezoomPageRoutingModule": () => (/* binding */ ImagezoomPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _imagezoom_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagezoom.page */ 20867);




const routes = [
    {
        path: '',
        component: _imagezoom_page__WEBPACK_IMPORTED_MODULE_0__.ImagezoomPage
    }
];
let ImagezoomPageRoutingModule = class ImagezoomPageRoutingModule {
};
ImagezoomPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImagezoomPageRoutingModule);



/***/ }),

/***/ 26936:
/*!***********************************************!*\
  !*** ./src/app/imagezoom/imagezoom.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagezoomPageModule": () => (/* binding */ ImagezoomPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _imagezoom_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagezoom-routing.module */ 92519);
/* harmony import */ var _imagezoom_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imagezoom.page */ 20867);
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pinch-zoom */ 4312);








let ImagezoomPageModule = class ImagezoomPageModule {
};
ImagezoomPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _imagezoom_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImagezoomPageRoutingModule,
            ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__.PinchZoomModule
        ],
        declarations: [_imagezoom_page__WEBPACK_IMPORTED_MODULE_1__.ImagezoomPage]
    })
], ImagezoomPageModule);



/***/ }),

/***/ 20867:
/*!*********************************************!*\
  !*** ./src/app/imagezoom/imagezoom.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagezoomPage": () => (/* binding */ ImagezoomPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_imagezoom_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./imagezoom.page.html */ 41079);
/* harmony import */ var _imagezoom_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imagezoom.page.scss */ 92939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);





let ImagezoomPage = class ImagezoomPage {
    constructor(navparam, modalctrl) {
        this.navparam = navparam;
        this.modalctrl = modalctrl;
        this.notifyimage = this.navparam.get('img');
        console.log(this.notifyimage);
    }
    ngOnInit() {
    }
    clseimg() {
        this.modalctrl.dismiss();
    }
};
ImagezoomPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ImagezoomPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-imagezoom',
        template: _raw_loader_imagezoom_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_imagezoom_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImagezoomPage);



/***/ }),

/***/ 22150:
/*!***********************************!*\
  !*** ./src/app/loader.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 34595);



let LoaderService = class LoaderService {
    constructor(alertCtrl, toastCtrl, loadingController) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
    }
    showAlert(title, text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                // subHeader: Subtitle,
                message: text,
                buttons: ['ok']
            });
            yield alert.present();
        });
    }
    showLoader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                duration: 8000,
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then();
                    }
                });
            });
        });
    }
    showToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.toastCtrl.create({
                // header: title,
                // subHeader: Subtitle,
                message: msg,
                duration: 2000,
                buttons: ['ok']
            });
            yield alert.present();
        });
    }
    showpToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
                buttons: ['ok']
            });
            yield toast.present();
        });
    }
    dissmissLoader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then();
        });
    }
};
LoaderService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoaderService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ 32421:
/*!**************************************************!*\
  !*** ./src/app/logoutpop/logoutpop.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutpopComponent": () => (/* binding */ LogoutpopComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_logoutpop_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./logoutpop.component.html */ 75253);
/* harmony import */ var _logoutpop_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logoutpop.component.scss */ 36204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 27570);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 44423);







let LogoutpopComponent = class LogoutpopComponent {
    constructor(popover, googlePlus, facebook, navctrl) {
        this.popover = popover;
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.navctrl = navctrl;
    }
    ngOnInit() {
    }
    yes() {
        this.googlePlus.logout();
        this.popover.dismiss();
        this.facebook.logout();
        localStorage.removeItem("Marketplace_Logindata");
        this.navctrl.navigateRoot('/login');
    }
    no() {
        this.popover.dismiss();
    }
};
LogoutpopComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__.GooglePlus },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__.Facebook },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
LogoutpopComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-logoutpop',
        template: _raw_loader_logoutpop_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_logoutpop_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LogoutpopComponent);



/***/ }),

/***/ 85725:
/*!*******************************************************!*\
  !*** ./src/app/makeoffer/makeoffer-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeofferPageRoutingModule": () => (/* binding */ MakeofferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _makeoffer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeoffer.page */ 45870);




const routes = [
    {
        path: '',
        component: _makeoffer_page__WEBPACK_IMPORTED_MODULE_0__.MakeofferPage
    }
];
let MakeofferPageRoutingModule = class MakeofferPageRoutingModule {
};
MakeofferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MakeofferPageRoutingModule);



/***/ }),

/***/ 51291:
/*!***********************************************!*\
  !*** ./src/app/makeoffer/makeoffer.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeofferPageModule": () => (/* binding */ MakeofferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _makeoffer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeoffer-routing.module */ 85725);
/* harmony import */ var _makeoffer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeoffer.page */ 45870);







let MakeofferPageModule = class MakeofferPageModule {
};
MakeofferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _makeoffer_routing_module__WEBPACK_IMPORTED_MODULE_0__.MakeofferPageRoutingModule
        ],
        declarations: [_makeoffer_page__WEBPACK_IMPORTED_MODULE_1__.MakeofferPage]
    })
], MakeofferPageModule);



/***/ }),

/***/ 45870:
/*!*********************************************!*\
  !*** ./src/app/makeoffer/makeoffer.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeofferPage": () => (/* binding */ MakeofferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_makeoffer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./makeoffer.page.html */ 43582);
/* harmony import */ var _makeoffer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeoffer.page.scss */ 86330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ 35881);







let MakeofferPage = class MakeofferPage {
    constructor(modalctrl, navparams, loader, platfrom, service) {
        this.modalctrl = modalctrl;
        this.navparams = navparams;
        this.loader = loader;
        this.platfrom = platfrom;
        this.service = service;
        if (this.platfrom.is('ios')) {
            this.plt = 'ios';
        }
        else {
            this.plt = 'android';
        }
        this.name = this.navparams.get('name');
        this.showprice = this.navparams.get('price');
        this.userid = this.navparams.get('user_id');
        this.listid = this.navparams.get('list_id');
        this.qty = 1;
    }
    ngOnInit() {
    }
    increament(id) {
        if (id == '1') {
            this.qty++;
        }
        if (id == '2') {
            if (this.qty > 1) {
                this.qty--;
            }
        }
    }
    enterprice(ev) {
        if (this.platfrom.is('ios')) {
            const pattern = /[0-9.,]/;
            let inputchar = String.fromCharCode(ev.charCode);
            if (!pattern.test(inputchar)) {
                ev.preventDEfault();
            }
            console.log(this.price1);
        }
        else {
            var pattern = /^[0-9]{9}$/;
            pattern.test(this.price1);
            console.log(pattern.test(this.price1));
            if (pattern.test(this.price1) == true) {
                ev.preventDefault();
            }
        }
    }
    decimalvalidate(ev) {
        var regexp = /^\d+\.\d{2}$/;
        regexp.test(this.price1);
        console.log(regexp.test(this.price1));
        if (regexp.test(this.price1) == true) {
            ev.preventDefault();
        }
    }
    getcurrenttime() {
        this.service.Getcurrenttime()
            .then((results) => this.handleTime(results));
    }
    handleTime(results) {
        console.log(results);
        if (results.ResponseCode == '1') {
            // this.date = new Date(results.current_time).toString()
            this.date = results.current_time;
            this.makeoffer(this.date);
        }
    }
    makeoffer(date) {
        this.loader.showLoader();
        var params = {
            user_id: this.userid,
            list_id: this.listid,
            message: 'offer',
            qty: this.qty,
            price: this.price1,
            date: date
        };
        console.log(params);
        this.service.Makeoffer(params)
            .then((results) => this.handleOffer(results, params));
    }
    handleOffer(results, data) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            data['offerid'] = results.id;
            console.log(data);
            this.modalctrl.dismiss(data);
        }
    }
    cancel() {
        this.modalctrl.dismiss();
    }
};
MakeofferPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService }
];
MakeofferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-makeoffer',
        template: _raw_loader_makeoffer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_makeoffer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MakeofferPage);



/***/ }),

/***/ 35881:
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceService": () => (/* binding */ ServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.service */ 47531);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88561);





let ServiceService = class ServiceService {
    constructor(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
    }
    Signup(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'signup.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Verifyotp(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'verifyotp.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Chnagenotification(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'chnagenotification.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Veripostdetail(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'postdetail.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Login(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'login.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Forgorpwd(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'forgotpassword.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Socialsignup(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'socialsignup.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    CheckUser(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'checkuser.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Updateprofile(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'updateprofile.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Chnagepassword(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'changepassword.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Contact(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'contact_form.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    GetHomedata(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'gethomedata.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    shoplisting(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'shoplisting.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Addlisting(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'addlist.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Mylisting(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'mylisting.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Editlisting(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'editlist.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Deletelisting(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'deletelisting.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Notification(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'getnotification.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Getcounter(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'getcounter.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Resetcounter(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'resetcounter.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Favorite(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'addremovefavorite.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Getfavorite(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'getfavorite.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Catproduct(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'catlisting.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Searchproduct(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'searchproduct.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Filter(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'filter.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Makeoffer(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'makeoffer.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Offeraction(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'offeraction.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    ProductDetail(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'detail.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    SendNotification(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'sendnotification.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Report(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'reportuser.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Changelistingstatus(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'changelistingstatus.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Getvendor(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'getvendor.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Searchuser_directory(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'searchfilter.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Getbusinessnature(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'getbusinessnature.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Getuserdetail(params) {
        return new Promise(resolve => {
            this.httpClient.post(this.config.url + 'getuserdetail.php', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // *******************************************************************************************************************************************
    Getcategory() {
        return new Promise(resolve => {
            this.httpClient.get(this.config.url + 'getcategory.php').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Getcanfig() {
        return new Promise(resolve => {
            this.httpClient.get(this.config.url + 'getcanfig.php').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    GetReportreason() {
        return new Promise(resolve => {
            this.httpClient.get(this.config.url + 'getreportreason.php').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Getcurrenttime() {
        return new Promise(resolve => {
            this.httpClient.get(this.config.url + 'getcurrenttime.php').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
};
ServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService }
];
ServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ServiceService);



/***/ }),

/***/ 81348:
/*!*********************************************************!*\
  !*** ./src/app/userfilter/userfilter-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserfilterPageRoutingModule": () => (/* binding */ UserfilterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _userfilter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userfilter.page */ 97703);




const routes = [
    {
        path: '',
        component: _userfilter_page__WEBPACK_IMPORTED_MODULE_0__.UserfilterPage
    }
];
let UserfilterPageRoutingModule = class UserfilterPageRoutingModule {
};
UserfilterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserfilterPageRoutingModule);



/***/ }),

/***/ 34217:
/*!*************************************************!*\
  !*** ./src/app/userfilter/userfilter.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserfilterPageModule": () => (/* binding */ UserfilterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _userfilter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userfilter-routing.module */ 81348);
/* harmony import */ var _userfilter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userfilter.page */ 97703);







let UserfilterPageModule = class UserfilterPageModule {
};
UserfilterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _userfilter_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserfilterPageRoutingModule
        ],
        declarations: [_userfilter_page__WEBPACK_IMPORTED_MODULE_1__.UserfilterPage]
    })
], UserfilterPageModule);



/***/ }),

/***/ 97703:
/*!***********************************************!*\
  !*** ./src/app/userfilter/userfilter.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserfilterPage": () => (/* binding */ UserfilterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_userfilter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./userfilter.page.html */ 74546);
/* harmony import */ var _userfilter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userfilter.page.scss */ 1162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _country_country_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../country/country.page */ 26482);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 35881);








let UserfilterPage = class UserfilterPage {
    constructor(loader, service, navparams, modalctrl) {
        this.loader = loader;
        this.service = service;
        this.navparams = navparams;
        this.modalctrl = modalctrl;
        this.searchtxt = this.navparams.get('txt');
        this.filterdata = this.navparams.get('filterdata');
        if (this.filterdata) {
            this.category = this.filterdata.provider;
            this.nature = this.filterdata.nature_of_business;
            this.location = this.filterdata.location;
            this.searchtxt = this.filterdata.txt;
        }
        console.log(this.searchtxt);
        console.log(this.filterdata);
    }
    ngOnInit() {
        this.getcategory();
        fetch('./assets/country/country.json').then(res => res.json())
            .then(json => {
            this.allcountry = json;
            for (var i = 0; i < this.allcountry.length; i++) {
                if (this.location == this.allcountry[i].name) {
                    this.location = this.allcountry[i].name;
                    console.log(this.location);
                }
            }
            console.log(this.allcountry);
        });
        this.nature_of_business = [];
        if (this.category == 'Supplier') {
            this.nature_of_business.push("Building Material", "Chemical & Lubricant", "Construction Equipment", "Construction Machinery", "Doors & Windows", "Electrical & Electronic", "Environmental & Safety", "Fastening", "Finishing", "Manpower", "Material Handling & Storage", "Pipe, Hose & Fitting", "Spare Parts", "Specialty & Others", "Steel & Metal", "Tools & Hardware", "Transport", "Wood & Plastic");
        }
        else if (this.category == 'Contractor') {
            this.nature_of_business.push("Asphalt works & Road Marking", "Cable/Pipe Laying & Road Reinstatement", "Civil Engineering", "Concrete Repairs", "Corrosion Protection", "Curtain Walls", "Demolition", "Doors & Windows", "Fencing & Ironworks", "General Building", "Ground Support & Stabilization Works", "Interior Decoration & Finishing Works", "Minor Construction", "Piling", "Pre-cast Concrete Works", "Repairs & Redecoration", "Signcraft Installation", "Site Investigation Works", "Waterproofing Installation");
        }
        else if (this.category == 'Design & Engineering Consultancy') {
            this.nature_of_business.push("Architects & Interior", "Civil & Structural", "Electrical", "Environmental", "Geotechnical", "Landscape", "Mechanical", "Quantity Surveying");
        }
        else if (this.category == 'Manufacturer') {
            this.nature_of_business.push("Building Products & Construction Materials", "Electrical & Electronics", "Energy & Chemicals", "Metal, Machinery & Engineering", "Wood, Plastic & Rubbers");
        }
        else if (this.category == 'Service Provider') {
            this.nature_of_business.push("Contracts and Legal", "Facilities Management", "Financing", "HR and Recruitment", "Insurance", "IT", "Logistics and Transportation", "Marketing", "Repairs and refurbishing", "Secretarial and Accounting");
        }
    }
    getcategory() {
        this.loader.showLoader();
        this.service.Getcategory()
            .then((results) => this.handleCategory(results));
    }
    handleCategory(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.allcategory = results.data;
        }
    }
    selecttype() {
        this.nature_of_business = [];
        console.log(this.category);
        if (this.category == 'Supplier') {
            this.nature_of_business.push("Building Material", "Chemical & Lubricant", "Construction Equipment", "Construction Machinery", "Doors & Windows", "Electrical & Electronic", "Environmental & Safety", "Fastening", "Finishing", "Manpower", "Material Handling & Storage", "Pipe, Hose & Fitting", "Spare Parts", "Specialty & Others", "Steel & Metal", "Tools & Hardware", "Transport", "Wood & Plastic");
        }
        else if (this.category == 'Contractor') {
            this.nature_of_business.push("Asphalt works & Road Marking", "Cable/Pipe Laying & Road Reinstatement", "Civil Engineering", "Concrete Repairs", "Corrosion Protection", "Curtain Walls", "Demolition", "Doors & Windows", "Fencing & Ironworks", "General Building", "Ground Support & Stabilization Works", "Interior Decoration & Finishing Works", "Minor Construction", "Piling", "Pre-cast Concrete Works", "Repairs & Redecoration", "Signcraft Installation", "Site Investigation Works", "Waterproofing Installation");
        }
        else if (this.category == 'Design & Engineering Consultancy') {
            this.nature_of_business.push("Architects & Interior", "Civil & Structural", "Electrical", "Environmental", "Geotechnical", "Landscape", "Mechanical", "Quantity Surveying");
        }
        else if (this.category == 'Manufacturer') {
            this.nature_of_business.push("Building Products & Construction Materials", "Electrical & Electronics", "Energy & Chemicals", "Metal, Machinery & Engineering", "Wood, Plastic & Rubbers");
        }
        else if (this.category == 'Service Provider') {
            this.nature_of_business.push("Contracts and Legal", "Facilities Management", "Financing", "HR and Recruitment", "Insurance", "IT", "Logistics and Transportation", "Marketing", "Repairs and refurbishing", "Secretarial and Accounting");
        }
        console.log(this.nature_of_business);
    }
    getcountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loader.showLoader();
            const modalctrl = yield this.modalctrl.create({
                component: _country_country_page__WEBPACK_IMPORTED_MODULE_2__.CountryPage,
                cssClass: "backmodal",
            });
            modalctrl.onDidDismiss().then((result) => {
                if (result.data) {
                    this.location = result.data.id.name;
                    console.log(this.location);
                }
            });
            this.loader.dissmissLoader();
            yield modalctrl.present();
        });
    }
    validate() {
        if (!this.category) {
            this.loader.showAlert("Error", "Please select Category");
            return false;
        }
        if (!this.nature) {
            this.loader.showAlert("Error", "Please select Nature Of Business");
            return false;
        }
        if (!this.location) {
            this.loader.showAlert("Error", "Please select Location");
            return false;
        }
        return true;
    }
    apply() {
        if (this.location == 'All') {
            this.location = "";
        }
        // if (this.validate()) {
        this.loader.showLoader();
        var params = {
            provider: this.category || '',
            nature_of_business: this.nature || '',
            location: this.location || '',
            txt: this.searchtxt || ''
        };
        console.log(params);
        this.service.Searchuser_directory(params)
            .then((results) => this.handleSearch(results, params));
        // }
    }
    handleSearch(results, params) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            var filterdata = {
                filterdata: results.data,
                params: params
            };
            this.modalctrl.dismiss(filterdata, this.category);
        }
        else {
            var filterdata = {
                filterdata: results.data,
                params: params
            };
            this.loader.showAlert("", results.ResponseMsg);
            this.modalctrl.dismiss(filterdata, this.category);
        }
    }
    cancel() {
        this.modalctrl.dismiss({ data: 'close' });
    }
};
UserfilterPage.ctorParameters = () => [
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
UserfilterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-userfilter',
        template: _raw_loader_userfilter_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_userfilter_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserfilterPage);



/***/ }),

/***/ 24766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 90476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50023);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 24766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		95261,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		26,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		29009,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		27221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		34694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		70993,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		63645,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		62245,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		23482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		53315,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		37542,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		21459,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		47618,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		90101,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		82210,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		47370,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		23652,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		28220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		25500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		84913,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		15078,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		14857,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		48958,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		14383,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		97630,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		81297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		35492,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		13752,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7487,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		61778,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		82904,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		81609,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		31218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		92849,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4127,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		28400,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		14397,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		43391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		66793,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		11695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4180,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 13684:
/*!*********************************************!*\
  !*** ./src/app/chatmenu/chatmenu.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  background: rgba(8, 8, 8, 0.34);\n  --background: rgba(24, 24, 24, 0.075);\n  height: 100%;\n}\n\n.maindiv {\n  position: absolute;\n  width: 40%;\n  height: -moz-fit-content;\n  height: fit-content;\n  right: 25px;\n  top: 75px;\n  margin: auto;\n  overflow: hidden;\n  background-color: #2a2e43 !important;\n  z-index: 99999;\n  padding: 5px 13px;\n}\n\n.sharediv {\n  color: #aaabb3;\n  padding: 8px;\n}\n\n.download {\n  color: #aaabb3;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRtZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFFO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFHTjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBR0oiLCJmaWxlIjoiY2hhdG1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDggOCA4IC8gMzQlKTtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNCwgMjQsIDI0LCAwLjA3NSk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYWluZGl2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIHRvcDogNzVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZTQzICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgIHBhZGRpbmc6IDVweCAxM3B4O1xyXG4gIH1cclxuICAuc2hhcmVkaXZ7XHJcbiAgICAgIGNvbG9yOiNhYWFiYjM7XHJcbiAgICAgIHBhZGRpbmc6OHB4O1xyXG4gICAgLy8gICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYWFhYmIzO1xyXG4gIH1cclxuICAuZG93bmxvYWR7XHJcbiAgICBjb2xvcjojYWFhYmIzO1xyXG4gICAgcGFkZGluZzo4cHg7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmF5O1xyXG59Il19 */");

/***/ }),

/***/ 74396:
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.89);\n  font-size: 19px;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\nion-select {\n  width: 100%;\n}\n\n.backicn {\n  font-size: 25px;\n  color: rgba(255, 255, 255, 0.89);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUVBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLDRFQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFFQSxnQ0FBQTtBQUVKIiwiZmlsZSI6ImNvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5KTtcclxuICAgIC8vIG1hcmdpbi10b3A6MzBweDtcclxuICAgIGZvbnQtc2l6ZToxOXB4O1xyXG59XHJcbi5idG5jbGFzcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNDhkZWcsICNmNzhhNDYgMCUsICNlZTc4NDggMzQlLCAjZWE2YjRhIDEwMCUpO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5pb24tc2VsZWN0e1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4uYmFja2ljbntcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIC8vIG1hcmdpbi10b3A6MzBweDtcclxuICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OSk7XHJcbn0iXX0= */");

/***/ }),

/***/ 13956:
/*!*******************************************!*\
  !*** ./src/app/country/country.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  background: rgba(8, 8, 8, 0.34);\n  --background: rgba(24, 24, 24, 0.075);\n  height: 100%;\n}\n\n.div2 {\n  position: relative;\n  width: 90%;\n  height: 50%;\n  border: 1px solid gray;\n  border-radius: 24px;\n  margin: auto;\n  overflow: hidden;\n  margin-top: 180px;\n  padding: 5px;\n  background-color: white !important;\n  color: #000000;\n  z-index: 99999;\n}\n\nion-label {\n  margin-left: 15px;\n  color: #000000;\n}\n\n.iteamdiv[scrolly=true] {\n  overflow-y: auto;\n  height: 80%;\n  overflow: scroll;\n}\n\nion-searchbar {\n  --background:white;\n  color: #000000;\n  --box-shadow: 0px 0px 4px rgb(184, 182, 182);\n}\n\nion-button {\n  z-index: 10000000000000000;\n  width: 100%;\n  height: 32px;\n  margin: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50cnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFHQSxnQkFBQTtBQUhGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQUE7QUFGRjs7QUFJQTtFQUlFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUpGIiwiZmlsZSI6ImNvdW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHJnYig4IDggOCAvIDM0JSk7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0LCAyNCwgMjQsIDAuMDc1KTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmRpdjJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi10b3A6IDE4MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiMwMDAwMDA7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuLy8gLmRpdjJbc2Nyb2xseT1cInRydWVcIl0ge1xyXG4vLyAgIG92ZXJmbG93LXk6IGF1dG87XHJcbi8vIH1cclxuaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogLTI5cHg7XHJcbn1cclxuLml0ZWFtZGl2W3Njcm9sbHk9XCJ0cnVlXCJde1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIC8vIHRvcDogMDtcclxuICAvLyBsZWZ0OjA7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5pb24tc2VhcmNoYmFye1xyXG4gIC0tYmFja2dyb3VuZDp3aGl0ZTtcclxuICBjb2xvcjojMDAwMDAwO1xyXG4gIC0tYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiKDE4NCwgMTgyLCAxODIpO1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIGJvdHRvbTogMDtcclxuICAvLyBsZWZ0OjA7XHJcbiAgei1pbmRleDogMTAwMDAwMDAwMDAwMDAwMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 32957:
/*!*****************************************!*\
  !*** ./src/app/filter/filter.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  background: rgba(8, 8, 8, 0.34);\n  --background: rgba(24, 24, 24, 0.075);\n  height: 100%;\n}\n\n.maindiv {\n  position: relative;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  border: 1px solid gray;\n  border-radius: 20px;\n  margin: auto;\n  overflow: hidden;\n  margin-top: 210px;\n  /* padding-top: 20px; */\n  background-color: white !important;\n  z-index: 99999;\n  padding: 10px 12px;\n}\n\n.labeldiv {\n  color: black;\n  font-size: 15px;\n  margin-left: 5px;\n}\n\n.filterheading {\n  text-align: center;\n  font-weight: bold;\n}\n\n.sortcol {\n  border: 1px solid #000;\n  text-align: center;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  height: 30px;\n  border-radius: 30px;\n  font-size: 12px;\n  padding: 7px;\n  margin: 5px;\n}\n\n.selectsortcol {\n  border: 1px solid #000;\n  text-align: center;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  height: 30px;\n  border-radius: 30px;\n  font-size: 12px;\n  padding: 7px;\n  margin: 5px;\n  background: linear-gradient(248deg, #f78a46 0%, #fa8658 34%, #f69548 100%);\n  color: #ffffff;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 100%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\n.btn {\n  --background: white;\n  --border-radius: 22px;\n  border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n  color: black;\n  font-weight: 400px;\n  --box-shadow: none;\n  border: 1.5px solid black;\n}\n\n.btn:active {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n  color: white;\n  font-weight: 400px;\n  --box-shadow: none;\n  border: none;\n}\n\n.inputcls {\n  color: #000;\n  --color: #000;\n}\n\n.vertical-align-content {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  height: 100%;\n  padding: 0px 20px;\n  background: #00000025;\n}\n\n.underdiv {\n  width: 100%;\n  background: #ffffff;\n  padding: 12px;\n  border-radius: 8px;\n}\n\n.newsfddiv {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 11111111;\n}\n\n.selectde {\n  color: #020202;\n  font-size: 16px;\n}\n\n.nonseec {\n  color: #020202;\n  font-size: 16px;\n}\n\n.cancelbtn {\n  width: 100%;\n  text-align: center;\n  padding: 15px 0;\n  color: #3880ff;\n  border-top: 1px solid #dddddd;\n}\n\nion-input {\n  color: black;\n  width: 100%;\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBS0o7O0FBSEU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFBQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNELDBFQUFBO0VBQ0MsY0FBQTtBQU1KOztBQUpFO0VBQ0UsNEVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQU9KOztBQUxBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVFGOztBQU5BO0VBQ0UsNEVBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVNGOztBQVBBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFVRjs7QUFSQTtFQUNFLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBV0Y7O0FBVEE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFZRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBYUY7O0FBWEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQWNGOztBQVpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFlRjs7QUFiQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFnQkY7O0FBZEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFpQkYiLCJmaWxlIjoiZmlsdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig4IDggOCAvIDM0JSk7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjQsIDI0LCAyNCwgMC4wNzUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAubWFpbmRpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IDIxMHB4O1xyXG4gICAgLyogcGFkZGluZy10b3A6IDIwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgfVxyXG4gIC5sYWJlbGRpdiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbiAgLmZpbHRlcmhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLnNvcnRjb2x7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICAuc2VsZWN0c29ydGNvbHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNDhkZWcsICNmNzhhNDYgMCUsICNmYTg2NTggMzQlLCAjZjY5NTQ4IDEwMCUpO1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxuICB9XHJcbiAgLmJ0bmNsYXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI0OGRlZywgI2Y3OGE0NiAwJSwgI2VlNzg0OCAzNCUsICNlYTZiNGEgMTAwJSk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOjEuNXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5idG46YWN0aXZle1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI0OGRlZywgI2Y3OGE0NiAwJSwgI2VlNzg0OCAzNCUsICNlYTZiNGEgMTAwJSk7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuLmlucHV0Y2xze1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIC0tY29sb3I6ICMwMDA7XHJcbn1cclxuLnZlcnRpY2FsLWFsaWduLWNvbnRlbnR7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMjU7XHJcbn1cclxuLnVuZGVyZGl2e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuLm5ld3NmZGRpdntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxMTExMTExMTtcclxufVxyXG4uc2VsZWN0ZGV7XHJcbiAgY29sb3I6ICMwMjAyMDI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5ub25zZWVje1xyXG4gIGNvbG9yOiAjMDIwMjAyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uY2FuY2VsYnRue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4IDAgO1xyXG4gIGNvbG9yOiAjMzg4MGZmO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG59XHJcbmlvbi1pbnB1dHtcclxuICBjb2xvcjpibGFjaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 92939:
/*!***********************************************!*\
  !*** ./src/app/imagezoom/imagezoom.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  background: rgba(8, 8, 8, 0.34);\n  --background: rgba(24, 24, 24, 0.075);\n  height: 100%;\n}\n\n.maindiv {\n  position: relative;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 20px;\n  margin: auto;\n  overflow: hidden;\n  /* padding-top: 20px; */\n  z-index: 99999;\n  padding: 10px 12px;\n}\n\n.imgeoprn {\n  width: 100%;\n  height: 100%;\n}\n\n.ivoncose {\n  font-size: 24px;\n  color: #ffffff;\n}\n\n.vertical-align-content {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  height: 100%;\n  padding: 0px 10px;\n  background: #00000096;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlem9vbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsdUJBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFFSiIsImZpbGUiOiJpbWFnZXpvb20ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDggOCA4IC8gMzQlKTtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNCwgMjQsIDI0LCAwLjA3NSk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYWluZGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMjEwcHg7XHJcbiAgICAvKiBwYWRkaW5nLXRvcDogMjBweDsgKi9cclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICB9XHJcbiAgLmltZ2VvcHJue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLml2b25jb3Nle1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnZlcnRpY2FsLWFsaWduLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOTY7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 36204:
/*!****************************************************!*\
  !*** ./src/app/logoutpop/logoutpop.component.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h1 {\n  text-align: center;\n  font-size: 15px;\n  color: black;\n  font-weight: 550;\n}\n\n.btnclass {\n  --background: linear-gradient(to right,#ec6d4c,#f98e46);\n  --border-radius: 22px;\n  width: 50%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n  font-weight: bold;\n  --box-shadow:none;\n}\n\n.btn {\n  --background: white;\n  --border-radius: 22px;\n  border-radius: 22px;\n  width: 50%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n  color: black;\n  font-weight: 400px;\n  text-align: left;\n  --box-shadow: none;\n  border: 1.5px solid black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dHBvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksdURBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBR0oiLCJmaWxlIjoibG9nb3V0cG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcclxufVxyXG4uYnRuY2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2VjNmQ0YywjZjk4ZTQ2KTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5idG4ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNDAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOjEuNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 86330:
/*!***********************************************!*\
  !*** ./src/app/makeoffer/makeoffer.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  background: rgba(8, 8, 8, 0.34);\n  --background: rgba(24, 24, 24, 0.075);\n  height: 100%;\n}\n\n.maindiv {\n  position: absolute;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  border: 1px solid gray;\n  border-radius: 20px 20px 0 0;\n  overflow: hidden;\n  bottom: 0;\n  padding: 10px 5px;\n  background-color: white !important;\n  z-index: 99999;\n}\n\n.qtydiv {\n  font-size: 14px;\n  color: black;\n  margin-top: 13px;\n}\n\n.qtyrow {\n  border: 1px solid #bebebe;\n  text-align: center;\n  padding: 3px;\n  color: #000000;\n}\n\n.pricelbl {\n  text-align: center;\n  font-weight: bold;\n  color: #000000;\n}\n\nion-input {\n  border: 1px solid #dadada;\n  color: #000000;\n  text-align: center;\n  width: 90%;\n  margin: auto;\n  font-weight: bold;\n  font-size: 18px;\n  --padding-start:0px;\n  --padding-end:0px;\n}\n\n.btnclass {\n  --background: linear-gradient(to right,#ec6d4c,#f98e46);\n  --border-radius: 22px;\n  width: 100%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n  --box-shadow:none;\n}\n\n.btn {\n  --background: white;\n  --border-radius: 22px;\n  border-radius: 22px;\n  width: 100%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n  color: black;\n  font-weight: 400px;\n  text-align: left;\n  --box-shadow: none;\n  border: 1.5px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2VvZmZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLHVEQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBUUoiLCJmaWxlIjoibWFrZW9mZmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig4IDggOCAvIDM0JSk7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjQsIDI0LCAyNCwgMC4wNzUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5tYWluZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG59XHJcbi5xdHlkaXZ7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDoxM3B4O1xyXG59XHJcbi5xdHlyb3d7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigxOTAsIDE5MCwgMTkwKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6M3B4O1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxufVxyXG4ucHJpY2VsYmx7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMjE4LCAyMTgsIDIxOCk7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDowcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOjBweDtcclxufVxyXG4uYnRuY2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2VjNmQ0YywjZjk4ZTQ2KTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLmJ0biB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNDAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOjEuNXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 1162:
/*!*************************************************!*\
  !*** ./src/app/userfilter/userfilter.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  background: rgba(8, 8, 8, 0.34);\n  --background: rgba(24, 24, 24, 0.075);\n  height: 100%;\n}\n\n.maindiv {\n  position: relative;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  border: 1px solid gray;\n  border-radius: 20px;\n  margin: auto;\n  overflow: hidden;\n  margin-top: 220px;\n  /* padding-top: 20px; */\n  background-color: white !important;\n  z-index: 99999;\n  padding: 10px 12px;\n}\n\n.labeldiv {\n  color: black;\n  font-size: 15px;\n  margin-left: 5px;\n}\n\n.filterheading {\n  text-align: center;\n  font-weight: bold;\n}\n\n.sortcol {\n  border: 1px solid black;\n  text-align: center;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  height: 30px;\n  border-radius: 30px;\n  font-size: 12px;\n  padding: 7px;\n  margin: 5px;\n}\n\n.selectsortcol {\n  border: 1px solid black;\n  text-align: center;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  height: 30px;\n  border-radius: 30px;\n  font-size: 12px;\n  padding: 7px;\n  margin: 5px;\n  background: linear-gradient(248deg, #f78a46 0%, #fa8658 34%, #f69548 100%);\n  color: #ffffff;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 100%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\n.btn {\n  --background: white;\n  --border-radius: 22px;\n  border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n  color: black;\n  font-weight: 400px;\n  --box-shadow: none;\n  border: 1.5px solid black;\n}\n\n.btn:active {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n  color: white;\n  font-weight: 400px;\n  --box-shadow: none;\n  border: none;\n}\n\nion-select {\n  width: 100%;\n  padding: 6px;\n  color: black;\n}\n\nion-input {\n  color: black;\n  width: 100%;\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJmaWx0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkU7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFBQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUhFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQUEsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDRCwwRUFBQTtFQUNDLGNBQUE7QUFNSjs7QUFKRTtFQUNFLDRFQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFPSjs7QUFMQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFRRjs7QUFOQTtFQUNFLDRFQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFTRjs7QUFQQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBV0YiLCJmaWxlIjoidXNlcmZpbHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCA4IDggLyAzNCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0LCAyNCwgMjQsIDAuMDc1KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLm1haW5kaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tdG9wOiAyMjBweDtcclxuICAgIC8qIHBhZGRpbmctdG9wOiAyMHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIH1cclxuICAubGFiZWxkaXYge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4gIC5maWx0ZXJoZWFkaW5ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5zb3J0Y29se1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gIC5zZWxlY3Rzb3J0Y29se1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNDhkZWcsICNmNzhhNDYgMCUsICNmYTg2NTggMzQlLCAjZjY5NTQ4IDEwMCUpO1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxuICB9XHJcbiAgLmJ0bmNsYXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI0OGRlZywgI2Y3OGE0NiAwJSwgI2VlNzg0OCAzNCUsICNlYTZiNGEgMTAwJSk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uYnRuIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOjEuNXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5idG46YWN0aXZle1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI0OGRlZywgI2Y3OGE0NiAwJSwgI2VlNzg0OCAzNCUsICNlYTZiNGEgMTAwJSk7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuaW9uLXNlbGVjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzo2cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDZweDtcclxufSJdfQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 87807:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatmenu/chatmenu.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content (click)=\"dis()\">\n<div class=\"maindiv\" (click)=\"dis()\">\n  <!-- <div *ngIf=\"userstatus == 'unblock'\" class=\"sharediv\" (click)=\"block('block')\">Block</div>\n  <div *ngIf=\"userstatus == 'block'\" class=\"download\" (click)=\"block('unblock')\">UnBlock</div> -->\n  <div class=\"sharediv\" (click)=\"report('block')\">Report</div>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ 99993:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <div class=\"ht_20\"></div> -->\n    <ion-row style=\"margin-top:30px;\">\n      <ion-col size=\"1\">\n        <ion-icon name=\"arrow-back-outline\" class=\"backicn\" (click)=\"back()\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-title>Contact</ion-title>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_15\"></div>\n  <div class=\"labeldiv\">Type</div>\n  <ion-item class=\"inputitem\">\n    <ion-select [(ngModel)]=\"type\">\n      <ion-select-option>Report Bugs</ion-select-option>\n      <ion-select-option>Feedbacks</ion-select-option>\n      <ion-select-option>Enquiry</ion-select-option>\n      <ion-select-option>Other</ion-select-option>\n    </ion-select>\n    <!-- <ion-input type=\"text\" [(ngModel)]=\"type\"></ion-input> -->\n    <!-- <ion-icon slot=\"end\" name=\"mail-outline\" class=\"logoicn\"></ion-icon> -->\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Description</div>\n  <ion-item class=\"inputitem\">\n    <ion-input type=\"text\" [(ngModel)]=\"description\"></ion-input>\n    <!-- <ion-icon slot=\"end\" name=\"eye-outline\" class=\"logoicn\"></ion-icon> -->\n  </ion-item>\n  <div class=\"ht_25\"></div>\n  <ion-button class=\"btnclass\" (click)=\"submit()\">Submit</ion-button>\n\n</ion-content>");

/***/ }),

/***/ 57188:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/country/country.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"div2\">\n    <div style=\"height:36px;width: 100%;border-bottom: 1px solid #cbcbcb;\"></div>\n    <div class=\"iteamdiv\" scrollY=\"true\">\n      <!-- <ion-searchbar [(ngModel)]=\"cname\" (ionInput)=\"search($event)\" class=\"searchbar\"></ion-searchbar> -->\n      <ion-radio-group value={selected} [(ngModel)]=\"selected\">\n        <ion-item *ngFor=\"let i of country;let x=index;let y of data\" (click)=\"select(i)\">\n          <ion-radio mode=\"ios\" [value]=\"i.code\" slot=\"end\"></ion-radio>\n          <ion-label>{{i.name}}</ion-label>\n        </ion-item>\n      </ion-radio-group>\n     \n    </div>\n    <div class=\"ht_10\"></div>\n    <!-- <ion-button (click)=\"cancel()\">Cancel</ion-button> -->\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button fill=\"clear\" (click)=\"cancel()\">Cancel</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button fill=\"clear\" (click)=\"dimissok()\">Ok</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ }),

/***/ 11686:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"maindiv\">\n    <div class=\"ht_10\"></div>\n    <div class=\"filterheading\">Search Filter</div>\n    <div class=\"labeldiv\">Sort By</div>\n    <ion-item lines=\"none\" style=\"--padding-start:0px;\">\n      <div [ngClass]=\"(sortby == '1')?'selectsortcol':'sortcol'\" (click)=\"sort('1')\">Recent</div>\n      <div [ngClass]=\"(sortby == '2')?'selectsortcol':'sortcol'\" (click)=\"sort('2')\">Price Low To High</div>\n      <div [ngClass]=\"(sortby == '3')?'selectsortcol':'sortcol'\" (click)=\"sort('3')\"> Price High To Low</div>\n    </ion-item>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <div class=\"labeldiv\">Minimum Price</div>\n        <ion-input type=\"tel\" placeholder=\"Minimum Price\" class=\"inputcls\" [(ngModel)]=\"min_price\"\n          (keypress)=\"enterprice($event)\" (keypress)=\"decimalvalidate($event)\"></ion-input>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\">\n        <div class=\"labeldiv\">Maximum Price</div>\n        <ion-input type=\"tel\" placeholder=\"Maximum Price\" class=\"inputcls\" [(ngModel)]=\"max_price\"\n          (keypress)=\"enterprice($event)\" (keypress)=\"max_pricedecimalvalidate($event)\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_5\"></div>\n    <div class=\"labeldiv\">Select Category</div>\n    <ion-input type=\"tel\" class=\"inputcls\" [(ngModel)]=\"categonmry\" (click)=\"opennew()\" readonly></ion-input>\n    <!-- <ion-select multiple=\"true\" [(ngModel)]=\"category\" style=\"width: 100%;padding:6px;\" (ionChange)=\"selectall()\">\n      <ion-select-option value=\"all\" (click)=\"allclick()\">All</ion-select-option>\n      <ion-select-option *ngFor=\"let cat of allcategory\" value=\"{{cat.id}}\">{{cat.name}}</ion-select-option>\n    </ion-select> -->\n    <div class=\"ht_5\"></div>\n\n    <div class=\"labeldiv\">Select Condition</div>\n    <ion-item lines=\"none\" style=\"--padding-start:0px;\">\n      <div [ngClass]=\"(setcondition == 'new')?'selectsortcol':'sortcol'\" (click)=\"condition('new')\">New</div>\n      <div [ngClass]=\"(setcondition1 == 'used')?'selectsortcol':'sortcol'\" (click)=\"conditionn('used')\">Used</div>\n      <div [ngClass]=\"(setcondition2 == 'refurbished')?'selectsortcol':'sortcol'\" (click)=\"conditioon('refurbished')\">\n        Refurbished</div>\n    </ion-item>\n    <div class=\"ht_5\"></div>\n    <div class=\"labeldiv\">Select Type</div>\n    <ion-item lines=\"none\" style=\"--padding-start:0px;\">\n      <!-- <div [ngClass]=\"(settype == 'all')?'selectsortcol':'sortcol'\" (click)=\"type('all')\">All</div> -->\n      <div [ngClass]=\"(settype == 'for sale')?'selectsortcol':'sortcol'\" (click)=\"type('for sale')\">For Sale</div>\n      <div [ngClass]=\"(settype1 == 'for rent')?'selectsortcol':'sortcol'\" (click)=\"type1('for rent')\">For Rent</div>\n    </ion-item>\n    <div class=\"ht_5\"></div>\n    <div class=\"labeldiv\">Location</div>\n    <!-- <ion-select [(ngModel)]=\"location\" style=\"width: 100%;padding:6px;\">\n      <ion-select-option *ngFor=\"let cat of allcountry\" value=\"{{cat.name}}\">{{cat.name}}</ion-select-option>\n    </ion-select> -->\n    <ion-input type=\"text\" [(ngModel)]=\"location\" placeholder=\"Select country\" (click)=\"getcountry()\" readonly>\n    </ion-input>\n    <div class=\"ht_15\"></div>\n    <ion-row>\n      <ion-col>\n        <ion-button class=\"btn\" (click)=\"cancel()\">Cancel</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"btn\" (click)=\"reset()\">Reset</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"btnclass\" (click)=\"apply()\">Apply</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"newsfddiv\" *ngIf=\"valuepass == '2'\">\n    <div class=\"vertical-align-content\">\n      <div class=\"underdiv\">\n        <ion-row>\n          <ion-col size=\"12\" style=\"border-bottom: 1px solid #dddddd;\">\n            <div class=\"ht_10\"></div>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"padding: 5px 0;\" (click)=\"selecdftall()\">\n          <ion-col size='2' class=\"vertical_centrC\">\n            <ion-icon name=\"radio-button-off-outline\" *ngIf=\"selecallt == '1'\" style=\"color: #000; font-size: 20px;\"></ion-icon>\n            <ion-icon name=\"radio-button-on-outline\" *ngIf=\"selecallt == '2'\" style=\"color: #3880ff; font-size: 20px;\"></ion-icon>\n            <!-- <ion-icon name=\"square-outline\" style=\"color: #000; font-size: 20px;\" *ngIf=\"selecallt == '1'\"></ion-icon> -->\n            <!-- <ion-icon name=\"checkbox\" style=\"color: #3880ff; font-size: 20px;\" *ngIf=\"selecallt == '2'\"></ion-icon> -->\n          </ion-col>\n          <ion-col size='10' class=\"vertical_centrC\">\n            <div [ngClass]=\"(selecallt == '2') ? 'selectde' : 'nonseec'\">All</div>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"padding: 5px 0;\" *ngFor=\"let cat of allcategory;let i = index\" (click)=\"selectonebyone(i)\">\n          <ion-col size='2' class=\"vertical_centrC\">\n            <ion-icon name=\"radio-button-off-outline\" *ngIf=\"cat.selecvalut == '1'\" style=\"color: #000000; font-size: 20px;\"></ion-icon>\n            <ion-icon name=\"radio-button-on-outline\" *ngIf=\"cat.selecvalut == '2'\" style=\"color: #3880ff; font-size: 20px;\"></ion-icon>\n            <!-- <ion-icon name=\"square-outline\" *ngIf=\"cat.selecvalut == '1'\" style=\"color: #000000; font-size: 20px;\">\n            </ion-icon>\n            <ion-icon name=\"checkbox\" style=\"color: #3880ff; font-size: 20px;\" *ngIf=\"cat.selecvalut == '2'\"></ion-icon> -->\n          </ion-col>\n          <ion-col size='10' class=\"vertical_centrC\">\n            <div [ngClass]=\"(cat.selecvalut == '2') ? 'selectde' : 'nonseec'\">{{cat.name}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" class=\"ion-no-padding\" (click)=\"cancoselmodl()\">\n            <div class=\"cancelbtn\">Cancel</div>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-no-padding\" (click)=\"coselmodl()\">\n            <div class=\"cancelbtn\">Ok</div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ 41079:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imagezoom/imagezoom.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <!-- <div class=\"newsfddiv\" *ngIf=\"valuepass == '2'\">\n    <div class=\"vertical-align-content\">\n      <div class=\"underdiv\">\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-icon name=\"close-circle\" class=\"ivoncose\" (click)=\"clseimg()\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n              <pinch-zoom>\n                <img src=\"https://appdevelopmentsingapore.com/marketplace/admin/{{imgonep}}\" class=\"imgeoprn\">\n              </pinch-zoom>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div> -->\n  <div class=\"maindiv vertical-align-content\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-no-padding\" style=\"text-align: right;\">\n        <ion-icon name=\"close-circle\" class=\"ivoncose\" (click)=\"clseimg()\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n          <pinch-zoom>\n            <img src=\"{{notifyimage}}\" class=\"imgeoprn\">\n          </pinch-zoom>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 75253:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logoutpop/logoutpop.component.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"background-color: #ffffff;color:#000000;\">\n  <h1>Do you want to log Out?</h1>\n  <div class=\"ht_10\"></div>\n  <ion-button class=\"btnclass\" (click)=\"yes()\">Yes</ion-button>\n  <div class=\"ht_10\"></div>\n  <ion-button class=\"btn\" (click)=\"no()\">No</ion-button>\n  <div class=\"ht_15\"></div>\n</div>\n");

/***/ }),

/***/ 43582:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/makeoffer/makeoffer.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"maindiv\">\n    <ion-row class=\"row_95\">\n      <ion-col size=\"7\">\n        <div style=\"color: #000000;\" class=\"productname\">{{name}}</div>\n        <div class=\"pricediv\">{{showprice}}</div>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ion-no-padding qtydiv\">Qty</ion-col>\n      <ion-col size=\"4\">\n        <ion-row class=\"qtyrow\">\n          <ion-col>\n            <ion-icon name=\"remove-outline\" (click)=\"increament('2')\" style=\"color: #000000;\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <div style=\"color: #000000;\">{{qty}}</div>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"add-outline\" (click)=\"increament('1')\" style=\"color: #000000;\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_5\"></div>\n    <div class=\"pricelbl\">Price</div>\n    <div class=\"ht_5\"></div>\n    <ion-input *ngIf=\"plt == 'android'\" type=\"number\"  [(ngModel)]=\"price1\" (keypress)=\"enterprice($event)\" (keypress)=\"decimalvalidate($event)\"></ion-input>\n    <ion-input *ngIf=\"plt == 'ios'\"  maxlength=\"9\" [(ngModel)]=\"price1\" (keypress)=\"enterprice($event)\" (keypress)=\"decimalvalidate($event)\"></ion-input>\n\n    <div class=\"ht_10\"></div>\n    <ion-row>\n      <ion-col>\n        <ion-button class=\"btn\" (click)=\"cancel()\">Cancel</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"btnclass\" (click)=\"getcurrenttime()\">Make Offer</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ }),

/***/ 74546:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userfilter/userfilter.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"maindiv\">\n    <div class=\"ht_10\"></div>\n    <div class=\"filterheading\">Search Filter</div>\n\n    <div class=\"ht_5\"></div>\n    <div class=\"labeldiv\">Select Category</div>\n    <ion-select mode=\"md\" [(ngModel)]=\"category\" (ionChange)=\"selecttype()\" placeholder=\"Select Category\">\n      <ion-select-option>Supplier</ion-select-option>\n      <ion-select-option>Contractor</ion-select-option>\n      <ion-select-option>Design & Engineering Consultancy</ion-select-option>\n      <ion-select-option>Manufacturer</ion-select-option>\n      <ion-select-option>Service Provider</ion-select-option>\n    </ion-select>\n      <div class=\"ht_5\"></div>\n    <div class=\"labeldiv\">Select Nature of Business</div>\n    <ion-item lines=\"none\" style=\"--padding-start:0px;\">\n      <ion-select mode=\"md\" [(ngModel)]=\"nature\" placeholder=\"Select nature of Business\">\n        <ion-select-option *ngFor=\"let n of nature_of_business\">{{n}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div class=\"ht_5\"></div>\n    <div class=\"labeldiv\">Select Location</div>\n    <!-- <ion-select [(ngModel)]=\"location\" placeholder=\"Select Location\">\n      <ion-select-option value=\"all\">All</ion-select-option>\n      <ion-select-option *ngFor=\"let cat of allcountry\" value=\"{{cat.name}}\">{{cat.name}}</ion-select-option>\n    </ion-select> -->\n    <ion-input type=\"text\" style=\"color:#000000;\" [(ngModel)]=\"location\" placeholder=\"Select country\" (click)=\"getcountry()\" readonly>\n    </ion-input>\n    <div class=\"ht_15\"></div>\n    <ion-row>\n      <ion-col>\n        <ion-button class=\"btn\" (click)=\"cancel()\">Clear Filters</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"btnclass\" (click)=\"apply()\">Apply</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map