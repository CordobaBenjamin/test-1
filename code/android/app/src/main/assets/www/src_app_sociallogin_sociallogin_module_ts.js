(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_sociallogin_sociallogin_module_ts"],{

/***/ 81431:
/*!***********************************************************!*\
  !*** ./src/app/sociallogin/sociallogin-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialloginPageRoutingModule": () => (/* binding */ SocialloginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _sociallogin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sociallogin.page */ 84427);




const routes = [
    {
        path: '',
        component: _sociallogin_page__WEBPACK_IMPORTED_MODULE_0__.SocialloginPage
    }
];
let SocialloginPageRoutingModule = class SocialloginPageRoutingModule {
};
SocialloginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SocialloginPageRoutingModule);



/***/ }),

/***/ 61243:
/*!***************************************************!*\
  !*** ./src/app/sociallogin/sociallogin.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialloginPageModule": () => (/* binding */ SocialloginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _sociallogin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sociallogin-routing.module */ 81431);
/* harmony import */ var _sociallogin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sociallogin.page */ 84427);







let SocialloginPageModule = class SocialloginPageModule {
};
SocialloginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sociallogin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SocialloginPageRoutingModule
        ],
        declarations: [_sociallogin_page__WEBPACK_IMPORTED_MODULE_1__.SocialloginPage]
    })
], SocialloginPageModule);



/***/ }),

/***/ 84427:
/*!*************************************************!*\
  !*** ./src/app/sociallogin/sociallogin.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialloginPage": () => (/* binding */ SocialloginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_sociallogin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sociallogin.page.html */ 26688);
/* harmony import */ var _sociallogin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sociallogin.page.scss */ 67574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 47531);
/* harmony import */ var _country_country_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../country/country.page */ 26482);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service.service */ 35881);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 27570);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 44423);











