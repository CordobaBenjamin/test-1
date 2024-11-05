(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_detail_detail_module_ts"],{

/***/ 8139:
/*!*************************************************!*\
  !*** ./src/app/detail/detail-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPageRoutingModule": () => (/* binding */ DetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.page */ 32035);




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_0__.DetailPage
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ 76736:
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPageModule": () => (/* binding */ DetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-routing.module */ 8139);
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.page */ 32035);
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pinch-zoom */ 4312);








let DetailPageModule = class DetailPageModule {
};
DetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailPageRoutingModule,
            ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__.PinchZoomModule
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_1__.DetailPage]
    })
], DetailPageModule);



/***/ }),

/***/ 32035:
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPage": () => (/* binding */ DetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detail.page.html */ 40276);
/* harmony import */ var _detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.page.scss */ 99685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ 35881);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 49704);









let DetailPage = class DetailPage {
    constructor(navctrl, socialShare, service, loader, router) {
        this.navctrl = navctrl;
        this.socialShare = socialShare;
        this.service = service;
        this.loader = loader;
        this.router = router;
        this.logindata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
        console.log(this.logindata);
        this.listingdata = this.router.snapshot.params;
        console.log(this.listingdata);
        this.is_like = this.listingdata.is_liked;
        var imgpd = [];
        this.valuepass = '1';
        if (this.listingdata.allimage) {
            this.image = this.listingdata.allimage.split(',');
            imgpd.push(this.image);
        }
        else {
            this.image = [];
            this.image.push(this.listingdata.image);
        }
    }
    ngOnInit() {
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
    chat(id) {
        if (this.logindata.id == '0') {
            this.loader.showAlert("Attention", "Please Login as the Individual or Company in app");
        }
        else {
            this.navctrl.navigateForward(['/chatdetail', this.listingdata]);
        }
    }
    back() {
        this.navctrl.pop();
    }
    addfavorite() {
        if (this.logindata.id == '0') {
            this.loader.showAlert("Attention", "Please Login as the Individual or Company in app");
        }
        else {
            this.loader.showLoader();
            var params = {
                id: this.listingdata.id,
                user_id: this.logindata.id
            };
            console.log(params);
            this.service.Favorite(params)
                .then((results) => this.handleFavorite(results));
        }
    }
    handleFavorite(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            if (this.is_like == '0') {
                this.is_like = '1';
                // this.loader.showToast(results.ResponseMsg)
            }
            else {
                this.is_like = '0';
                // this.loader.showToast(results.ResponseMsg)
            }
        }
        else {
            // this.loader.showAlert("Error", results.ResponseMsg)
        }
    }
    share() {
        // if (this.logindata.id == '0') {
        //   this.loader.showAlert("Attention", "Please Login as the Individual or Company in app")
        // } else {
        var alldata = "name:" + ' ' + this.listingdata.name + ',' + "Price:" + ' ' + this.listingdata.price + ' , ' + "Condition:" + ' ' + this.listingdata.is_new + ' , ' + "Description:" + ' ' + this.listingdata.description;
        this.socialShare.share(alldata, alldata, this.listingdata.image, "").then((Success) => {
            // alert("success");
            console.log(Success);
            if (Success == 'true') {
                alert("success");
            }
            console.log("Share completed? ", Success.completed); // On Android apps mostly return false even while it's true
            console.log("Shared to app: ", Success.app);
        })
            .catch((err) => {
            console.log(err);
            alert("could not share product");
        });
    }
    // }
    report() {
        this.navctrl.navigateForward(['/report', { 'report_id': this.listingdata.user_id }]);
    }
    profile() {
        this.navctrl.navigateForward(['/chatprofile', { 'user_id': this.listingdata.user_id }]);
    }
    openimg(img) {
        this.valuepass = '2';
        this.imgonep = img;
    }
    clseimg() {
        this.valuepass = '1';
        this.imgonep = '';
    }
};
DetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__.SocialSharing },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
DetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-detail',
        template: _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetailPage);



/***/ }),

