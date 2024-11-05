(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_userchat_userchat_module_ts"],{

/***/ 4493:
/*!*****************************************************!*\
  !*** ./src/app/userchat/userchat-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserchatPageRoutingModule": () => (/* binding */ UserchatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _userchat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userchat.page */ 13977);




const routes = [
    {
        path: '',
        component: _userchat_page__WEBPACK_IMPORTED_MODULE_0__.UserchatPage
    }
];
let UserchatPageRoutingModule = class UserchatPageRoutingModule {
};
UserchatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserchatPageRoutingModule);



/***/ }),

/***/ 15304:
/*!*********************************************!*\
  !*** ./src/app/userchat/userchat.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserchatPageModule": () => (/* binding */ UserchatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _userchat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userchat-routing.module */ 4493);
/* harmony import */ var _userchat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userchat.page */ 13977);







let UserchatPageModule = class UserchatPageModule {
};
UserchatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _userchat_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserchatPageRoutingModule
        ],
        declarations: [_userchat_page__WEBPACK_IMPORTED_MODULE_1__.UserchatPage]
    })
], UserchatPageModule);



/***/ }),

/***/ 13977:
/*!*******************************************!*\
  !*** ./src/app/userchat/userchat.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "snapshotToArray": () => (/* binding */ snapshotToArray),
/* harmony export */   "ConversationToArray": () => (/* binding */ ConversationToArray),
/* harmony export */   "UserchatPage": () => (/* binding */ UserchatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_userchat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./userchat.page.html */ 51398);
/* harmony import */ var _userchat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userchat.page.scss */ 14778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ 34052);