let SocialloginPage = class SocialloginPage {
    constructor(navctrl, service, config, modalctrl, googlePlus, facebook, alert) {
        this.navctrl = navctrl;
        this.service = service;
        this.config = config;
        this.modalctrl = modalctrl;
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.alert = alert;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off-outline';
        this.passwordType1 = 'password';
        this.passwordIcon1 = 'eye-off-outline';
        this.isLoggedIn = false;
        this.config.refresh();
        this.checked = '0';
        this.otherinfolenth = 0;
        this.firstcheck = 'individual';
        console.log('logindata => ', this.config.logindata);
        this.uname = this.config.logindata.user_name;
        this.email = this.config.logindata.email;
        this.auth_id = this.config.logindata.auth_id;
        this.profile = this.config.logindata.img;
        console.log('auth_id => ', this.auth_id);
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
    back() {
        this.navctrl.navigateForward('/login');
    }
    getcountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modalctrl = yield this.modalctrl.create({
                component: _country_country_page__WEBPACK_IMPORTED_MODULE_3__.CountryPage,
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
                component: _country_country_page__WEBPACK_IMPORTED_MODULE_3__.CountryPage,
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
    selectbirthdate() {
        console.log(this.dob);
        var dt = this.dob.split('-')[0];
        var currentdate = new Date().getFullYear();
        var diff = currentdate - dt;
        if (diff <= 18) {
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
        if (!this.country) {
            this.alert.showAlert("Error", "Please Select Your Country");
            return false;
        }
        return true;
    }
    contrlenth() {
        this.otherinfolenth = this.c_description.length;
    }
    companyvalidate() {
        if (!this.firstcheck) {
            this.alert.showAlert("Error", "Please Select User Type");
            return false;
        }
        if (!this.country) {
            this.alert.showAlert("Error", "Please Select Your Country");
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
        if (!this.c_country) {
            this.alert.showAlert("Error", "Please Select Company Country");
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
        console.log(this.auth_id);
        console.log(this.config.logindata.auth_id);
        if (this.firstcheck == 'individual') {
            if (this.loginvalidate()) {
                this.alert.showLoader();
                var params = {
                    name: this.uname,
                    email: this.email,
                    authid: this.auth_id,
                    img: this.profile || '',
                    country: this.country,
                    mobile: this.phone_no,
                    type: 1
                };
                console.log(params);
                this.service.Socialsignup(params)
                    .then((result) => this.handleSignup(result));
            }
        }
        if (this.firstcheck == 'company') {
            if (this.companyvalidate()) {
                this.alert.showLoader();
                var param = {
                    name: this.uname,
                    email: this.email,
                    authid: this.auth_id,
                    img: this.profile || '',
                    country: this.country,
                    mobile: this.phone_no,
                    type: 2,
                    company_name: this.cname,
                    company_registration_number: this.registration_no,
                    company_country: this.c_country,
                    company_phone: this.company_phone,
                    company_email: this.company_email,
                    company_address: this.address,
                    company_type: this.company_type,
                    nature_of_business: this.nature.toString(),
                    company_description: this.c_description,
                };
                console.log(param);
                this.service.Socialsignup(param)
                    .then((result) => this.handleSignup(result));
            }
        }
    }
    handleSignup(result) {
        console.log(result);
        this.alert.dissmissLoader();
        if (result.ResponseCode == '1') {
            localStorage.setItem("Marketplace_Logindata", JSON.stringify(result.user_data));
            this.config.refresh();
            this.alert.showAlert("", "Successfully registered an account");
            this.navctrl.navigateForward('/login');
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
        localStorage.setItem("Marketplace_Logindata", JSON.stringify(params));
        this.config.refresh();
        this.uname = this.GmailData.displayName;
        this.email = this.GmailData.email;
        this.auth_id = this.GmailData.userId;
        this.profile = this.GmailData.imageUrl;
        console.log(params);
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
        localStorage.setItem("Marketplace_Logindata", JSON.stringify(params));
        this.config.refresh();
        this.uname = this.FacebokData.username;
        this.email = this.FacebokData.email;
        this.auth_id = this.fbresponce.userID;
        this.profile = this.FacebokData.picture;
        console.log(params);
    }
    enterprice(ev) {
        const pattern = /[0-9.,]/;
        let inputchar = String.fromCharCode(ev.charCode);
        if (!pattern.test(inputchar)) {
            ev.preventDEfault();
        }
    }
};
SocialloginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_5__.ServiceService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__.GooglePlus },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__.Facebook },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService }
];
SocialloginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-sociallogin',
        template: _raw_loader_sociallogin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sociallogin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SocialloginPage);



/***/ }),

