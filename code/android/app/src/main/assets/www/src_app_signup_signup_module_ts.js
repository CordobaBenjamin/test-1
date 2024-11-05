(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 69376:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 36727);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 56650:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 69376);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 36727);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 36727:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 21355);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 74194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _country_country_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../country/country.page */ 26482);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 35881);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 27570);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 44423);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.service */ 47531);











// import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@ionic-native/sign-in-with-apple/ngx';
let SignupPage = class SignupPage {
    // appledata: AppleSignInResponse;
    constructor(navctrl, service, modalctrl, googlePlus, facebook, config, 
    // private signInWithApple: SignInWithApple,
    alert) {
        this.navctrl = navctrl;
        this.service = service;
        this.modalctrl = modalctrl;
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.config = config;
        this.alert = alert;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off-outline';
        this.passwordType1 = 'password';
        this.passwordIcon1 = 'eye-off-outline';
        this.isLoggedIn = false;
        this.checked = '0';
        this.checotpk = '0';
        this.otherinfolenth = 0;
        this.firstcheck = 'individual';
        this.firstotpcheck = 'mobile';
        this.config.refresh();
    }
    ngOnInit() {
        this.country = "Singapore";
        this.c_country = "Singapore";
        this.countrycode = "+65";
        this.companycountrycode = "+65";
        console.log('signup page');
        fetch('./assets/country/country.json').then(res => res.json())
            .then(json => {
            this.allcountry = json;
            console.log(this.allcountry);
        });
    }
    login() {
        this.navctrl.navigateForward('/login');
    }
    contrlenth() {
        this.otherinfolenth = this.c_description.length;
    }
    getcountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modalctrl = yield this.modalctrl.create({
                component: _country_country_page__WEBPACK_IMPORTED_MODULE_2__.CountryPage,
                cssClass: "backmodal",
            });
            modalctrl.onDidDismiss().then((result) => {
                this.countrycode = result.data.id.code;
                this.country = result.data.id.name;
                console.log(this.countrycode);
                console.log(this.country);
            });
            yield modalctrl.present();
        });
    }
    getc_country() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modalctrl = yield this.modalctrl.create({
                component: _country_country_page__WEBPACK_IMPORTED_MODULE_2__.CountryPage,
                cssClass: "backmodal",
            });
            modalctrl.onDidDismiss().then((result) => {
                this.companycountrycode = result.data.id.code;
                this.c_country = result.data.id.name;
                console.log(this.countrycode);
                console.log(this.country);
            });
            yield modalctrl.present();
        });
    }
    selectcode() {
        console.log(this.country);
        console.log(this.c_country);
        if (this.country) {
            for (var i = 0; i < this.allcountry.length; i++) {
                if (this.allcountry[i].name == this.country) {
                    this.countrycode = this.allcountry[i].code;
                }
            }
        }
        if (this.c_country) {
            for (var i = 0; i < this.allcountry.length; i++) {
                if (this.allcountry[i].name == this.c_country) {
                    this.companycountrycode = this.allcountry[i].code;
                }
            }
        }
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
    selectbirthdate() {
        console.log(this.dob);
        var dt = this.dob.split('-')[0];
        var currentdate = new Date().getFullYear();
        var diff = currentdate - dt;
        if (diff <= 18) {
            this.dob = '';
            this.alert.showAlert("Error", "You must be 18 years old or above");
        }
    }
    selectoption(id) {
        console.log(id);
        if (id == 'individual') {
            this.firstcheck = id;
        }
        if (id == 'company') {
            this.checked = '0';
            this.firstcheck = id;
        }
    }
    selectoptsection(id) {
        console.log(id);
        if (id == 'email') {
            this.firstotpcheck = id;
        }
        if (id == 'mobile') {
            this.checotpk = '0';
            this.firstotpcheck = id;
        }
    }
    back() {
        this.navctrl.pop();
    }
    selecttype() {
        this.nature_of_business = [];
        console.log(this.company_type);
        if (this.company_type == 'Supplier') {
            this.nature_of_business.push("Building Material", "Chemical & Lubricant", "Construction Equipment", "Construction Machinery", "Doors & Windows", "Electrical & Electronic", "Environmental & Safety", "Fastening", "Finishing", "Manpower", "Material Handling & Storage", "Pipe, Hose & Fitting", "Spare Parts", "Specialty & Others", "Steel & Metal", "Tools & Hardware", "Transport", "Wood & Plastic");
        }
        else if (this.company_type == 'Contractor') {
            this.nature_of_business.push("Asphalt works & Road Marking", "Cable/Pipe Laying & Road Reinstatement", "Civil Engineering", "Concrete Repairs", "Corrosion Protection", "Curtain Walls", "Demolition", "Doors & Windows", "Fencing & Ironworks", "General Building", "Ground Support & Stabilization Works", "Interior Decoration & Finishing Works", "Minor Construction", "Piling", "Pre-cast Concrete Works", "Repairs & Redecoration", "Signcraft Installation", "Site Investigation Works", "Waterproofing Installation");
        }
        else if (this.company_type == 'Design & Engineering Consultancy') {
            this.nature_of_business.push("Architects & Interior", "Civil & Structural", "Electrical", "Environmental", "Geotechnical", "Landscape", "Mechanical", "Quantity Surveying");
        }
        else if (this.company_type == 'Manufacturer') {
            this.nature_of_business.push("Building Products & Construction Materials", "Electrical & Electronics", "Energy & Chemicals", "Metal, Machinery & Engineering", "Wood, Plastic & Rubbers");
        }
        else if (this.company_type == 'Service Provider') {
            this.nature_of_business.push("Contracts and Legal", "Facilities Management", "Financing", "HR and Recruitment", "Insurance", "IT", "Logistics and Transportation", "Marketing", "Repairs and refurbishing", "Secretarial and Accounting");
        }
    }
    loginvalidate() {
        if (!this.firstcheck) {
            this.alert.showAlert("Error", "Please Select User Type");
            return false;
        }
        if (!this.name) {
            this.alert.showAlert("Error", "Please Enter Your Name");
            return false;
        }
        if (!this.uname) {
            this.alert.showAlert("Error", "Please Enter User Name");
            return false;
        }
        if (!this.dob) {
            this.alert.showAlert("Error", "Please Enter Date of Birth");
            return false;
        }
        if (!this.email) {
            this.alert.showAlert("Error", "Please Enter Your Email");
            return false;
        }
        if (!this.country) {
            this.alert.showAlert("Error", "Please Select Your Country");
            return false;
        }
        if (!this.phone_no) {
            this.alert.showAlert("Error", "Please Enter Your PhoneNumber");
            return false;
        }
        if (!this.firstotpcheck) {
            this.alert.showAlert("Error", "Please Select OTP Send");
            return false;
        }
        if (!this.pwd) {
            this.alert.showAlert("Error", "Please Enter Password");
            return false;
        }
        if (this.pwd.length < 8) {
            this.alert.showAlert("Error", "Password must be atleast 8 charecter");
            return false;
        }
        if (!this.re_pwd) {
            this.alert.showAlert("Error", "Please Enter Re-Enter Password");
            return false;
        }
        if (this.pwd != this.re_pwd) {
            this.alert.showAlert("Error", "Please Enter Valid Password");
            return false;
        }
        return true;
    }
    companyvalidate() {
        if (!this.firstcheck) {
            this.alert.showAlert("Error", "Please Select User Type");
            return false;
        }
        if (!this.name) {
            this.alert.showAlert("Error", "Please Enter Your Name");
            return false;
        }
        if (!this.uname) {
            this.alert.showAlert("Error", "Please Enter User Name");
            return false;
        }
        if (!this.dob) {
            this.alert.showAlert("Error", "Please Enter Date of Birth");
            return false;
        }
        if (!this.email) {
            this.alert.showAlert("Error", "Please Enter Your Email");
            return false;
        }
        if (!this.country) {
            this.alert.showAlert("Error", "Please Select Your Country");
            return false;
        }
        if (!this.phone_no) {
            this.alert.showAlert("Error", "Please Enter Your PhoneNumber");
            return false;
        }
        if (!this.firstotpcheck) {
            this.alert.showAlert("Error", "Please Select OTP Send");
            return false;
        }
        if (!this.pwd) {
            this.alert.showAlert("Error", "Please Enter Password");
            return false;
        }
        if (this.pwd.length < 8) {
            this.alert.showAlert("Error", "Password must be atleast 8 charecter");
            return false;
        }
        if (!this.re_pwd) {
            this.alert.showAlert("Error", "Please Enter Re-Enter Password");
            return false;
        }
        if (this.pwd != this.re_pwd) {
            this.alert.showAlert("Error", "Please Enter Valid Password");
            return false;
        }
        if (!this.cname) {
            this.alert.showAlert("Error", "Please Enter Company Name");
            return false;
        }
        if (!this.registration_no) {
            this.alert.showAlert("Error", "Please Enter Company Registration Number");
            return false;
        }
        if (!this.address) {
            this.alert.showAlert("Error", "Please Enter Company Address");
            return false;
        }
        if (!this.company_phone) {
            this.alert.showAlert("Error", "Please Enter Company Phone Number");
            return false;
        }
        if (!this.company_email) {
            this.alert.showAlert("Error", "Please Enter Company Email");
            return false;
        }
        if (!this.company_type) {
            this.alert.showAlert("Error", "Please Select Company Type");
            return false;
        }
        if (!this.nature) {
            this.alert.showAlert("Error", "Please Select Nature Of Business");
            return false;
        }
        if (!this.c_description) {
            this.alert.showAlert("Error", "Please Enter Comapny Description");
            return false;
        }
        return true;
    }
    signup() {
        console.log(this.firstcheck);
        if (this.firstcheck == 'individual') {
            if (this.loginvalidate()) {
                this.alert.showLoader();
                var params = {
                    name: this.name,
                    user_name: this.uname,
                    email: this.email,
                    phone_number: this.phone_no,
                    password: this.pwd,
                    country: this.country,
                    type: '1',
                    otpsend: this.firstotpcheck
                };
                console.log(params);
                this.service.Signup(params)
                    .then((result) => this.handleSignup(result));
            }
        }
        if (this.firstcheck == 'company') {
            if (this.companyvalidate()) {
                this.alert.showLoader();
                var param = {
                    name: this.name,
                    user_name: this.uname,
                    email: this.email,
                    phone_number: this.phone_no,
                    password: this.pwd,
                    country: this.country,
                    type: '2',
                    otpsend: this.firstotpcheck,
                    company_name: this.cname,
                    company_registration_number: this.registration_no,
                    company_phone: this.company_phone,
                    company_country: this.c_country,
                    company_website: this.company_website,
                    company_email: this.company_email,
                    company_address: this.address,
                    company_type: this.company_type,
                    nature_of_business: this.nature.toString(),
                    company_description: this.c_description
                };
                console.log(param);
                this.service.Signup(param)
                    .then((result) => this.handleSignup(result));
            }
        }
    }
    handleSignup(result) {
        console.log(result);
        this.alert.dissmissLoader();
        if (result.ResponseCode == '1') {
            localStorage.setItem("Marketplace_Sign", JSON.stringify(result.user_id));
            // this.alert.showAlert("", "Successfully registered an account")
            this.navctrl.navigateForward(['/verify', { otpsend: this.firstotpcheck, }]);
        }
        else {
            this.alert.showAlert("Error", result.ResponseMsg);
        }
    }
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
        this.alert.showLoader();
        var params = {
            name: this.GmailData.displayName,
            email: this.GmailData.email,
            authid: this.GmailData.userId,
            img: this.GmailData.imageUrl
        };
        this.service.Socialsignup(params)
            .then((result) => this.handlesocialLogin(result));
        // localStorage.setItem("Marketplace_Logindata", JSON.stringify(params))
        // this.config.refresh()
        // this.navctrl.navigateRoot('/sociallogin')
    }
    handlesocialLogin(result) {
        console.log(result);
        this.alert.dissmissLoader();
        if (result.ResponseCode == '1') {
            if (result.user_data.alreadyadded == '1') {
                this.alert.showAlert("Error", "Account Already Registered");
            }
            else {
                localStorage.setItem("Marketplace_Logindata", JSON.stringify(result.user_data));
                this.config.refresh();
                this.navctrl.navigateForward('/sociallogin');
            }
        }
        else {
            this.alert.showAlert("Error", result.ResponseMsg);
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
        var params = {
            name: this.FacebokData.username,
            email: this.FacebokData.email,
            authid: this.fbresponce.userID,
            img: this.FacebokData.picture
        };
        console.log(params);
        this.service.Socialsignup(params)
            .then((result) => this.handlesocialLogin(result));
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
    enterprice(ev) {
        const pattern = /[0-9.,]/;
        let inputchar = String.fromCharCode(ev.charCode);
        if (!pattern.test(inputchar)) {
            ev.preventDEfault();
        }
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__.GooglePlus },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__.Facebook },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_7__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 74194:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  font-size: 25px;\n  margin-left: 20px;\n  color: gray;\n}\n\n.logoimg {\n  width: 65%;\n  margin: auto;\n  display: table;\n}\n\n.loginheader {\n  margin-left: 20px;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.descriptdiv {\n  width: 85%;\n  height: 80px;\n  margin: auto;\n  --padding-start:5px;\n  --inner-padding-end: 5px;\n  border-bottom: 1px solid gray;\n  color: black;\n}\n\n.ionotherdiv {\n  position: absolute;\n  bottom: 6px;\n  right: 30px;\n  z-index: 111;\n  font-size: 13px;\n  color: black;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\n.extratxt {\n  text-align: center;\n  color: black;\n}\n\n.extratxt span {\n  font-weight: bold;\n  color: black;\n}\n\n.fbdiv {\n  border-radius: 50%;\n  box-shadow: 1px 1px 8px #a7a7a7;\n  width: 45px;\n  height: 45px;\n  padding-top: 12px;\n  padding-left: 13px;\n  padding-bottom: 4px;\n  margin: auto;\n}\n\n.googlediv {\n  border-radius: 50%;\n  box-shadow: 1px 1px 8px #a7a7a7;\n  width: 45px;\n  height: 45px;\n  padding-top: 12px;\n  padding-left: 13px;\n  padding-bottom: 4px;\n  margin: auto;\n}\n\n.checkbox {\n  --background-checked:black;\n  --border-color:black;\n  --border-color-checked:black;\n  --background:#ffffff;\n}\n\n.radiotext {\n  padding: 3px 10px;\n  color: gray;\n  font-size: 14px;\n}\n\nion-select::part(icon) {\n  display: none !important;\n}\n\n.countrycode {\n  width: 55px;\n  border-right: 2px solid gray;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBQUE7RUFDSSw0RUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFJSjs7QUFISTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUtSOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhFO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpFO0VBQ0UsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUFPSjs7QUFMRTtFQUNFLGlCQUFBO0VBQ0QsV0FBQTtFQUNBLGVBQUE7QUFRSDs7QUFORTtFQUNFLHdCQUFBO0FBU0o7O0FBTkE7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQVNGIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Fycm93e1xyXG4gICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgY29sb3I6Z3JheTtcclxufVxyXG4ubG9nb2ltZ3tcclxuICAgIHdpZHRoOjY1JTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLmxvZ2luaGVhZGVye1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5kZXNjcmlwdGRpdntcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6NXB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JheTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gIH1cclxuLmlvbm90aGVyZGl2e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDZweDtcclxuICByaWdodDogMzBweDtcclxuICB6LWluZGV4OiAxMTE7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcbi8vIC5sb2dvaWNue1xyXG4vLyAgICAgY29sb3I6I2Y1ODQ0ODtcclxuLy8gfVxyXG4uYnRuY2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjQ4ZGVnLCAjZjc4YTQ2IDAlLCAjZWU3ODQ4IDM0JSwgI2VhNmI0YSAxMDAlKTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuLmV4dHJhdHh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuLmZiZGl2IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4ICNhN2E3YTc7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmdvb2dsZWRpdiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDhweCAjYTdhN2E3O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5jaGVja2JveHtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOmJsYWNrO1xyXG4gICAgLS1ib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOmJsYWNrO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgfVxyXG4gIC5yYWRpb3RleHQge1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgIGNvbG9yOmdyYXk7XHJcbiAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gIH1cclxuICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgfVxyXG5cclxuLmNvdW50cnljb2Rle1xyXG4gIHdpZHRoOjU1cHg7XHJcbiAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCBncmF5O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59Il19 */");

/***/ }),

/***/ 21355:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"ht_30\"></div>\n  <ion-icon name=\"arrow-back-outline\" class=\"backarrow\" (click)=\"back()\"></ion-icon>\n  <div class=\"ht_10\"></div>\n  <img src=\"assets/image/logo.jpeg\" class=\"logoimg\">\n  <div class=\"ht_30\"></div>\n  <div class=\"loginheader\">Create an Account</div>\n  <ion-row style=\"margin-top: -5px;height: 52px;\">\n    <ion-col>\n      <ion-item lines=\"none\" style=\"height: 45px;\">\n        <ion-checkbox class=\"checkbox\" *ngIf=\"checked == '0' && firstcheck != 'individual'\"\n          (ionChange)=\"selectoption('individual')\"></ion-checkbox>\n        <!-- <ion-checkbox class=\"checkbox\" *ngIf=\"checked == '2'\" (ionChange)=\"selectoption('1')\"></ion-checkbox> -->\n        <ion-checkbox class=\"checkbox\" *ngIf=\"firstcheck == 'individual'\" checked={isChecked}></ion-checkbox>\n        <div class=\"radiotext\">Individual</div>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item lines=\"none\" style=\"height: 45px;\">\n        <ion-checkbox class=\"checkbox\" *ngIf=\"checked == '0' && firstcheck != 'company'\"\n          (ionChange)=\"selectoption('company')\"></ion-checkbox>\n        <ion-checkbox class=\"checkbox\" *ngIf=\"firstcheck == 'company'\" checked={isChecked}></ion-checkbox>\n        <!-- <ion-checkbox class=\"checkbox\" *ngIf=\"checked == '2'\" checked={isChecked}  (ionChange)=\"selectoption('1')\"></ion-checkbox> -->\n        <div class=\"radiotext\">Company</div>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <div *ngIf=\"firstcheck == 'individual'\">\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Name</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"name\" placeholder=\"Enter name\" maxlength = \"20\"></ion-input>\n      <ion-icon slot=\"end\" name=\"person-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">User Name</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"uname\" placeholder=\"Enter the user name\" maxlength = \"20\"></ion-input>\n      <ion-icon slot=\"end\" name=\"person-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n     <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Date Of Birth</div>\n    <ion-item class=\"inputitem\">\n      <ion-datetime display-format=\"DD/MM/YYYY\" placeholder=\"Enter the date of birth\" [(ngModel)]=\"dob\"\n        (ionChange)=\"selectbirthdate()\"></ion-datetime>\n      <ion-icon slot=\"end\" name=\"calendar-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Email ID</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter the email address\"></ion-input>\n      <ion-icon slot=\"end\" name=\"mail-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Country</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"country\" placeholder=\"select country\" (click)=\"getcountry()\"></ion-input>\n      <ion-icon slot=\"end\" name=\"location-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Phone Number</div>\n    <ion-item class=\"inputitem\">\n      <div class=\"countrycode\">{{countrycode}}</div>\n      <ion-input type=\"number\" (keypress)=\"enterprice($event)\" [(ngModel)]=\"phone_no\" placeholder=\"Enter Phone Number\">\n      </ion-input>\n      <ion-icon slot=\"end\" name=\"phone-portrait-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">OTP Send</div>\n    <ion-row style=\"margin-top: -5px;height: 52px;\">\n      <ion-col>\n        <ion-item lines=\"none\" style=\"height: 45px;\">\n          <ion-checkbox class=\"checkbox\" *ngIf=\"checotpk == '0' && firstotpcheck != 'mobile'\"\n            (ionChange)=\"selectoptsection('mobile')\"></ion-checkbox>\n          <ion-checkbox class=\"checkbox\" *ngIf=\"firstotpcheck == 'mobile'\" checked={isChecked}></ion-checkbox>\n          <div class=\"radiotext\">Phone Number</div>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item lines=\"none\" style=\"height: 45px;\">\n          <ion-checkbox class=\"checkbox\" *ngIf=\"checotpk == '0' && firstotpcheck != 'email'\"\n            (ionChange)=\"selectoptsection('email')\"></ion-checkbox>\n          <ion-checkbox class=\"checkbox\" *ngIf=\"firstotpcheck == 'email'\" checked={isChecked}></ion-checkbox>\n          <div class=\"radiotext\">Email</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Password</div>\n    <ion-item class=\"inputitem\">\n      <ion-input [type]=\"passwordType\" [(ngModel)]=\"pwd\" placeholder=\"Enter the password\"></ion-input>\n      <ion-icon item-end [name]=\"passwordIcon\" class=\"logoicn\" (click)='hideShowPassword()'></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Re-enter Password</div>\n    <ion-item class=\"inputitem\">\n      <ion-input [type]=\"passwordType1\" [(ngModel)]=\"re_pwd\" placeholder=\"Re-Enter the password\"></ion-input>\n      <ion-icon item-end [name]=\"passwordIcon1\" class=\"logoicn\" (click)='hideShowPassword1()'></ion-icon>\n    </ion-item>\n\n    <div class=\"ht_25\"></div>\n    <ion-button class=\"btnclass\" (click)=\"signup()\">Create</ion-button>\n\n  </div>\n\n  <div *ngIf=\"firstcheck == 'company'\">\n    <div class=\"labeldiv\">Name</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"name\" placeholder=\"Enter name\" maxlength = \"20\"></ion-input>\n      <ion-icon slot=\"end\" name=\"person-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">User Name</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"uname\" placeholder=\"Enter the user name\" maxlength = \"20\"></ion-input>\n      <ion-icon slot=\"end\" name=\"person-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item> \n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Date Of Birth</div>\n    <ion-item class=\"inputitem\">\n      <ion-datetime display-format=\"DD/MM/YYYY\" placeholder=\"Enter the date of birth\" [(ngModel)]=\"dob\"\n        (ionChange)=\"selectbirthdate()\"></ion-datetime>\n      <ion-icon slot=\"end\" name=\"calendar-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    \n    <div class=\"labeldiv\">Email ID</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter the email address\"></ion-input>\n      <ion-icon slot=\"end\" name=\"mail-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n\n    <div class=\"labeldiv\">Country</div>\n    <ion-item class=\"inputitem\">\n      <!-- <ion-select placeholder=\"select country\" [(ngModel)]=\"country\" (ionChange)=\"selectcode()\">\n        <ion-select-option *ngFor=\"let con of allcountry\" value=\"{{con.name}}\">{{con.name}}</ion-select-option>\n      </ion-select> -->\n      <ion-input type=\"text\" [(ngModel)]=\"country\" placeholder=\"select country\" (click)=\"getcountry()\"></ion-input>\n      <ion-icon slot=\"end\" name=\"location-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Phone Number</div>\n    <ion-item class=\"inputitem\">\n      <div class=\"countrycode\">{{countrycode}}</div>\n      <ion-input type=\"number\" (keypress)=\"enterprice($event)\" [(ngModel)]=\"phone_no\" placeholder=\"Enter Phone Number\">\n      </ion-input>\n      <ion-icon slot=\"end\" name=\"phone-portrait-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">OTP Send</div>\n    <ion-row style=\"margin-top: -5px;height: 52px;\">\n      <ion-col>\n        <ion-item lines=\"none\" style=\"height: 45px;\">\n          <ion-checkbox class=\"checkbox\" *ngIf=\"checotpk == '0' && firstotpcheck != 'mobile'\"\n            (ionChange)=\"selectoptsection('mobile')\"></ion-checkbox>\n          <ion-checkbox class=\"checkbox\" *ngIf=\"firstotpcheck == 'mobile'\" checked={isChecked}></ion-checkbox>\n          <div class=\"radiotext\">Phone Number</div>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item lines=\"none\" style=\"height: 45px;\">\n          <ion-checkbox class=\"checkbox\" *ngIf=\"checotpk == '0' && firstotpcheck != 'email'\"\n            (ionChange)=\"selectoptsection('email')\"></ion-checkbox>\n          <ion-checkbox class=\"checkbox\" *ngIf=\"firstotpcheck == 'email'\" checked={isChecked}></ion-checkbox>\n          <div class=\"radiotext\">Email</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Password</div>\n    <ion-item class=\"inputitem\">\n      <ion-input [type]=\"passwordType\" [(ngModel)]=\"pwd\" placeholder=\"Enter the password\"></ion-input>\n      <ion-icon item-end [name]=\"passwordIcon\" class=\"logoicn\" (click)='hideShowPassword()'></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Re-enter Password</div>\n    <ion-item class=\"inputitem\">\n      <ion-input [type]=\"passwordType1\" [(ngModel)]=\"re_pwd\" placeholder=\"Re-Enter the password\"></ion-input>\n      <ion-icon item-end [name]=\"passwordIcon1\" class=\"logoicn\" (click)='hideShowPassword1()'></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Company Name</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"cname\" placeholder=\"Enter Company name\" maxlength = \"30\"></ion-input>\n      <ion-icon slot=\"end\" name=\"business-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Company Registration Number</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"registration_no\" placeholder=\"Enter company registration number\" maxlength = \"20\"></ion-input>\n      <ion-icon slot=\"end\" name=\"business-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Company Address</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"address\" placeholder=\"Enter company address\" maxlength = \"50\"></ion-input>\n      <ion-icon slot=\"end\" name=\"location-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Company Phone Number</div>\n    <ion-item class=\"inputitem\">\n      <div class=\"countrycode\">{{companycountrycode}}</div>\n      <ion-input type=\"number\" (keypress)=\"enterprice($event)\" [(ngModel)]=\"company_phone\"\n        placeholder=\"Enter company phone number\"></ion-input>\n      <ion-icon slot=\"end\" name=\"phone-portrait-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Company Website(optional)</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"email\" [(ngModel)]=\"company_website\" placeholder=\"Enter the company website\"></ion-input>\n      <ion-icon slot=\"end\" name=\"mail-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Company Email</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"email\" [(ngModel)]=\"company_email\" placeholder=\"Enter the company email\"></ion-input>\n      <ion-icon slot=\"end\" name=\"mail-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Company Type</div>\n    <ion-item class=\"inputitem\">\n      <ion-select mode=\"md\" [(ngModel)]=\"company_type\" (ionChange)=\"selecttype()\" placeholder=\"Select the company type\">\n        <ion-select-option>Supplier</ion-select-option>\n        <ion-select-option>Contractor</ion-select-option>\n        <ion-select-option>Design & Engineering Consultancy</ion-select-option>\n        <ion-select-option>Manufacturer</ion-select-option>\n        <ion-select-option>Service Provider</ion-select-option>\n      </ion-select>\n      <ion-icon slot=\"end\" name=\"caret-down-outline\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Nature of Business</div>\n    <ion-item class=\"inputitem\">\n      <ion-select mode=\"ios\" multiple=\"true\" [(ngModel)]=\"nature\" multiple=\"true\" placeholder=\"Select nature of Business\">\n        <ion-select-option *ngFor=\"let n of nature_of_business\" style=\"color:blue;\">{{n}}</ion-select-option>\n      </ion-select>\n      <!-- <ion-input type=\"text\" [(ngModel)]=\"nature\" placeholder=\"Select nature of Business\"></ion-input> -->\n      <ion-icon slot=\"end\" name=\"briefcase-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Brief Description of Company </div>\n    <div class=\"ht_10\"></div>\n    <!-- <ion-item class=\"descriptdiv\"> -->\n      <div style=\"position: relative !important;\">\n        <ion-textarea class=\"descriptdiv\" [rows]=\"2\" (ionChange)=\"contrlenth()\" type=\"text\" [(ngModel)]=\"c_description\" placeholder=\"Enter the company description\" maxlength = \"280\"></ion-textarea>\n        <div class=\"ionotherdiv\">{{otherinfolenth}}/280</div>\n      </div>\n    <!-- <div class=\"labeldiv\">Company Country</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"c_country\" placeholder=\"select country\" (click)=\"getc_country()\"></ion-input>\n      <ion-icon slot=\"end\" name=\"flag-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div> -->\n \n   \n\n   \n    <div class=\"ht_25\"></div>\n    <ion-button class=\"btnclass\" (click)=\"signup()\">Create</ion-button>\n  </div>\n  <div class=\"ht_15\"></div>\n  <div class=\"extratxt\">Already have an account?<span (click)=\"login()\"> Log In </span></div>\n  <div class=\"ht_15\"></div>\n  <div class=\"extratxt\">Or Create an Account with</div>\n  <div class=\"ht_15\"></div>\n\n  <ion-row style=\"width: 100%;margin:auto;\">\n    <ion-col size=\"3\"></ion-col>\n    <ion-col size=\"3\">\n      <div class=\"googlediv\">\n        <img src=\"assets/image/google.png\" width=\"20px\" (click)=\"googlelogin()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\">\n      <div class=\"fbdiv\">\n        <img src=\"assets/image/fb.png\" width=\"20px\" (click)=\"fblogin()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\"></ion-col>\n    <!-- <ion-col size=\"4\">\n      <img src=\"assets/image/apple.png\" width=\"20px\" (click)=\"applelogin()\">\n  </ion-col> -->\n  </ion-row>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map