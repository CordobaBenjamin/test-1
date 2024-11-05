(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_userguide_userguide_module_ts"],{

/***/ 60239:
/*!*******************************************************!*\
  !*** ./src/app/userguide/userguide-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserguidePageRoutingModule": () => (/* binding */ UserguidePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _userguide_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userguide.page */ 90404);




const routes = [
    {
        path: '',
        component: _userguide_page__WEBPACK_IMPORTED_MODULE_0__.UserguidePage
    }
];
let UserguidePageRoutingModule = class UserguidePageRoutingModule {
};
UserguidePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserguidePageRoutingModule);



/***/ }),

/***/ 77837:
/*!***********************************************!*\
  !*** ./src/app/userguide/userguide.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserguidePageModule": () => (/* binding */ UserguidePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _userguide_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userguide-routing.module */ 60239);
/* harmony import */ var _userguide_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userguide.page */ 90404);







let UserguidePageModule = class UserguidePageModule {
};
UserguidePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _userguide_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserguidePageRoutingModule
        ],
        declarations: [_userguide_page__WEBPACK_IMPORTED_MODULE_1__.UserguidePage]
    })
], UserguidePageModule);



/***/ }),

/***/ 90404:
/*!*********************************************!*\
  !*** ./src/app/userguide/userguide.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserguidePage": () => (/* binding */ UserguidePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_userguide_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./userguide.page.html */ 47558);
/* harmony import */ var _userguide_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userguide.page.scss */ 78953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 47531);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 35881);
/* harmony import */ var _userfilter_userfilter_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../userfilter/userfilter.page */ 97703);










