(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_notification_notification_module_ts"],{

/***/ 76192:
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageRoutingModule": () => (/* binding */ NotificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page */ 93945);




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ 92101:
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageModule": () => (/* binding */ NotificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 76192);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page */ 93945);







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule,
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage]
    })
], NotificationPageModule);



/***/ }),

/***/ 93945:
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPage": () => (/* binding */ NotificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notification.page.html */ 89034);
/* harmony import */ var _notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page.scss */ 31435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 47531);
/* harmony import */ var _imagezoom_imagezoom_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imagezoom/imagezoom.page */ 20867);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service.service */ 35881);










let NotificationPage = class NotificationPage {
    constructor(service, navctrl, router, modalctrl, config, loader) {
        this.service = service;
        this.navctrl = navctrl;
        this.router = router;
        this.modalctrl = modalctrl;
        this.config = config;
        this.loader = loader;
        this.config.refresh();
        this.logindata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
        console.log(this.logindata);
    }
    ngOnInit() {
        this.monthNames = [" ", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }
    ionViewWillEnter() {
        // this.badge_number = 0
        // localStorage.setItem("Notification_Badge", JSON.stringify(this.badge_number))
        if (this.logindata.id != '0') {
            this.getnotification();
        }
    }
    showmonth(date) {
        console.log(date);
        var myDate = new Date(date.replace(" ", "T"));
        var d1 = new Date(myDate).getDate();
        var month = new Date(myDate).getMonth() + 1;
        var time = new Date(myDate);
        time.setDate(time.getDate() + 28);
        var d2 = new Date(time).getDate();
        var month2 = new Date(time).getMonth() + 1;
        return d1 + ' ' + this.monthNames[month] + ' - ' + d2 + ' ' + this.monthNames[month2];
    }
    login() {
        this.navctrl.navigateRoot('/login');
    }
    getnotification() {
        this.loader.showLoader();
        var params = {
            user_id: this.logindata.id
        };
        console.log(params);
        this.service.Notification(params)
            .then((results) => this.handleNotification(results));
    }
    handleNotification(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            if (results.data) {
                this.badge_number = results.data.length;
            }
            console.log(this.badge_number);
            this.notification = results.data;
            const get_badge = localStorage.getItem("Notification_Badge");
            console.log(this.badge_number);
            if (parseFloat(get_badge) == this.badge_number) {
                var new_badge = 0;
                localStorage.setItem("Notification_Badge", JSON.stringify(new_badge));
                localStorage.setItem("Receive_Badge", JSON.stringify(this.badge_number));
                this.config.refresh();
            }
            else {
                var new_badge = 0;
                localStorage.setItem("Notification_Badge", JSON.stringify(new_badge));
                localStorage.setItem("Receive_Badge", JSON.stringify(this.badge_number));
                this.config.refresh();
            }
        }
        else {
            // this.loader.showAlert("Error", results.ResponseMsg)
        }
    }
    home() {
        this.navctrl.navigateRoot('/home');
    }
    list() {
        this.navctrl.navigateRoot('/userguide');
    }
    chat() {
        this.navctrl.navigateRoot('/chat');
    }
    profile() {
        this.navctrl.navigateRoot('/profile');
    }
    openimg(img) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.imgonep = 'https://appdevelopmentsingapore.com/marketplace/admin/' + img;
            const modal = yield this.modalctrl.create({
                component: _imagezoom_imagezoom_page__WEBPACK_IMPORTED_MODULE_3__.ImagezoomPage,
                cssClass: 'backmodal',
                componentProps: { 'img': this.imgonep }
            });
            modal.present();
        });
    }
    clseimg() {
        this.valuepass = '1';
        this.imgonep = '';
    }
    openmsg(i) {
        if (!this.notification[i].image) {
            if (this.notification[i].title.startsWith('New chat message') || this.notification[i].title.startsWith('You have a new offer')) {
                this.navctrl.navigateForward(['/chatdetail', this.notification[i]]);
            }
            else {
                this.navctrl.navigateForward(['/notificationdetail', this.notification[i]]);
            }
        }
        else {
            this.valuepass = '2';
            this.imgonep = this.notification[i].image;
        }
    }
};
NotificationPage.ctorParameters = () => [
    { type: _service_service__WEBPACK_IMPORTED_MODULE_5__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService }
];
NotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationPage);



/***/ }),

