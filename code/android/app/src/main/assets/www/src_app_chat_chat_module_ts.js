(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_chat_chat_module_ts"],{

/***/ 38891:
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageRoutingModule": () => (/* binding */ ChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page */ 61129);




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_0__.ChatPage
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ 52312:
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageModule": () => (/* binding */ ChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-routing.module */ 38891);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page */ 61129);







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPageRoutingModule
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage]
    })
], ChatPageModule);



/***/ }),

/***/ 61129:
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "snapshotToArray": () => (/* binding */ snapshotToArray),
/* harmony export */   "ConversationToArray": () => (/* binding */ ConversationToArray),
/* harmony export */   "ChatPage": () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat.page.html */ 99451);
/* harmony import */ var _chat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page.scss */ 66582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ 34052);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ 47531);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service.service */ 35881);










const snapshotToArray = snapshot => {
    let returnArr = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        console.log(item);
        returnArr.push(item);
    });
    return returnArr;
};
const ConversationToArray = snapshot => {
    let returnArr = [];
    snapshot.forEach(childSnapshot => {
        console.log(childSnapshot.val());
        let item = childSnapshot.val();
        returnArr.push(item);
    });
    return returnArr;
};
let ChatPage = class ChatPage {
    constructor(navctrl, config, router, service, loader) {
        this.navctrl = navctrl;
        this.config = config;
        this.router = router;
        this.service = service;
        this.loader = loader;
        this.config.refresh();
        this.logindata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
        console.log(this.logindata);
        this.getlist_productid = this.router.snapshot.params.listproduct_id;
        console.log(this.getlist_productid);
        console.log('counter =>', this.config.counter);
        this.chatlist1 = [];
        this.ServicesID = this.logindata.id;
        this.searchbar = '0';
        this.searbxshow = '0';
    }
    ngOnInit() {
        console.log('conversation page');
    }
    ionViewWillEnter() {
        if (this.logindata.id != '0') {
            this.resetcounter();
            this.getcurrenttime();
        }
    }
    getcurrenttime() {
        this.service.Getcurrenttime()
            .then((results) => this.handleTime(results));
    }
    handleTime(results) {
        console.log(results);
        if (results.ResponseCode == '1') {
            this.date = new Date(results.current_time.replace(" ", "T"));
            this.currtime = new Date(this.date).getTime();
            if (this.logindata.id != '0') {
                this.getConver();
            }
        }
    }
    resetcounter() {
        var params = {
            id: this.config.logindata.id
        };
        console.log(params);
        this.service.Resetcounter(params)
            .then((results) => this.handlecounter(results));
    }
    handlecounter(results) {
        console.log('resetcounter =>', results);
        const get_badge = localStorage.getItem("chat_Badge");
        console.log(get_badge);
        // if(get_badge)
        var new_badge = 0;
        localStorage.setItem("chat_Badge", JSON.stringify(new_badge));
        this.config.refresh();
    }
    login() {
        this.navctrl.navigateRoot('/login');
    }
    opensearch(id) {
        this.searchtxt = '';
        this.searbxshow = id;
        if (id == '0') {
            this.chatlist = this.allconverse;
            this.searchbar = id;
        }
        else {
            this.searchbar = id;
        }
    }
    getConver() {
        this.loader.showLoader();
        var starCountRef = firebase__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('Conversation/');
        starCountRef.on('value', Conver => {
            this.threads = Object.keys(Conver.val());
            console.log(this.threads);
            this.CheckLoop();
        });
    }
    CheckLoop() {
        this.chatlist = [];
        console.log(this.threads);
        this.ConversationID = [];
        for (var i = 0; i < this.threads.length; i++) {
            firebase__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('Conversation/' + this.threads[i]).on('value', iteamsnap => {
                iteamsnap.forEach(childSnapshot => {
                    let item = childSnapshot.val();
                    this.ConversationID.push(item);
                });
            });
        }
        console.log(this.ConversationID);
        for (var i = 0; i < this.ConversationID.length; i++) {
            if (this.getlist_productid) {
                if (this.ConversationID[i].ProductID == this.getlist_productid) {
                    this.chatlist.push(this.ConversationID[i]);
                }
            }
            else {
                if (this.ConversationID[i].UsrID == this.logindata.id) {
                    this.chatlist.push(this.ConversationID[i]);
                }
                if (this.ConversationID[i].ServicesID == this.logindata.id) {
                    this.chatlist.push(this.ConversationID[i]);
                }
            }
            this.chatlist.sort(function (a, b) {
                var servicedate1 = new Date(a.ServicesDate.replace(" ", "T"));
                var servicedate2 = new Date(b.ServicesDate.replace(" ", "T"));
                return new Date(servicedate2).getTime() - new Date(servicedate1).getTime();
            });
        }
        this.allconverse = this.chatlist;
        this.loader.dissmissLoader();
        console.log(this.chatlist);
        this.timeBetweenDates();
        console.log('sort =>', this.chatlist);
    }
    searchmodl(id) {
        this.searbxshow = 1;
        this.search();
    }
    searchshow() {
        this.searbxshow = 1;
    }
    clearsearch() {
        this.searchtxt = '';
        // this.search()
    }
    search() {
        this.data = this.allconverse;
        let q = this.searchtxt;
        console.log(q);
        console.log(this.data);
        if (q && q.trim() != '') {
            this.data = this.data.filter((result) => {
                this.res = result;
                return (result.ProductName.toLowerCase().indexOf(q.toLowerCase()) > -1 || result.UsrName.toLowerCase().indexOf(q.toLowerCase()) > -1 || result.ServicesName.toLowerCase().indexOf(q.toLowerCase()) > -1);
            });
            this.chatlist = this.data;
        }
        else {
            this.chatlist = this.allconverse;
        }
    }
    chatdetail(index, id, serviceProfile, usrprofile, service_id, usrname, servicename, product_id, product_name, product_price, product_image, usrstatus, Product_Currency) {
        console.log(this.chatlist[index].ConverID);
        console.log(this.ServicesID);
        if (this.logindata.id == this.chatlist[index].ServicesID) {
            firebase__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('Conversation/' + this.chatlist[index].ConverID + '/' + product_id).update({ receiver_counter: 0 });
        }
        else {
            firebase__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('Conversation/' + this.chatlist[index].ConverID + '/' + product_id).update({ sender_counter: 0 });
        }
        if (id == this.ServicesID) {
            this.navctrl.navigateForward(['/chatdetail', { 'user_id': service_id, 'user_name': servicename, 'profile_pic': serviceProfile, 'id': product_id, 'name': product_name, 'price': product_price, 'image': product_image, 'usrstatus': usrstatus, 'type': 'for sale', 'currency': Product_Currency }]);
        }
        else {
            this.navctrl.navigateForward(['/chatdetail', { 'user_id': id, 'user_name': usrname, 'profile_pic': usrprofile, 'id': product_id, 'name': product_name, 'price': product_price, 'image': product_image, 'usrstatus': usrstatus, 'currency': Product_Currency }]);
        }
    }
    timeBetweenDates() {
        console.log(this.currtime);
        console.log(this.chatlist);
        for (var i = 0; i < this.chatlist.length; i++) {
            var servertime = new Date(this.chatlist[i].ServicesDate.replace(" ", "T"));
            this.msgtime = new Date(servertime).getTime();
            console.log(this.msgtime);
            if (this.msgtime < this.currtime) {
                this.distance = this.currtime - this.msgtime;
                let days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
                if (days == 0) {
                    // let hours = new Date(this.chatlist[i].ServicesDate).getHours()
                    // let minutes = new Date(this.chatlist[i].ServicesDate).getMinutes()
                    var time = this.chatlist[i].ServicesDate.slice(11, 16);
                    this.displaytime = time;
                    console.log(this.msgtime);
                }
                else {
                    this.displaytime = days + ' days ago';
                }
                this.chatlist[i].daysago = this.displaytime;
            }
            else {
                this.displaytime = '00' + ":" + '00' + ":" + '00';
            }
            console.log(this.displaytime);
            console.log(this.displaytime1);
        }
    }
    removechat(id) {
        console.log(this.chatlist[id]);
        firebase__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('Chats/' + this.chatlist[id].ConverID + '/chat').remove();
        firebase__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('Conversation/' + this.chatlist[id].ConverID + '/' + this.chatlist[id].ProductID).remove();
    }
    home() {
        this.navctrl.navigateRoot('/home');
    }
    list() {
        this.navctrl.navigateRoot('/userguide');
    }
    notification() {
        this.navctrl.navigateRoot('/notification');
    }
    profile() {
        this.navctrl.navigateRoot('/profile');
    }
};
ChatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_5__.ServiceService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService }
];
ChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-chat',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatPage);



