(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 90795:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 93721);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 77641:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 90795);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 93721);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 93721:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ 35881);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 27570);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 44423);
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ 59107);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.service */ 47531);











// import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@ionic-native/sign-in-with-apple/ngx';
let LoginPage = class LoginPage {
    // appledata: AppleSignInResponse;
    constructor(navctrl, service, config, alertCtrl, googlePlus, facebook, platform, oneSignal, 
    // private signInWithApple: SignInWithApple,
    alert) {
        this.navctrl = navctrl;
        this.service = service;
        this.config = config;
        this.alertCtrl = alertCtrl;
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.alert = alert;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off-outline';
        this.isLoggedIn = false;
    }
    ngOnInit() {
        console.log('Login page');
        if (this.platform.is('cordova')) {
            console.log('cordova');
            this.oneSignal.getIds().then(ids => {
                var playerid = JSON.stringify(ids['userId']);
                var str = playerid.replace("\"", "");
                this.DevicesId = str.replace("\"", "");
                console.log("Device id is => " + this.DevicesId);
            });
        }
    }
    hideShowPassword() {
        console.log('showpass');
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
    }
    loginvalidate() {
        if (!this.email) {
            this.alert.showAlert("Error", "Please Enter Your Email");
            return false;
        }
        if (!this.pwd) {
            this.alert.showAlert("Error", "Please Enter Password");
            return false;
        }
        return true;
    }
    login() {
        if (this.loginvalidate()) {
            // if (this.DevicesId) {
            this.alert.showLoader();
            var params = {
                username: this.email,
                password: this.pwd,
                device_id: this.DevicesId
            };
            console.log(params);
            this.service.Login(params)
                .then((result) => this.handleLogin(result));
            // }
        }
    }
    handleLogin(result) {
        console.log(result);
        this.alert.dissmissLoader();
        if (result.ResponseCode == '1') {
            // if (result.user_data.type == '1') {
            localStorage.setItem("Marketplace_Notification", JSON.stringify(result.user_data.send_notification));
            localStorage.setItem("Marketplace_Logindata", JSON.stringify(result.user_data));
            this.navctrl.navigateRoot('/home');
            // } else {
            //   localStorage.setItem("Marketplace_Logindata", JSON.stringify(result.user_data))
            //   this.navctrl.navigateForward('/tabs/mylisting')
            // }
        }
        else {
            this.alert.showAlert("Error", result.ResponseMsg);
        }
    }
    forgot(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let forgotpwdalert = yield this.alertCtrl.create({
                header: "Forget Password",
                subHeader: 'Please enter your registered email below and a forget password link will be sent to the given email',
                inputs: [
                    {
                        name: 'email',
                        type: "email",
                        // NgModel : this.email
                    }
                ],
                buttons: [
                    {
                        text: "Cancel"
                    },
                    {
                        text: "Submit",
                        handler: data => {
                            console.log(data);
                            this.forgotpwd(data.email);
                        }
                    }
                ]
            });
            forgotpwdalert.present();
        });
    }
    forgotvalidate(data) {
        if (!data) {
            this.alert.showAlert("Error", 'Please Enter Email');
            return false;
        }
        return true;
    }
    forgotpwd(data) {
        if (this.forgotvalidate(data)) {
            var params = {
                email: data,
            };
            console.log(params);
            this.alert.showLoader();
            this.service.Forgorpwd(params)
                .then((results) => this.handleForgot(results));
        }
    }
    handleForgot(results) {
        console.log(results);
        this.alert.dissmissLoader();
        if (results.ResponseCode == 1) {
            this.alert.showToast(results.ResponseMsg);
        }
        else {
            this.alert.showAlert("Error", results.ResponseMsg);
        }
    }
    signup() {
        this.navctrl.navigateForward('/signup');
    }
    back() {
        this.navctrl.navigateBack('/getstarted');
    }
    userlogin(ev) {
        console.log(ev);
        this.value = ev.detail.value;
    }
    // ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.j5mic1u5vsdr6nti7n1cjbvvbs3okof6-875354588129 --variable WEB_APPLICATION_CLIENT_ID=875354588129-j5mic1u5vsdr6nti7n1cjbvvbs3okof6.apps.googleusercontent.com
    googlelogin() {
        this.googlePlus.logout();
        this.googlePlus.login({})
            .then(result => {
            console.log(result);
            this.GmailData = result;
            this.SocialGmail();
        })
            .catch(err => console.error('error =>', err));
    }
    SocialGmail() {
        if (this.DevicesId) {
            this.alert.showLoader();
            // if (this.DevicesId != undefined) {
            var params = {
                name: this.GmailData.displayName,
                email: this.GmailData.email,
                authid: this.GmailData.userId
            };
            console.log(params);
            this.service.CheckUser(params)
                .then((results) => this.handlesocialLogin(results));
        }
    }
    // ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="421850082629689" --variable APP_NAME="marketplace"
    fblogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.facebook.login(['public_profile', 'user_friends', 'email'])
                .then((response) => {
                console.log('this.facebook');
                console.log(response);
                this.isLoggedIn = true;
                this.fbresponce = response.authResponse;
                console.log(this.fbresponce);
                this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                    this.FacebokData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
                    console.log(this.FacebokData);
                    this.SocialFB();
                });
            })
                .catch(err => console.error(err));
        });
    }
    SocialFB() {
        this.alert.showLoader();
        if (this.DevicesId != undefined) {
            var params = {
                name: this.FacebokData.username,
                email: this.FacebokData.email,
                authid: this.fbresponce.userID
            };
            console.log(params);
            this.service.CheckUser(params)
                .then((results) => this.handlesocialLogin(results));
        }
        else {
            alert("deviceid not generated");
        }
    }
    // applelogin(){
    //   this.signInWithApple.signin({
    //     requestedScopes: [
    //       ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
    //       ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
    //     ]
    //   })
    //   .then((res: AppleSignInResponse) => {
    //     // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
    //     // alert('Send token to apple for verification: ' + res.identityToken);
    //     console.log(res);
    //     this.appledata = res
    //     this.SocialApple();
    //   })
    //   .catch((error: AppleSignInErrorResponse) => {
    //     alert(error.code + ' ' + error.localizedDescription);
    //     console.error(error);
    //   });
    // }
    // SocialApple(){
    //   this.alert.showLoader()
    //   var params = {
    //     name: this.appledata.fullName.givenName,
    //     email: this.appledata.email,
    //     authid: this.appledata.authorizationCode,
    //     img: '',
    //   }
    //   console.log(params);
    //   this.service.Socialsignup(params)
    //   .then((result) => this.handlesocialLogin(result))
    // }
    handlesocialLogin(result) {
        console.log(result);
        this.alert.dissmissLoader();
        if (result.ResponseCode == '1') {
            if (result.user_data.alreadyadded == '1') {
                localStorage.setItem("Marketplace_Notification", JSON.stringify(result.user_data.send_notification));
                localStorage.setItem("Marketplace_Logindata", JSON.stringify(result.user_data));
                this.config.refresh();
                this.navctrl.navigateRoot('/home');
            }
            else {
                this.alert.showAlert("Attension", "Please Register Account");
            }
        }
        else {
            this.alert.showAlert("Error", result.ResponseMsg);
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_7__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__.GooglePlus },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__.Facebook },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__.OneSignal },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  font-size: 25px;\n  margin-left: 20px;\n  color: gray;\n}\n\n.logoimg {\n  width: 65%;\n  margin: auto;\n  display: table;\n}\n\n.loginheader {\n  margin-left: 25px;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nion-input {\n  color: #000000;\n}\n\n.logoicn {\n  color: #f58448;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\n.extratxt {\n  text-align: center;\n  color: #000000;\n}\n\n.extratxt span {\n  font-weight: bold;\n  color: #000000;\n}\n\n.fbdiv {\n  border-radius: 50%;\n  box-shadow: 1px 1px 8px #a7a7a7;\n  width: 45px;\n  height: 45px;\n  padding-top: 12px;\n  padding-left: 13px;\n  padding-bottom: 4px;\n  margin: auto;\n}\n\n.googlediv {\n  border-radius: 50%;\n  box-shadow: 1px 1px 8px #a7a7a7;\n  width: 45px;\n  height: 45px;\n  padding-top: 12px;\n  padding-left: 13px;\n  padding-bottom: 4px;\n  margin: auto;\n}\n\n.radiodiv {\n  margin: auto;\n  width: 80%;\n}\n\n.userdiv {\n  padding: 0px 5px;\n}\n\n.vendordiv {\n  margin-left: 0px;\n  padding: 0px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7QUFLSjs7QUFIQTtFQUNJLDRFQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQU9KOztBQU5JO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBUVI7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkU7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQVVKOztBQVJFO0VBQ0UsZ0JBQUE7QUFXSjs7QUFURTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QUFZSCIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Fycm93e1xyXG4gICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgY29sb3I6Z3JheTtcclxufVxyXG4ubG9nb2ltZ3tcclxuICAgIHdpZHRoOjY1JTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLmxvZ2luaGVhZGVye1xyXG4gICAgbWFyZ2luLWxlZnQ6MjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuLmxvZ29pY257XHJcbiAgICBjb2xvcjojZjU4NDQ4O1xyXG59XHJcbi5idG5jbGFzcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNDhkZWcsICNmNzhhNDYgMCUsICNlZTc4NDggMzQlLCAjZWE2YjRhIDEwMCUpO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uZXh0cmF0eHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjojMDAwMDAwO1xyXG4gICAgfVxyXG59XHJcbi5mYmRpdiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDhweCAjYTdhN2E3O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5nb29nbGVkaXYge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggI2E3YTdhNztcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAucmFkaW9kaXZ7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHdpZHRoOjgwJTtcclxuICB9XHJcbiAgLnVzZXJkaXZ7XHJcbiAgICBwYWRkaW5nOjBweCA1cHg7XHJcbiAgfVxyXG4gIC52ZW5kb3JkaXZ7XHJcbiAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgcGFkZGluZzowcHggNXB4O1xyXG4gIH1cclxuICBcclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"ht_40\"></div>\n  <ion-icon name=\"arrow-back-outline\" class=\"backarrow\" (click)=\"back()\"></ion-icon>\n  <div class=\"ht_10\"></div>\n  <img src=\"assets/image/logo.jpeg\" class=\"logoimg\">\n  <div class=\"ht_30\"></div>\n  <div class=\"loginheader\">Log In</div>\n  <div class=\"ht_15\"></div>\n  <div class=\"labeldiv\">Email / Mobile </div>\n  <ion-item class=\"inputitem\">\n    <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n    <ion-icon slot=\"end\" name=\"mail-outline\" class=\"logoicn\"></ion-icon>\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Password</div>\n  <ion-item class=\"inputitem\">\n    <ion-input [type]=\"passwordType\" [(ngModel)]=\"pwd\"></ion-input>\n    <ion-icon item-end [name]=\"passwordIcon\" class=\"logoicn\" (click)='hideShowPassword()'></ion-icon>\n  </ion-item>\n  <ion-row style=\"width: 90%;margin:auto;\">\n    <ion-col size=\"6\"></ion-col>\n    <ion-col class=\"ion-no-padding\">\n      <div size=\"6\" style=\"text-align: right;margin-top:10px;color:#000000;\" (click)=\"forgot()\">Forgot Password?</div>\n    </ion-col>\n  </ion-row>\n  <div class=\"ht_25\"></div>\n  <!-- <div class=\"radiodiv\">\n    <ion-radio-group (ionChange)=\"userlogin($event)\">\n      <ion-item lines=\"none\">\n        <ion-radio value=\"individual\"></ion-radio>\n        <div class=\"userdiv\">Individual</div>\n     \n          <ion-radio slot=\"end\" value=\"company\"></ion-radio>\n          <div slot=\"end\" class=\"vendordiv\">Company</div>\n        </ion-item>\n    </ion-radio-group>\n  </div> -->\n  <ion-button class=\"btnclass\" (click)=\"login()\">Log In</ion-button>\n  <div class=\"ht_20\"></div>\n  <div class=\"extratxt\">Don't have an account?<span (click)=\"signup()\"> Sign Up </span></div>\n  <div class=\"ht_15\"></div>\n  <div class=\"extratxt\">Or Log In with</div>\n  <div class=\"ht_15\"></div>\n  <ion-row style=\"width: 90%;margin:auto;\">\n    <ion-col size=\"3\"></ion-col>\n    <ion-col size=\"3\">\n      <div class=\"googlediv\">\n        <img src=\"assets/image/google.png\" width=\"20px\" (click)=\"googlelogin()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\">\n      <div class=\"fbdiv\">\n        <img src=\"assets/image/fb.png\" width=\"20px\" (click)=\"fblogin()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\"></ion-col>\n    <!-- <ion-col size=\"4\">\n      <div class=\"fbdiv\">\n        <img src=\"assets/image/apple.png\" width=\"20px\" (click)=\"applelogin()\">\n      </div>\n  </ion-col> -->\n  </ion-row>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map