/***/ 31435:
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.89);\n  margin-top: 30px;\n  font-size: 19px;\n}\n\nion-avatar {\n  width: 50px;\n  height: 50px;\n  margin: auto;\n}\n\n.nameheading {\n  color: rgba(255, 255, 255, 0.925);\n  margin-left: 5px;\n  margin-top: 20px;\n}\n\n.monthdiv {\n  text-align: center;\n  font-size: 14px;\n}\n\n.card {\n  padding: 10px;\n  box-shadow: 0px 0px 12px #c5c5c5;\n  width: 90%;\n  margin: auto;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  background-color: #ffffff;\n  color: #000000;\n}\n\n.username {\n  color: black;\n  font-weight: bold;\n}\n\n.msgdiv {\n  color: black;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n  display: inline-block;\n  white-space: nowrap;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.datediv {\n  text-align: right;\n  font-size: 11px;\n  color: black;\n}\n\n.underdiv {\n  width: 100%;\n  padding: 5px;\n  border-radius: 8px;\n}\n\n.newsfddiv {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 11111111;\n}\n\n.imgeoprn {\n  width: 100%;\n  height: 100%;\n}\n\n.ivoncose {\n  font-size: 24px;\n  color: #ffffff;\n}\n\n.opencardimg {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\n\n.persondiv {\n  width: 50px;\n  height: 50px;\n  margin: auto;\n  color: #b6b6b6;\n  font-size: 26px;\n  background-color: #f2f2f2;\n  padding: 10px 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUhBO0VBRUksWUFBQTtFQUVBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFLSjs7QUFGRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTUo7O0FBSkU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQU9OOztBQUxFO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFRTjs7QUFOQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBVUoiLCJmaWxlIjoibm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OSk7XHJcbiAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICBmb250LXNpemU6MTlweDtcclxufVxyXG5pb24tYXZhdGFye1xyXG4gICAgd2lkdGg6NTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG59XHJcbi5uYW1laGVhZGluZ3tcclxuICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MjUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcbi5tb250aGRpdntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbi5jYXJke1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm94LXNoYWRvdzowcHggMHB4IDEycHggcmdiKDE5NywgMTk3LCAxOTcpO1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG59XHJcbi51c2VybmFtZXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6LTVweDtcclxufVxyXG4ubXNnZGl2e1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6LTVweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgLy8gbWFyZ2luLXRvcDoycHg7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcbi5kYXRlZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuICAudW5kZXJkaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbi5uZXdzZmRkaXZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTExMTExMTE7XHJcbiAgfVxyXG4gIC5pbWdlb3BybntcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLml2b25jb3Nle1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuLm9wZW5jYXJkaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ucGVyc29uZGl2IHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY29sb3I6ICNiNmI2YjY7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG59Il19 */");

/***/ }),

/***/ 89034:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"logindata.id != '0'\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Notification</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_15\"></div>\n  <div *ngIf=\"logindata.id == '0'\">\n    <div class=\"ht_300\"></div>\n    <div class=\"notlogin\">Please Login as the Individual in app</div>\n    <div class=\"ht_5\"></div>\n    <ion-button class=\"loginbtnclass\" (click)=\"login()\">Login</ion-button>\n  </div>\n\n  <div *ngIf=\"logindata.id != '0'\">\n    <div *ngIf=\"!notification\">\n      <!-- <div class=\"nodata\">No Notification Found</div> -->\n      <div class=\"nodata\">There is no newsfeed at the moment</div>\n    </div>\n    <div *ngIf=\"notification\">\n      <!-- <div class=\"monthdiv\">Apr 21, 2021</div> -->\n      <div class=\"ht_15\"></div>\n      <ion-card class=\"card\" *ngFor=\"let notify of notification;let i = index;\" (click)=\"openmsg(i)\">\n        <ion-row>\n          <ion-col size=\"2\" class=\"ion-no-padding\">\n            <ion-avatar class=\"persondiv\">\n              <ion-icon name=\"person\"></ion-icon>\n            </ion-avatar>\n          </ion-col>\n          <ion-col size=\"7\">\n            <div class=\"username\">{{notify.title}}</div>\n            <div class=\"ht_10\"></div>\n            <div class=\"msgdiv\">{{notify.message}}</div>\n            <div *ngIf=\"notify.image\">\n              <img src=\"https://appdevelopmentsingapore.com/marketplace/admin/{{notify.image}}\" (click)=\"openimg(notify.image)\">\n            </div>\n          </ion-col>\n          <ion-col size=\"3\">\n            <div class=\"datediv\">{{notify.daysago}}</div>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <div class=\"ht_5\"></div>\n  <ion-row class=\"row_95 footerrow\">\n    <ion-col (click)=\"home()\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-col>\n    <ion-col (click)=\"list()\">\n      <ion-icon name=\"list-outline\"></ion-icon>\n    </ion-col>\n    <ion-col (click)=\"chat()\">\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.counter > 0\" class=\"showbagde\">{{config.counter}}</ion-badge>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"notifications\" class=\"selecttab\"></ion-icon>\n      <ion-badge *ngIf=\"config.get_badge > 0\" class=\"showbagde\">{{config.get_badge}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"profile()\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_notification_notification_module_ts.js.map