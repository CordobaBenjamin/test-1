(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_searchpage_searchpage_module_ts"],{

/***/ 92732:
/*!*********************************************************!*\
  !*** ./src/app/searchpage/searchpage-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchpagePageRoutingModule": () => (/* binding */ SearchpagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _searchpage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchpage.page */ 14298);




const routes = [
    {
        path: '',
        component: _searchpage_page__WEBPACK_IMPORTED_MODULE_0__.SearchpagePage
    }
];
let SearchpagePageRoutingModule = class SearchpagePageRoutingModule {
};
SearchpagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchpagePageRoutingModule);



/***/ }),

/***/ 55265:
/*!*************************************************!*\
  !*** ./src/app/searchpage/searchpage.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchpagePageModule": () => (/* binding */ SearchpagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _searchpage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchpage-routing.module */ 92732);
/* harmony import */ var _searchpage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchpage.page */ 14298);







let SearchpagePageModule = class SearchpagePageModule {
};
SearchpagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _searchpage_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchpagePageRoutingModule
        ],
        declarations: [_searchpage_page__WEBPACK_IMPORTED_MODULE_1__.SearchpagePage]
    })
], SearchpagePageModule);



/***/ }),

/***/ 14298:
/*!***********************************************!*\
  !*** ./src/app/searchpage/searchpage.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchpagePage": () => (/* binding */ SearchpagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_searchpage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./searchpage.page.html */ 23437);
/* harmony import */ var _searchpage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchpage.page.scss */ 93082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 47531);
/* harmony import */ var _filter_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter/filter.page */ 66955);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service.service */ 35881);










let SearchpagePage = class SearchpagePage {
    constructor(
    // public navparams: NavParams,
    navModal, navctrl, service, config, loader, router) {
        this.navModal = navModal;
        this.navctrl = navctrl;
        this.service = service;
        this.config = config;
        this.loader = loader;
        this.router = router;
    }
    ngOnInit() {
        console.log("Searchpage Page");
        var data = this.router.snapshot.params;
        console.log(data);
        this.searchtxt = data.txt;
        this.catid = data.cat_id;
        // this.searchtxt = this.navparams.get('txt')
        // this.alllist = this.navparams.get('alldata')
        // this.catid = this.navparams.get('cat_id')
        // this.filterdata = this.navparams.get('filterdata')
        console.log(this.alllist);
        console.log(this.catid);
        console.log(this.filterdata);
        this.sarchrun();
    }
    sarchrun() {
        var params = {
            txt: this.searchtxt,
            user_id: this.config.logindata.id
        };
        console.log(params);
        this.loader.showLoader();
        this.service.Searchproduct(params)
            .then((results) => this.handlesearch(results));
    }
    handlesearch(result) {
        console.log(result);
        this.loader.dissmissLoader();
        if (result.ResponseCode == '1') {
            this.listing = result.data;
            this.lisinrearglenght = this.listing.length;
            for (var i = 0; i < this.listing.length; i++) {
                this.image = this.listing[i].image;
                this.listing[i].image = this.image.split(',')[0];
                this.listing[i].allimage = this.image;
            }
        }
        else {
            this.loader.showAlert("Error", result.ResponseMsg);
        }
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
    closesearch() {
        this.navctrl.pop();
        // this.navModal.dismiss({ data: 'cose' })
    }
    // filter() {
    //   this.navModal.dismiss({ data: 'filter' })
    // }
    clearsearch() {
        this.searchtxt = '';
    }
    filter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.navModal.create({
                component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_3__.FilterPage,
                cssClass: "backmodal",
                componentProps: { 'txt': this.searchtxt, 'cat_id': this.catid, 'filterdata': this.filterdata }
            });
            modal.onDidDismiss().then((data) => {
                console.log(data.data);
                this.filterdata = data.data.filterdata;
                if (data.data.data) {
                    this.listing = data.data.data;
                    this.lisinrearglenght = this.listing.length;
                    for (var i = 0; i < this.listing.length; i++) {
                        this.image = this.listing[i].image;
                        this.listing[i].image = this.image.split(',')[0];
                        this.listing[i].allimage = this.image;
                    }
                }
            });
            modal.present();
        });
    }
    list() {
        this.navModal.dismiss();
        this.navctrl.navigateForward('/userguide');
    }
    detail(id, status) {
        this.navModal.dismiss({ data: 'cose' });
        // var params = { 'txt': this.searchtxt, 'alldata': this.alllist ,'cat_id': this.catid, 'filterdata': this.filterdata}
        if (this.listing[id].user_id == this.config.logindata.id) {
            this.navctrl.navigateForward(['/mylisting', this.listing[id]]);
        }
        else {
            if (status == '1') {
                this.navctrl.navigateForward(['/detail', this.listing[id]]);
            }
        }
    }
    chat() {
        this.navModal.dismiss();
        this.navctrl.navigateForward('/chat');
    }
    notification() {
        this.navModal.dismiss();
        this.navctrl.navigateForward('/notification');
    }
    profile() {
        this.navModal.dismiss();
        this.navctrl.navigateForward('/profile');
    }
};
SearchpagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_5__.ServiceService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute }
];
SearchpagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-searchpage',
        template: _raw_loader_searchpage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_searchpage_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SearchpagePage);



