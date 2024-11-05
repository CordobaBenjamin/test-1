(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_chatdetail_chatdetail_module_ts"],{

/***/ 5947:
/*!*********************************************************!*\
  !*** ./src/app/chatdetail/chatdetail-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatdetailPageRoutingModule": () => (/* binding */ ChatdetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _chatdetail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatdetail.page */ 58459);




const routes = [
    {
        path: '',
        component: _chatdetail_page__WEBPACK_IMPORTED_MODULE_0__.ChatdetailPage
    }
];
let ChatdetailPageRoutingModule = class ChatdetailPageRoutingModule {
};
ChatdetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatdetailPageRoutingModule);



/***/ }),

/***/ 29994:
/*!*************************************************!*\
  !*** ./src/app/chatdetail/chatdetail.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatdetailPageModule": () => (/* binding */ ChatdetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _chatdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatdetail-routing.module */ 5947);
/* harmony import */ var _chatdetail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatdetail.page */ 58459);







let ChatdetailPageModule = class ChatdetailPageModule {
};
ChatdetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chatdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatdetailPageRoutingModule
        ],
        declarations: [_chatdetail_page__WEBPACK_IMPORTED_MODULE_1__.ChatdetailPage]
    })
], ChatdetailPageModule);



/***/ }),

/***/ 58459:
/*!***********************************************!*\
  !*** ./src/app/chatdetail/chatdetail.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "snapshotToArray": () => (/* binding */ snapshotToArray),
/* harmony export */   "ConversationToArray": () => (/* binding */ ConversationToArray),
/* harmony export */   "ChatdetailPage": () => (/* binding */ ChatdetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_chatdetail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chatdetail.page.html */ 14372);
/* harmony import */ var _chatdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatdetail.page.scss */ 8050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _makeoffer_makeoffer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../makeoffer/makeoffer.page */ 45870);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ 34052);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 35881);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _chatmenu_chatmenu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chatmenu/chatmenu.page */ 83114);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 45103);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 33606);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ 5901);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 79051);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 61281);
