let UserguidePage = class UserguidePage {
    constructor(navctrl, service, loader, modalctrl, config, router) {
        this.navctrl = navctrl;
        this.service = service;
        this.loader = loader;
        this.modalctrl = modalctrl;
        this.config = config;
        this.router = router;
        this.slideopts = {
            slidesPerView: 3
        };
        // this.category = this.router.snapshot.params.category
        // console.log(this.category)
        this.config.refresh();
        this.searchbar = '0';
        this.showsearch = '0';
        this.subcategory = [];
        this.activesld = 'All';
        this.subcategory.push('All', 'Supplier', 'Contractor', 'Design & Engineering Consultancy', 'Manufacturer', 'Service Provider');
    }
    ngOnInit() {
        this.getvendor('0');
        // this.subcategory = []
        // console.log(this.category)
        // if (this.category == 'Supplier') {
        //   this.subcategory.push("Building Material", "Chemical & Lubricant", "Construction Equipment", "Construction Machinery", "Doors & Windows", "Electrical & Electronic",
        //     "Environmental & Safety", "Fastening", "Finishing", "Manpower", "Material Handling & Storage", "Pipe, Hose & Fitting", "Spare Parts", "Specialty & Others", "Steel & Metal", "Tools & Hardware", "Transport", "Wood & Plastic")
        // } else if (this.category == 'Contractor') {
        //   this.subcategory.push("Asphalt works & Road Marking", "Cable/Pipe Laying & Road Reinstatement", "Civil Engineering", "Concrete Repairs", "Corrosion Protection",
        //     "Curtain Walls", "Demolition", "Doors & Windows", "Fencing & Ironworks", "General Building", "Ground Support & Stabilization Works", "Interior Decoration & Finishing Works", "Minor Construction",
        //     "Piling", "Pre-cast Concrete Works", "Repairs & Redecoration", "Signcraft Installation", "Site Investigation Works", "Waterproofing Installation")
        // } else if (this.category == 'Design & Engineering Consultancy') {
        //   this.subcategory.push("Architects & Interior", "Civil & Structural", "Electrical", "Environmental", "Geotechnical", "Landscape", "Mechanical", "Quantity Surveying")
        // } else if (this.category == 'Manufacturer') {
        //   this.subcategory.push("Building Products & Construction Materials", "Electrical & Electronics", "Energy & Chemicals", "Metal, Machinery & Engineering", "Wood, Plastic & Rubbers")
        // } else if (this.category == 'Service Provider') {
        //   this.subcategory.push("Contracts and Legal", "Facilities Management", "Financing", "HR and Recruitment", "Insurance", "IT", "Logistics and Transportation", "Marketing", "Repairs and refurbishing", "Secretarial and Accounting")
        // }
        // console.log(this.subcategory)
        // this.activesld = this.subcategory[0]
        // this.getvendor(this.activesld)
    }
    selectslider(id) {
        this.activesld = id;
        if (id == 'All') {
            this.getvendor('0');
        }
        else {
            this.getvendor(id);
        }
    }
    opensearch(id) {
        if (id == '0') {
            this.searchbar = id;
            this.searchtxt = '';
            if (this.activesld == 'All') {
                this.getvendor('0');
            }
            else {
                this.getvendor(this.activesld);
            }
        }
        else {
            this.searchbar = id;
        }
    }
    getvendor(id) {
        this.loader.showLoader();
        var params = {
            nature_of_business: id,
            txt: this.searchtxt
        };
        console.log(params);
        this.service.Getvendor(params)
            .then((results) => this.hanldeVendor(results));
    }
    hanldeVendor(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.alluser = results.data;
            this.totaluser1 = results.data;
            this.totaluser = this.alluser.length;
            console.log(this.alluser);
        }
        else {
            this.alluser = [];
            // this.loader.showAlert("Error",results.ResponseMsg)
        }
        console.log(this.alluser);
    }
    showcountry(country) {
        return country.split(' ')[1];
    }
    back() {
        this.navctrl.pop();
    }
    filter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalctrl.create({
                component: _userfilter_userfilter_page__WEBPACK_IMPORTED_MODULE_5__.UserfilterPage,
                cssClass: "backmodal",
                componentProps: { 'searchtxt': this.searchtxt, 'filterdata': this.filterdata }
            });
            modal.onDidDismiss().then((data) => {
                console.log(data.data);
                this.filterdata = data.data.params;
                console.log(this.filterdata);
                if (data.data.filterdata) {
                    this.alluser = data.data.filterdata;
                    this.totaluser = this.alluser.length;
                    this.activesld = data.role;
                    console.log(this.alluser);
                }
                if (data.data.data == 'close') {
                    this.alluser = this.totaluser1;
                    this.totaluser = this.alluser.length;
                    console.log(this.alluser);
                }
            });
            modal.present();
        });
    }
    search(id) {
        this.showsearch = id;
    }
    sarchrun() {
        this.data = this.alluser;
        let q = this.searchtxt;
        console.log(q);
        console.log(this.data);
        if (q && q.trim() != '') {
            this.data = this.data.filter((result) => {
                this.res = result;
                return (result.user_name.toLowerCase().indexOf(q.toLowerCase()) > -1);
            });
            this.alluser = this.data;
            this.totaluser = this.alluser.length;
            // this.searchlist = '1'
        }
        else {
            this.alluser = this.totaluser1;
            console.log(this.alluser);
            // this.searchlist = '0'
        }
    }
    closesearch() {
        this.showsearch = '0';
        this.searchtxt = '';
        if (this.activesld == 'All') {
            this.getvendor('0');
        }
        else {
            this.getvendor(this.activesld);
        }
    }
    clearsearch() {
        this.alluser = this.totaluser1;
        this.searchtxt = '';
        //this.activesld = 'All'
    }
    profile(id) {
        this.navctrl.navigateForward(['/chatprofile', { 'user_id': id }]);
    }
    home() {
        this.navctrl.navigateRoot('/home');
    }
    chat() {
        this.navctrl.navigateRoot('/chat');
    }
    notification() {
        this.navctrl.navigateRoot('/notification');
    }
    appprofile() {
        this.navctrl.navigateRoot('/profile');
    }
};
UserguidePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute }
];
UserguidePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-userguide',
        template: _raw_loader_userguide_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_userguide_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserguidePage);



