(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 65089:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 19460);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 82711:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 65089);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 19460);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 19460:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 47531);
/* harmony import */ var _filter_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter/filter.page */ 66955);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service.service */ 35881);









let HomePage = class HomePage {
    constructor(navctrl, service, modalctrl, config, loader) {
        this.navctrl = navctrl;
        this.service = service;
        this.modalctrl = modalctrl;
        this.config = config;
        this.loader = loader;
        this.currentIndex = 0;
        this.slideopts = {
            initialSlide: 0,
            slidesPerView: 2,
            // slidesPerGroup: 1
        };
        this.slideOpts1 = {
            centeredSlides: true,
            autoplay: true,
        };
        this.config.refresh();
        this.segmentselec = '0';
        this.logindata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
        console.log(this.logindata);
        this.searchlist = '0';
        this.searbxshow = '0';
        this.sldcat = '0';
        this.searrchhdata = '0';
        this.page = 0;
        console.log('counter =>', this.config.counter);
    }
    ngOnInit() {
        console.log('Home page');
        this.getdata();
    }
    ionViewWillEnter() {
        // this.segmentselec = '0'
        this.closesearch();
        console.log(' this.segmentselec', this.segmentselec);
        console.log('filterlisting', this.filterlisting);
        console.log('searchlisting', this.searchlisting);
        // if (this.filterlisting) {
        //   // this.listing = this.filterlisting
        //   // this.lisinglenght = this.filterlisting.length
        // } else if (this.searchlisting) {
        //   // this.listing = this.searchlisting
        //   // this.lisinglenght = this.searchlisting.length
        // } else {
        //   // this.getdata()
        // }
        this.catproduct(this.segmentselec);
    }
    addlist() {
        this.navctrl.navigateForward('/addlisting');
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
    getdata() {
        this.loader.showLoader();
        var params = {
            user_id: this.logindata.id
        };
        console.log(params);
        this.service.GetHomedata(params)
            .then((results) => this.handleData(results));
    }
    handleData(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.categoty = results.category;
            this.slider = results.slider;
            this.allslider = results.slider;
            this.alllist = results.listing;
            for (var i = 0; i < this.categoty.length; i++) {
                this.categoty[i].selected = '0';
            }
            console.log(this.alllist);
        }
        else {
            this.loader.showAlert("Error", results.ResponseMsg);
        }
        this.catproduct('0');
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            this.segmentselec = ['0'];
            this.searchlist = '0';
            this.sldcat = '0';
            this.page = 0;
            this.catproduct('0');
            // this.getdata()
            event.target.complete();
        }, 2000);
    }
    list() {
        this.navctrl.navigateRoot('/userguide');
    }
    chat() {
        this.navctrl.navigateRoot('/chat');
    }
    notification() {
        this.navctrl.navigateRoot('/notification');
    }
    profile() {
        this.navctrl.navigateRoot('/profile');
    }
    segsect(id) {
        console.log(id);
        console.log(this.allslider);
        this.segmentselec = id;
        this.slider = [];
        // this.segmentselec.push(id)
        // for (var i = 0; i < this.categoty.length; i++) {
        //   if (this.categoty[i].id == id) {
        //     this.categoty[i].selected = '1'
        //   } else {
        //     this.categoty[i].selected = '0'
        //   }
        // }
        if (id == '0') {
            this.slider = this.allslider;
        }
        else {
            for (var j = 0; j < this.allslider.length; j++) {
                if (id == this.allslider[j].category) {
                    this.slider.push(this.allslider[j]);
                }
            }
        }
        console.log(this.listing);
        this.catproduct(id);
    }
    loadData(event) {
        this.page++;
        var params = {
            id: this.segmentselec,
            user_id: this.logindata.id,
            page: this.page
        };
        console.log(params);
        this.loader.showLoader();
        this.service.Catproduct(params)
            .then((results) => this.handlepagerproduct(results, this.segmentselec, event));
    }
    handlepagerproduct(results, id, event) {
        console.log(results);
        this.loader.dissmissLoader();
        event.target.complete();
        // event.target.disabled = true;
        if (results.ResponseCode == '1') {
            for (var i = 0; i < results.data.length; i++) {
                this.listing.push(results.data[i]);
            }
            this.alllist = this.listing;
            // this.lisinglenght = this.listing.length
            if (id == '0') {
                this.totallisting = this.listing;
            }
            for (var i = 0; i < this.listing.length; i++) {
                this.image = this.listing[i].image;
                this.listing[i].image = this.image.split(',')[0];
                this.listing[i].allimage = this.image;
            }
        }
        else {
            event.target.disabled = true;
            // this.listing = []
            console.log(this.listing);
        }
    }
    clearsearch() {
        this.searchtxt = '';
    }
    catproduct(id) {
        var params = {
            id: id,
            user_id: this.logindata.id,
            page: this.page
        };
        console.log(params);
        this.loader.showLoader();
        this.service.Catproduct(params)
            .then((results) => this.handleCatproduct(results, id));
    }
    handleCatproduct(results, id) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.listing = results.data;
            this.alllist = this.listing;
            this.lisinglenght = results.total_list;
            console.log(this.listing);
            if (id == '0') {
                this.totallisting = this.listing;
            }
            for (var i = 0; i < this.listing.length; i++) {
                this.image = this.listing[i].image;
                this.listing[i].image = this.image.split(',')[0];
                this.listing[i].allimage = this.image;
            }
        }
        else {
            this.lisinglenght = 0;
            this.listing = [];
            console.log(this.listing);
        }
    }
    detail(id, status) {
        if (this.listing[id].user_id == this.config.logindata.id) {
            this.navctrl.navigateForward(['/mylisting', this.listing[id]]);
        }
        else {
            if (status == '1') {
                this.navctrl.navigateForward(['/detail', this.listing[id]]);
            }
        }
    }
    add(id, i) {
        if (this.logindata.id == '0') {
            this.loader.showAlert("Attention", "Please Login as the Individual or Company in app");
        }
        else {
            console.log(this.listing[i].is_liked);
            if (this.listing[i].is_liked == '0') {
                this.listing[i].is_liked = '1';
            }
            else {
                this.listing[i].is_liked = '0';
            }
            console.log(this.listing[i].is_liked);
            console.log(this.listing[i]);
            this.loader.showLoader();
            var params = {
                id: id,
                user_id: this.logindata.id
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
    searchmodl(id) {
        var searctx;
        var dattsd;
        if (id == '1') {
            searctx = this.searchtxt;
            dattsd = this.alllist;
        }
        else {
            searctx = '';
            dattsd = this.filterlisting;
        }
        var data = {
            'txt': searctx,
            'cat_id': this.segmentselec,
        };
        this.navctrl.navigateForward(['/searchpage', data]);
    }
    // async searchmodl(id) {
    //   var searctx
    //   var dattsd
    //   if (id == '1') {
    //     searctx = this.searchtxt
    //     dattsd = this.alllist
    //   } else {
    //     searctx = ''
    //     dattsd = this.filterlisting
    //   }
    //   console.log('filterdata', this.filterdata)
    //   console.log(this.segmentselec)
    //   const modal = await this.modalctrl.create({
    //     component: SearchpagePage,
    //     // cssClass: "backmodal",
    //     componentProps: { 'txt': searctx, 'alldata': dattsd, 'cat_id': this.segmentselec, 'filterdata': this.filterdata }
    //   })
    //   modal.onDidDismiss().then((data) => {
    //     console.log(data)
    //     if (data.data.data) {
    //       console.log(data.data.data)
    //       if (data.data.data == 'filter') {
    //         // this.filter()
    //         if (data.data) {
    //           this.filterdata = data.data.filterdata`
    //           // this.listing = data.data.data
    //           this.filterlisting = data.data.data
    //           this.searchmodl('2')
    //         }
    //       }
    //       if (data.data.data == 'cose') {
    //         this.closesearch()
    //       }
    //     }
    //   })
    //   modal.present()
    // }
    filter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('filterdata', this.filterdata);
            console.log(this.segmentselec);
            const modal = yield this.modalctrl.create({
                component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_3__.FilterPage,
                cssClass: "backmodal",
                componentProps: { 'txt': this.searchtxt, 'cat_id': this.segmentselec, 'filterdata': this.filterdata }
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
                if (data.data) {
                    this.filterdata = data.data.filterdata;
                    // this.listing = data.data.data
                    this.filterlisting = data.data.data;
                    this.searchmodl('2');
                    //   var category_id = data.data.category
                    //   console.log(this.listing)
                    //   console.log(category_id)
                    //   if (this.listing) {
                    //     this.searchlist = '1'
                    //   }
                    //   for (var i = 0; i < this.categoty.length; i++) {
                    //     for (var j = 0; j < category_id.length; j++) {
                    //       if (this.categoty[i].id == category_id[j]) {
                    //         this.categoty[i].selected = '1'
                    //       }
                    //     }
                    //   }
                    //   for (var i = 0; i < this.listing.length; i++) {
                    //     this.image = this.listing[i].image
                    //     this.listing[i].image = this.image.split(',')[0]
                    //     this.listing[i].allimage = this.image
                    //   }
                    //   this.lisinglenght = this.listing.length
                    // } else {
                    //   this.listing = []
                    //   this.lisinglenght = '0'
                    //   // this.searchtxt = ''
                    //   // this.listing = this.alllist
                    //   // this.searchlisting = ''
                    //   // this.filterlisting = ''
                    //   // console.log(this.alllist)
                    //   // this.searchlist = '0'
                    //   // this.segmentselec = ['0']
                    //   // for (var i = 0; i < this.categoty.length; i++) {
                    //   //   this.categoty[i].selected = '0'
                    //   // }
                    //   console.log(this.listing)
                }
            });
            modal.present();
        });
    }
    search() {
        // let q = this.searchtxt;
        this.searbxshow = '1';
    }
    sarchrun() {
        console.log(this.totallisting);
        this.data = this.totallisting;
        let q = this.searchtxt;
        console.log(q);
        console.log(this.data);
        if (q && q.trim() != '') {
            this.data = this.data.filter((result) => {
                this.res = result;
                return (result.name.toLowerCase().indexOf(q.toLowerCase()) > -1 || result.price.toLowerCase().indexOf(q.toLowerCase()) > -1 || result.description.toLowerCase().indexOf(q.toLowerCase()) > -1);
            });
            // this.listing = this.data
            this.searchlisting = this.data;
            this.lisinrearglenght = this.data.length;
            this.searchlist = '1';
            this.searrchhdata = '1';
        }
        else {
            this.listing = this.alllist;
            this.lisinrearglenght = this.alllist.length;
            this.searchlisting = '';
            this.filterlisting = '';
            console.log(this.alllist);
            this.searchlist = '0';
            // this.segmentselec = '0'
            // for (var i = 0; i < this.categoty.length; i++) {
            //   this.categoty[i].selected = '0'
            // }
        }
    }
    closesearch() {
        this.searbxshow = '0';
        // this.segmentselec = '0'
        this.searchtxt = '';
        // this.searchlisting = ''
        // this.filterlisting = ''
        // this.listing = this.alllist
        // this.searchlist = '0'
        // this.catproduct(this.segmentselec)
        // for (var i = 0; i < this.categoty.length; i++) {
        //   this.categoty[i].selected = '0'
        // }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_5__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService }
];
HomePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['slides', { static: true },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backcolordiv {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  background-color: #f9771f;\n}\n\n.imag {\n  margin: auto;\n  text-align: center;\n  width: 100%;\n  height: 90px;\n  display: block;\n  -webkit-clip-path: ellipse(80% 60% at 59% 35%);\n          clip-path: ellipse(80% 60% at 59% 35%);\n  background-color: #fd9345;\n}\n\n.inner {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 90px;\n  background-color: #f78427;\n  -webkit-clip-path: ellipse(80% 60% at 46% 35%);\n  clip-path: ellipse(80% 60% at 46% 35%);\n}\n\n.back2 {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 90px;\n  background-color: #f9771f;\n  -webkit-clip-path: ellipse(80% 61% at 29% 35%);\n  clip-path: ellipse(80% 61% at 29% 35%);\n}\n\n.circle {\n  position: absolute;\n  top: 20px;\n  height: 35%;\n  right: 0;\n}\n\n.searchrow {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n}\n\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 15px;\n  font-size: 10px;\n  --padding: 0px;\n  --background: white;\n  color: #000000;\n  padding-inline-start: 3px;\n  padding-inline-end: 3px;\n  padding-top: 21px !important;\n}\n\n.canceltext {\n  font-size: 12px;\n  text-align: center;\n  color: #000000;\n  margin-top: 16px;\n}\n\n.closeicn {\n  position: absolute;\n  top: 27px;\n  right: 20px;\n  font-size: 22px;\n  color: black;\n}\n\n.filter {\n  margin-top: 10px;\n  font-size: 28px;\n  color: white;\n  transform: rotate(90deg);\n}\n\n.searchicon {\n  margin-top: 10px;\n  font-size: 28px;\n  color: white;\n}\n\n.categorytxt {\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px 10px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #000000;\n}\n\n.selectcategorytxt {\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px 10px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #f9771f;\n  border-bottom: 1px solid #f9771f;\n}\n\n.sldimg {\n  height: 150px;\n  width: 350px;\n  margin: auto;\n  display: table;\n}\n\n.catslide {\n  background-color: white;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  color: #000000;\n}\n\nion-slides {\n  --bullet-background-active: #e76945;\n  --bullet-background: #8f8f8f;\n}\n\n.div2 {\n  margin: auto;\n  text-align: center;\n  height: 135px;\n  width: 89%;\n  background-color: white;\n  margin-top: 12px;\n  color: #000000;\n}\n\n.slide {\n  margin: auto;\n  text-align: center;\n  height: 135px;\n  width: 100%;\n}\n\n.latest {\n  color: black;\n  font-size: 17px;\n  font-weight: 400;\n  margin-left: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBRko7O0FBSUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHNDQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxzQ0FBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBS0o7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQUlKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0ksdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0ksdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBTUo7O0FBSkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBT0o7O0FBTEE7RUFDSSx1QkFBQTtFQUNBLGtDQUFBO0VBQUEsNkJBQUE7RUFDQSxjQUFBO0FBUUo7O0FBTkE7RUFDSSxtQ0FBQTtFQUNBLDRCQUFBO0FBU0o7O0FBUEE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVUo7O0FBUkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBWUoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudHtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG4uYmFja2NvbG9yZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTc3MWY7XHJcbn1cclxuLmltYWcge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsaXAtcGF0aDogZWxsaXBzZSg4MCUgNjAlIGF0IDU5JSAzNSUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkOTM0NTtcclxufVxyXG4uaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc4NDI3O1xyXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGVsbGlwc2UoODAlIDYwJSBhdCA0NiUgMzUlKTtcclxuICAgIGNsaXAtcGF0aDogZWxsaXBzZSg4MCUgNjAlIGF0IDQ2JSAzNSUpO1xyXG59XHJcbi5iYWNrMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTc3MWY7XHJcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogZWxsaXBzZSg4MCUgNjElIGF0IDI5JSAzNSUpO1xyXG4gICAgY2xpcC1wYXRoOiBlbGxpcHNlKDgwJSA2MSUgYXQgMjklIDM1JSk7XHJcbn1cclxuLmNpcmNsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDM1JTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5zZWFyY2hyb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIC0tcGFkZGluZzogMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDNweDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogM3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDIxcHggIWltcG9ydGFudFxyXG59XHJcbi5jYW5jZWx0ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbi8vIGlvbi1zZWFyY2hiYXI6OnBhcnQoaWNvbikge1xyXG4vLyAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLmNsb3NlaWNue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjI3cHg7XHJcbiAgICByaWdodDoyMHB4O1xyXG4gICAgZm9udC1zaXplOjIycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmZpbHRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC02cHg7XHJcbn1cclxuLnNlYXJjaGljb257XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXRlZ29yeXR4dCB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxufVxyXG4uc2VsZWN0Y2F0ZWdvcnl0eHQge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZjk3NzFmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOTc3MWY7XHJcbn1cclxuLnNsZGltZyB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLmNhdHNsaWRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG59XHJcbmlvbi1zbGlkZXMge1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNlNzY5NDU7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjOGY4ZjhmO1xyXG59XHJcbi5kaXYyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICB3aWR0aDogODklO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxufVxyXG4uc2xpZGUge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMzVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sYXRlc3Qge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG59XHJcblxyXG5cclxuICBcclxuIl19 */");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" style=\"background-color: #ffffff;\">\n\n  <div class=\"backcolordiv\">\n    <div class=\"imag\"></div>\n    <div class=\"inner\"></div>\n    <div class=\"back2\"></div>\n    <img class=\"circle\" src=\"assets/image/circle.jpg\">\n    <ion-row class=\"searchrow\">\n      <ion-col *ngIf=\"searbxshow == '0'\" size=\"12\" style=\"position: relative;padding:0px 4px;\" (click)=\"search()\">\n        <ion-searchbar placeholder=\"Search Listing...\" enterkeyhint=\"Search\" (keydown.enter)=\"searchmodl('1')\" class=\"searchbar\" [(ngModel)]=\"searchtxt\">\n        </ion-searchbar>\n        <ion-icon *ngIf=\"searbxshow == '1'\" name=\"close-outline\" class=\"closeicn\" (click)=\"clearsearch()\"></ion-icon>\n      </ion-col>\n      <ion-col *ngIf=\"searbxshow == '1'\" size=\"10\" style=\"position: relative;padding:0px 5px;\">\n        <ion-searchbar placeholder=\"Search Listing...\" enterkeyhint=\"Search\" (keydown.enter)=\"searchmodl('1')\" class=\"searchbar\" [(ngModel)]=\"searchtxt\">\n        </ion-searchbar>\n        <ion-icon *ngIf=\"searbxshow == '1'\" name=\"close-outline\" class=\"closeicn\" (click)=\"clearsearch()\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"2\" class=\"ion-no-padding\">\n        <div *ngIf=\"searbxshow == '1'\" style=\"font-size: 15px;margin-top:28px;text-align: center;color:#ffffff;\" (click)=\"closesearch()\">Cancel</div>\n        <!-- <ion-icon *ngIf=\"searbxshow == '1'\" name=\"search-outline\" class=\"searchicon\" (click)=\"searchmodl('1')\"></ion-icon> -->\n      </ion-col>\n      <!-- <ion-col size=\"1\" class=\"ion-no-padding\">\n        <ion-icon *ngIf=\"searbxshow == '1'\" name=\"options-outline\" class=\"filter\" (click)=\"filter()\"></ion-icon>\n      </ion-col> -->\n    </ion-row>\n  </div>\n  <div class=\"ht_10\"></div>\n \n  <ion-slides *ngIf=\"searchlist == '0'\" [options]=\"slideopts\" class=\"row_90\" #slides>\n    <ion-slide class=\"catslide\">\n      <div [ngClass]=\"(segmentselec =='0')?'selectcategorytxt':'categorytxt'\" (click)=\"segsect('0')\">All</div>\n    </ion-slide>\n    <ion-slide class=\"catslide\" *ngFor=\"let cat of categoty\">\n      <div [ngClass]=\"(cat.id == segmentselec)?'selectcategorytxt':'categorytxt'\" (click)=\"segsect(cat.id)\">{{cat.name}}\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_10\"></div>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"ht_10\"></div>\n  <ion-slides *ngIf=\"searchlist == '0'\" [options]=\"slideOpts1\" pager #slides>\n    <ion-slide style=\"width: 100% !important;\" *ngFor=\"let sld of slider;let i = index;\"\n      (click)=\"segsect(sld.category)\">\n      <img src=\"https://appdevelopmentsingapore.com/marketplace/admin/{{sld.image}}\" class=\"sldimg\">\n    </ion-slide>\n  </ion-slides>\n  <div class=\"ht_15\"></div>\n  <div *ngIf=\"searchlist == '0'\" class=\"latest\">Latest Listings ({{lisinglenght}})</div>\n  <div *ngIf=\"searchlist == '1'\" class=\"latest\">Searched Listings ({{lisinrearglenght}})</div>\n  <div class=\"ht_10\"></div>\n\n  <ion-row style=\"width: 95%;margin:auto;margin-bottom: 10px;\">\n    <div *ngIf=\"listing == 0\">\n      <div class=\"nodata\">No Listing Available</div>\n    </div>\n    <ion-col size=\"6\" *ngFor=\"let list of listing;let i = index\">\n      <ion-card class=\"card\">\n        <div class=\"imagediv\">\n          <img src=\"{{list.image}}\" class=\"cuter\" (click)=\"detail(i,list.status)\">\n          <div *ngIf=\"list.status == '0'\" class=\"closediv\">Listing Closed</div>\n        </div>\n        <div class=\"pvnwc towlines\" (click)=\"detail(i,list.status)\">{{list.name}}</div>\n        <div class=\"ht_10\"></div>\n        <ion-row (click)=\"detail(i,list.status)\">\n          <ion-col class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col size=\"2\" class=\"ion-no-padding\">\n                <ion-icon name=\"time-outline\" class=\"clockicn\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\" class=\"ion-no-padding\">\n                <div class=\"clocktxt\">{{list.days_ago}}</div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col size=\"2\" class=\"ion-no-padding\">\n                <ion-icon name=\"location-outline\" class=\"clockicn\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\" class=\"ion-no-padding\">\n                <div class=\"clocktxt towlines\">{{list.country}}</div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row (click)=\"detail(i,list.status)\">\n          <ion-col class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col size=\"2\" class=\"ion-no-padding\">\n                <ion-icon name=\"globe-outline\" class=\"clockicn\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\" class=\"ion-no-padding\">\n                <div style=\"height: 28px;\"  class=\"clocktxt\">{{list.type}}</div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col size=\"2\" class=\"ion-no-padding\">\n                <ion-icon name=\"receipt-outline\" class=\"clockicn\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\" class=\"ion-no-padding\">\n                <div class=\"clocktxt\">{{list.is_new}}</div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row (click)=\"detail(i,list.status)\">\n          <!-- <ion-col class=\"ion-no-padding\">\n            <ion-row> -->\n          <ion-col size=\"1\" class=\"ion-no-padding\">\n            <ion-icon name=\"person-outline\" class=\"clockicn\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"11\" class=\"ion-no-padding\">\n            <div class=\"clocktxt\" style=\"font-weight: bold;margin-top:2px;\">{{list.user_name}}</div>\n          </ion-col>\n          <!-- </ion-row> -->\n          <!-- </ion-col>\n          <ion-col class=\"ion-no-padding\">\n            <div class=\"ht_5\"></div>\n          </ion-col> -->\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"9\" (click)=\"detail(i,list.status)\" class=\"ion-no-padding\">\n            <div class=\"pricediv\">{{list.currency}}{{showprice(list.price)}}</div>\n          </ion-col>\n          <ion-col size=\"3\" style=\"text-align: right;\" class=\"ion-no-padding\">\n            <ion-icon [name]=\"(list.is_liked == '1')?'heart':'heart-outline'\"\n              [ngClass]=\"(list.is_liked == '1')?'filllike':'likeicn'\" (click)=\"add(list.id,i)\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <div class=\"ht_20\"></div>\n  <!-- <div *ngIf=\"logindata != '0'\" class=\"fabdiv\" (click)=\"addlist()\">\n    <ion-icon name=\"add\" style=\"font-size: 50px;\"></ion-icon>\n  </div> -->\n\n  <ion-fab *ngIf=\"logindata.id != '0'\" horizontal=\"right\" vertical=\"bottom\" slot=\"fixed\" class=\"addfab\"\n    (click)=\"addlist()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\" style=\"font-size: 50px;\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n<ion-footer>\n  <div class=\"ht_5\"></div>\n  <ion-row class=\"row_95 footerrow\">\n    <ion-col>\n      <ion-icon name=\"home\" class=\"selecttab\"></ion-icon>\n    </ion-col>\n    <ion-col (click)=\"list()\">\n      <ion-icon name=\"list-outline\"></ion-icon>\n    </ion-col>\n    <ion-col (click)=\"chat()\">\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.counter > 0\" class=\"showbagde\">{{config.counter}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"notification()\">\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.get_badge > 0\" class=\"showbagde\">{{config.get_badge}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"profile()\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map