/***/ 67574:
/*!***************************************************!*\
  !*** ./src/app/sociallogin/sociallogin.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backarrow {\n  font-size: 25px;\n  margin-left: 20px;\n  color: gray;\n}\n\n.logoimg {\n  width: 65%;\n  margin: auto;\n  display: table;\n}\n\n.loginheader {\n  margin-left: 20px;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.descriptdiv {\n  width: 85%;\n  height: 80px;\n  margin: auto;\n  --padding-start:5px;\n  --inner-padding-end: 5px;\n  border-bottom: 1px solid gray;\n  color: black;\n}\n\n.ionotherdiv {\n  position: absolute;\n  bottom: 6px;\n  right: 30px;\n  z-index: 111;\n  font-size: 13px;\n  color: black;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\n.extratxt {\n  text-align: center;\n  color: black;\n}\n\n.extratxt span {\n  font-weight: bold;\n  color: black;\n}\n\n.fbdiv {\n  border-radius: 50%;\n  box-shadow: 1px 1px 8px #a7a7a7;\n  width: 45px;\n  height: 45px;\n  padding-top: 12px;\n  padding-left: 13px;\n  padding-bottom: 4px;\n}\n\n.googlediv {\n  border-radius: 50%;\n  box-shadow: 1px 1px 8px #a7a7a7;\n  width: 45px;\n  height: 45px;\n  padding-top: 12px;\n  padding-left: 13px;\n  padding-bottom: 4px;\n}\n\n.checkbox {\n  --background-checked:black;\n  --border-color:black;\n  --border-color-checked:black;\n  --background:#ffffff;\n}\n\n.radiotext {\n  padding: 3px 10px;\n  color: gray;\n  font-size: 14px;\n}\n\nion-select::part(icon) {\n  display: none !important;\n}\n\n.countrycode {\n  width: 55px;\n  border-right: 2px solid gray;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFLQTs7QUFPQTtFQUNJLDRFQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFKSjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUhKOztBQUlJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBRlI7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdFO0VBQ0UsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0QsV0FBQTtFQUNBLGVBQUE7QUFDSDs7QUFDRTtFQUNFLHdCQUFBO0FBRUo7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUVGIiwiZmlsZSI6InNvY2lhbGxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYXJyb3d7XHJcbiAgICBmb250LXNpemU6MjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICBjb2xvcjpncmF5O1xyXG59XHJcbi5sb2dvaW1ne1xyXG4gICAgd2lkdGg6NjUlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG4ubG9naW5oZWFkZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmRlc2NyaXB0ZGl2e1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICAtLXBhZGRpbmctc3RhcnQ6NXB4O1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDVweDtcclxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmF5O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5pb25vdGhlcmRpdntcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5ib3R0b206IDZweDtcclxucmlnaHQ6IDMwcHg7XHJcbnotaW5kZXg6IDExMTtcclxuZm9udC1zaXplOiAxM3B4O1xyXG5jb2xvcjpibGFjaztcclxufVxyXG5cclxuLy8gLmlucHV0aXRlbXtcclxuLy8gICAgIHdpZHRoOiA4NSU7XHJcbi8vICAgICBtYXJnaW46IGF1dG87XHJcbi8vICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuLy8gICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcclxuLy8gfVxyXG4vLyAubG9nb2ljbntcclxuLy8gICAgIGNvbG9yOiNmNTg0NDg7XHJcbi8vIH1cclxuLmJ0bmNsYXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI0OGRlZywgI2Y3OGE0NiAwJSwgI2VlNzg0OCAzNCUsICNlYTZiNGEgMTAwJSk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbi5leHRyYXR4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHNwYW57XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG59XHJcbi5mYmRpdiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDhweCAjYTdhN2E3O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgfVxyXG4gIC5nb29nbGVkaXYge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggI2E3YTdhNztcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuICAuY2hlY2tib3h7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDpibGFjaztcclxuICAgIC0tYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDpibGFjaztcclxuICAgIC0tYmFja2dyb3VuZDojZmZmZmZmO1xyXG4gIH1cclxuICAucmFkaW90ZXh0IHtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICBjb2xvcjpncmF5O1xyXG4gICBmb250LXNpemU6MTRweDtcclxuICB9XHJcbiAgaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuXHJcbi5jb3VudHJ5Y29kZXtcclxuICB3aWR0aDo1NXB4O1xyXG4gIGJvcmRlci1yaWdodDoycHggc29saWQgZ3JheTtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufSJdfQ== */");

/***/ }),

