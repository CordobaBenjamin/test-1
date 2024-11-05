(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_mylisting_mylisting_module_ts"],{

/***/ 9481:
/*!*******************************************************!*\
  !*** ./src/app/mylisting/mylisting-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MylistingPageRoutingModule": () => (/* binding */ MylistingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _mylisting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mylisting.page */ 60055);




const routes = [
    {
        path: '',
        component: _mylisting_page__WEBPACK_IMPORTED_MODULE_0__.MylistingPage
    }
];
let MylistingPageRoutingModule = class MylistingPageRoutingModule {
};
MylistingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MylistingPageRoutingModule);



/***/ }),

/***/ 99374:
/*!***********************************************!*\
  !*** ./src/app/mylisting/mylisting.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MylistingPageModule": () => (/* binding */ MylistingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _mylisting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mylisting-routing.module */ 9481);
/* harmony import */ var _mylisting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mylisting.page */ 60055);
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pinch-zoom */ 4312);








let MylistingPageModule = class MylistingPageModule {
};
MylistingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mylisting_routing_module__WEBPACK_IMPORTED_MODULE_0__.MylistingPageRoutingModule,
            ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__.PinchZoomModule
        ],
        declarations: [_mylisting_page__WEBPACK_IMPORTED_MODULE_1__.MylistingPage]
    })
], MylistingPageModule);



/***/ }),

/***/ 60055:
/*!*********************************************!*\
  !*** ./src/app/mylisting/mylisting.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MylistingPage": () => (/* binding */ MylistingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_mylisting_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mylisting.page.html */ 28038);
/* harmony import */ var _mylisting_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mylisting.page.scss */ 33775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 49704);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ 47531);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service.service */ 35881);










let MylistingPage = class MylistingPage {
    constructor(loader, navctrl, router, config, socialShare, service) {
        this.loader = loader;
        this.navctrl = navctrl;
        this.router = router;
        this.config = config;
        this.socialShare = socialShare;
        this.service = service;
        this.config.refresh();
        this.logindata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
        console.log(this.logindata);
        this.listingdata = this.router.snapshot.params;
        console.log(this.listingdata);
        this.is_like = this.listingdata.is_liked;
        this.status = this.listingdata.status;
        var imgpd = [];
        if (this.listingdata.allimage) {
            this.image = this.listingdata.allimage.split(',');
            imgpd.push(this.image);
        }
        else {
            this.image = [];
            this.image.push(this.listingdata.image);
        }
        console.log(this.image);
        console.log(imgpd);
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
    back() {
        this.navctrl.pop();
    }
    edit() {
        this.navctrl.navigateForward(['/editlist', this.listingdata]);
    }
    delete(id) {
        var params = {
            id: id
        };
        console.log(params);
        this.service.Deletelisting(params)
            .then((results) => this.hanldeDelete(results));
    }
    hanldeDelete(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.loader.showToast(results.ResponseMsg);
            // this.getlisting()
        }
        else {
            this.loader.showAlert("Error", results.ResponseMsg);
        }
    }
    addlist() {
        this.navctrl.navigateForward('/addlisting');
    }
    chat(id) {
        this.navctrl.navigateForward(['/chat', { 'listproduct_id': id }]);
    }
    close(id, status) {
        this.loader.showLoader();
        if (status == '1') {
            var params = {
                id: id,
                status: '0'
            };
        }
        else {
            var params = {
                id: id,
                status: '1'
            };
        }
        console.log(params);
        this.service.Changelistingstatus(params)
            .then((results) => this.handleStatus(results, status));
    }
    handleStatus(results, status) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            if (status == '1') {
                this.status = '0';
                this.loader.showToast("Successfully Closed Listing");
            }
            else {
                this.status = '1';
                this.loader.showToast("Successfully Opened Listing");
            }
            // this.getlisting()
        }
        else {
            this.loader.showAlert("Error", results.ResponseMsg);
        }
    }
    getlisting() {
        // this.loader.showLoader()
        var params = {
            user_id: this.config.logindata.id
        };
        console.log(params);
        this.service.Mylisting(params)
            .then((results) => this.hanldeLinsting(results));
    }
    hanldeLinsting(results) {
        console.log(results);
        // this.loader.dissmissLoader()
        if (results.ResponseCode == '1') {
            for (var i = 0; i < results.data.length; i++) {
                this.listingdata = results.data[i];
            }
            var imgpd = [];
            if (this.listingdata.allimage) {
                this.image = this.listingdata.allimage.split(',');
                imgpd.push(this.image);
            }
            else {
                this.image = [];
                this.image.push(this.listingdata.image);
            }
        }
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
            this.loader.showToast(results.ResponseMsg);
        }
        else {
            // this.loader.showAlert("Error", results.ResponseMsg)
        }
    }
    openimg(img) {
        this.valuepass = '2';
        this.imgonep = img;
    }
    clseimg() {
        this.valuepass = '1';
        this.imgonep = '';
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
};
MylistingPage.ctorParameters = () => [
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__.SocialSharing },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_5__.ServiceService }
];
MylistingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-mylisting',
        template: _raw_loader_mylisting_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mylisting_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MylistingPage);