/***/ 99685:
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".headericn {\n  color: gray;\n  font-size: 30px;\n}\n\nion-slides {\n  --bullet-background: #070707;\n  --bullet-background-active: #4573c7;\n  --bullet-border: 1px solid #4573c7;\n  padding-bottom: 34px;\n}\n\n.detailimg {\n  width: 100%;\n  height: 100%;\n}\n\n.productimg {\n  margin: auto;\n  display: table;\n  box-shadow: none;\n}\n\n.productname {\n  margin-left: 20px;\n  font-size: 19px;\n  color: black;\n}\n\n.productprice {\n  margin-left: 20px;\n  font-size: 20px;\n  color: black;\n  font-weight: bold;\n}\n\n.clocktxt {\n  font-size: 14px;\n  margin-left: 5px;\n  margin-top: 1px;\n  color: gray;\n}\n\n.clockicn {\n  color: #f9771f;\n  font-size: 20px;\n}\n\n.discriptheading {\n  margin-left: 20px;\n  color: black;\n  font-weight: 400;\n}\n\n.discripttxt {\n  margin-left: 20px;\n  color: gray;\n  font-size: 14px;\n}\n\nion-avatar {\n  width: 35px;\n  height: 35px;\n  margin: auto;\n  color: #b6b6b6;\n  font-size: 18px;\n  background-color: #f2f2f2;\n  padding: 8px 9px;\n}\n\n.username {\n  font-weight: bold;\n  margin-top: 5px;\n  color: black;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 65%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\n.vertical-align-content {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  height: 100%;\n  padding: 0px 10px;\n  background: #00000096;\n}\n\n.underdiv {\n  width: 100%;\n  padding: 0px;\n  border-radius: 8px;\n}\n\n.newsfddiv {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 11111111;\n}\n\n.imgeoprn {\n  width: 100%;\n  height: 100%;\n}\n\n.ivoncose {\n  font-size: 24px;\n  color: #ffffff;\n}\n\n.opencardimg {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFHSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQVNKOztBQVBBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJBO0VBQ0ksNEVBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVdKOztBQVRBO0VBQ0ksd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFZSjs7QUFWRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFhSjs7QUFYRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBY0o7O0FBWkU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQWVOOztBQWJFO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFnQk47O0FBZEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFpQkoiLCJmaWxlIjoiZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJpY24ge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMDcwNzA3O1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICM0NTczYzc7XHJcbiAgICAtLWJ1bGxldC1ib3JkZXI6IDFweCBzb2xpZCAjNDU3M2M3O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDM0cHg7XHJcbn1cclxuLmRldGFpbGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ucHJvZHVjdGltZyB7XHJcbiAgICAvLyB3aWR0aDogNTUlO1xyXG4gICAgLy8gaGVpZ2h0OiAyMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4ucHJvZHVjdG5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnByb2R1Y3RwcmljZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jbG9ja3R4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuLmNsb2NraWNuIHtcclxuICAgIGNvbG9yOiAjZjk3NzFmO1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbn1cclxuLmRpc2NyaXB0aGVhZGluZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmRpc2NyaXB0dHh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiAjYjZiNmI2O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIHBhZGRpbmc6IDhweCA5cHg7XHJcbn1cclxuLnVzZXJuYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5idG5jbGFzcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNDhkZWcsICNmNzhhNDYgMCUsICNlZTc4NDggMzQlLCAjZWE2YjRhIDEwMCUpO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuLnZlcnRpY2FsLWFsaWduLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOTY7XHJcbiAgfVxyXG4gIC51bmRlcmRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICAubmV3c2ZkZGl2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDExMTExMTExO1xyXG4gIH1cclxuICAuaW1nZW9wcm57XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5pdm9uY29zZXtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbi5vcGVuY2FyZGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 40276:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"ht_40\"></div>\n  <ion-row class=\"row_95\">\n    <ion-col class=\"ion-no-padding text-center\" size=\"1\">\n      <ion-icon name=\"arrow-back-outline\" class=\"headericn\" (click)=\"back()\"></ion-icon>\n    </ion-col>\n    <ion-col class=\"ion-no-padding text-center\" size=\"8\">\n      <!-- <div class=\"hedertxt\">Design & Engineering Consultancy</div> -->\n    </ion-col>\n    <ion-col class=\"ion-no-padding text-center\" size=\"2\">\n      <ion-icon name=\"share-social-outline\" class=\"headericn\" (click)=\"share()\"></ion-icon>\n    </ion-col>\n    <ion-col class=\"ion-no-padding text-center\" size=\"1\">\n      <ion-icon name=\"flag-outline\" class=\"headericn\" (click)=\"report()\"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <div class=\"ht_10\"></div>\n  <ion-slides pager>\n    <ion-slide *ngFor=\"let img of image\">\n      <ion-card class=\"productimg\">\n        <img src=\"{{img}}\" class=\"detailimg\" (click)=\"openimg(img)\">\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n  <div class=\"ht_10\"></div>\n  <ion-row>\n    <ion-col size=\"10.5\" class=\"ion-no-padding\">\n      <div class=\"productname\">{{listingdata.name}}</div>\n    </ion-col>\n    <ion-col size=\"1.5\" class=\"ion-no-padding\">\n      <ion-icon [name]=\"(is_like == '1')?'heart':'heart-outline'\" [ngClass]=\"(is_like == '1')?'filllike':'headericn'\"\n        (click)=\"addfavorite()\"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <!-- <div class=\"ht_10\"></div> -->\n  <div class=\"productprice\">{{listingdata.currency}}{{showprice(listingdata.price)}}</div>\n  <div class=\"ht_10\"></div>\n  <ion-row class=\"row_90\">\n    <ion-col class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding\">\n          <ion-icon name=\"time-outline\" class=\"clockicn\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-no-padding\">\n          <div class=\"clocktxt textuppercase\">{{listingdata.days_ago}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding\">\n          <ion-icon name=\"location-outline\" class=\"clockicn\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-no-padding\">\n          <div class=\"clocktxt textuppercase\">{{listingdata.country}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"row_90\">\n    <ion-col class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding\">\n          <ion-icon name=\"globe-outline\" class=\"clockicn\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-no-padding\">\n          <div class=\"clocktxt textuppercase\">{{listingdata.type}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding\">\n          <ion-icon name=\"receipt-outline\" class=\"clockicn\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-no-padding\">\n          <div class=\"clocktxt textuppercase\">{{listingdata.is_new}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <div class=\"ht_20\"></div>\n  <div class=\"discriptheading\">Listing Description</div>\n  <div class=\"ht_10\"></div>\n  <div class=\"discripttxt\">{{listingdata.description}}</div>\n  <div class=\"ht_20\"></div>\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-no-padding\">\n      <div class=\"discriptheading\">Listed By</div>\n      <div class=\"ht_10\"></div>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-no-padding\">\n      <ion-avatar>\n        <ion-icon name=\"person\"></ion-icon>\n      </ion-avatar>\n    </ion-col>\n    <ion-col (click)=\"profile()\">\n      <div class=\"username\">{{listingdata.user_name}}</div>\n    </ion-col>\n  </ion-row>\n  <div class=\"ht_40\"></div>\n\n  <ion-button class=\"btnclass\" *ngIf=\"listingdata.user_id != logindata.id\" (click)=\"chat()\">Chat / Make Offer\n  </ion-button>\n  <!-- <ion-button *ngIf=\"listingdata.user_id == logindata.id && listingdata.status == '1'\" class=\"btnclass\" (click)=\"close(listingdata.id,listingdata.status)\">Close\n    this listing</ion-button>\n  <ion-button *ngIf=\"listingdata.user_id == logindata.id && listingdata.status == '0'\" class=\"btnclass\" (click)=\"close(listingdata.id,listingdata.status)\">Open\n    this listing</ion-button> -->\n  <div class=\"ht_10\"></div>\n  <!-- <ion-button class=\"editdiv\" (click)=\"chat(listingdata.id)\">Chat History</ion-button><br>\n  <div class=\"ht_20\"></div> -->\n  <div class=\"newsfddiv\" *ngIf=\"valuepass == '2'\">\n    <div class=\"vertical-align-content\">\n      <div class=\"underdiv\">\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-icon name=\"close-circle\" class=\"ivoncose\" (click)=\"clseimg()\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-slides pager>\n              <ion-slide *ngFor=\"let img of image\">\n                <ion-card class=\"opencardimg\">\n                  <pinch-zoom>\n                    <img src=\"{{img}}\"  class=\"imgeoprn\"/> \n                </pinch-zoom>\n                  <!-- <img src=\"{{img}}\" class=\"imgeoprn\"> -->\n                </ion-card>\n              </ion-slide>\n            </ion-slides>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_detail_detail_module_ts.js.map