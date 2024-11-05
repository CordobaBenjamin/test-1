(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_addlisting_addlisting_module_ts"],{

/***/ 65010:
/*!*********************************************************!*\
  !*** ./src/app/addlisting/addlisting-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddlistingPageRoutingModule": () => (/* binding */ AddlistingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _addlisting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addlisting.page */ 12671);




const routes = [
    {
        path: '',
        component: _addlisting_page__WEBPACK_IMPORTED_MODULE_0__.AddlistingPage
    }
];
let AddlistingPageRoutingModule = class AddlistingPageRoutingModule {
};
AddlistingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddlistingPageRoutingModule);



/***/ }),

/***/ 63676:
/*!*************************************************!*\
  !*** ./src/app/addlisting/addlisting.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddlistingPageModule": () => (/* binding */ AddlistingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _addlisting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addlisting-routing.module */ 65010);
/* harmony import */ var _addlisting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addlisting.page */ 12671);







let AddlistingPageModule = class AddlistingPageModule {
};
AddlistingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addlisting_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddlistingPageRoutingModule
        ],
        declarations: [_addlisting_page__WEBPACK_IMPORTED_MODULE_1__.AddlistingPage]
    })
], AddlistingPageModule);



/***/ }),

/***/ 12671:
/*!***********************************************!*\
  !*** ./src/app/addlisting/addlisting.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddlistingPage": () => (/* binding */ AddlistingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_addlisting_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addlisting.page.html */ 54112);
/* harmony import */ var _addlisting_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addlisting.page.scss */ 69356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 45103);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 61281);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service.service */ 35881);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 33606);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 79051);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ 5901);
/* harmony import */ var _country_country_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../country/country.page */ 26482);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config.service */ 47531);
/* harmony import */ var _imagecropper_imagecropper_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../imagecropper/imagecropper.page */ 14306);