const snapshotToArray = snapshot => {
    let returnArr = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        console.log(item);
        returnArr.push(item);
    });
    return returnArr;
};
const ConversationToArray = snapshot => {
    let returnArr = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        returnArr.push(item);
    });
    return returnArr;
};
let UserchatPage = class UserchatPage {
    constructor(navctrl, router) {
        this.navctrl = navctrl;
        this.router = router;
        this.offStatus = false;
        this.Chat_Data = { nickname: '', message: '', id: '' };
        this.actiontxt = '0';
        this.userid = this.router.snapshot.params;
        console.log(this.userid);
    }
    ngOnInit() {
        console.log('usrchat page');
        this.logindata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
        console.log(this.logindata);
        this.UserId = 'receiver' + this.logindata.id;
        this.userName = this.logindata.user_name;
        this.Chat_Data.nickname = (this.userName);
        this.Chat_Data.id = (this.UserId);
        this.Userprofile = this.logindata.image;
        console.log('User Id >', this.UserId);
        this.ServiceID = this.userid.user_id;
        console.log('ServicesID >', this.ServiceID);
        this.getConver();
    }
    getConver() {
        var starCountRef = firebase__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('Conversation/');
        starCountRef.on('value', Conver => {
            this.ConversationID = ConversationToArray(Conver);
            console.log(this.ConversationID);
            this.CheckLoop();
        });
    }
    CheckLoop() {
        this.ChatCreateID = '';
        this.chatIDCheck = '';
        this.Button_show = '0';
        var MyUserID = this.UserId;
        var NewUesrID = this.ServiceID;
        this.ChatCreateID = MyUserID + '_' + NewUesrID;
        this.chatIDCheck = NewUesrID + '_' + MyUserID;
        console.log('1 =>', this.ChatCreateID);
        console.log('2 =>', this.chatIDCheck);
        // if (this.ChatCreateID == this.chatIDCheck) {
        //   // this.ServiceID = this.User_con_ID
        //   this.CheckLoop()
        // } else {
        console.log(this.ConversationID);
        for (var i = 0; i < this.ConversationID.length; i++) {
            console.log(this.ConversationID[i].ConverID);
            if (this.ConversationID[i].ConverID == this.ChatCreateID) {
                console.log(this.ChatCreateID + ">> is available 1");
                var N_E_W = this.ChatCreateID;
                this.ChatsID = '';
                this.GetOldChat(N_E_W);
                break;
            }
            else if (this.ConversationID[i].ConverID == this.chatIDCheck) {
                console.log(this.chatIDCheck + ">> is available 2");
                var T_H_I_S = this.chatIDCheck;
                this.ChatsID = '';
                this.GetOldChat(T_H_I_S);
                break;
            }
            else {
                if (i == this.ConversationID.length - 1) {
                    console.log(" no conversation match, create new");
                    this.Button_show = '1';
                }
            }
        }
        // }
    }
    GetOldChat(Chat_i) {
        console.log('Old =>', Chat_i);
        this.OldChatId = Chat_i;
        firebase__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('Chats/' + Chat_i + '/chat').on('value', resp => {
            this.UserChat = [];
            this.UserChat = snapshotToArray(resp);
            console.log(this.UserChat);
            setTimeout(() => {
                if (this.offStatus === false) {
                    this.content.scrollToBottom(300);
                }
            }, 1000);
        });
    }
    Conversa(type) {
        // this.text = "1"
        console.log(this.OldChatId);
        if (this.OldChatId) {
            this.ChatData(type);
        }
        else {
            var MyUserID = this.UserId;
            var NewUesrID = this.ServiceID;
            this.ConversID = MyUserID + '_' + NewUesrID;
            console.log('3 =>', this.ConversID);
            console.log('3 =>', this.SeviceName);
            firebase__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('Conversation/' + this.ConversID).set({
                ConverID: this.ConversID,
                ServicesID: this.ServiceID,
                // ServicesName: this.SeviceName,
                UsrID: this.UserId,
                UsrName: this.userName,
                // profile:t  his.Userprofile,
                ServicesDate: Date()
            });
            this.ChatsID = '';
            this.ChatData(type);
        }
    }
    ChatData(type) {
        if (this.OldChatId) {
            this.ChatsID = this.OldChatId;
            console.log('Old =>', this.ChatsID);
        }
        else if (this.ConversID) {
            this.ChatsID = this.ConversID;
            console.log('3 =>', this.ChatsID);
        }
        console.log(this.ChatsID);
        let newData = firebase__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('Chats/' + this.ChatsID + '/chat').push();
        console.log('offerdata =>', this.offerdata);
        if (type == 'Offer') {
            newData.set({
                user: this.Chat_Data.nickname,
                message: this.Chat_Data.message,
                id: this.Chat_Data.id,
                type: type,
                offer: this.offerdata,
                status: '',
                sendDate: Date()
            });
        }
        else {
            newData.set({
                user: this.Chat_Data.nickname,
                message: this.Chat_Data.message,
                id: this.Chat_Data.id,
                type: type,
                sendDate: Date()
            });
        }
        const lastmsg = firebase__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('Chats/' + this.ChatsID + '/chat').push();
        lastmsg.update({
            lastmessage: this.Chat_Data.message,
            sendDate: Date()
        });
        this.Chat_Data.message = '';
        this.Button_show = '0';
    }
    back() {
        this.navctrl.pop();
    }
    action(id) {
        this.actiontxt = id;
    }
};
UserchatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
UserchatPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent,] }]
};
UserchatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-userchat',
        template: _raw_loader_userchat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_userchat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserchatPage);



/***/ }),

