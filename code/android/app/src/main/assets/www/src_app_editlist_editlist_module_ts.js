(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_editlist_editlist_module_ts"],{

/***/ 51818:
/*!*****************************************************!*\
  !*** ./src/app/editlist/editlist-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditlistPageRoutingModule": () => (/* binding */ EditlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _editlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editlist.page */ 65284);




const routes = [
    {
        path: '',
        component: _editlist_page__WEBPACK_IMPORTED_MODULE_0__.EditlistPage
    }
];
let EditlistPageRoutingModule = class EditlistPageRoutingModule {
};
EditlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditlistPageRoutingModule);



/***/ }),

/***/ 75174:
/*!*********************************************!*\
  !*** ./src/app/editlist/editlist.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditlistPageModule": () => (/* binding */ EditlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _editlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editlist-routing.module */ 51818);
/* harmony import */ var _editlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editlist.page */ 65284);







let EditlistPageModule = class EditlistPageModule {
};
EditlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditlistPageRoutingModule
        ],
        declarations: [_editlist_page__WEBPACK_IMPORTED_MODULE_1__.EditlistPage]
    })
], EditlistPageModule);



/***/ }),

/***/ 65284:
/*!*******************************************!*\
  !*** ./src/app/editlist/editlist.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditlistPage": () => (/* binding */ EditlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_editlist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editlist.page.html */ 47035);
/* harmony import */ var _editlist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editlist.page.scss */ 16120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ 35881);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 45103);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 61281);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 33606);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 79051);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ 5901);
/* harmony import */ var _country_country_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../country/country.page */ 26482);
/* harmony import */ var _imagecropper_imagecropper_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../imagecropper/imagecropper.page */ 14306);