let AddlistingPage = class AddlistingPage {
    constructor(camera, actionSheetController, navctrl, service, loader, modalctrl, crop, imagepicker, config, platfrom, file, transfer) {
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.navctrl = navctrl;
        this.service = service;
        this.loader = loader;
        this.modalctrl = modalctrl;
        this.crop = crop;
        this.imagepicker = imagepicker;
        this.config = config;
        this.platfrom = platfrom;
        this.file = file;
        this.transfer = transfer;
        this.sldopts = {
            initialSlide: 0,
            slidesPerView: 4,
        };
        this.datemask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.cropOptions = {
            quality: 50,
            targetWidth: -1,
            targetHeight: -1
        };
        if (this.platfrom.is('ios')) {
            this.plt = 'ios';
        }
        else {
            this.plt = 'android';
        }
        this.config.refresh();
        this.logindata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
        this.symbol = '$';
        this.currency = 'SGD';
    }
    ngOnInit() {
        this.getcategory();
        fetch('./assets/country/country.json').then(res => res.json())
            .then(json => {
            this.allcountry = json;
            console.log(this.allcountry);
        });
    }
    back() {
        console.log('back');
        // this.navctrl.pop()
        this.navctrl.navigateRoot('/home');
    }
    getcountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.loader.showLoader();
            const modalctrl = yield this.modalctrl.create({
                component: _country_country_page__WEBPACK_IMPORTED_MODULE_9__.CountryPage,
                cssClass: "backmodal",
            });
            modalctrl.onDidDismiss().then((result) => {
                if (result.data) {
                    this.country = result.data.id.name;
                    console.log(this.country);
                }
            });
            this.loader.dissmissLoader();
            yield modalctrl.present();
        });
    }
    getcategory() {
        this.loader.showLoader();
        this.service.Getcategory()
            .then((results) => this.HandleCategory(results));
    }
    HandleCategory(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.allcategory = results.data;
        }
        else {
            this.loader.showAlert("Error", results.ResponseMsg);
        }
    }
    opengallery(imgid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Gallery',
                        icon: 'image-outline',
                        handler: () => {
                            this.modalcrop(this.camera.PictureSourceType.PHOTOLIBRARY, imgid);
                            // this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, imgid);
                        }
                    },
                    {
                        text: 'Camera',
                        icon: 'camera-outline',
                        handler: () => {
                            this.modalcrop(this.camera.PictureSourceType.CAMERA, imgid);
                            // this.pickImage(this.camera.PictureSourceType.CAMERA, imgid);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    modalcrop(sourceType, imgid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalctrl.create({
                component: _imagecropper_imagecropper_page__WEBPACK_IMPORTED_MODULE_11__.ImagecropperPage,
                cssClass: "backmodal",
                componentProps: { 'source': sourceType, 'image_id': imgid }
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
                if (data.data) {
                    this.loader.showLoader();
                    this.upload(data.data.image, data.data.imageid);
                }
            });
            modal.present();
        });
    }
    pickImage(sourceType, imgid) {
        if (sourceType == 0) {
            const options = {
                quality: 50,
                maximumImagesCount: 1,
            };
            this.loader.showLoader();
            this.imagepicker.getPictures(options).then((results) => {
                console.log(results);
                for (var i = 0; i < results.length; i++) {
                    this.cropimage(results[i], imgid);
                }
                err => {
                    console.log(err);
                };
            });
        }
        if (sourceType == 1) {
            const options = {
                quality: 100,
                sourceType: this.camera.PictureSourceType.CAMERA,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                // targetHeight: 500,
                // targetWidth: 500,
                correctOrientation: true,
                cameraDirection: 0,
            };
            this.loader.showLoader();
            this.camera.getPicture(options).then((imageData) => {
                this.cropimage(imageData, imgid);
            }, (err) => {
            });
        }
    }
    cropimage(imgPath, imgid) {
        console.log(imgPath);
        this.loader.dissmissLoader();
        this.crop.crop(imgPath, this.cropOptions).then((newpath) => {
            this.loader.showLoader();
            this.showcropimg(newpath.split('?')[0], imgid),
                error => console.log(error);
        });
    }
    showcropimg(filepath, imgid) {
        this.isLoading = true;
        var copyPath = filepath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var ImagePath = filepath.split(imageName)[0];
        this.loader.dissmissLoader();
        this.file.readAsDataURL(ImagePath, imageName).then(base64 => {
            this.croppedImagepath = base64;
            this.isLoading = false;
            this.loader.showLoader();
            this.upload(this.croppedImagepath, imgid);
        }, error => {
            alert('Error in showing image' + error);
            this.isLoading = false;
        });
    }
    upload(image, imgid) {
        this.alllistimage = [];
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
            var imgdata = JSON.parse(data.response);
            console.log(imgdata);
            if (imgdata.ResponseCode == 1) {
                console.log(imgdata.image_url);
                if (imgid == '1') {
                    this.userpic = imgdata.image_url;
                    this.Myimage = 'https://appdevelopmentsingapore.com/marketplace/api/' + this.userpic;
                    this.loader.dissmissLoader();
                }
                if (imgid == '2') {
                    this.userpic2 = imgdata.image_url;
                    this.Myimage2 = 'https://appdevelopmentsingapore.com/marketplace/api/' + this.userpic2;
                    this.loader.dissmissLoader();
                }
                if (imgid == '3') {
                    this.userpic3 = imgdata.image_url;
                    this.Myimage3 = 'https://appdevelopmentsingapore.com/marketplace/api/' + this.userpic3;
                    this.loader.dissmissLoader();
                }
                if (imgid == '4') {
                    this.userpic4 = imgdata.image_url;
                    this.Myimage4 = 'https://appdevelopmentsingapore.com/marketplace/api/' + this.userpic4;
                    this.loader.dissmissLoader();
                }
                if (imgid == '5') {
                    this.userpic5 = imgdata.image_url;
                    this.Myimage5 = 'https://appdevelopmentsingapore.com/marketplace/api/' + this.userpic5;
                    this.loader.dissmissLoader();
                }
                // this.loader.showToast('Image Uploaded')
            }
        });
    }
    delete(imgid) {
        if (imgid == '1') {
            this.Myimage = '';
        }
        if (imgid == '2') {
            this.Myimage2 = '';
        }
        if (imgid == '3') {
            this.Myimage3 = '';
        }
        if (imgid == '4') {
            this.Myimage4 = '';
        }
        if (imgid == '5') {
            this.Myimage5 = '';
        }
    }
    changecountry() {
        console.log(this.currency);
        if (this.currency == 'SGD') {
            this.symbol = '$';
        }
        else if (this.currency == 'EUR') {
            this.symbol = '€';
        }
        else if (this.currency == 'GBP') {
            this.symbol = '£';
        }
        else if (this.currency == 'MYR') {
            this.symbol = 'RM';
        }
    }
    listvalidate() {
        if (!this.Myimage) {
            this.loader.showAlert("Error", "Please Upload Image");
            return false;
        }
        if (!this.title) {
            this.loader.showAlert("Error", "Please Enter Title");
            return false;
        }
        if (!this.category) {
            this.loader.showAlert("Error", "Please select Category");
            return false;
        }
        if (!this.country) {
            this.loader.showAlert("Error", "Please select Country");
            return false;
        }
        if (!this.condition) {
            this.loader.showAlert("Error", "Please select Condition");
            return false;
        }
        if (!this.type) {
            this.loader.showAlert("Error", "Please select Type");
            return false;
        }
        if (!this.price) {
            this.loader.showAlert("Error", "Please Enter Price");
            return false;
        }
        if (!this.description) {
            this.loader.showAlert("Error", "Please Enter Description");
            return false;
        }
        return true;
    }
    enterprice(ev) {
        if (this.platfrom.is('ios')) {
            const pattern = /[0-9.,]/;
            let inputchar = String.fromCharCode(ev.charCode);
            if (!pattern.test(inputchar)) {
                ev.preventDEfault();
            }
            console.log(this.price);
        }
        else {
            var pattern = /^[0-9]{9}$/;
            pattern.test(this.price);
            console.log(pattern.test(this.price));
            if (pattern.test(this.price) == true) {
                ev.preventDefault();
            }
        }
    }
    decimalvalidate(ev) {
        var regexp = /^\d+\.[0-9]{2}$/;
        regexp.test(this.price);
        console.log(regexp.test(this.price));
        if (regexp.test(this.price) == true) {
            ev.preventDefault();
        }
    }
    submit() {
        // this.alllistimage = []
        if (this.Myimage) {
            this.alllistimage.push(this.Myimage);
        }
        if (this.Myimage2) {
            this.alllistimage.push(this.Myimage2);
        }
        if (this.Myimage3) {
            this.alllistimage.push(this.Myimage3);
        }
        if (this.Myimage4) {
            this.alllistimage.push(this.Myimage4);
        }
        if (this.Myimage5) {
            this.alllistimage.push(this.Myimage5);
        }
        console.log(this.alllistimage);
        console.log(this.currency);
        if (this.listvalidate()) {
            this.loader.showLoader();
            var params = {
                user_id: this.logindata.id,
                category: this.category,
                image: this.alllistimage.toString(),
                name: this.title,
                description: this.description,
                country: this.country,
                type: this.type.toString(),
                is_new: this.condition,
                currency: this.symbol,
                price: this.price
            };
            console.log(params);
            this.service.Addlisting(params)
                .then((results) => this.handleListing(results));
        }
    }
    handleListing(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.loader.showAlert("", results.ResponseMsg);
            this.navctrl.navigateForward('/home');
        }
        else {
            this.loader.showAlert("Error", results.ResponseMsg);
        }
    }
    home() {
        this.navctrl.navigateForward('/home');
    }
    list() {
        this.navctrl.navigateForward('/menu');
    }
    notification() {
        this.navctrl.navigateForward('/notification');
    }
    chat() {
        this.navctrl.navigateForward('/chat');
    }
    profile() {
        this.navctrl.navigateForward('/profile');
    }
};
AddlistingPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_5__.ServiceService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__.Crop },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__.ImagePicker },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_10__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__.FileTransfer }
];
AddlistingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-addlisting',
        template: _raw_loader_addlisting_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addlisting_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddlistingPage);