/***/ }),

/***/ 66582:
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-avatar {\n  width: 45px;\n  height: 45px;\n  margin: auto;\n}\n\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 15px;\n  font-size: 10px;\n  --padding: 0px;\n  --background: white;\n  color: #000000;\n  padding-inline-start: 3px;\n  padding-inline-end: 3px;\n}\n\nion-searchbar::part(icon) {\n  display: none !important;\n}\n\n.nameheading {\n  color: rgba(255, 255, 255, 0.925);\n  margin-left: 5px;\n  margin-top: 12px;\n}\n\n.card {\n  padding: 10px;\n  box-shadow: 0px 0px 12px #c5c5c5;\n  width: 100%;\n  margin: auto;\n  border-radius: 10px;\n  margin: 10px;\n}\n\n.removeslide {\n  --background: #e30a0a;\n  width: 67px;\n  height: 80px;\n  margin-top: 0px;\n}\n\n.username {\n  color: black;\n  font-weight: bold;\n}\n\n.msgdiv {\n  margin-top: 2px;\n  color: black;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n  display: inline-block;\n  white-space: nowrap;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.badgediv {\n  border-radius: 50%;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  float: right;\n  font-size: 10px;\n}\n\n.datediv {\n  font-size: 11px;\n  color: black;\n  margin-top: 1px;\n  text-align: right;\n}\n\n.searchclose {\n  position: relative;\n}\n\n.closeicn {\n  position: absolute;\n  top: 5px;\n  font-size: 25px;\n  right: 20px;\n  z-index: 999999;\n  color: black;\n}\n\n.textcol {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: inline-block;\n  white-space: nowrap;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSx3QkFBQTtBQUdKOztBQURBO0VBQ0ksaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUZBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBU0o7O0FBUEE7RUFDSSxrQkFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVdKOztBQVRBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBWUoiLCJmaWxlIjoiY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nOiAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogM3B4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAzcHg7XHJcbn1cclxuaW9uLXNlYXJjaGJhcjo6cGFydChpY29uKSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hbWVoZWFkaW5nIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTI1KTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggcmdiKDE5NywgMTk3LCAxOTcpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcbi5yZW1vdmVzbGlkZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlMzBhMGE7XHJcbiAgICB3aWR0aDogNjdweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4udXNlcm5hbWUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1zZ2RpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcbi5iYWRnZWRpdiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5kYXRlZGl2IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5zZWFyY2hjbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNsb3NlaWNuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnRleHRjb2wge1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 99451:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"logindata.id != '0'\">\n  <ion-toolbar>\n    <div class=\"ht_55\"></div>\n    <!--<div class=\"searchclose\">\n      <ion-searchbar [(ngModel)]=\"searchtxt\" placeholder=\"Search Chat...\" enterkeyhint=\"Search\" class=\"searchbar\" (keydown.enter)=\"searchmodl('1')\" (ionChange)=\"search()\" (click)=\"searchshow()\">\n      </ion-searchbar>\n      \n      <ion-icon  name=\"close-outline\" (click)=\"opensearch('0')\" class=\"closeicn\"></ion-icon>\n      <ion-col size=\"2\" class=\"ion-no-padding\">\n        <div *ngIf=\"searbxshow == '1'\" style=\"font-size: 15px;margin-top:28px;text-align: center;color:#ffffff;\" (click)=\"closesearch()\">Cancel</div>\n      </ion-col>\n    </div>-->\n\n\n    <ion-row class=\"searchrow\">\n      <ion-col *ngIf=\"searbxshow == '0'\" size=\"12\" style=\"position: relative;padding:0px 4px;\" (click)=\"searchshow()\">\n        <ion-searchbar placeholder=\"Search Chat...\" enterkeyhint=\"Search\" (keydown.enter)=\"searchmodl('1')\" class=\"searchbar\" [(ngModel)]=\"searchtxt\" >\n        </ion-searchbar>\n        <ion-icon *ngIf=\"searbxshow == '1'\" name=\"close-outline\" class=\"closeicn\" (click)=\"clearsearch()\"></ion-icon>\n      </ion-col>\n      <ion-col *ngIf=\"searbxshow == '1'\" size=\"10\" style=\"position: relative;padding:0px 5px;\">\n        <ion-searchbar placeholder=\"Search Chat...\" enterkeyhint=\"Search\" (keydown.enter)=\"searchmodl('1')\" class=\"searchbar\" [(ngModel)]=\"searchtxt\"  >\n        </ion-searchbar>\n        <ion-icon *ngIf=\"searbxshow == '1'\" name=\"close-outline\" class=\"closeicn\" (click)=\"clearsearch()\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"2\" class=\"ion-no-padding\">\n        <div *ngIf=\"searbxshow == '1'\" style=\"font-size: 15px;margin-top:8px;text-align: center;color:#ffffff;\" (click)=\"opensearch('0')\">Cancel</div>\n      </ion-col>\n    </ion-row>\n\n\n    <!-- <ion-row class=\"row_90\" *ngIf=\"searchbar == '0'\">\n      <ion-col size=\"2\">\n        <ion-avatar>\n          <img *ngIf=\"!logindata.image\" src=\"assets/image/profile.png\">\n          <img *ngIf=\"logindata.image\" src=\"{{logindata.image}}\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div class=\"nameheading\">{{logindata.user_name}}</div>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon class=\"nameheading\" name=\"search-outline\" (click)=\"opensearch('1')\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_15\"></div>\n  <div *ngIf=\"logindata.id == '0'\">\n    <div class=\"ht_300\"></div>\n    <div class=\"notlogin\">Please Login as the Individual in app</div>\n    <div class=\"ht_5\"></div>\n    <ion-button class=\"loginbtnclass\" (click)=\"login()\">Login</ion-button>\n  </div>\n\n  <ion-item-sliding *ngFor=\"let usr of chatlist;let i = index\">\n    <div *ngIf=\"logindata.id != '0'\">\n      <ion-item lines=\"none\" class=\"rowdiv\">\n        <ion-card class=\"card\"\n          (click)=\"chatdetail(i,usr.UsrID,usr.ServiceProfile,usr.Usrprofile,usr.ServicesID,usr.UsrName,usr.ServicesName,usr.ProductID,usr.ProductName,usr.ProductPrice,usr.ProductImage,usr.usrstatus,usr.ProductCurrency)\">\n          <ion-row>\n            <ion-col size=\"2\" class=\"ion-no-padding\">\n              <ion-avatar>\n                <img *ngIf=\"usr.UsrID == logindata.id && usr.ServiceProfile != 'null'\" src=\"{{usr.ServiceProfile}}\" style=\"border-radius: 50%;\">\n                <img *ngIf=\"usr.UsrID == logindata.id && usr.ServiceProfile == 'null'\" src=\"assets/image/profile.png\">\n                <img *ngIf=\"usr.ServicesID == logindata.id && usr.Usrprofile != 'null'\" src=\"{{usr.Usrprofile}}\" style=\"border-radius: 50%;\">\n                <img *ngIf=\"usr.ServicesID == logindata.id && usr.Usrprofile == 'null'\" src=\"assets/image/profile.png\">\n              </ion-avatar>\n            </ion-col>\n            <ion-col size=\"6\">\n              <div *ngIf=\"usr.UsrID == logindata.id\" class=\"username\">{{usr.ServicesName}}</div>\n              <div *ngIf=\"usr.ServicesID == logindata.id\" class=\"username\">{{usr.UsrName}}</div>\n              <div class=\"username\"> {{usr.ProductName}}</div>\n              <div class=\"msgdiv\">{{usr.lastmsg}}</div>\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-no-padding\">\n              <div class=\"datediv\">{{usr.daysago}} days ago</div><br>\n              <ion-badge class=\"badgediv\" *ngIf=\"usr.UsrID == logindata.id && usr.sender_counter > 0\">\n                {{usr.sender_counter}}</ion-badge>\n              <ion-badge class=\"badgediv\" *ngIf=\"usr.ServicesID == logindata.id && usr.receiver_counter > 0\">\n                {{usr.receiver_counter}}</ion-badge>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-item>\n    </div>\n    <ion-item-options>\n      <ion-button class=\"removeslide\" (click)=\"removechat(i)\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-content>\n<ion-footer>\n  <div class=\"ht_5\"></div>\n  <ion-row class=\"row_95 footerrow\">\n    <ion-col (click)=\"home()\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-col>\n    <ion-col (click)=\"list()\">\n      <ion-icon name=\"list-outline\"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"chatbubbles\" class=\"selecttab\"></ion-icon>\n      <ion-badge *ngIf=\"config.counter > 0\" class=\"showbagde\">{{config.counter}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"notification()\">\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.get_badge > 0\" class=\"showbagde\">{{config.get_badge}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"profile()\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_chat_module_ts.js.map