const snapshotToArray = snapshot => {
    let returnArr = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
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
let ChatdetailPage = class ChatdetailPage {
    constructor(modalctrl, navctrl, service, camera, file, transfer, imagepicker, loader, crop, actionSheetController, router) {
        this.modalctrl = modalctrl;
        this.navctrl = navctrl;
        this.service = service;
        this.camera = camera;
        this.file = file;
        this.transfer = transfer;
        this.imagepicker = imagepicker;
        this.loader = loader;
        this.crop = crop;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.offStatus = false;
        this.Chat_Data = { nickname: '', message: '', id: '' };
        this.cropOptions = {
            quality: 50,
            targetWidth: -1,
            targetHeight: -1
        };
        if (JSON.parse(localStorage.getItem('blockstatus'))) {
            this.usrstatus = JSON.parse(localStorage.getItem('blockstatus'));
        }
        else {
            this.usrstatus = 'unblock';
        }
        console.log(this.usrstatus);
        this.otheruser = this.router.snapshot.params;
        this.type = this.otheruser.type;
        console.log(this.type);
        console.log(this.otheruser);
    }
    ngOnInit() {
        console.log('chatdetail page');
        this.SigninData = JSON.parse(localStorage.getItem('Marketplace_Logindata'));
        console.log(this.SigninData);
        this.UserId = this.SigninData.id;
        this.userName = this.SigninData.user_name;
        this.Chat_Data.nickname = (this.userName);
        this.Chat_Data.id = (this.UserId);
        this.Userprofile = this.SigninData.image;
        if (this.otheruser.message) {
            this.product_id = this.otheruser.list_id;
        }
        else {
            this.product_id = this.otheruser.id;
        }
        console.log('Product Id >', this.product_id);
        this.product_name = this.otheruser.name;
        this.Product_price = this.otheruser.price;
        this.Product_image = this.otheruser.image;
        console.log('User Id >', this.UserId);
        if (this.otheruser.user_id == this.UserId) {
            this.ServiceID = this.otheruser.sender_id;
        }
        else {
            this.ServiceID = this.otheruser.user_id;
        }
        console.log('ServicesID >', this.ServiceID);
        this.SeviceName = this.otheruser.user_name;
        console.log(this.SeviceName);
        this.ServiceProfile = this.otheruser.profile_pic;
        this.otherusrstatus = this.otheruser.usrstatus;
        console.log(this.otherusrstatus);
        this.getConver();
        console.log(this.ConversationID);
        this.sender_counter = 0;
        this.receiver_counter = 0;
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
    menu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (JSON.parse(localStorage.getItem('blockstatus'))) {
                this.usrstatus = JSON.parse(localStorage.getItem('blockstatus'));
            }
            else {
                this.usrstatus = 'unblock';
            }
            console.log(this.usrstatus);
            const modal = yield this.modalctrl.create({
                component: _chatmenu_chatmenu_page__WEBPACK_IMPORTED_MODULE_6__.ChatmenuPage,
                cssClass: "backmodal",
                componentProps: { 'usrstatus': this.usrstatus, 'user_id': this.UserId, 'service_id': this.ServiceID }
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
                if (data.data) {
                    this.showstatus = data.data;
                    localStorage.setItem("blockstatus", JSON.stringify(this.showstatus));
                    console.log(this.showstatus);
                    console.log(this.ConversationID);
                    var MyUserID = this.UserId;
                    var NewUesrID = this.ServiceID;
                    this.ChatCreateID = MyUserID + '_' + NewUesrID;
                    this.chatIDCheck = NewUesrID + '_' + MyUserID;
                    console.log('1 =>', this.ChatCreateID);
                    console.log('2 =>', this.chatIDCheck);
                    for (var i = 0; i < this.ConversationID.length; i++) {
                        console.log(this.ConversationID[i].ConverID);
                        if (this.ConversationID[i].ConverID == this.ChatCreateID) {
                            console.log(this.showstatus);
                            let newData = firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('Conversation/' + this.ChatCreateID + '/' + this.product_id).update({ usrstatus: this.showstatus, block_user: this.UserId });
                            break;
                        }
                        else if (this.ConversationID[i].ConverID == this.chatIDCheck) {
                            console.log(this.chatIDCheck + ">> is available 2");
                            console.log(this.usrstatus);
                            let newData = firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('Conversation/' + this.chatIDCheck + '/' + this.product_id).update({ usrstatus: this.showstatus, block_user: this.UserId });
                            break;
                        }
                    }
                }
            });
            modal.present();
        });
    }
    makeoffer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.UserChat);
            if (this.UserChat) {
                console.log('open');
                for (var i = 0; i < this.UserChat.length; i++) {
                    const found = this.UserChat.some(el => el.status == '0' && el.list_id == this.product_id);
                    console.log(found);
                    if (found == true) {
                        this.loader.showAlert("", 'cancel previous offer before making new offer');
                        break;
                    }
                    else {
                        console.log('entrer open modal');
                        const modal = yield this.modalctrl.create({
                            component: _makeoffer_makeoffer_page__WEBPACK_IMPORTED_MODULE_2__.MakeofferPage,
                            cssClass: "backmodal",
                            componentProps: { 'name': this.otheruser.name, 'price': this.otheruser.price, 'user_id': this.UserId, 'list_id': this.otheruser.id, 'currency': this.otheruser.currency }
                        });
                        modal.onDidDismiss().then((data) => {
                            console.log(data);
                            this.offerdata = data.data;
                            this.date = data.data.date;
                            this.Chat_Data.message = this.product_name;
                            this.text = "Offer";
                            this.Conversa(this.text, this.date);
                        });
                        modal.present();
                        break;
                    }
                }
            }
            else {
                console.log('open modal');
                const modal = yield this.modalctrl.create({
                    component: _makeoffer_makeoffer_page__WEBPACK_IMPORTED_MODULE_2__.MakeofferPage,
                    cssClass: "backmodal",
                    componentProps: { 'name': this.otheruser.name, 'price': this.otheruser.price, 'user_id': this.UserId, 'list_id': this.otheruser.id }
                });
                modal.onDidDismiss().then((data) => {
                    console.log(data);
                    this.offerdata = data.data;
                    this.date = data.data.date;
                    this.Chat_Data.message = this.product_name;
                    this.text = "Offer";
                    this.Conversa(this.text, this.date);
                });
                modal.present();
            }
        });
    }
    getConver() {
        var starCountRef = firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('Conversation/' + this.UserId + '_' + this.ServiceID);
        starCountRef.on('value', Conver => {
            console.log(Conver.val());
            if (Conver.val() != null) {
                this.ConversationID = ConversationToArray(Conver);
                console.log(this.ConversationID);
                this.CheckLoop();
            }
            else {
                this.getotherConver();
            }
        });
    }
    getotherConver() {
        var starCountRef = firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('Conversation/' + this.ServiceID + '_' + this.UserId);
        starCountRef.on('value', Conver => {
            console.log(Conver.val());
            if (Conver.val() != null) {
                this.ConversationID = ConversationToArray(Conver);
                console.log(this.ConversationID);
                this.CheckLoop();
            }
            else {
                // this.getConver()
            }
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
        firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('Chats/' + Chat_i).on('value', resp => {
            if (resp.val()) {
                this.showstatus = resp.val().usrstatus;
                console.log(this.usrstatus);
            }
        });
        firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('Chats/' + Chat_i + '/chat').on('value', resp => {
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
    msgvalidate() {
        if (!this.Chat_Data.message) {
            this.loader.showAlert("Error", "please Enter Message");
            return false;
        }
        return true;
    }
    getcurrenttime(type) {
        this.service.Getcurrenttime()
            .then((results) => this.handleTime(results, type));
    }
    handleTime(results, type) {
        console.log(results);
        if (results.ResponseCode == '1') {
            // this.date = new Date(results.current_time).toString()
            this.date = results.current_time;
            this.Conversa(type, this.date);
        }
    }
    Conversa(type, date) {
        console.log(date);
        if (this.msgvalidate()) {
            console.log(this.OldChatId);
            console.log(this.ConversationID);
            if (this.ConversationID) {
                for (var i = 0; i < this.ConversationID.length; i++) {
                    if (this.OldChatId == this.ConversationID[i].ConverID) {
                        this.showstatus = this.ConversationID[i].usrstatus;
                        this.block_user = this.ConversationID[i].block_user;
                        this.chat_user = this.ConversationID[i].chat_user;
                        this.send_user = this.ConversationID[i].UsrID;
                        this.receive_user = this.ConversationID[i].ServicesID;
                        this.sender_counter = this.ConversationID[i].sender_counter;
                        this.receiver_counter = this.ConversationID[i].receiver_counter;
                        var otherprofile = this.ConversationID[i].ServiceProfile;
                        var profile = this.ConversationID[i].Usrprofile;
                    }
                }
            }
            // if (this.showstatus == 'block') {
            //   if (this.UserId == this.block_user) {
            //     this.loader.showToast('You blocked this user')
            //   } else {
            //     this.loader.showToast('You have been blocked')
            //   }
            // } else {
            console.log(this.OldChatId);
            if (this.OldChatId) {
                this.ChatData(type, date);
                const found = this.ConversationID.some(el => el.ProductID === this.product_id);
                if (!found) {
                    console.log('push');
                    var MyUserID = this.UserId;
                    var NewUesrID = this.ServiceID;
                    // this.ConversID = MyUserID + '_' + NewUesrID
                    this.ChatCreateID = MyUserID + '_' + NewUesrID;
                    this.chatIDCheck = NewUesrID + '_' + MyUserID;
                    console.log('3 =>', this.ChatCreateID);
                    console.log('3 =>', this.chatIDCheck);
                    if (this.OldChatId == this.ChatCreateID) {
                        firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('Conversation/' + this.ChatCreateID + '/' + this.product_id).set({
                            ConverID: this.ChatCreateID,
                            ServicesID: this.ServiceID,
                            ServicesName: this.SeviceName,
                            UsrID: this.UserId,
                            UsrName: this.userName,
                            Usrprofile: this.Userprofile,
                            ServiceProfile: this.ServiceProfile,
                            ProductID: this.product_id,
                            ProductImage: this.Product_image,
                            ProductName: this.product_name,
                            ProductPrice: this.Product_price,
                            lastmsg: this.Chat_Data.message,
                            sender_counter: 0,
                            receiver_counter: 0,
                            chat_user: this.ServiceID,
                            usrstatus: this.usrstatus,
                            block_user: '',
                            ServicesDate: date,
                            ProductCurrency: this.otheruser.currency
                        });
                    }
                    if (this.OldChatId == this.chatIDCheck) {
                        firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('Conversation/' + this.chatIDCheck + '/' + this.product_id).set({
                            ConverID: this.chatIDCheck,
                            ServicesID: this.ServiceID,
                            ServicesName: this.SeviceName,
                            UsrID: this.UserId,
                            UsrName: this.userName,
                            Usrprofile: this.Userprofile,
                            ServiceProfile: this.ServiceProfile,
                            ProductID: this.product_id,
                            ProductImage: this.Product_image,
                            ProductName: this.product_name,
                            ProductPrice: this.Product_price,
                            lastmsg: this.Chat_Data.message,
                            sender_counter: 0,
                            receiver_counter: 0,
                            chat_user: this.ServiceID,
                            usrstatus: this.usrstatus,
                            block_user: '',
                            ServicesDate: date,
                            ProductCurrency: this.otheruser.currency
                        });
                    }
                }
                else {
                    console.log('dont push');
                }
            }
            else {
                var MyUserID = this.UserId;
                var NewUesrID = this.ServiceID;
                this.ConversID = MyUserID + '_' + NewUesrID;
                console.log('3 =>', this.ConversID);
                console.log('3 =>', this.SeviceName);
                firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('Conversation/' + this.ConversID + '/' + this.product_id).set({
                    ConverID: this.ConversID,
                    ServicesID: this.ServiceID,
                    ServicesName: this.SeviceName,
                    UsrID: this.UserId,
                    UsrName: this.userName,
                    Usrprofile: this.Userprofile,
                    ServiceProfile: this.ServiceProfile,
                    ProductID: this.product_id,
                    ProductImage: this.Product_image,
                    ProductName: this.product_name,
                    ProductPrice: this.Product_price,
                    lastmsg: this.Chat_Data.message,
                    sender_counter: 0,
                    receiver_counter: 0,
                    chat_user: this.ServiceID,
                    usrstatus: this.usrstatus,
                    block_user: '',
                    ServicesDate: date,
                    ProductCurrency: this.otheruser.currency
                });
                this.ChatsID = '';
                this.ChatData(type, date);
            }
            // }
        }
    }
    ChatData(type, date) {
        if (this.OldChatId) {
            this.ChatsID = this.OldChatId;
            console.log('Old =>', this.ChatsID);
        }
        else if (this.ConversID) {
            this.ChatsID = this.ConversID;
            console.log('3 =>', this.ChatsID);
        }
        console.log(this.ChatsID);
        // firebase.database().ref('Chats/' + this.ChatsID ).set({usrstatus:this.usrstatus})
        let newData = firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('Chats/' + this.ChatsID + '/chat').push();
        console.log('offerdata =>', this.offerdata);
        console.log('message =>', this.Chat_Data.message);
        console.log('type =>', type);
        if (type == 'Offer') {
            if (this.offerdata) {
                newData.set({
                    user: this.Chat_Data.nickname,
                    message: this.Chat_Data.message,
                    id: this.Chat_Data.id,
                    type: type,
                    list_id: this.product_id,
                    offer: this.offerdata,
                    status: '0',
                    sendDate: date
                });
                if (this.UserId != this.receive_user) {
                    this.receiver_counter = this.receiver_counter + 1;
                }
                else {
                    this.sender_counter = this.sender_counter + 1;
                }
                firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('Conversation/' + this.OldChatId + '/' + this.product_id).update({ lastmsg: this.Chat_Data.message, ServicesDate: date, sender_counter: this.sender_counter, receiver_counter: this.receiver_counter });
                if (type != 'Offer') {
                    this.sendnotification(type);
                }
                this.Chat_Data.message = '';
                this.Button_show = '0';
            }
        }
        else {
            newData.set({
                user: this.Chat_Data.nickname,
                message: this.Chat_Data.message,
                id: this.Chat_Data.id,
                list_id: this.product_id,
                type: type,
                sendDate: date
            });
            if (this.UserId != this.receive_user) {
                this.receiver_counter = this.receiver_counter + 1;
            }
            else {
                this.sender_counter = this.sender_counter + 1;
            }
            if (type == '2') {
                firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('Conversation/' + this.OldChatId + '/' + this.product_id).update({ lastmsg: 'photo', ServicesDate: date, sender_counter: this.sender_counter, receiver_counter: this.receiver_counter });
            }
            else {
                firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('Conversation/' + this.OldChatId + '/' + this.product_id).update({ lastmsg: this.Chat_Data.message, ServicesDate: date, sender_counter: this.sender_counter, receiver_counter: this.receiver_counter });
            }
            if (type != 'Offer') {
                this.sendnotification(type);
            }
            this.Chat_Data.message = '';
            this.Button_show = '0';
        }
    }
    sendnotification(type) {
        if (type == '2') {
            var msg = 'Image';
        }
        else {
            var msg = this.Chat_Data.message;
        }
        var params = {
            user_id: this.ServiceID,
            sender_id: this.UserId,
            list_id: this.product_id,
            name: this.userName,
            message: msg
        };
        console.log(params);
        this.service.SendNotification(params)
            .then((results) => this.handleNotification(results));
    }
    handleNotification(results) {
        console.log(results);
    }
    action(action, id, key) {
        this.loader.showLoader();
        console.log(key);
        var params = {
            id: id,
            action: action
        };
        console.log(params);
        this.service.Offeraction(params)
            .then((results) => this.handleAction(action, results, key));
    }
    handleAction(action, results, key) {
        console.log(results);
        this.loader.dissmissLoader();
        console.log(this.ChatsID);
        if (results.ResponseCode == 1) {
            if (this.OldChatId) {
                this.ChatsID = this.OldChatId;
                console.log('Old =>', this.ChatsID);
            }
            else if (this.ConversID) {
                this.ChatsID = this.ConversID;
                console.log('3 =>', this.ChatsID);
            }
            if (this.Chat_Data.id === this.UserId && action == '3') {
                this.loader.showToast("you have cancelled the offer");
            }
            let newData = firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('/Chats/' + this.ChatsID + '/chat' + '/' + key).update({ status: action });
            console.log(newData);
        }
    }
    back() {
        this.navctrl.pop();
    }
    showdate(date) {
        var newdate = date.split(' ')[0];
        return newdate;
    }
    showtime(date) {
        // var time1 = new Date(date).toLocaleTimeString()
        // var time = time1.slice(0, 5) + ' ' + time1.slice(8, 13)
        var time = date.slice(11, 16);
        return time;
    }
    // showprice(price) {
    //   return price.split(' ')[1]
    // }
    opengallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Gallery',
                        icon: 'image-outline',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Camera',
                        icon: 'camera-outline',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    pickImage(sourceType) {
        // if (sourceType == 0) {
        //   const options: ImagePickerOptions = {
        //     quality: 50,
        //     maximumImagesCount: 1,
        //   }
        //   this.loader.showLoader();
        //   this.imagepicker.getPictures(options).then((results) => {
        //     console.log(results)
        //     for (var i = 0; i < results.length; i++) {
        //       this.cropimage(results[i]);
        //     }
        //     err => {
        //       console.log(err);
        //     }
        //   });
        // }
        // if (sourceType == 1) {
        //   const options: CameraOptions = {
        //     quality: 100,
        //     sourceType: this.camera.PictureSourceType.CAMERA,
        //     destinationType: this.camera.DestinationType.FILE_URI,
        //     encodingType: this.camera.EncodingType.JPEG,
        //     mediaType: this.camera.MediaType.PICTURE,
        //     // targetHeight: 500,
        //     // targetWidth: 500,
        //     correctOrientation: true,
        //     cameraDirection: 1,
        //   }
        //   this.loader.showLoader();
        //   this.camera.getPicture(options).then((imageData) => {
        //     this.cropimage(imageData)
        //   }, (err) => {
        //   });
        // }
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetHeight: 500,
            targetWidth: 500,
            cameraDirection: 1,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/png;base64,' + imageData;
            console.log(base64Image);
            this.loader.showLoader();
            this.imagetcurrenttime(base64Image);
        }, (err) => {
            console.log(err);
        });
    }
    cropimage(imgPath) {
        console.log(imgPath);
        this.loader.dissmissLoader();
        this.crop.crop(imgPath, this.cropOptions).then((newpath) => {
            this.loader.showLoader();
            this.showcropimg(newpath.split('?')[0]),
                error => console.log(error);
        });
    }
    showcropimg(filepath) {
        this.isLoading = true;
        var copyPath = filepath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var ImagePath = filepath.split(imageName)[0];
        this.file.readAsDataURL(ImagePath, imageName).then(base64 => {
            this.croppedImagepath = base64;
            this.isLoading = false;
            this.imagetcurrenttime(this.croppedImagepath);
        }, error => {
            alert('Error in showing image' + error);
            this.isLoading = false;
        });
    }
    imagetcurrenttime(image) {
        this.service.Getcurrenttime()
            .then((results) => this.handleimageTime(results, image));
    }
    handleimageTime(results, image) {
        console.log(results);
        if (results.ResponseCode == '1') {
            // this.date = new Date(results.current_time).toString()
            this.date = results.current_time;
            this.upload(image, this.date);
        }
    }
    upload(image, date) {
        var d = new Date();
        var n = d.getTime();
        let options = {
            fileKey: "image",
            fileName: "image_" + n.toString() + ".png",
            chunkedMode: false,
            mimeType: "image/png"
        };
        console.log(options);
        const fileTransfer = this.transfer.create();
        fileTransfer.upload(image, 'https://appdevelopmentsingapore.com/marketplace/api/' + 'imageupload.php', options)
            .then((data) => {
            console.log("data:", data.response);
            this.currentimage = JSON.parse(data.response);
            if (this.currentimage.ResponseCode == 1) {
                console.log(this.currentimage.image_url);
                this.Chat_Data.message = 'https://appdevelopmentsingapore.com/marketplace/api/' + this.currentimage.image_url;
                this.text = "2";
            }
            this.ChatData(this.text, date);
            this.loader.dissmissLoader();
            this.showSuccesfulUploadAlert();
        });
    }
    showSuccesfulUploadAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // this.loader.showAlert("Uploaded!", 'Upload Succefully')
            this.base64Image = "";
        });
    }
    gopost() {
        var params = {
            id: this.product_id
        };
        console.log(params);
        this.service.ProductDetail(params)
            .then((results) => this.handleProductdetail(results));
    }
    handleProductdetail(results) {
        console.log(results);
        if (results.ResponseCode == '1') {
            this.image = results.data.image;
            results.data.image = this.image.split(',')[0];
            results.data.allimage = this.image;
            this.Veripostdetail();
            // this.navctrl.navigateForward(['/detail', this.otheruser])
        }
        else {
            this.loader.showAlert("Error", results.ResponseMsg);
        }
    }
    Veripostdetail() {
        var params = {
            post_id: this.product_id,
            user_id: this.otheruser.user_id
        };
        console.log(params);
        this.service.Veripostdetail(params)
            .then((results) => this.handleVeripostdetail(results));
    }
    handleVeripostdetail(results) {
        console.log(results);
        if (results.ResponseCode == '1') {
            this.navctrl.navigateForward(['/detail', results.data]);
        }
        else {
            this.loader.showAlert("Error", results.ResponseMsg);
        }
    }
    lazyloader() {
        this.loader.showLoader();
    }
    endloader() {
        this.loader.dissmissLoader();
        setTimeout(() => {
            if (this.offStatus === false) {
                this.content.scrollToBottom(300);
            }
        }, 500);
    }
    profile() {
        this.navctrl.navigateForward(['/chatprofile', { 'user_id': this.otheruser.user_id }]);
    }
};
ChatdetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__.Camera },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__.FileTransfer },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__.ImagePicker },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__.Crop },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute }
];
ChatdetailPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent,] }]
};
ChatdetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-chatdetail',
        template: _raw_loader_chatdetail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chatdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatdetailPage);