/***/ }),

/***/ 78953:
/*!***********************************************!*\
  !*** ./src/app/userguide/userguide.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".headericn {\n  color: #f2f2f2;\n  font-size: 25px;\n}\n\n.hedertxt {\n  font-weight: bold;\n  margin-top: 5px;\n  color: #f2f2f2;\n}\n\n.backdiv {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 5px 0px;\n}\n\n.slidewidth {\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n}\n\n.slidetxt {\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px 10px;\n  color: black;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.selectslidetxt {\n  width: -moz-fit-content;\n  width: fit-content;\n  font-weight: bold;\n  border-bottom: 2px solid #f9771f;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #f9771f;\n  border-bottom: 1px solid #f9771f;\n}\n\n.card {\n  padding: 5px;\n  width: 100%;\n  margin: 0px;\n  padding-top: 5px;\n  box-shadow: 0px 0px 7px #b1b1b1;\n  background-color: white;\n  color: #000000;\n}\n\n.cardimg {\n  height: 100px;\n  margin: auto;\n  display: table;\n}\n\n.cardtxt {\n  font-size: 10px;\n  margin-top: 1px;\n  color: #b6b6b6;\n}\n\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 15px;\n  font-size: 10px;\n  --padding: 0px;\n  --background: white;\n  color: #000000;\n}\n\nion-searchbar::part(icon) {\n  display: none !important;\n}\n\n.filter {\n  margin-top: 5px;\n  font-size: 28px;\n  color: white;\n  transform: rotate(90deg);\n}\n\n.searchicon {\n  margin-top: 4px;\n  font-size: 28px;\n  color: white;\n}\n\n.searchclose {\n  position: relative;\n}\n\n.closeicn {\n  position: absolute;\n  top: 7px;\n  font-size: 25px;\n  right: 17px;\n  z-index: 999999;\n  color: black;\n}\n\n.ht_25 {\n  height: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJndWlkZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFBO0VBRUksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0NBQUE7RUFBQSw2QkFBQTtBQUdKOztBQURBO0VBQ0ksdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFLSjs7QUFIQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFLSjs7QUFIQTtFQUVJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFIQTtFQUNJLHdCQUFBO0FBTUo7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQU1KOztBQUhBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVFKOztBQU5BO0VBQ0ksdUJBQUE7QUFTSiIsImZpbGUiOiJ1c2VyZ3VpZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcmljbiB7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4uaGVkZXJ0eHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxufVxyXG4uYmFja2RpdiB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxufVxyXG4uc2xpZGV3aWR0aCB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG4uc2xpZGV0eHQge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc2VsZWN0c2xpZGV0eHQge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y5NzcxZjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNmOTc3MWY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y5NzcxZjtcclxufVxyXG4uY2FyZCB7XHJcbiAgICAvLyBoZWlnaHQ6IDIxNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAjYjFiMWIxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuLmNhcmRpbWcge1xyXG4gICAgLy8gd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG4uY2FyZHR4dCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBjb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIC0tcGFkZGluZzogMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxufVxyXG5pb24tc2VhcmNoYmFyOjpwYXJ0KGljb24pIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogLTZweDtcclxufVxyXG4uc2VhcmNoaWNvbntcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2VhcmNoY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jbG9zZWljbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5odF8yNXtcclxuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ 47558:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userguide/userguide.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" style=\"background-color: #ffffff;\">\n  <ion-toolbar>\n    <div class=\"ht_55\"></div>\n    <ion-row>\n      <ion-col *ngIf=\"showsearch == '0'\" size=\"12\" class=\"ion-no-padding\">\n        <div class=\"searchclose\">\n          <ion-searchbar [(ngModel)]=\"searchtxt\" placeholder=\"Search Directory...\" class=\"searchbar\" (click)=\"search('1')\">\n          </ion-searchbar>\n          <!-- <ion-icon *ngIf=\"searchtxt\" name=\"close-outline\" (click)=\"opensearch('0')\" class=\"closeicn\"></ion-icon> -->\n        </div>\n      </ion-col>\n      <ion-col *ngIf=\"showsearch == '1'\" size=\"9\" class=\"ion-no-padding\">\n        <div class=\"searchclose\">\n          <ion-searchbar [(ngModel)]=\"searchtxt\" placeholder=\"Search Directory...\" class=\"searchbar\" enterkeyhint=\"Search\" (keydown.enter)=\"getvendor('0')\">\n          </ion-searchbar>\n          <ion-icon *ngIf=\"showsearch == '1'\" name=\"close-outline\" (click)=\"clearsearch()\" class=\"closeicn\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"2\" class=\"ion-no-padding\">\n        <div *ngIf=\"showsearch == '1'\" style=\"font-size: 15px;margin-top:10px;color:#ffffff;\" (click)=\"closesearch()\">Cancel</div>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ion-no-padding\">\n        <ion-icon *ngIf=\"showsearch == '1'\" name=\"options-outline\" class=\"filter\" (click)=\"filter()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row *ngIf=\"searchbar == '0'\" class=\"titlerow row_95\">\n      <ion-col class=\"ion-no-padding text-center\" size=\"1\">\n      </ion-col>\n      <ion-col class=\"ion-no-padding text-center\" size=\"10\">\n        <div class=\"hedertxt\">User Directory</div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding text-center\" size=\"1\">\n        <ion-icon name=\"search-outline\" class=\"headericn\" (click)=\"opensearch('1')\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-toolbar>\n  <div class=\"backdiv\">\n    <!-- <div class=\"ht_15\"></div> -->\n    <ion-slides [options]=\"slideopts\" style=\"width: 95%;\">\n      <ion-slide class=\"slidewidth\" *ngFor=\"let category of subcategory\">\n        <div [ngClass]=\"(activesld == category)?'selectslidetxt':'slidetxt'\" (click)=\"selectslider(category)\">\n          {{category}}</div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-header>\n<ion-content>\n \n  <div class=\"ht_15\"></div>\n  <div *ngIf=\"alluser != 0\" style=\"margin-left: 10px;color:black;\">{{totaluser}} Users</div>\n  <div class=\"ht_15\"></div>\n  <div *ngIf=\"alluser == 0 || !alluser\" class=\"nodata\">No User Available</div>\n  <ion-row class=\"row_95\">\n    <ion-col size=\"6\" *ngFor=\"let user of alluser\">\n      <ion-card class=\"card\" (click)=\"profile(user.id)\">\n        <img src=\"{{user.image}}\" class=\"cardimg\">\n        <div class=\"ht_5\"></div>\n        <div class=\"pvc\">{{user.user_name}}</div>\n        <div class=\"ht_5\"></div>\n        <ion-row style=\"margin-left:5px;\">\n          <ion-col size=\"2\" class=\"ion-no-padding\">\n            <ion-icon name=\"time-outline\" class=\"clockicn\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" class=\"ion-no-padding\">\n            <div class=\"cardtxt\">{{user.days_ago}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"margin-left:5px;\">\n          <ion-col size=\"2\" class=\"ion-no-padding\">\n            <ion-icon name=\"location-outline\" class=\"clockicn\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" class=\"ion-no-padding\">\n            <div class=\"cardtxt towlines\">{{user.country}}</div>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-footer>\n  <div class=\"ht_5\"></div>\n  <ion-row class=\"row_95 footerrow\">\n    <ion-col  (click)=\"home()\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"list\"  class=\"selecttab\"></ion-icon>\n    </ion-col>\n     <ion-col (click)=\"chat()\">\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.counter > 0\" class=\"showbagde\">{{config.counter}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"notification()\">\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.get_badge > 0\" class=\"showbagde\">{{config.get_badge}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"appprofile()\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_userguide_userguide_module_ts.js.map