let EditlistPage = class EditlistPage {
    constructor(router, loader, camera, crop, modalctrl, imagepicker, file, transfer, actionSheetController, navctrl, service) {
        this.router = router;
        this.loader = loader;
        this.camera = camera;
        this.crop = crop;
        this.modalctrl = modalctrl;
        this.imagepicker = imagepicker;
        this.file = file;
        this.transfer = transfer;
        this.actionSheetController = actionSheetController;
        this.navctrl = navctrl;
        this.service = service;
        this.sldopts = {
            initialSlide: 0,
            slidesPerView: 4,
        };
        this.cropOptions = {
            quality: 50,
            targetWidth: -1,
            targetHeight: -1
        };
        this.list = this.router.snapshot.params;
        console.log(this.list);
        // var imgpd = [];
        if (this.list.allimage) {
            this.image = this.list.allimage.split(',');
            this.Myimage = this.image[0];
            this.Myimage2 = this.image[1];
            this.Myimage3 = this.image[2];
            this.Myimage4 = this.image[3];
            this.Myimage5 = this.image[4];
        }
        // else {
        //   this.image = []
        //   this.image.push(this.list.image)
        // }
        this.country = this.list.country;
        console.log(this.country);
        this.name = this.list.name;
        this.description = this.list.description;
        this.type = this.list.type.split(',');
        this.price = this.list.price;
        this.symbol = this.list.currency;
        if (this.symbol == '$') {
            this.con_currency = 'SGD';
        }
        if (this.symbol == '€') {
            this.con_currency = 'EUR';
        }
        if (this.symbol == '£') {
            this.con_currency = 'GBP';
        }
        if (this.symbol == 'RM') {
            this.con_currency = 'MYR';
        }
        this.is_new = this.list.is_new;
    }
    ngOnInit() {
        this.getcategory();
        fetch('./assets/country/country.json').then(res => res.json())
            .then(json => {
            this.allcountry = json;
            console.log(this.allcountry);
            for (var i = 0; i < this.allcountry.length; i++) {
                if (this.list.country == this.allcountry[i].name) {
                    this.country = this.allcountry[i].name;
                }
            }
        });
    }
    getcountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modalctrl = yield this.modalctrl.create({
                component: _country_country_page__WEBPACK_IMPORTED_MODULE_9__.CountryPage,
                cssClass: "backmodal",
            });
            modalctrl.onDidDismiss().then((result) => {
                this.country = result.data.id.name;
                console.log(this.country);
            });
            yield modalctrl.present();
        });
    }
    getcategory() {
        this.loader.showLoader();
        this.service.Getcategory()
            .then((results) => this.handleCategory(results));
    }
    handleCategory(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.allcategory = results.data;
            for (var i = 0; i < this.allcategory.length; i++) {
                if (this.list.category == this.allcategory[i].id) {
                    this.displaycategory = this.allcategory[i].name;
                    this.category = this.allcategory[i].id;
                    console.log(this.category);
                }
            }
        }
    }
    changecountry() {
        console.log(this.con_currency);
        if (this.con_currency == 'SGD') {
            this.symbol = '$';
        }
        else if (this.con_currency == 'EUR') {
            this.symbol = '€';
        }
        else if (this.con_currency == 'GBP') {
            this.symbol = '£';
        }
        else if (this.con_currency == 'MYR') {
            this.symbol = 'RM';
        }
    }
    opengallery(imgid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log(imgid);
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
                            this.modalcrop(this.camera.PictureSourceType.PHOTOLIBRARY, imgid);
                            // this.pickImage(this.camera.PictureSourceType.CAMERA, imgid);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    modalcrop(sourceType, imgid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalctrl.create({
                component: _imagecropper_imagecropper_page__WEBPACK_IMPORTED_MODULE_10__.ImagecropperPage,
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
                sourceType: sourceType,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                // targetHeight: 500,
                // targetWidth: 500,
                correctOrientation: true,
                cameraDirection: 1,
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
        this.crop.crop(imgPath, this.cropOptions).then((newpath) => {
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
        this.file.readAsDataURL(ImagePath, imageName).then(base64 => {
            this.croppedImagepath = base64;
            this.isLoading = false;
            this.upload(this.croppedImagepath, imgid);
        }, error => {
            alert('Error in showing image' + error);
            this.isLoading = false;
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
            this.loader.dissmissLoader();
            console.log("data:", data.response);
            var imgdata = JSON.parse(data.response);
            console.log(imgdata);
            if (imgdata.ResponseCode == 1) {
                console.log(imgdata.image_url);
                if (imgid == '1') {
                    this.userpic = imgdata.image_url;
                    this.Myimage = 'https://appdevelopmentsingapore.com/marketplace/api/' + this.userpic;
                }
                if (imgid == '2') {
                    this.userpic2 = imgdata.image_url;
                    this.Myimage2 = 'https://appdevelopmentsingapore.com/marketplace/api/' + this.userpic2;
                }
                if (imgid == '3') {
                    this.userpic3 = imgdata.image_url;
                    this.Myimage3 = 'https://appdevelopmentsingapore.com/marketplace/api/' + this.userpic3;
                }
                if (imgid == '4') {
                    this.userpic4 = imgdata.image_url;
                    this.Myimage4 = 'https://appdevelopmentsingapore.com/marketplace/api/' + this.userpic4;
                }
                if (imgid == '5') {
                    this.userpic5 = imgdata.image_url;
                    this.Myimage5 = 'https://appdevelopmentsingapore.com/marketplace/api/' + this.userpic5;
                }
                // this.loader.showToast('Image Uploaded')
            }
        });
    }
    update() {
        this.alllistimage = [];
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
        console.log(this.alllistimage.length);
        if (this.alllistimage.length > 0) {
            this.loader.showLoader();
            var params = {
                id: this.list.id,
                category: this.category,
                image: this.alllistimage.toString(),
                name: this.name,
                description: this.description,
                country: this.country,
                type: this.type.toString(),
                is_new: this.is_new,
                currency: this.symbol,
                price: this.price
            };
            console.log(params);
            this.service.Editlisting(params)
                .then((results) => this.handleEdit(results));
        }
        else {
            this.loader.showAlert('', 'Please upload image!');
        }
    }
    handleEdit(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.loader.showpToast(results.ResponseMsg);
            this.navctrl.navigateForward('/profile');
        }
        else {
            this.loader.showAlert("Error", results.ResponseMsg);
        }
    }
    enterprice(ev) {
        const pattern = /[0-9.,]/;
        let inputchar = String.fromCharCode(ev.charCode);
        if (!pattern.test(inputchar)) {
            ev.preventDEfault();
        }
        console.log(this.price);
    }
    decimalvalidate(ev) {
        var regexp = /^\d+\.\d{2}$/;
        regexp.test(this.price);
        console.log(regexp.test(this.price));
        if (regexp.test(this.price) == true) {
            ev.preventDefault();
        }
    }
};
EditlistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__.Crop },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__.ImagePicker },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__.FileTransfer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService }
];
EditlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-editlist',
        template: _raw_loader_editlist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editlist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditlistPage);