/***/ }),

/***/ 93082:
/*!*************************************************!*\
  !*** ./src/app/searchpage/searchpage.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backcolordiv {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  background-color: #f9771f;\n}\n\n.imag {\n  margin: auto;\n  text-align: center;\n  width: 100%;\n  height: 90px;\n  display: block;\n  -webkit-clip-path: ellipse(80% 60% at 59% 35%);\n          clip-path: ellipse(80% 60% at 59% 35%);\n  background-color: #fd9345;\n}\n\n.inner {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 90px;\n  background-color: #f78427;\n  -webkit-clip-path: ellipse(80% 60% at 46% 35%);\n  clip-path: ellipse(80% 60% at 46% 35%);\n}\n\n.back2 {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 90px;\n  background-color: #f9771f;\n  -webkit-clip-path: ellipse(80% 61% at 29% 35%);\n  clip-path: ellipse(80% 61% at 29% 35%);\n}\n\n.circle {\n  position: absolute;\n  top: 20px;\n  height: 35%;\n  right: 0;\n}\n\n.searchrow {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n}\n\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 15px;\n  font-size: 10px;\n  --padding: 0px;\n  --background: white;\n  color: #000000;\n  padding-top: 21px !important;\n}\n\nion-searchbar::part(icon) {\n  display: none !important;\n}\n\n.closeicn {\n  position: absolute;\n  top: 27px;\n  right: 15px;\n  font-size: 22px;\n  color: black;\n}\n\n.filter {\n  margin-top: 25px;\n  font-size: 28px;\n  color: white;\n  transform: rotate(90deg);\n}\n\n.searchicon {\n  margin-top: 10px;\n  font-size: 28px;\n  color: white;\n}\n\n.categorytxt {\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px 10px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #000000;\n}\n\n.selectcategorytxt {\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px 10px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #f9771f;\n  border-bottom: 1px solid #f9771f;\n}\n\n.sldimg {\n  width: 90%;\n  margin: auto;\n  display: table;\n}\n\n.catslide {\n  background-color: white;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  color: #000000;\n}\n\nion-slides {\n  --bullet-background-active: #e76945;\n  --bullet-background: #8f8f8f;\n}\n\n.div2 {\n  margin: auto;\n  text-align: center;\n  height: 135px;\n  width: 89%;\n  background-color: white;\n  margin-top: 12px;\n  color: #000000;\n}\n\n.slide {\n  margin: auto;\n  text-align: center;\n  height: 135px;\n  width: 100%;\n}\n\n.latest {\n  color: black;\n  font-size: 17px;\n  font-weight: 400;\n  margin-left: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaHBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBRko7O0FBSUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHNDQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxzQ0FBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBSUo7O0FBRkE7RUFDSSx3QkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFPSjs7QUFKQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFPSjs7QUFMQTtFQUNJLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFRSjs7QUFOQTtFQUNJLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQVNKOztBQVBBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBVUo7O0FBUkE7RUFDSSx1QkFBQTtFQUNBLGtDQUFBO0VBQUEsNkJBQUE7RUFDQSxjQUFBO0FBV0o7O0FBVEE7RUFDSSxtQ0FBQTtFQUNBLDRCQUFBO0FBWUo7O0FBVkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBYUo7O0FBWEE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQWNKOztBQVpBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBZUoiLCJmaWxlIjoic2VhcmNocGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudHtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG4uYmFja2NvbG9yZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTc3MWY7XHJcbn1cclxuLmltYWcge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsaXAtcGF0aDogZWxsaXBzZSg4MCUgNjAlIGF0IDU5JSAzNSUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkOTM0NTtcclxufVxyXG4uaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc4NDI3O1xyXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGVsbGlwc2UoODAlIDYwJSBhdCA0NiUgMzUlKTtcclxuICAgIGNsaXAtcGF0aDogZWxsaXBzZSg4MCUgNjAlIGF0IDQ2JSAzNSUpO1xyXG59XHJcbi5iYWNrMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTc3MWY7XHJcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogZWxsaXBzZSg4MCUgNjElIGF0IDI5JSAzNSUpO1xyXG4gICAgY2xpcC1wYXRoOiBlbGxpcHNlKDgwJSA2MSUgYXQgMjklIDM1JSk7XHJcbn1cclxuLmNpcmNsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDM1JTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5zZWFyY2hyb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIC0tcGFkZGluZzogMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDIxcHggIWltcG9ydGFudFxyXG59XHJcbmlvbi1zZWFyY2hiYXI6OnBhcnQoaWNvbikge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuLmNsb3NlaWNue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjI3cHg7XHJcbiAgICByaWdodDoxNXB4O1xyXG4gICAgZm9udC1zaXplOjIycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmZpbHRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC02cHg7XHJcbn1cclxuLnNlYXJjaGljb257XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXRlZ29yeXR4dCB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxufVxyXG4uc2VsZWN0Y2F0ZWdvcnl0eHQge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZjk3NzFmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOTc3MWY7XHJcbn1cclxuLnNsZGltZyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLmNhdHNsaWRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG59XHJcbmlvbi1zbGlkZXMge1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNlNzY5NDU7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjOGY4ZjhmO1xyXG59XHJcbi5kaXYyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICB3aWR0aDogODklO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxufVxyXG4uc2xpZGUge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMzVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sYXRlc3Qge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG59XHJcblxyXG5cclxuICBcclxuIl19 */");