/***/ }),

/***/ 69356:
/*!*************************************************!*\
  !*** ./src/app/addlisting/addlisting.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.89);\n  margin-top: 65px;\n  font-size: 19px;\n}\n\n.imagediv {\n  width: 65px;\n  height: 60px;\n  margin: auto;\n  border: 2px dashed gray;\n}\n\n.cameraicn {\n  color: gray;\n  font-size: 35px;\n  margin: auto;\n  display: table;\n  margin-top: 10px;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\n.listimage {\n  width: 100%;\n  height: 100%;\n}\n\n.headericn {\n  color: gray;\n  font-size: 25px;\n}\n\n.hedertxt {\n  font-weight: bold;\n  margin-top: 5px;\n  text-align: center;\n}\n\n.sortcol {\n  border: 1px solid black;\n  text-align: center;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  height: 30px;\n  border-radius: 30px;\n  font-size: 12px;\n  padding: 7px;\n  margin: 5px;\n}\n\n.selectsortcol {\n  border: 1px solid black;\n  text-align: center;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  height: 30px;\n  border-radius: 30px;\n  font-size: 12px;\n  padding: 7px;\n  margin: 5px;\n  background: linear-gradient(248deg, #f78a46 0%, #fa8658 34%, #f69548 100%);\n  color: #ffffff;\n}\n\n.symbolinput {\n  padding: 0px;\n  width: 10% !important;\n  --width: 10% !important;\n  max-width: 10%;\n  text-align: center;\n}\n\nion-select {\n  width: 100%;\n  padding: 6px;\n}\n\n.trashicn {\n  position: absolute;\n  bottom: 2px;\n  left: 23px;\n  z-index: 9999;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU1BO0VBQ0ksNEVBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUhKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFGSjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQUEsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMEVBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQUtKIiwiZmlsZSI6ImFkZGxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODkpO1xyXG4gICAgbWFyZ2luLXRvcDogNjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG4vLyAudXBsb2FkaW1hZ2Uge1xyXG4vLyAgICAgd2lkdGg6IDkwJTtcclxuLy8gICAgIG1hcmdpbjogYXV0bztcclxuLy8gICAgIGhlaWdodDogMTMwcHg7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4vLyB9XHJcbi5pbWFnZWRpdiB7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBncmF5O1xyXG4gICAgLy8gZGlzcGxheTogdGFibGU7XHJcbn1cclxuLmNhbWVyYWljbiB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uYnRuY2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjQ4ZGVnLCAjZjc4YTQ2IDAlLCAjZWU3ODQ4IDM0JSwgI2VhNmI0YSAxMDAlKTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbi5saXN0aW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6ICAxMDAlO1xyXG59XHJcbi5oZWFkZXJpY24ge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLmhlZGVydHh0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zb3J0Y29sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLnNlbGVjdHNvcnRjb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNDhkZWcsICNmNzhhNDYgMCUsICNmYTg2NTggMzQlLCAjZjY5NTQ4IDEwMCUpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnN5bWJvbGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxuICAgIC0td2lkdGg6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLXNlbGVjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzo2cHg7XHJcbn1cclxuLnRyYXNoaWNue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAycHg7XHJcbiAgICBsZWZ0OiAyM3B4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIGNvbG9yOnJlZDtcclxufSJdfQ== */");

