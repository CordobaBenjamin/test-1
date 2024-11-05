(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_chatprofile_chatprofile_module_ts"],{

/***/ 46335:
/*!***********************************************************!*\
  !*** ./src/app/chatprofile/chatprofile-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatprofilePageRoutingModule": () => (/* binding */ ChatprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _chatprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatprofile.page */ 95167);




const routes = [
    {
        path: '',
        component: _chatprofile_page__WEBPACK_IMPORTED_MODULE_0__.ChatprofilePage
    }
];
let ChatprofilePageRoutingModule = class ChatprofilePageRoutingModule {
};
ChatprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatprofilePageRoutingModule);



/***/ }),

/***/ 86620:
/*!***************************************************!*\
  !*** ./src/app/chatprofile/chatprofile.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatprofilePageModule": () => (/* binding */ ChatprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _chatprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatprofile-routing.module */ 46335);
/* harmony import */ var _chatprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatprofile.page */ 95167);







let ChatprofilePageModule = class ChatprofilePageModule {
};
ChatprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chatprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatprofilePageRoutingModule
        ],
        declarations: [_chatprofile_page__WEBPACK_IMPORTED_MODULE_1__.ChatprofilePage]
    })
], ChatprofilePageModule);



/***/ }),

/***/ 95167:
/*!*************************************************!*\
  !*** ./src/app/chatprofile/chatprofile.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatprofilePage": () => (/* binding */ ChatprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_chatprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chatprofile.page.html */ 44344);
/* harmony import */ var _chatprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatprofile.page.scss */ 18231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 47531);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 35881);









let ChatprofilePage = class ChatprofilePage {
    constructor(router, service, config, navctrl, loader) {
        this.router = router;
        this.service = service;
        this.config = config;
        this.navctrl = navctrl;
        this.loader = loader;
        this.user_id = this.router.snapshot.params.user_id;
        console.log(this.user_id);
        this.config.refresh();
    }
    ngOnInit() {
        console.log('ChatprofilePage');
        // }
        this.user = {};
        // this.getuser()
        // this.getlisting()
    }
    ionViewDidEnter() {
        this.user = {};
        this.getuser();
        // this.getlisting()
    }
    getuser() {
        this.loader.showLoader();
        var params = {
            user_id: this.user_id
        };
        console.log(params);
        this.service.Getuserdetail(params)
            .then((results) => this.handleuserdetail(results));
    }
    handleuserdetail(results) {
        console.log(results);
        // this.loader.dissmissLoader()
        if (results.ResponseCode == '1') {
            this.user = results.user_data;
            this.advery = this.user.admin_verified;
            console.log(this.advery);
            this.cname = this.user.company_name;
            console.log(this.cname);
            this.type = this.user.type;
            console.log(this, this.type);
        }
        this.getlisting();
    }
    showprice(price) {
        var check_price = Number.isInteger(parseFloat(price));
        if (check_price == false) {
            return parseFloat(price).toFixed(2);
        }
        else {
            return price;
        }
    }
    getlisting() {
        // this.loader.showLoader()
        var params = {
            user_id: this.user_id,
            login_id: this.config.logindata.id
        };
        console.log(params);
        this.service.Mylisting(params)
            .then((results) => this.hanldeLinsting(results));
    }
    hanldeLinsting(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.alllisting = results.data;
            if (this.alllisting) {
                this.lenthshowdta = this.alllisting.length;
                for (var i = 0; i < this.alllisting.length; i++) {
                    this.image = this.alllisting[i].image;
                    this.alllisting[i].image = this.image.split(',')[0];
                    this.alllisting[i].allimage = this.image;
                    // this.alllisting[i].user_name = this.user.user_name
                }
                console.log(this.alllisting);
            }
        }
        // this.likelisting()
    }
    likelisting() {
        var parms = {
            user_id: this.user_id,
            login_id: this.config.logindata.id,
        };
        console.log(parms);
        this.service.shoplisting(parms)
            .then((results) => this.handleLikelisting(results));
    }
    handleLikelisting(results) {
        console.log(results);
        if (results.ResponseCode == '1') {
            this.alllisting = results.data;
            if (this.alllisting) {
                for (var i = 0; i < this.alllisting.length; i++) {
                    this.image = this.alllisting[i].image;
                    this.alllisting[i].image = this.image.split(',')[0];
                    this.alllisting[i].allimage = this.image;
                    // this.alllisting[i].user_name = this.user.user_name
                }
                console.log(this.alllisting);
            }
        }
    }
    back() {
        this.navctrl.pop();
    }
    gomylist(id) {
        // if (this.alllisting[id].status == '0') {
        // } else {
        // }
        this.navctrl.navigateForward(['/detail', this.alllisting[id]]);
    }
    addfavorite(id, i) {
        if (this.config.logindata.id == '0') {
            this.loader.showAlert("Attention", "Please Login as the Individual or Company in app");
        }
        else {
            console.log(this.alllisting[i].is_liked);
            if (this.alllisting[i].is_liked == '0') {
                this.alllisting[i].is_liked = '1';
            }
            else {
                this.alllisting[i].is_liked = '0';
            }
            console.log(this.alllisting[i].is_liked);
            console.log(this.alllisting[i]);
            this.loader.showLoader();
            var params = {
                id: id,
                user_id: this.config.logindata.id
            };
            console.log(params);
            this.service.Favorite(params)
                .then((results) => this.handleFavorite(results, i));
        }
    }
    handleFavorite(results, i) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.loader.showToast(results.ResponseMsg);
        }
        else {
            this.loader.showAlert("Error", results.ResponseMsg);
        }
    }
};
ChatprofilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
ChatprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-chatprofile',
        template: _raw_loader_chatprofile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chatprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatprofilePage);