/***/ }),

/***/ 16120:
/*!*********************************************!*\
  !*** ./src/app/editlist/editlist.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.89);\n  margin-top: 30px;\n  font-size: 19px;\n}\n\n.uploadimage {\n  width: 90%;\n  margin: auto;\n  height: 130px;\n  border: 1px solid gray;\n}\n\n.imagediv {\n  width: 65px;\n  height: 60px;\n  margin: auto;\n  border: 2px dashed gray;\n}\n\n.cameraicn {\n  color: gray;\n  font-size: 35px;\n  margin: auto;\n  display: table;\n  margin-top: 10px;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\n.listimage {\n  width: 100%;\n  height: 100%;\n}\n\n.symbolinput {\n  padding: 0px;\n  width: 10% !important;\n  --width: 10% !important;\n  max-width: 10%;\n  text-align: center;\n}\n\n.trashicn {\n  position: absolute;\n  bottom: 2px;\n  left: 23px;\n  z-index: 9999;\n  color: red;\n}\n\n.bckbtn {\n  color: #ffffff;\n}\n\n.headingdiv {\n  color: #ffffff;\n  text-align: center;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSw0RUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtBQVFKOztBQUxBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFRSiIsImZpbGUiOiJlZGl0bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODkpO1xyXG4gICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgZm9udC1zaXplOjE5cHg7XHJcbn1cclxuLnVwbG9hZGltYWdle1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBoZWlnaHQ6MTMwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLmltYWdlZGl2IHtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIGdyYXk7XHJcbiAgICAvLyBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG4uY2FtZXJhaWNuIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5idG5jbGFzcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNDhkZWcsICNmNzhhNDYgMCUsICNlZTc4NDggMzQlLCAjZWE2YjRhIDEwMCUpO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4ubGlzdGltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAgMTAwJTtcclxufVxyXG4uc3ltYm9saW5wdXQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgLS13aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udHJhc2hpY257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDJweDtcclxuICAgIGxlZnQ6IDIzcHg7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi5iY2tidG57XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIC8vIG1hcmdpbi10b3A6MzBweDtcclxufVxyXG4uaGVhZGluZ2RpdntcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 47035:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editlist/editlist.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"ht_30\"></div>\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-buttons>\n          <ion-back-button class=\"bckbtn\"></ion-back-button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col style=\"margin: auto;\">\n        <div class=\"headingdiv\">List a Product</div>\n      </ion-col>\n      <ion-col size=\"2\"></ion-col>\n    </ion-row>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_15\"></div>\n  <ion-slides [options]=\"sldopts\" class=\"ml_15\">\n    <ion-slide>\n      <div class=\"imagediv\">\n        <ion-icon *ngIf=\"!Myimage\" name=\"camera\" class=\"cameraicn\" (click)=\"opengallery('1')\"></ion-icon>\n        <img *ngIf=\"Myimage\" src=\"{{Myimage}}\" class=\"listimage\" (click)=\"opengallery('1')\">\n        <ion-icon *ngIf=\"Myimage\" name=\"trash-outline\" class=\"trashicn\" (click)=\"delete('1')\"></ion-icon>\n      </div>\n    </ion-slide>\n     <ion-slide>\n      <div class=\"imagediv\">\n        <ion-icon *ngIf=\"!Myimage2\" name=\"camera\" class=\"cameraicn\" (click)=\"opengallery('2')\"></ion-icon>\n        <img *ngIf=\"Myimage2\" src=\"{{Myimage2}}\" class=\"listimage\" (click)=\"opengallery('2')\">\n        <ion-icon *ngIf=\"Myimage2\" name=\"trash-outline\" class=\"trashicn\" (click)=\"delete('2')\"></ion-icon>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"imagediv\">\n        <ion-icon *ngIf=\"!Myimage3\" name=\"camera\" class=\"cameraicn\" (click)=\"opengallery('3')\"></ion-icon>\n        <img *ngIf=\"Myimage3\" src=\"{{Myimage3}}\" class=\"listimage\" (click)=\"opengallery('3')\">\n        <ion-icon *ngIf=\"Myimage3\" name=\"trash-outline\" class=\"trashicn\" (click)=\"delete('3')\"></ion-icon>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"imagediv\">\n        <ion-icon *ngIf=\"!Myimage4\" name=\"camera\" class=\"cameraicn\" (click)=\"opengallery('4')\"></ion-icon>\n        <img *ngIf=\"Myimage4\" src=\"{{Myimage4}}\" class=\"listimage\" (click)=\"opengallery('4')\">\n        <ion-icon *ngIf=\"Myimage4\" name=\"trash-outline\" class=\"trashicn\" (click)=\"delete('4')\"></ion-icon>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"imagediv\">\n        <ion-icon *ngIf=\"!Myimage5\" name=\"camera\" class=\"cameraicn\" (click)=\"opengallery('5')\"></ion-icon>\n        <img *ngIf=\"Myimage5\" src=\"{{Myimage5}}\" class=\"listimage\" (click)=\"opengallery('5')\">\n        <ion-icon *ngIf=\"Myimage5\" name=\"trash-outline\" class=\"trashicn\" (click)=\"delete('5')\"></ion-icon>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <div class=\"ht_15\"></div>\n  <div class=\"labeldiv\">Listing Title</div>\n  <ion-item class=\"inputitem\">\n    <ion-input type=\"text\" [(ngModel)]=\"name\"></ion-input>\n    <!-- <ion-icon slot=\"end\" name=\"eye-outline\" class=\"logoicn\"></ion-icon> -->\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Category</div>\n  <ion-item class=\"inputitem\">\n    <ion-select [(ngModel)]=\"category\" mode=\"md\" style=\"width: 100%;padding:6px;\">\n      <ion-select-option *ngFor=\"let cat of allcategory\" value=\"{{cat.id}}\">{{cat.name}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Location</div>\n  <ion-item class=\"inputitem\">\n    <!-- <ion-select [(ngModel)]=\"country\" style=\"width: 100%;\">\n      <ion-select-option *ngFor=\"let con of allcountry\" value=\"{{con.name}}\">{{con.name}}</ion-select-option>\n    </ion-select> -->\n    <ion-input type=\"text\" [(ngModel)]=\"country\" placeholder=\"select country\" (click)=\"getcountry()\"></ion-input>\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Condition</div>\n  <ion-item class=\"inputitem\">\n    <ion-select [(ngModel)]=\"is_new\" mode=\"md\" style=\"width: 100%;\">\n      <ion-select-option value=\"new\">New</ion-select-option>\n      <ion-select-option value=\"used\">Used</ion-select-option>\n      <ion-select-option value=\"refurbished\">Refurbished</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Type</div>\n  <ion-item class=\"inputitem\">\n    <ion-select  multiple=\"true\" [(ngModel)]=\"type\" style=\"width: 100%;\">\n      <ion-select-option value=\"for sale\">For Sale</ion-select-option>\n      <ion-select-option value=\"for rent\">For Rent</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Price</div>\n  <ion-item class=\"inputitem\">\n    <!-- <ion-select [(ngModel)]=\"con_currency\" (ionChange)=\"changecountry()\" interface=\"popover\" style=\"width: 30%;margin-right:7px;\">\n      <ion-select-option value=\"SGD\">SGD</ion-select-option>\n      <ion-select-option value=\"EUR\">EUR</ion-select-option>\n      <ion-select-option value=\"GBP\">GBP</ion-select-option>\n      <ion-select-option value=\"MYR\">MYR</ion-select-option>\n    </ion-select> -->\n    <!-- <ion-input class=\"symbolinput\" [(ngModel)]=\"symbol\"></ion-input> -->\n    <ion-input type=\"number\" placeholder=\"Listing Price\" [(ngModel)]=\"price\" (keypress)=\"enterprice($event)\"\n    (keypress)=\"decimalvalidate($event)\"></ion-input>\n  </ion-item>\n  <div class=\"ht_20\"></div>\n  <div class=\"labeldiv\">Description</div>\n  <ion-item class=\"inputitem\">\n    <ion-textarea rows=\"4\" type=\"text\" [(ngModel)]=\"description\"></ion-textarea>\n    <!-- <ion-icon slot=\"end\" name=\"eye-outline\" class=\"logoicn\"></ion-icon> -->\n  </ion-item>\n  <div class=\"ht_25\"></div>\n  <ion-button class=\"btnclass\" (click)=\"update()\">Update</ion-button>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_editlist_editlist_module_ts.js.map