/***/ }),

/***/ 33775:
/*!***********************************************!*\
  !*** ./src/app/mylisting/mylisting.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".headericn {\n  color: #4a4a4a;\n  font-size: 30px;\n}\n\nion-slides {\n  padding-bottom: 34px;\n}\n\n.detailimg {\n  width: 100%;\n  height: 100%;\n}\n\n.productimg {\n  margin: auto;\n  display: table;\n  box-shadow: none;\n}\n\n.productname {\n  margin-left: 20px;\n  font-size: 19px;\n  color: black;\n}\n\n.productprice {\n  margin-left: 20px;\n  font-size: 20px;\n  color: black;\n  font-weight: bold;\n}\n\n.clocktxt {\n  font-size: 14px;\n  margin-left: 5px;\n  margin-top: 1px;\n  color: gray;\n}\n\n.clockicn {\n  color: #f9771f;\n  font-size: 20px;\n}\n\n.discriptheading {\n  margin-left: 20px;\n  color: black;\n  font-weight: 400;\n}\n\n.discripttxt {\n  margin-left: 20px;\n  color: gray;\n  font-size: 14px;\n}\n\nion-avatar {\n  width: 35px;\n  height: 35px;\n  margin: auto;\n  color: #b6b6b6;\n  font-size: 18px;\n  background-color: #f2f2f2;\n  padding: 8px 9px;\n}\n\n.username {\n  font-weight: bold;\n  margin-top: 5px;\n  color: black;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 65%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\n.editdiv {\n  width: 70%;\n  color: white;\n  text-align: center;\n  margin: auto;\n  display: table;\n  --background: linear-gradient(to right, #ed7d5b, #f99d58);\n  --border-radius: 20px;\n}\n\n.vertical-align-content {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  height: 100%;\n  padding: 0px 10px;\n  background: #00000096;\n}\n\n.underdiv {\n  width: 100%;\n  padding: 0px;\n  border-radius: 8px;\n}\n\n.newsfddiv {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 11111111;\n}\n\n.imgeoprn {\n  width: 100%;\n  height: 100%;\n}\n\n.ivoncose {\n  font-size: 24px;\n  color: #ffffff;\n}\n\n.opencardimg {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBRUksb0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFHSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5BO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksNEVBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVVKOztBQVJBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEseURBQUE7RUFDQSxxQkFBQTtBQVVKOztBQVBBO0VBQ0ksd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFVSjs7QUFSRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFXSjs7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBWUo7O0FBVkU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQWFOOztBQVhFO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFjTjs7QUFaQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWVKIiwiZmlsZSI6Im15bGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyaWNue1xyXG4gICAgY29sb3I6IzRhNGE0YTtcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG59XHJcbmlvbi1zbGlkZXN7XHJcbiAgICAvLyBoZWlnaHQ6IDQwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOjM0cHg7XHJcbn1cclxuLmRldGFpbGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5wcm9kdWN0aW1ne1xyXG4gICAgLy8gd2lkdGg6IDU1JTtcclxuICAgIC8vIGhlaWdodDogMjIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLnByb2R1Y3RuYW1le1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIGZvbnQtc2l6ZToxOXB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuLnByb2R1Y3RwcmljZXtcclxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG59XHJcbi5jbG9ja3R4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuLmNsb2NraWNuIHtcclxuICAgIGNvbG9yOiAjZjk3NzFmO1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbn1cclxuLmRpc2NyaXB0aGVhZGluZ3tcclxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmRpc2NyaXB0dHh0e1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY29sb3I6ICNiNmI2YjY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgcGFkZGluZzogOHB4IDlweDtcclxufVxyXG4udXNlcm5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJ0bmNsYXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI0OGRlZywgI2Y3OGE0NiAwJSwgI2VlNzg0OCAzNCUsICNlYTZiNGEgMTAwJSk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICB3aWR0aDo2NSU7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuLmVkaXRkaXZ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgLy8gcGFkZGluZzoxMHB4IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VkN2Q1YiwgI2Y5OWQ1OCk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAvLyBmbG9hdDpyaWdodDtcclxufVxyXG4udmVydGljYWwtYWxpZ24tY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5NjtcclxuICB9XHJcbiAgLnVuZGVyZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG4ubmV3c2ZkZGl2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDExMTExMTExO1xyXG4gIH1cclxuICAuaW1nZW9wcm57XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5pdm9uY29zZXtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbi5vcGVuY2FyZGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 28038:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mylisting/mylisting.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>My Listing</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"ht_30\"></div>\n  <ion-row class=\"row_95\">\n    <ion-col class=\"ion-no-padding text-center\" size=\"1\">\n      <ion-icon name=\"arrow-back-outline\" class=\"headericn\" (click)=\"back()\"></ion-icon>\n    </ion-col>\n    <ion-col class=\"ion-no-padding text-center\" size=\"8\">\n      <!-- <div class=\"hedertxt\">Design & Engineering Consultancy</div> -->\n    </ion-col>\n    <ion-col class=\"ion-no-padding text-center\" size=\"2\">\n      <ion-icon name=\"share-social-outline\" class=\"headericn\" (click)=\"share()\"></ion-icon>\n    </ion-col>\n    <ion-col class=\"ion-no-padding text-center\" size=\"1\">\n      <img src=\"assets/image/edit (2).png\" style=\"width: 23px;margin-top: 5px;\" (click)=\"edit()\">\n      <!-- <ion-icon name=\"pencil-outline\" class=\"headericn\"></ion-icon> -->\n    </ion-col>\n  </ion-row>\n  <div class=\"ht_10\"></div>\n  <ion-slides pager>\n    <ion-slide *ngFor=\"let img of image\">\n      <ion-card class=\"productimg\">\n        <img src=\"{{img}}\" class=\"detailimg\" (click)=\"openimg(img)\">\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n  <div class=\"ht_10\"></div>\n  <ion-row>\n    <ion-col size=\"10.5\" class=\"ion-no-padding\">\n      <div class=\"productname\">{{listingdata.name}}</div>\n    </ion-col>\n    <ion-col size=\"1.5\" class=\"ion-no-padding\">\n      <ion-icon [name]=\"(is_like == '1')?'heart':'heart-outline'\" [ngClass]=\"(is_like == '1')?'filllike':'headericn'\" (click)=\"addfavorite()\"></ion-icon>\n        </ion-col>\n  </ion-row>\n  <!-- <div class=\"ht_10\"></div> -->\n  <div class=\"productprice\">{{listingdata.currency}}{{showprice(listingdata.price)}}</div>\n  <div class=\"ht_10\"></div>\n  <ion-row class=\"row_90\">\n    <ion-col class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding\">\n          <ion-icon name=\"time-outline\" class=\"clockicn\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-no-padding\">\n          <div class=\"clocktxt textuppercase\">{{listingdata.days_ago}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding\">\n          <ion-icon name=\"location-outline\" class=\"clockicn\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-no-padding\">\n          <div class=\"clocktxt textuppercase\">{{listingdata.country}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"row_90\">\n    <ion-col class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding\">\n          <ion-icon name=\"globe-outline\" class=\"clockicn\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-no-padding\">\n          <div class=\"clocktxt textuppercase\">{{listingdata.type}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding\">\n          <ion-icon name=\"receipt-outline\" class=\"clockicn\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"ion-no-padding\">\n          <div class=\"clocktxt textuppercase\">{{listingdata.is_new}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <div class=\"ht_20\"></div>\n  <div class=\"discriptheading\">Listing Description</div>\n  <div class=\"ht_10\"></div>\n  <div class=\"discripttxt\">{{listingdata.description}}</div>\n  <div class=\"ht_10\"></div>\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-no-padding\">\n      <div class=\"discriptheading\">Listed By</div>\n      <div class=\"ht_10\"></div>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-no-padding\">\n      <ion-avatar>\n       <ion-icon name=\"person\"></ion-icon>\n      </ion-avatar>\n    </ion-col>\n    <ion-col>\n      <div class=\"username\">{{logindata.user_name}}</div>\n    </ion-col>\n  </ion-row>\n  <div class=\"ht_10\"></div>\n  <!-- <ion-row>\n    <ion-col size=\"4\"></ion-col>\n    <ion-col> -->\n      <ion-button *ngIf=\"status == '1'\" class=\"editdiv\" (click)=\"close(listingdata.id,status)\">Close this listing</ion-button>\n      <ion-button *ngIf=\"status == '0'\" class=\"editdiv\" (click)=\"close(listingdata.id,status)\">Open this listing</ion-button>\n      <div class=\"ht_10\"></div>\n      <ion-button class=\"editdiv\" (click)=\"chat(listingdata.id)\">Chat History</ion-button><br>\n    <!-- </ion-col>\n  </ion-row> -->\n  <div class=\"ht_10\"></div>\n  <div class=\"newsfddiv\" *ngIf=\"valuepass == '2'\">\n    <div class=\"vertical-align-content\">\n      <div class=\"underdiv\">\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-icon name=\"close-circle\" class=\"ivoncose\" (click)=\"clseimg()\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-slides pager>\n              <ion-slide *ngFor=\"let img of image\">\n                <ion-card class=\"opencardimg\">\n                  <pinch-zoom>\n                    <img src=\"{{img}}\"  class=\"imgeoprn\"/> \n                </pinch-zoom>\n                </ion-card>\n              </ion-slide>\n            </ion-slides>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n  <!-- <div class=\"ht_20\"></div>\n  <ion-card *ngFor=\"let list of alllisting;let i = index;\" class=\"card\">\n    <img src=\"{{list.image}}\" class=\"listimage\">\n    <div class=\"ht_10\"></div>\n    <div class=\"lbldiv\">Name : <span>{{list.name}}</span></div>\n    <div class=\"lbldiv\">Category : <span>{{list.category}}</span></div>\n    <div class=\"lbldiv\">Type : <span>{{list.type}}</span></div>\n    <div class=\"lbldiv\">Country : <span>{{list.country}}</span></div>\n    <div class=\"lbldiv\">Description : <span>{{list.description}}</span></div>\n    <div class=\"lbldiv\">Price : <span>{{list.price}}</span></div>\n    <ion-row>\n      <ion-col>\n        <div class=\"editdiv\" (click)=\"edit(i)\">Edit</div>\n      </ion-col>\n      <ion-col>\n        <div class=\"editdiv\" (click)=\"delete(list.id)\">Delete</div>\n      </ion-col>\n      <ion-col>\n        <div *ngIf=\"list.status == '1'\" class=\"editdiv\" (click)=\"close(list.id,list.status)\">Close</div>\n        <div *ngIf=\"list.status == '0'\" class=\"editdiv\" (click)=\"close(list.id,list.status)\">Open</div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <div class=\"ht_15\"></div>\n<div class=\"fabdiv\" (click)=\"addlist()\">\n  <ion-icon name=\"add\" style=\"font-size: 50px;\"></ion-icon>\n</div>\n</ion-content> -->\n<!-- <ion-footer>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" class=\"addfab\" (click)=\"addlist()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\" style=\"font-size: 50px;\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-footer> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_mylisting_mylisting_module_ts.js.map