/***/ }),

/***/ 8050:
/*!*************************************************!*\
  !*** ./src/app/chatdetail/chatdetail.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  background-color: #f2f2f2;\n  --background: #f2f2f2;\n  color: #000000;\n}\n\n.updiv {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: white;\n  position: fixed;\n  z-index: 99999;\n}\n\n.chatdiv {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: absolute;\n  top: 218px;\n}\n\nion-avatar {\n  width: 45px;\n  height: 45px;\n  margin: auto;\n}\n\n.username {\n  font-weight: bold;\n  margin-top: 5px;\n  color: #000000;\n}\n\n.chaticn {\n  color: gray;\n  font-size: 25px;\n}\n\n.borderdiv {\n  border-bottom: 2px solid black;\n  width: 100%;\n  height: 13px;\n}\n\n.productname {\n  font-size: 14px;\n  color: black;\n}\n\n.btnclass {\n  --background: linear-gradient(to right, #ec6d4c, #f98e46);\n  --border-radius: 22px;\n  width: 95%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n  --box-shadow: none;\n}\n\nion-footer {\n  background: white;\n  height: 60px;\n  color: #000000;\n}\n\n.ngname {\n  --padding-start: 0px;\n  --placeholder-opacity: 0.3;\n  font-size: 14px;\n  color: #000000;\n}\n\n.attachicn {\n  color: #aaaaaa;\n  font-size: 30px;\n  margin-top: 12px;\n  transform: rotate(45deg);\n}\n\n.sendicn {\n  color: #f48b41;\n  font-size: 30px;\n  margin-top: 12px;\n  transform: rotate(45deg);\n  margin-left: -6px;\n}\n\n.usemsg {\n  width: 80%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 8px 10px;\n  background-color: #ffffff;\n  line-height: 20px;\n  font-size: 15px;\n  color: black;\n  margin-left: 15px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 12px #cfcfcf;\n  float: left;\n}\n\n.date {\n  width: 100%;\n  color: black;\n  font-size: 12px;\n  padding: 5px 19px;\n}\n\n.memsg {\n  float: right;\n  width: 70%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 8px 10px;\n  background-color: #ffffff;\n  line-height: 17px;\n  font-size: 15px;\n  color: black;\n  margin-right: 15px;\n  text-align: left;\n  border-radius: 7px;\n  box-shadow: 0px 0px 12px #afafaf;\n}\n\n.btn {\n  --background: #1eb1a7;\n  --border-radius: 22px;\n  text-transform: none;\n  --box-shadow: none;\n  color: rgba(255, 255, 255, 0.836);\n  font-size: 12px;\n}\n\n.cancelbtn {\n  --background: red;\n  --border-radius: 0px;\n  text-transform: none;\n  --box-shadow: none;\n  color: rgba(255, 255, 255, 0.836);\n  font-size: 12px;\n}\n\n.btn1 {\n  --background: #1eb1a7;\n  --border-radius: 0px;\n  text-transform: none;\n  --box-shadow: none;\n  color: rgba(255, 255, 255, 0.836);\n  font-size: 12px;\n}\n\n.user1 {\n  text-align: right;\n  width: 100%;\n}\n\n.user2 {\n  text-align: left;\n}\n\n.usrname {\n  width: 80%;\n  background-color: #f5f5fd;\n  margin-left: 10px;\n  padding: 8px 10px;\n  border-radius: 5px;\n  position: relative;\n  display: inline-block;\n  box-shadow: 0px 0px 12px #cfcfcf;\n}\n\n.name {\n  font-size: 12px;\n  color: #838282;\n  margin: 10px;\n  margin-top: 2px;\n}\n\n.usrname1 {\n  width: 80%;\n  background-color: #ffffff;\n  margin-right: 10px;\n  padding: 8px 10px;\n  border-radius: 5px;\n  position: relative;\n  display: inline-block;\n  box-shadow: 0px 0px 12px #cfcfcf;\n}\n\n.me::before {\n  position: absolute;\n  display: block;\n}\n\n.you::before {\n  position: absolute;\n  display: block;\n}\n\n.msg {\n  text-align: left;\n  color: #000000;\n}\n\n.acceptbtn {\n  --background: linear-gradient(to right, #ec6d4c, #f98e46);\n  --border-radius: 22px;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 34px;\n  display: table;\n  margin: auto;\n  text-transform: none;\n  --box-shadow: none;\n}\n\n.denybtn {\n  --background: white;\n  --border-radius: 22px;\n  border-radius: 22px;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 34px;\n  text-transform: none;\n  color: black;\n  margin: auto;\n  display: table;\n  font-weight: 400px;\n  --box-shadow: none;\n  border: 1.5px solid black;\n  font-weight: bold;\n}\n\n.blockdiv {\n  font-size: 12px;\n  color: gray;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkE7RUFDSSx5REFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFLSjs7QUFIQTtFQUNJLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQVFKOztBQVFBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFMSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSko7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBSEo7O0FBS0E7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUFESjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUVJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFKQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQU9KOztBQUxBO0VBQ0kseURBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTkE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFRSjs7QUFOQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFTSiIsImZpbGUiOiJjaGF0ZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG59XHJcbi51cGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG59XHJcbi5jaGF0ZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMThweDtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLy8gY29sb3I6ICNiNmI2YjY7XHJcbiAgICAvLyBmb250LXNpemU6IDE4cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgLy8gcGFkZGluZzogOHB4IDlweDtcclxufVxyXG4udXNlcm5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG59XHJcbi5jaGF0aWNuIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5ib3JkZXJkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbn1cclxuLnByb2R1Y3RuYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uYnRuY2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYzZkNGMsICNmOThlNDYpO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG59XHJcbi5uZ25hbWUge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuMztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuLmF0dGFjaGljbiB7XHJcbiAgICBjb2xvcjogcmdiKDE3MCwgMTcwLCAxNzApO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG4uc2VuZGljbiB7XHJcbiAgICBjb2xvcjogI2Y0OGI0MTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcclxufVxyXG4vLyAudXNlcjEge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuLy8gfVxyXG4vLyAudXNlcjIge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbi8vIH1cclxuLnVzZW1zZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggcmdiKDIwNywgMjA3LCAyMDcpO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmRhdGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTlweDtcclxufVxyXG4ubWVtc2cge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggI2FmYWZhZjtcclxufVxyXG4uYnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzFlYjFhNztcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MzYpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jYW5jZWxidG4ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MzYpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5idG4xIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzFlYjFhNztcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgzNik7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnVzZXIxIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnVzZXIyIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnVzcm5hbWUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZmQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYigyMDcsIDIwNywgMjA3KTtcclxufVxyXG4ubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiKDEzMSwgMTMwLCAxMzApO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcbi51c3JuYW1lMSB7XHJcbiAgICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYigyMDcsIDIwNywgMjA3KTtcclxufVxyXG4ubWU6OmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ueW91OjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm1zZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxufVxyXG4uYWNjZXB0YnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWM2ZDRjLCAjZjk4ZTQ2KTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmRlbnlidG4ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBmb250LXdlaWdodDogNDAwcHg7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5ibG9ja2RpdntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 14372:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatdetail/chatdetail.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"updiv\">\n    <div class=\"ht_40\"></div>\n    <ion-row>\n      <ion-col size=\"1.5\">\n        <ion-icon name=\"arrow-back-outline\" class=\"chaticn\" (click)=\"back()\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"2\" class=\"ion-no-padding\" (click)=\"profile()\">\n        <ion-avatar>\n          <img *ngIf=\"ServiceProfile != 'null'\" src=\"{{ServiceProfile}}\" onerror=\"src='assets/image/profile.png'\">\n          <!-- <img *ngIf=\"ServiceProfile == 'null' || ServiceProfile == ''\" src=\"assets/image/profile.png\"> -->\n          <!-- <ion-icon name=\"person\"></ion-icon> -->\n        </ion-avatar>\n      </ion-col>\n      <ion-col (click)=\"profile()\">\n        <div class=\"username\">{{SeviceName}}</div>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"ellipsis-vertical\" class=\"chaticn\" (click)=\"menu()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n    <!-- <div class=\"username\" style=\"text-align: center;\">Chat</div> -->\n    <div class=\"borderdiv\"></div>\n    <div class=\"ht_10\"></div>\n    <ion-row class=\"row_95\">\n      <ion-col (click)=\"gopost()\">\n        <div class=\"productname\">{{otheruser.name}}</div>\n        <div class=\"pricediv\">{{otheruser.currency}}{{showprice(otheruser.price)}}</div>\n      </ion-col>\n      <ion-col>\n        <ion-button *ngIf=\"type\" class=\"btnclass\" (click)=\"makeoffer()\">Make Offer</ion-button>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_10\"></div>\n  </div>\n  <div class=\"chatdiv\">\n    <div class=\"ht_10\"></div>\n    <div *ngFor=\"let chat of UserChat\">\n      <div *ngIf=\"chat.id == UserId  && chat.list_id == product_id  \" class=\"user1\">\n        <div class=\"usrname1 me\">\n          <div class=\"msg\" *ngIf=\"chat.type == '1'\">{{chat.message}}</div>\n          <div class=\"msg\" *ngIf=\"chat.type =='2'\">\n            <ion-img [src]=\"chat.message\" (ionImgWillLoad)=\"lazyloader()\" (ionImgDidLoad)=\"endloader()\"></ion-img>\n            <!-- <img [src]=\"chat.message\" onloadeddata=\"src='assets/image/loader.jpg'\"/> -->\n          </div>\n          <div class=\"msg\" *ngIf=\"chat.type == 'Offer'\">\n            <div><b>Made An Offer</b></div>\n            <div>{{chat.message}}</div>\n            <!-- <div>Duration:24 Hrs</div> -->\n            <div>Price : <b>{{chat.offer.price}}</b></div>\n            <div>Quantity : <b>{{chat.offer.qty}}</b></div>\n            <div>Date : {{showdate(chat.sendDate)}}</div>\n            <div>Time : {{showtime(chat.sendDate)}}</div>\n            <ion-button class=\"btn\" *ngIf=\"chat.status == '0'\">Pending</ion-button>\n            <ion-button class=\"btn\" *ngIf=\"chat.status == '0'\" (click)=\"action('3',chat.offer.offerid,chat.key)\">Cancel\n            </ion-button>\n            <ion-button *ngIf=\"chat.status == '1'\" class=\"btn\">Accepted</ion-button>\n            <ion-button *ngIf=\"chat.status == '2'\" class=\"cancelbtn\">Rejected</ion-button>\n            <ion-button *ngIf=\"chat.status == '3'\" class=\"cancelbtn\">Cancelled</ion-button>\n          </div>\n        </div>\n        <div *ngIf=\"chat.id === UserId\" class=\"name\">{{showdate(chat.sendDate)}} {{showtime(chat.sendDate)}}</div>\n        <!-- <div *ngFor=\"let conv of ConversationID\">\n          <div *ngIf=\"conv.usrstatus == 'block'\" class=\"blockdiv\">You blocked this contact.</div>\n        </div> -->\n      </div>\n\n      <div *ngIf=\"chat.id !== UserId  && chat.list_id == product_id\" class=\"user2\">\n        <div class=\"usrname you\">\n          <div class=\"msg\" *ngIf=\"chat.type == '1'\">{{chat.message}}</div>\n          <div class=\"msg\" *ngIf=\"chat.type =='2'\">\n            <ion-img [src]=\"chat.message\" (ionImgWillLoad)=\"lazyloader($event)\" (ionImgDidLoad)=\"endloader()\"></ion-img>\n            <!-- <img [src]=\"chat.message\" onloadeddata=\"src='assets/image/loader.jpg'\"/> -->\n          </div>\n          <div class=\"msg\" *ngIf=\"chat.type == 'Offer'\">\n            <div><b>Made An Offer</b></div>\n            <div>{{chat.message}}</div>\n            <!-- <div>Duration:24 Hrs</div> -->\n            <div>Price : <b>{{chat.offer.price}}</b></div>\n            <div>Quantity : <b>{{chat.offer.qty}}</b></div>\n            <div>Date : {{showdate(chat.sendDate)}}</div>\n            <div>Time : {{showtime(chat.sendDate)}}</div>\n            <!-- <ion-button class=\"btn\" *ngIf=\"chat.status == ''\">Pending</ion-button> -->\n            <div *ngIf=\"chat.id !== UserId\">\n              <ion-row>\n                <ion-col class=\"ion-no-padding\">\n                  <ion-button class=\"acceptbtn\" *ngIf=\"chat.status == '0'\"\n                    (click)=\"action('1',chat.offer.offerid,chat.key)\">Accept</ion-button>\n                </ion-col>\n                <ion-col class=\"ion-no-padding\">\n                  <ion-button class=\"denybtn\" *ngIf=\"chat.status == '0'\"\n                    (click)=\"action('2',chat.offer.offerid,chat.key)\">Reject</ion-button>\n                </ion-col>\n                <ion-col class=\"ion-no-padding\">\n                  <!-- <ion-button class=\"denybtn\" *ngIf=\"chat.status == '0'\"\n                    (click)=\"action('3',chat.offer.offerid,chat.key)\">Cancel</ion-button> -->\n                </ion-col>\n              </ion-row>\n              <ion-button *ngIf=\"chat.status == '1'\" class=\"btn1\">Accepted</ion-button>\n              <ion-button *ngIf=\"chat.status == '2'\" class=\"btn1\">Rejected</ion-button>\n              <ion-button *ngIf=\"chat.status == '3'\" class=\"cancelbtn\">Cancelled</ion-button>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"chat.id !== UserId\" class=\"name\">{{showdate(chat.sendDate)}} {{showtime(chat.sendDate)}}</div>\n\n      </div>\n    </div>\n    <div *ngFor=\"let conv of ConversationID\">\n      <div *ngIf=\"conv.block_user == UserId && conv.usrstatus == 'block'\" class=\"blockdiv\">You blocked this user</div>\n      <div *ngIf=\"conv.block_user != UserId && conv.usrstatus == 'block'\" class=\"blockdiv\">You have been blocked</div>\n    </div>\n  </div>\n  <div class=\"ht_5\"> </div>\n</ion-content>\n<ion-footer>\n  <ion-row class=\"row_95\">\n    <ion-col size=\"9\">\n      <ion-input class=\"ngname\" type=\"text\" placeholder=\"Type your message...\" [(ngModel)]=\"Chat_Data.message\" required>\n      </ion-input>\n    </ion-col>\n    <ion-col size=\"1\" class=\"ion-no-padding text-center\">\n      <ion-icon name=\"attach-outline\" class=\"attachicn\" (click)=\"opengallery()\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-no-padding text-center\">\n      <ion-icon name=\"paper-plane\" class=\"sendicn\" (click)=\"getcurrenttime('1')\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_chatdetail_chatdetail_module_ts.js.map