/***/ }),

/***/ 54112:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addlisting/addlisting.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"ht_40\"></div>\n  <ion-row class=\"row_95\">\n    <ion-col class=\"ion-no-padding text-center\" size=\"1\">\n      <ion-icon name=\"arrow-back-outline\" class=\"headericn\" (click)=\"back()\"></ion-icon>\n    </ion-col>\n    <ion-col class=\"ion-no-padding text-center\" size=\"11\">\n      <div class=\"hedertxt\">Listing Details</div>\n    </ion-col>\n  </ion-row>\n  <div class=\"ht_15\"></div>\n  <ion-slides [options]=\"sldopts\" class=\"ml_17\">\n    <ion-slide>\n      <div onload=\"aasets/image/edit.png\" class=\"imagediv\">\n        <ion-icon *ngIf=\"!Myimage\" name=\"camera\" class=\"cameraicn\" (click)=\"opengallery('1')\"></ion-icon>\n        <img *ngIf=\"Myimage\" src=\"{{Myimage}}\" class=\"listimage\" (click)=\"opengallery('1')\">\n        <ion-icon *ngIf=\"Myimage\" name=\"trash-outline\" class=\"trashicn\" (click)=\"delete('1')\"></ion-icon>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"imagediv\">\n        <ion-icon *ngIf=\"!Myimage2\" name=\"camera\" class=\"cameraicn\" (click)=\"opengallery('2')\"></ion-icon>\n        <img *ngIf=\"Myimage2\" src=\"{{Myimage2}}\" class=\"listimage\" (click)=\"opengallery('2')\">\n        <ion-icon *ngIf=\"Myimage2\" name=\"trash-outline\" class=\"trashicn\" (click)=\"delete('2')\"></ion-icon>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"imagediv\">\n        <ion-icon *ngIf=\"!Myimage3\" name=\"camera\" class=\"cameraicn\" (click)=\"opengallery('3')\"></ion-icon>\n        <img *ngIf=\"Myimage3\" src=\"{{Myimage3}}\" class=\"listimage\" (click)=\"opengallery('3')\">\n        <ion-icon *ngIf=\"Myimage3\" name=\"trash-outline\" class=\"trashicn\" (click)=\"delete('3')\"></ion-icon>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"imagediv\">\n        <ion-icon *ngIf=\"!Myimage4\" name=\"camera\" class=\"cameraicn\" (click)=\"opengallery('4')\"></ion-icon>\n        <img *ngIf=\"Myimage4\" src=\"{{Myimage4}}\" class=\"listimage\" (click)=\"opengallery('4')\">\n        <ion-icon *ngIf=\"Myimage4\" name=\"trash-outline\" class=\"trashicn\" (click)=\"delete('4')\"></ion-icon>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"imagediv\">\n        <ion-icon *ngIf=\"!Myimage5\" name=\"camera\" class=\"cameraicn\" (click)=\"opengallery('5')\"></ion-icon>\n        <img *ngIf=\"Myimage5\" src=\"{{Myimage5}}\" class=\"listimage\" (click)=\"opengallery('5')\">\n        <ion-icon *ngIf=\"Myimage5\" name=\"trash-outline\" class=\"trashicn\" (click)=\"delete('5')\"></ion-icon>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <!-- <div class=\"uploadimage\">\n    <ion-icon *ngIf=\"!Myimage\" name=\"camera\" class=\"cameraicn\" (click)=\"opengallery()\"></ion-icon>\n    <img *ngIf=\"Myimage\" src=\"{{Myimage}}\" class=\"listimage\" (click)=\"opengallery()\">\n  </div> -->\n  <div class=\"ht_15\"></div>\n  <div class=\"labeldiv\">Listing Title</div>\n  <ion-item class=\"inputitem\">\n    <ion-input type=\"text\" placeholder=\"Enter the Listing Title\" maxlength=\"50\" [(ngModel)]=\"title\"></ion-input>\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Category</div>\n  <ion-item class=\"inputitem\">\n    <ion-select [(ngModel)]=\"category\" mode=\"md\" placeholder=\"Select Category\" style=\"width: 100%;padding:6px;\">\n      <ion-select-option *ngFor=\"let cat of allcategory\" value=\"{{cat.id}}\">{{cat.name}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Location</div>\n  <ion-item class=\"inputitem\">\n    <!-- <ion-select [(ngModel)]=\"country\" placeholder=\"Select Country\">\n      <ion-select-option *ngFor=\"let con of allcountry\" value=\"{{con.name}}\">{{con.name}}</ion-select-option>\n    </ion-select> -->\n    <ion-input type=\"text\" [(ngModel)]=\"country\" placeholder=\"Select country\" (click)=\"getcountry()\" readonly>\n    </ion-input>\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Condition</div>\n  <ion-item class=\"inputitem\" style=\"--padding-start:0px;\">\n    <ion-select [(ngModel)]=\"condition\" mode=\"ios\" placeholder=\"Select Condition\">\n      <ion-select-option value=\"new\">New</ion-select-option>\n      <ion-select-option value=\"used\">Used</ion-select-option>\n      <ion-select-option value=\"refurbished\">Refurbished</ion-select-option>\n    </ion-select>\n    <!-- <div [ngClass]=\"(setcondition == 'new')?'selectsortcol':'sortcol'\" (click)=\"condition('new')\">New</div>\n    <div [ngClass]=\"(setcondition == 'used')?'selectsortcol':'sortcol'\" (click)=\"condition('used')\">Used</div>\n    <div [ngClass]=\"(setcondition == 'refurbished')?'selectsortcol':'sortcol'\" (click)=\"condition('refurbished')\">Refurbished</div> -->\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Type</div>\n  <ion-item class=\"inputitem\" style=\"--padding-start:0px;\">\n    <ion-select multiple=\"true\" mode=\"ios\" [(ngModel)]=\"type\" placeholder=\"Select Type\" slot=\"end\">\n      <ion-select-option value=\"for sale\">For Sale</ion-select-option>\n      <ion-select-option value=\"for rent\">For Rent</ion-select-option>\n    </ion-select>\n    <!-- <div [ngClass]=\"(type == 'for sale')?'selectsortcol':'sortcol'\" (click)=\"listtype('for sale')\">For Sale</div>\n    <div [ngClass]=\"(type == 'for rent')?'selectsortcol':'sortcol'\" (click)=\"listtype('for rent')\">For Rent</div> -->\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Listing Price</div>\n  <ion-item class=\"inputitem\">\n    <!-- <ion-select [(ngModel)]=\"currency\" (ionChange)=\"changecountry()\" interface=\"popover\"\n      style=\"width: 30%;margin-right:7px;\">\n      <ion-select-option value=\"SGD\">SGD</ion-select-option>\n      <ion-select-option value=\"EUR\">EUR</ion-select-option>\n      <ion-select-option value=\"GBP\">GBP</ion-select-option>\n      <ion-select-option value=\"MYR\">MYR</ion-select-option>\n    </ion-select> -->\n    <!-- <ion-input class=\"symbolinput\" [(ngModel)]=\"symbol\"></ion-input> -->\n    <ion-input *ngIf=\"plt == 'android'\" type=\"number\" placeholder=\"Listing Price\" [(ngModel)]=\"price\" (keypress)=\"enterprice($event)\"\n      (keypress)=\"decimalvalidate($event)\" style=\"--padding-start:5px;\">$ </ion-input>\n\n      <ion-input *ngIf=\"plt == 'ios'\" maxlength='9' placeholder=\"Listing Price\" [(ngModel)]=\"price\" (keypress)=\"enterprice($event)\"\n      (keypress)=\"decimalvalidate($event)\" style=\"--padding-start:5px;\">$ </ion-input>\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Description</div>\n  <ion-item class=\"inputitem\">\n    <ion-textarea rows=\"4\" type=\"text\" [(ngModel)]=\"description\"></ion-textarea>\n  </ion-item>\n\n  <div class=\"ht_25\"></div>\n  <ion-button class=\"btnclass\" (click)=\"submit()\">Submit</ion-button>\n\n</ion-content>\n<!-- <ion-footer>\n  <div class=\"ht_5\"></div>\n  <ion-row class=\"row_95 footerrow\">\n    <ion-col (click)=\"home()\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-col>\n    <ion-col (click)=\"list()\">\n      <ion-icon name=\"list-outline\"></ion-icon>\n    </ion-col>\n    <ion-col (click)=\"chat()\">\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.counter > 0\" class=\"showbagde\">{{config.counter}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"notification()\">\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.get_badge > 0\" class=\"showbagde\">{{config.get_badge}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"profile()\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_addlisting_addlisting_module_ts.js.map