/***/ 26688:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sociallogin/sociallogin.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"ht_30\"></div>\n  <ion-icon name=\"arrow-back-outline\" class=\"backarrow\" (click)=\"back()\"></ion-icon>\n  <div class=\"ht_10\"></div>\n  <img src=\"assets/image/logo.jpeg\" class=\"logoimg\">\n  <div class=\"ht_30\"></div>\n  <div class=\"loginheader\">Create an Account</div>\n  <ion-row style=\"margin-top: -5px;height: 52px;\">\n    <ion-col>\n      <ion-item lines=\"none\" style=\"height: 45px;\">\n        <ion-checkbox class=\"checkbox\" *ngIf=\"checked == '0' && firstcheck != 'individual'\"\n          (ionChange)=\"selectoption('individual')\"></ion-checkbox>\n        <!-- <ion-checkbox class=\"checkbox\" *ngIf=\"checked == '2'\" (ionChange)=\"selectoption('1')\"></ion-checkbox> -->\n        <ion-checkbox class=\"checkbox\" *ngIf=\"firstcheck == 'individual'\" checked={isChecked}></ion-checkbox>\n        <div class=\"radiotext\">Individual</div>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item lines=\"none\" style=\"height: 45px;\">\n        <ion-checkbox class=\"checkbox\" *ngIf=\"checked == '0' && firstcheck != 'company'\"\n          (ionChange)=\"selectoption('company')\"></ion-checkbox>\n        <ion-checkbox class=\"checkbox\" *ngIf=\"firstcheck == 'company'\" checked={isChecked}></ion-checkbox>\n        <!-- <ion-checkbox class=\"checkbox\" *ngIf=\"checked == '2'\" checked={isChecked}  (ionChange)=\"selectoption('1')\"></ion-checkbox> -->\n        <div class=\"radiotext\">Company</div>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <div *ngIf=\"firstcheck == 'individual'\">\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">User Name</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"uname\" placeholder=\"Enter the user name\"></ion-input>\n      <ion-icon slot=\"end\" name=\"person-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Country</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"country\" placeholder=\"select country\" (click)=\"getcountry()\"></ion-input>\n      <ion-icon slot=\"end\" name=\"location-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Email</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n      <ion-icon slot=\"end\" name=\"mail-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Phone Number</div>\n    <ion-item class=\"inputitem\">\n      <div class=\"countrycode\">{{countrycode}}</div>\n      <ion-input type=\"number\" (keypress)=\"enterprice($event)\" [(ngModel)]=\"phone_no\" placeholder=\"Enter Phone Number\"></ion-input>\n      <ion-icon slot=\"end\" name=\"phone-portrait-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n\n    <div class=\"ht_25\"></div>\n    <ion-button class=\"btnclass\" (click)=\"signup()\">Create</ion-button>\n\n  </div>\n\n  <div *ngIf=\"firstcheck == 'company'\">\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Name</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"name\" placeholder=\"Enter name\" maxlength = \"20\"></ion-input>\n      <ion-icon slot=\"end\" name=\"person-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">User Name</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"uname\" placeholder=\"Enter the user name\"></ion-input>\n      <ion-icon slot=\"end\" name=\"person-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Date Of Birth</div>\n    <ion-item class=\"inputitem\">\n      <ion-datetime display-format=\"DD/MM/YYYY\" placeholder=\"Enter the date of birth\" [(ngModel)]=\"dob\"\n        (ionChange)=\"selectbirthdate()\"></ion-datetime>\n      <ion-icon slot=\"end\" name=\"calendar-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Email ID</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter the email address\"></ion-input>\n      <ion-icon slot=\"end\" name=\"mail-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Country</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"country\" placeholder=\"select country\" (click)=\"getcountry()\"></ion-input>\n      <ion-icon slot=\"end\" name=\"location-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Phone Number</div>\n    <ion-item class=\"inputitem\">\n      <div class=\"countrycode\">{{countrycode}}</div>\n      <ion-input type=\"number\" (keypress)=\"enterprice($event)\" [(ngModel)]=\"phone_no\" placeholder=\"Enter Phone Number\"></ion-input>\n      <ion-icon slot=\"end\" name=\"phone-portrait-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Company Name</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"cname\" placeholder=\"Enter Company name\"></ion-input>\n      <ion-icon slot=\"end\" name=\"business-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Company Registration Number</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"registration_no\" placeholder=\"Enter company registration number\"></ion-input>\n      <ion-icon slot=\"end\" name=\"business-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Company Address</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"address\" placeholder=\"Enter company address\"></ion-input>\n      <ion-icon slot=\"end\" name=\"location-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Company Phone Number</div>\n    <ion-item class=\"inputitem\">\n      <div class=\"countrycode\">{{companycountrycode}}</div>\n      <ion-input type=\"number\" (keypress)=\"enterprice($event)\" [(ngModel)]=\"company_phone\" placeholder=\"Enter company phone number\"></ion-input>\n      <ion-icon slot=\"end\" name=\"phone-portrait-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Company Website(optional)</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"email\" [(ngModel)]=\"company_website\" placeholder=\"Enter the company website\"></ion-input>\n      <ion-icon slot=\"end\" name=\"mail-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Company Email</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"email\" [(ngModel)]=\"company_email\" placeholder=\"Enter the company email\"></ion-input>\n      <ion-icon slot=\"end\" name=\"mail-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <!-- <div class=\"labeldiv\">Company Country</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"c_country\" placeholder=\"select country\" (click)=\"getc_country()\"></ion-input>\n      <ion-icon slot=\"end\" name=\"flag-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div> -->\n    <div class=\"labeldiv\">Company Type</div>\n    <ion-item class=\"inputitem\">\n      <ion-select [(ngModel)]=\"company_type\" (ionChange)=\"selecttype()\" placeholder=\"Select the company type\">\n        <ion-select-option>Supplier</ion-select-option>\n        <ion-select-option>Contractor</ion-select-option>\n        <ion-select-option>Design & Engineering Consultancy</ion-select-option>\n        <ion-select-option>Manufacturer</ion-select-option>\n        <ion-select-option>Service Provider</ion-select-option>\n      </ion-select>\n      <ion-icon slot=\"end\" name=\"caret-down-outline\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Nature of Business</div>\n    <ion-item class=\"inputitem\">\n      <ion-select [(ngModel)]=\"nature\" mode=\"ios\" multiple=\"true\" placeholder=\"Select nature of Business\">\n        <ion-select-option *ngFor=\"let n of nature_of_business\">{{n}}</ion-select-option>\n      </ion-select>\n      <!-- <ion-input type=\"text\" [(ngModel)]=\"nature\" placeholder=\"Select nature of Business\"></ion-input> -->\n      <ion-icon slot=\"end\" name=\"briefcase-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_15\"></div>\n    <div class=\"labeldiv\">Brief Description of Company </div>\n    <!-- <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"c_description\" placeholder=\"Enter the company description\"></ion-input>\n      <ion-icon slot=\"end\" name=\"person-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item> -->\n    <div style=\"position: relative !important;\">\n      <ion-textarea class=\"descriptdiv\" [rows]=\"4\" (ionChange)=\"contrlenth()\" type=\"text\" [(ngModel)]=\"c_description\" placeholder=\"Enter the company description\" maxlength = \"280\"></ion-textarea>\n      <div class=\"ionotherdiv\">{{otherinfolenth}}/280</div>\n    </div>\n    <div class=\"ht_25\"></div>\n    <ion-button class=\"btnclass\" (click)=\"signup()\">Create</ion-button>\n    <div class=\"ht_15\"></div>\n  </div>\n  <div class=\"ht_15\"></div>\n  <div class=\"extratxt\">Already have an account?<span (click)=\"login()\"> Log In </span></div>\n  <div class=\"ht_15\"></div>\n  <div class=\"extratxt\">Or Create an Account with</div>\n  <div class=\"ht_15\"></div>\n\n  <ion-row style=\"width: 40%;margin:auto;\">\n    <ion-col>\n      <div class=\"googlediv\">\n        <img src=\"assets/image/google.png\" width=\"20px\" (click)=\"googlelogin()\">\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class=\"fbdiv\">\n        <img src=\"assets/image/fb.png\" width=\"20px\" (click)=\"fblogin()\">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_sociallogin_sociallogin_module_ts.js.map