/***/ }),

/***/ 18231:
/*!***************************************************!*\
  !*** ./src/app/chatprofile/chatprofile.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backcolordiv {\n  position: relative;\n  width: 100%;\n  height: 120px;\n  background-color: #f9771f;\n}\n\n.imag {\n  width: 100%;\n  height: 210px;\n  background-color: #fd9345;\n  -webkit-clip-path: ellipse(80% 60% at 59% 35%);\n  clip-path: ellipse(80% 60% at 50% 37%);\n}\n\n.inner {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 180px;\n  background-color: #f78427;\n  -webkit-clip-path: ellipse(80% 60% at 46% 35%);\n  clip-path: ellipse(80% 60% at 42% 37%);\n}\n\n.back2 {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 155px;\n  background-color: #f9771f;\n  -webkit-clip-path: ellipse(80% 61% at 29% 35%);\n  clip-path: ellipse(80% 61% at 29% 35%);\n}\n\n.circle {\n  position: absolute;\n  top: -25px;\n  height: 35%;\n  left: -47px;\n  transform: rotate(256deg);\n}\n\n.backicn {\n  font-size: 25px;\n  margin-top: 12px;\n  color: #ffffff;\n}\n\n.profilerow {\n  position: absolute;\n  top: 45px;\n  width: 100%;\n  left: 0;\n}\n\n.profileimg {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin: auto;\n  display: table;\n  position: relative;\n}\n\n.namediv {\n  font-size: 24px;\n  margin-top: 10px;\n  color: #ffffff;\n}\n\n.personlogo {\n  margin: auto;\n  color: #f68546;\n  font-size: 26px;\n  margin-top: 5px;\n}\n\n.lbldiv {\n  color: gray;\n  font-size: 14px;\n  margin-top: 5px;\n}\n\n.valuediv {\n  color: black;\n  margin-top: 6px;\n  font-weight: 400;\n}\n\n.latesfdst {\n  color: black;\n  font-size: 17px;\n  font-weight: 500;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.945);\n  font-size: 16px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.shielddiv {\n  position: relative;\n  margin: auto;\n  color: beige;\n  margin-left: -9px;\n  zoom: 1;\n}\n\n.jointxt1 {\n  color: rgba(255, 255, 255, 0.781);\n  font-size: 16px;\n  margin-left: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSx5QkFBQTtBQUFKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0Esc0NBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHNDQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxzQ0FBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLE9BQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFVSjs7QUFSQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFXSjs7QUFUQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUFZSjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7QUFXSjs7QUFUQTtFQUNJLGlDQUFBO0VBR0EsZUFBQTtFQUNBLGlCQUFBO0FBVUoiLCJmaWxlIjoiY2hhdHByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tjb2xvcmRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDIxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NzcxZjtcclxufVxyXG4uaW1hZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ5MzQ1O1xyXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGVsbGlwc2UoODAlIDYwJSBhdCA1OSUgMzUlKTtcclxuICAgIGNsaXAtcGF0aDogZWxsaXBzZSg4MCUgNjAlIGF0IDUwJSAzNyUpO1xyXG59XHJcbi5pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc4NDI3O1xyXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGVsbGlwc2UoODAlIDYwJSBhdCA0NiUgMzUlKTtcclxuICAgIGNsaXAtcGF0aDogZWxsaXBzZSg4MCUgNjAlIGF0IDQyJSAzNyUpO1xyXG59XHJcbi5iYWNrMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk3NzFmO1xyXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGVsbGlwc2UoODAlIDYxJSBhdCAyOSUgMzUlKTtcclxuICAgIGNsaXAtcGF0aDogZWxsaXBzZSg4MCUgNjElIGF0IDI5JSAzNSUpO1xyXG59XHJcbi5jaXJjbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMjVweDtcclxuICAgIGhlaWdodDogMzUlO1xyXG4gICAgbGVmdDogLTQ3cHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNTZkZWcpO1xyXG59XHJcbi5iYWNraWNue1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuLnByb2ZpbGVyb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NXB4O1xyXG4gICAgLy8gdG9wOiA2NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbi5wcm9maWxlaW1nIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubmFtZWRpdntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG59XHJcbi5wZXJzb25sb2dvIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiAjZjY4NTQ2O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5sYmxkaXYge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnZhbHVlZGl2IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmxhdGVzZmRzdCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi50ZXh0IHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQ1KTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0yNHB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uc2hpZWxkZGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY29sb3I6IGJlaWdlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC05cHg7XHJcbiAgICB6b29tOiAxO1xyXG59XHJcbi5qb2ludHh0MSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4MSk7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0yMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 44344:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatprofile/chatprofile.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"backcolordiv\">\n    <!-- <div class=\"imag\"></div>\n    <div class=\"inner\"></div>\n    <div class=\"back2\"></div>\n    <img class=\"circle\" src=\"assets/image/circle.jpg\"> -->\n\n    <ion-row class=\"profilerow\">\n      <ion-col size=\"1\">\n        <ion-icon name=\"arrow-back-outline\" class=\"backicn\" (click)=\"back()\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-avatar>\n          <img *ngIf=\"user.image\" src=\"{{user.image}}\" class=\"profileimg\">\n          <img *ngIf=\"!user.image\" src=\"assets/image/profile.png\" class=\"profileimg\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <span *ngIf=\"advery == '1'\" class=\"shielddiv\">\n              <ion-icon name=\"shield-checkmark\"></ion-icon>\n            </span>\n            <span class=\"text\">{{user.user_name}}</span>\n            <div *ngIf=\"type == '2'\"  class=\"jointxt1\"><span>\n              <ion-icon name=\"business-outline\"></ion-icon>\n            </span> {{cname}}</div><br>\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n      <!-- <ion-col>\n        <div class=\"namediv\">{{user.user_name}}</div>\n      </ion-col> -->\n    </ion-row>\n  </div>\n\n  <div class=\"ht_20\"></div>\n  <ion-row class=\"row_90\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"person-outline\" class=\"personlogo\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <div class=\"lbldiv\">User Name</div>\n      <div class=\"valuediv\">{{user.user_name}}</div>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ht_10\"></div>\n  <ion-row *ngIf=\"user.company_name\" class=\"row_90\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"business-outline\" class=\"personlogo\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <div class=\"lbldiv\">Company Name</div>\n      <div class=\"valuediv\">{{user.company_name}}</div>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ht_10\"></div>\n  <ion-row *ngIf=\"user.company_description\" class=\"row_90\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"person-outline\" class=\"personlogo\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <div class=\"lbldiv\">Company Description</div>\n      <div class=\"valuediv\">{{user.company_description}}</div>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ht_10\"></div>\n  <ion-row *ngIf=\"user.company_type\" class=\"row_90\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"business-outline\" class=\"personlogo\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <div class=\"lbldiv\">Company Type</div>\n      <div class=\"valuediv\">{{user.company_type}}</div>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ht_10\"></div>\n  <ion-row *ngIf=\"user.nature_of_business\" class=\"row_90\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"business-outline\" class=\"personlogo\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <div class=\"lbldiv\">Nature of Business</div>\n      <div class=\"valuediv\">{{user.nature_of_business}}</div>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ht_10\"></div>\n  <ion-row *ngIf=\"alllisting\" class=\"row_90\">\n    <ion-col size=\"10\">\n      <div class=\"latesfdst\">Listings ({{lenthshowdta}})</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"row_95\">\n    <div *ngIf=\"!alllisting\">\n      <div class=\"nodata\">No Listing Available</div>\n    </div>\n    <ion-col size=\"6\" *ngFor=\"let list of alllisting;let i = index;\">\n      <ion-card class=\"card\">\n        <div class=\"imagediv\" (click)=\"gomylist(i,'1')\">\n          <img src=\"{{list.image}}\" class=\"cuter\">\n          <div *ngIf=\"list.status == '0'\" class=\"closediv\">Listing Closed</div>\n        </div>\n        <!-- <div class=\"pvc\">{{list.name}}</div> -->\n        <div class=\"pvnwc towlines\" (click)=\"gomylist(i,'1')\">{{list.name}}</div>\n        <div class=\"ht_10\"></div>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\" (click)=\"gomylist(i,'1')\">\n            <ion-row>\n              <ion-col size=\"2\" class=\"ion-no-padding\">\n                <ion-icon name=\"time-outline\" class=\"clockicn\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\" class=\"ion-no-padding\">\n                <div class=\"clocktxt\">{{list.days_ago}}</div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\" (click)=\"gomylist(i,'1')\">\n            <ion-row>\n              <ion-col size=\"2\" class=\"ion-no-padding\">\n                <ion-icon name=\"location-outline\" class=\"clockicn\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\" class=\"ion-no-padding\">\n                <div class=\"clocktxt towlines\">{{list.country}}</div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row (click)=\"gomylist(i,'1')\">\n          <ion-col class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col size=\"2\" class=\"ion-no-padding\">\n                <ion-icon name=\"globe-outline\" class=\"clockicn\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\" class=\"ion-no-padding\">\n                <div style=\"height: 28px;\" class=\"clocktxt\">{{list.type}}</div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col size=\"2\" class=\"ion-no-padding\">\n                <ion-icon name=\"receipt-outline\" class=\"clockicn\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\" class=\"ion-no-padding\">\n                <div class=\"clocktxt\">{{list.is_new}}</div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"9\" class=\"ion-no-padding\" (click)=\"gomylist(i,'1')\">\n            <div class=\"pricediv\">{{list.currency}}{{showprice(list.price)}}</div>\n          </ion-col>\n          <ion-col size=\"3\" style=\"text-align: right;\" class=\"ion-no-padding\">\n            <!-- <ion-icon name=\"heart\" class=\"filllike\"></ion-icon> -->\n            <ion-icon [name]=\"(list.is_liked == '1')?'heart':'heart-outline'\"\n              [ngClass]=\"(list.is_liked == '1')?'filllike':'likeicn'\" (click)=\"addfavorite(list.id,i)\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n\n  <!-- <ion-row *ngIf=\"user.company_name\" class=\"row_90\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"business-outline\" class=\"personlogo\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <div class=\"lbldiv\">Company Name</div>\n      <div class=\"valuediv\">{{user.company_name}}</div>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ht_10\"></div>\n  <ion-row *ngIf=\"user.company_description\" class=\"row_90\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"person-outline\" class=\"personlogo\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <div class=\"lbldiv\">Company Description</div>\n      <div class=\"valuediv\">{{user.company_description}}</div>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ht_10\"></div>\n  <ion-row class=\"row_90\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"person-outline\" class=\"personlogo\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <div class=\"lbldiv\">User Name</div>\n      <div class=\"valuediv\">{{user.user_name}}</div>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ht_10\"></div>\n  <ion-row *ngIf=\"!user.company_name\" class=\"row_90\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"flag-outline\" class=\"personlogo\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <div class=\"lbldiv\">Location</div>\n      <div class=\"valuediv\">{{user.country}}</div>\n      </ion-col>\n  </ion-row>\n\n  <div class=\"ht_10\"></div>\n  <ion-row *ngIf=\"user.company_address\" class=\"row_90\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"location-outline\" class=\"personlogo\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <div class=\"lbldiv\">Location</div>\n      <div class=\"valuediv\">{{user.company_address}}</div>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ht_10\"></div>\n  <ion-row *ngIf=\"user.company_type\" class=\"row_90\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"business-outline\" class=\"personlogo\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <div class=\"lbldiv\">Company Type</div>\n      <div class=\"valuediv\">{{user.company_type}}</div>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ht_10\"></div>\n  <ion-row *ngIf=\"user.nature_of_business\" class=\"row_90\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"business-outline\" class=\"personlogo\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <div class=\"lbldiv\">Nature of Business</div>\n      <div class=\"valuediv\">{{user.nature_of_business}}</div>\n    </ion-col>\n  </ion-row> -->\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chatprofile_chatprofile_module_ts.js.map