/***/ }),

/***/ 23437:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searchpage/searchpage.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" style=\"background-color: #ffffff;\">\n  <div class=\"backcolordiv\">\n    <div class=\"imag\"></div>\n    <div class=\"inner\"></div>\n    <div class=\"back2\"></div>\n    <img class=\"circle\" src=\"assets/image/circle.jpg\">\n    <ion-row class=\"searchrow\">\n      <ion-col size=\"9\" class=\"ion-no-padding\" style=\"position: relative;\">\n        <ion-searchbar placeholder=\"Search Listing...\" class=\"searchbar\" [(ngModel)]=\"searchtxt\" enterkeyhint=\"Search\" (keydown.enter)=\"sarchrun()\">\n        </ion-searchbar>\n        <ion-icon name=\"close-outline\" class=\"closeicn\" (click)=\"clearsearch()\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"2\" class=\"ion-no-padding\">\n        <div style=\"font-size: 15px;margin-top:28px;color:#ffffff;\" (click)=\"closesearch()\">Cancel</div>\n        <!-- <ion-icon name=\"search-outline\" class=\"searchicon\" (click)=\"closesearch()\"></ion-icon> -->\n      </ion-col>\n      <ion-col size=\"1\" class=\"ion-no-padding\">\n        <ion-icon name=\"options-outline\" class=\"filter\" (click)=\"filter()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"ht_10\"></div>\n</ion-header>\n<ion-content>\n  <div class=\"ht_10\"></div>\n  <div class=\"ht_15\"></div>\n  <div class=\"latest\">Searched Listings ({{lisinrearglenght}})</div>\n  <div class=\"ht_10\"></div>\n\n  <ion-row style=\"width: 95%;margin:auto;margin-bottom: 10px;\">\n    <div *ngIf=\"listing == 0\">\n      <div class=\"nodata\">No Listing Available</div>\n    </div>\n    <ion-col size=\"6\" *ngFor=\"let list of listing;let i = index\">\n      <ion-card class=\"card\">\n        <div class=\"imagediv\">\n          <img src=\"{{list.image}}\" class=\"cuter\" (click)=\"detail(i,list.status)\">\n          <div *ngIf=\"list.status == '0'\" class=\"closediv\">Listing Closed</div>\n        </div>\n        <div class=\"pvnwc towlines\" (click)=\"detail(i,list.status)\">{{list.name}}</div>\n        <div class=\"ht_5\"></div>\n        <ion-row (click)=\"detail(i,list.status)\">\n          <ion-col class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col size=\"2\" class=\"ion-no-padding\">\n                <ion-icon name=\"time-outline\" class=\"clockicn\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\" class=\"ion-no-padding\">\n                <div class=\"clocktxt\">{{list.days_ago}}</div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col size=\"2\" class=\"ion-no-padding\">\n                <ion-icon name=\"location-outline\" class=\"clockicn\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\" class=\"ion-no-padding\">\n                <div class=\"clocktxt towlines\">{{list.country}}</div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row (click)=\"detail(i,list.status)\">\n          <ion-col class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col size=\"2\" class=\"ion-no-padding\">\n                <ion-icon name=\"globe-outline\" class=\"clockicn\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\" class=\"ion-no-padding\">\n                <div style=\"height: 28px;\" class=\"clocktxt\">{{list.type}}</div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col size=\"2\" class=\"ion-no-padding\">\n                <ion-icon name=\"receipt-outline\" class=\"clockicn\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\" class=\"ion-no-padding\">\n                <div class=\"clocktxt\">{{list.is_new}}</div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row (click)=\"detail(i,list.status)\">\n          <!-- <ion-col class=\"ion-no-padding\">\n            <ion-row> -->\n          <ion-col size=\"1\" class=\"ion-no-padding\">\n            <ion-icon name=\"person-outline\" class=\"clockicn\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"11\" class=\"ion-no-padding\">\n            <div class=\"clocktxt\" style=\"font-weight: bold;margin-top:2px;\">{{list.user_name}}</div>\n          </ion-col>\n          <!-- </ion-row> -->\n          <!-- </ion-col>\n          <ion-col class=\"ion-no-padding\">\n            <div class=\"ht_5\"></div>\n          </ion-col> -->\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"9\" (click)=\"detail(i,list.status)\" class=\"ion-no-padding\">\n            <div class=\"pricediv\">{{list.currency}}{{showprice(list.price)}}</div>\n          </ion-col>\n          <ion-col size=\"3\" style=\"text-align: right;\" class=\"ion-no-padding\">\n            <ion-icon [name]=\"(list.is_liked == '1')?'heart':'heart-outline'\"\n              [ngClass]=\"(list.is_liked == '1')?'filllike':'likeicn'\" (click)=\"add(list.id,i)\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <div class=\"ht_20\"></div>\n  <!-- <div *ngIf=\"logindata != '0'\" class=\"fabdiv\" (click)=\"addlist()\">\n    <ion-icon name=\"add\" style=\"font-size: 50px;\"></ion-icon>\n  </div> -->\n\n</ion-content>\n<ion-footer>\n  <div class=\"ht_5\"></div>\n  <ion-row class=\"row_95 footerrow\">\n    <ion-col>\n      <ion-icon name=\"home\" class=\"selecttab\"></ion-icon>\n    </ion-col>\n    <ion-col (click)=\"list()\">\n      <ion-icon name=\"list-outline\"></ion-icon>\n    </ion-col>\n    <ion-col (click)=\"chat()\">\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.counter > 0\" class=\"showbagde\">{{config.counter}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"notification()\">\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.get_badge > 0\" class=\"showbagde\">{{config.get_badge}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"profile()\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_searchpage_searchpage_module_ts.js.map