/***/ 14778:
/*!*********************************************!*\
  !*** ./src/app/userchat/userchat.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  background-color: #f2f2f2;\n  --background: #f2f2f2;\n}\n\n.updiv {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: white;\n}\n\nion-avatar {\n  width: 35px;\n  height: 35px;\n  margin: auto;\n}\n\n.spanicn {\n  color: #1eb1a7;\n  font-size: 20px;\n  margin-top: 5px;\n  margin-left: -5px;\n}\n\n.username {\n  font-weight: bold;\n  margin-top: 3px;\n}\n\n.chaticn {\n  color: gray;\n  font-size: 25px;\n}\n\n.borderdiv {\n  border-bottom: 2px solid black;\n  width: 100%;\n  height: 13px;\n}\n\n.productname {\n  font-size: 12px;\n  color: black;\n}\n\nion-footer {\n  background: white;\n  height: 60px;\n}\n\n.ngname {\n  --padding-start: 0px;\n  --placeholder-opacity: 0.3;\n  font-size: 14px;\n}\n\n.attachicn {\n  color: #aaaaaa;\n  font-size: 30px;\n  margin-top: 12px;\n  transform: rotate(45deg);\n}\n\n.sendicn {\n  color: #f48b41;\n  font-size: 30px;\n  margin-top: 12px;\n  transform: rotate(45deg);\n  margin-left: -6px;\n}\n\n.user1 {\n  text-align: left;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: block;\n  margin-bottom: 10px;\n}\n\n.user2 {\n  text-align: right;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: block;\n  margin-bottom: 10px;\n}\n\n.usemsg {\n  width: 80%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 8px 10px;\n  background-color: #ffffff;\n  line-height: 20px;\n  font-size: 15px;\n  color: black;\n  margin-left: 15px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 12px #cfcfcf;\n  float: left;\n}\n\n.date {\n  width: 100%;\n  color: black;\n  font-size: 12px;\n  padding: 5px 16px;\n}\n\n.memsg {\n  float: right;\n  width: 80%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 8px 10px;\n  background-color: #f5f5fd;\n  line-height: 20px;\n  font-size: 15px;\n  color: black;\n  margin-right: 15px;\n  text-align: left;\n  border-radius: 5px;\n  box-shadow: 0px 0px 12px #cfcfcf;\n}\n\n.btnclass {\n  --background: linear-gradient(to right, #ec6d4c, #f98e46);\n  --border-radius: 22px;\n  width: 60%;\n  height: 34px;\n  display: table;\n  text-transform: none;\n  --box-shadow: none;\n}\n\n.denybtn {\n  --background: white;\n  --border-radius: 22px;\n  border-radius: 22px;\n  width: 50%;\n  height: 34px;\n  text-transform: none;\n  color: black;\n  display: table;\n  font-weight: 400px;\n  text-align: left;\n  --box-shadow: none;\n  border: 1.5px solid black;\n  font-weight: bold;\n}\n\n.btn {\n  --background: #1eb1a7;\n  --border-radius: 0px;\n  text-transform: none;\n  --box-shadow: none;\n  color: rgba(255, 255, 255, 0.836);\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJjaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFTSjs7QUFQQTtFQUNJLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFXSjs7QUFUQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBWUo7O0FBVkE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBYUo7O0FBWEE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBY0o7O0FBWkE7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQWVKOztBQWJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFnQko7O0FBZEE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBaUJKOztBQWZBO0VBQ0kseURBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFrQko7O0FBaEJBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQW9CSiIsImZpbGUiOiJ1c2VyY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG59XHJcbi51cGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5zcGFuaWNue1xyXG4gICAgY29sb3I6ICMxZWIxYTc7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxufVxyXG4udXNlcm5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLmNoYXRpY24ge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLmJvcmRlcmRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTNweDtcclxufVxyXG4ucHJvZHVjdG5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLm5nbmFtZSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC4zO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5hdHRhY2hpY24ge1xyXG4gICAgY29sb3I6IHJnYigxNzAsIDE3MCwgMTcwKTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuLnNlbmRpY24ge1xyXG4gICAgY29sb3I6ICNmNDhiNDE7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbn1cclxuLnVzZXIxIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnVzZXIyIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi51c2Vtc2cge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYigyMDcsIDIwNywgMjA3KTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5kYXRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNXB4IDE2cHg7XHJcbn1cclxuLm1lbXNnIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWZkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYigyMDcsIDIwNywgMjA3KTtcclxufVxyXG4uYnRuY2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYzZkNGMsICNmOThlNDYpO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmRlbnlidG57XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBmb250LXdlaWdodDogNDAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOjEuNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmJ0bntcclxuICAgIC0tYmFja2dyb3VuZDogIzFlYjFhNztcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODM2KTtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 51398:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userchat/userchat.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"updiv\">\n    <div class=\"ht_40\"></div>\n    <ion-row>\n      <ion-col size=\"1.5\">\n        <ion-icon name=\"arrow-back-outline\" class=\"chaticn\" (click)=\"back()\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"2\" class=\"ion-no-padding\">\n        <ion-avatar>\n          <img src=\"assets/image/userprofile.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\" size=\"1\">\n            <ion-icon name=\"shield-checkmark\" class=\"spanicn\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"11\">\n            <div class=\"username\">{{userName}}</div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"ellipsis-vertical\" class=\"chaticn\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n    <div class=\"username\" style=\"text-align: center;\">Chat</div>\n    <div class=\"borderdiv\"></div>\n    <div class=\"ht_10\"></div>\n    <ion-row class=\"row_95\">\n      <ion-col>\n        <div class=\"productname\">Testing1</div>\n        <div class=\"pricediv\">$20.00</div>\n      </ion-col>\n      <ion-col>\n        <!-- <ion-button class=\"btnclass\" (click)=\"makeoffer()\">Make Offer</ion-button> -->\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_10\"></div>\n  </div>\n  <div class=\"chatdiv\">\n    <div class=\"ht_10\"></div>\n    <div *ngFor=\"let chat of UserChat\">\n      <div class=\"user1\" *ngIf=\"chat.id !== UserId\">\n\n        <div style=\"width: 100%;height:40px;\">\n          <div class=\"usemsg\">{{chat.message}}</div>\n        </div>\n        <div class=\"date\">{{chat.sendDate | date:'short'}}</div>\n      </div>\n      <div class=\"user2\" *ngIf=\"chat.id == UserId\">\n        <div style=\"width: 100%;height:40px;\">\n          <div class=\"memsg\">Hi</div>\n        </div>\n        <div class=\"date\">17/09/2021 , 10:15 AM</div>\n      </div>\n      <div class=\"user1\">\n        <div style=\"width: 100%;height:40px;\">\n          <div class=\"usemsg\">Hello</div>\n        </div>\n        <div class=\"date\">17/09/2021 , 10:16 AM</div>\n      </div>\n      <div class=\"user2\">\n        <div style=\"width: 100%;height:40px;\">\n          <div class=\"memsg\">Thnks</div>\n        </div>\n        <div class=\"date\">17/09/2021 , 10:21 AM</div>\n      </div>\n      <div class=\"user1\" *ngIf=\"actiontxt == '0'\">\n        <div style=\"width: 100%;height:207px;\">\n          <div class=\"usemsg\">\n            <div><b>Made an Offer</b></div>\n            <div>Message</div>\n            <div>Duration:24 Hrs</div>\n            <div>Price:<b>$ 25.00</b></div>\n            <div>Quantity:<b>1</b></div>\n            <div>Date:23/09/2021</div>\n            <div>Time: 2:10 PM</div>\n            <ion-row>\n              <ion-col class=\"ion-no-padding\">\n                <ion-button class=\"btnclass\" (click)=\"action('accept')\">Accept</ion-button>\n              </ion-col>\n              <ion-col class=\"ion-no-padding\">\n                <ion-button class=\"denybtn\" (click)=\"action('deny')\">Deny</ion-button>\n              </ion-col>\n            </ion-row>\n          </div><br>\n        </div>\n        <div class=\"date\">23/09/2021 , 2:10 PM</div>\n      </div>\n      <div class=\"user1\" *ngIf=\"actiontxt == 'accept'\">\n        <div style=\"width: 100%;height:207px;\">\n          <div class=\"usemsg\">\n            <div><b>Made an Offer</b></div>\n            <div>Message</div>\n            <div>Duration:24 Hrs</div>\n            <div>Price:<b>$ 25.00</b></div>\n            <div>Quantity:<b>1</b></div>\n            <div>Date:23/09/2021</div>\n            <div>Time: 2:10 PM</div>\n            <ion-button class=\"btn\">Accepted</ion-button>\n          </div><br>\n        </div>\n        <div class=\"date\">23/09/2021 , 2:10 PM</div>\n      </div>\n      <div class=\"user1\" *ngIf=\"actiontxt == 'deny'\">\n        <div style=\"width: 100%;height:210px;\">\n          <div class=\"usemsg\">\n            <div><b>Made an Offer</b></div>\n            <div>Message</div>\n            <div>Duration:24 Hrs</div>\n            <div>Price:<b>$ 5.00</b></div>\n            <div>Quantity:<b>1</b></div>\n            <div>Date:23/09/2021</div>\n            <div>Time: 2:12 PM</div>\n            <ion-button class=\"btn\">Declined</ion-button>\n          </div><br>\n        </div>\n        <div class=\"date\">23/09/2021 , 2:12 PM</div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-row class=\"row_95\">\n    <ion-col size=\"9\">\n      <ion-input class=\"ngname\" type=\"text\" placeholder=\"Type your message...\"></ion-input>\n    </ion-col>\n    <ion-col size=\"1\" class=\"ion-no-padding text-center\">\n      <ion-icon name=\"attach-outline\" class=\"attachicn\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-no-padding text-center\">\n      <ion-icon name=\"paper-plane\" class=\"sendicn\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_userchat_userchat_module_ts.js.map