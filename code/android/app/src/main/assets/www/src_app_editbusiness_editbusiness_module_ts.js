(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_editbusiness_editbusiness_module_ts"],{

/***/ 25083:
/*!*************************************************************!*\
  !*** ./src/app/editbusiness/editbusiness-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditbusinessPageRoutingModule": () => (/* binding */ EditbusinessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _editbusiness_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editbusiness.page */ 87296);




const routes = [
    {
        path: '',
        component: _editbusiness_page__WEBPACK_IMPORTED_MODULE_0__.EditbusinessPage
    }
];
let EditbusinessPageRoutingModule = class EditbusinessPageRoutingModule {
};
EditbusinessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditbusinessPageRoutingModule);



/***/ }),

/***/ 4141:
/*!*****************************************************!*\
  !*** ./src/app/editbusiness/editbusiness.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditbusinessPageModule": () => (/* binding */ EditbusinessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _editbusiness_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editbusiness-routing.module */ 25083);
/* harmony import */ var _editbusiness_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editbusiness.page */ 87296);







let EditbusinessPageModule = class EditbusinessPageModule {
};
EditbusinessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editbusiness_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditbusinessPageRoutingModule
        ],
        declarations: [_editbusiness_page__WEBPACK_IMPORTED_MODULE_1__.EditbusinessPage]
    })
], EditbusinessPageModule);



/***/ }),

/***/ 87296:
/*!***************************************************!*\
  !*** ./src/app/editbusiness/editbusiness.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditbusinessPage": () => (/* binding */ EditbusinessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_editbusiness_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editbusiness.page.html */ 93495);
/* harmony import */ var _editbusiness_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editbusiness.page.scss */ 48643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 47531);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ 35881);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 45103);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 61281);
/* harmony import */ var _country_country_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../country/country.page */ 26482);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 33606);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 79051);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ 5901);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 29535);















let EditbusinessPage = class EditbusinessPage {
    constructor(config, navctrl, service, loader, camera, crop, imagepicker, file, router, modalctrl, actionSheetController, transfer) {
        this.config = config;
        this.navctrl = navctrl;
        this.service = service;
        this.loader = loader;
        this.camera = camera;
        this.crop = crop;
        this.imagepicker = imagepicker;
        this.file = file;
        this.router = router;
        this.modalctrl = modalctrl;
        this.actionSheetController = actionSheetController;
        this.transfer = transfer;
        this.cropOptions = {
            quality: 50,
            targetWidth: -1,
            targetHeight: -1
        };
        console.log(this.config.logindata);
        this.uname = this.config.logindata.user_name;
        this.email = this.config.logindata.email;
        this.phone = this.config.logindata.phone_number;
        this.dob = this.config.logindata.dob;
        this.country = this.config.logindata.country;
        this.c_name = this.config.logindata.company_name;
        this.c_register_no = this.config.logindata.company_registration_number;
        this.c_phone = this.config.logindata.company_phone;
        this.c_email = this.config.logindata.company_email;
        this.c_address = this.config.logindata.company_address;
        this.c_website = this.config.logindata.company_website;
        this.c_country = this.config.logindata.company_country;
        this.c_type = this.config.logindata.company_type.split(',');
        this.nature = this.config.logindata.nature_of_business.split(',');
        this.c_description = this.config.logindata.company_description;
        if (this.config.logindata.image) {
            this.Myimage = this.config.logindata.image;
        }
        else {
            this.Myimage = "assets/image/profile.png";
        }
        console.log(this.c_country);
        this.type = this.router.snapshot.params.type;
        console.log('type =>', this.type);
    }
    selectbirthdate() {
        this.dob = this.dob.split('T')[0];
        console.log(this.dob);
        var dt = this.dob.split('-')[0];
        var currentdate = new Date().getFullYear();
        var diff = currentdate - dt;
        if (diff <= 18) {
            this.dob = '';
            this.loader.showAlert("Error", "You must be 18 years old or above");
        }
    }
    ngOnInit() {
        fetch('./assets/country/country.json').then(res => res.json())
            .then(json => {
            this.allcountry = json;
            console.log(this.allcountry);
            for (var i = 0; i < this.allcountry.length; i++) {
                if (this.country == this.allcountry[i].name) {
                    this.countrycode = this.allcountry[i].code;
                }
                if (this.c_country == this.allcountry[i].name) {
                    this.companycountrycode = this.allcountry[i].code;
                }
            }
        });
        this.nature_of_business = [];
        console.log(this.c_type);
        if (this.c_type == 'Supplier') {
            this.nature_of_business.push("Building Material", "Chemical & Lubricant", "Construction Equipment", "Construction Machinery", "Doors & Windows", "Electrical & Electronic", "Environmental & Safety", "Fastening", "Finishing", "Manpower", "Material Handling & Storage", "Pipe, Hose & Fitting", "Spare Parts", "Specialty & Others", "Steel & Metal", "Tools & Hardware", "Transport", "Wood & Plastic");
        }
        else if (this.c_type == 'Contractor') {
            this.nature_of_business.push("Asphalt works & Road Marking", "Cable/Pipe Laying & Road Reinstatement", "Civil Engineering", "Concrete Repairs", "Corrosion Protection", "Curtain Walls", "Demolition", "Doors & Windows", "Fencing & Ironworks", "General Building", "Ground Support & Stabilization Works", "Interior Decoration & Finishing Works", "Minor Construction", "Piling", "Pre-cast Concrete Works", "Repairs & Redecoration", "Signcraft Installation", "Site Investigation Works", "Waterproofing Installation");
        }
        else if (this.c_type == 'Design & Engineering Consultancy') {
            this.nature_of_business.push("Architects & Interior", "Civil & Structural", "Electrical", "Environmental", "Geotechnical", "Landscape", "Mechanical", "Quantity Surveying");
        }
        else if (this.c_type == 'Manufacturer') {
            this.nature_of_business.push("Building Products & Construction Materials", "Electrical & Electronics", "Energy & Chemicals", "Metal, Machinery & Engineering", "Wood, Plastic & Rubbers");
        }
        else if (this.c_type == 'Service Provider') {
            this.nature_of_business.push("Contracts and Legal", "Facilities Management", "Financing", "HR and Recruitment", "Insurance", "IT", "Logistics and Transportation", "Marketing", "Repairs and refurbishing", "Secretarial and Accounting");
        }
        console.log(this.nature_of_business);
    }
    getcountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.loader.showLoader();
            const modalctrl = yield this.modalctrl.create({
                component: _country_country_page__WEBPACK_IMPORTED_MODULE_7__.CountryPage,
                cssClass: "backmodal",
                componentProps: { 'country': this.cname }
            });
            modalctrl.onDidDismiss().then((result) => {
                this.countrycode = result.data.id.code;
                this.country = result.data.id.name;
                console.log(this.countrycode);
                console.log(this.country);
            });
            yield modalctrl.present();
            this.loader.dissmissLoader();
        });
    }
    getc_country() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modalctrl = yield this.modalctrl.create({
                component: _country_country_page__WEBPACK_IMPORTED_MODULE_7__.CountryPage,
                cssClass: "backmodal",
                componentProps: { 'country': this.c_c_name }
            });
            modalctrl.onDidDismiss().then((result) => {
                this.companycountrycode = result.data.id.code;
                this.c_country = result.data.id.name;
                console.log(this.countrycode);
                console.log(this.country);
            });
            yield modalctrl.present();
        });
    }
    selectcode() {
        console.log(this.country);
        console.log(this.c_country);
        if (this.country) {
            for (var i = 0; i < this.allcountry.length; i++) {
                if (this.allcountry[i].name == this.country) {
                    this.countrycode = this.allcountry[i].code;
                }
            }
        }
        if (this.c_country) {
            for (var i = 0; i < this.allcountry.length; i++) {
                if (this.allcountry[i].name == this.c_country) {
                    this.companycountrycode = this.allcountry[i].code;
                }
            }
        }
        // this.countrycode = this.country.split(' ')[0]
        // this.companycountrycode = this.c_country.split(' ')[0]
        console.log(this.countrycode);
        console.log(this.companycountrycode);
    }
    back() {
        this.navctrl.pop();
    }
    selecttype() {
        this.nature_of_business = [];
        console.log(this.c_type);
        if (this.c_type == 'Supplier') {
            this.nature_of_business.push("Building Material", "Chemical & Lubricant", "Construction Equipment", "Construction Machinery", "Doors & Windows", "Electrical & Electronic", "Environmental & Safety", "Fastening", "Finishing", "Manpower", "Material Handling & Storage", "Pipe, Hose & Fitting", "Spare Parts", "Specialty & Others", "Steel & Metal", "Tools & Hardware", "Transport", "Wood & Plastic");
        }
        else if (this.c_type == 'Contractor') {
            this.nature_of_business.push("Asphalt works & Road Marking", "Cable/Pipe Laying & Road Reinstatement", "Civil Engineering", "Concrete Repairs", "Corrosion Protection", "Curtain Walls", "Demolition", "Doors & Windows", "Fencing & Ironworks", "General Building", "Ground Support & Stabilization Works", "Interior Decoration & Finishing Works", "Minor Construction", "Piling", "Pre-cast Concrete Works", "Repairs & Redecoration", "Signcraft Installation", "Site Investigation Works", "Waterproofing Installation");
        }
        else if (this.c_type == 'Design & Engineering Consultancy') {
            this.nature_of_business.push("Architects & Interior", "Civil & Structural", "Electrical", "Environmental", "Geotechnical", "Landscape", "Mechanical", "Quantity Surveying");
        }
        else if (this.c_type == 'Manufacturer') {
            this.nature_of_business.push("Building Products & Construction Materials", "Electrical & Electronics", "Energy & Chemicals", "Metal, Machinery & Engineering", "Wood, Plastic & Rubbers");
        }
        else if (this.c_type == 'Service Provider') {
            this.nature_of_business.push("Contracts and Legal", "Facilities Management", "Financing", "HR and Recruitment", "Insurance", "IT", "Logistics and Transportation", "Marketing", "Repairs and refurbishing", "Secretarial and Accounting");
        }
        console.log(this.nature_of_business);
    }
    opengallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
        if (sourceType == 0) {
            const options = {
                quality: 50,
                maximumImagesCount: 1,
            };
            this.loader.showLoader();
            this.imagepicker.getPictures(options).then((results) => {
                console.log(results);
                for (var i = 0; i < results.length; i++) {
                    this.cropimage(results[i]);
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
                cameraDirection: 1,
            };
            this.loader.showLoader();
            this.camera.getPicture(options).then((imageData) => {
                this.cropimage(imageData);
            }, (err) => {
            });
        }
    }
    cropimage(imgPath) {
        console.log(imgPath);
        this.crop.crop(imgPath, this.cropOptions).then((newpath) => {
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
            this.upload(this.croppedImagepath);
        }, error => {
            alert('Error in showing image' + error);
            this.isLoading = false;
        });
    }
    upload(image) {
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
                this.userpic = imgdata.image_url;
                this.Myimage = 'https://appdevelopmentsingapore.com/marketplace/api/' + this.userpic;
                console.log(this.Myimage);
                this.loader.showToast('Profile Photo Uploaded');
            }
        });
    }
    changetobusiness() {
        console.log(this.type);
        if (this.switch == true) {
            this.type = '2';
        }
        else {
            this.type = '1';
        }
    }
    update() {
        this.loader.showLoader();
        var params = {
            user_id: this.config.logindata.id,
            user_name: this.uname,
            email: this.email,
            phone_number: this.phone,
            dob: this.dob,
            image: this.Myimage,
            country: this.country,
            company_name: this.c_name,
            company_registration_number: this.c_register_no,
            company_country: this.c_country,
            company_phone: this.c_phone,
            company_email: this.c_email,
            company_website: this.c_website,
            company_address: this.c_address,
            company_type: this.c_type,
            nature_of_business: this.nature.toString(),
            company_description: this.c_description
        };
        console.log(params);
        this.service.Updateprofile(params)
            .then((results) => this.handleUpdate(results));
    }
    handleUpdate(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            const getdata = JSON.parse(localStorage.getItem("Marketplace_Logindata"));
            if (getdata) {
                getdata.user_name = this.uname,
                    getdata.email = this.email,
                    getdata.phone_number = this.phone,
                    getdata.dob = this.dob,
                    getdata.image = this.Myimage,
                    getdata.country = this.country,
                    getdata.company_name = this.c_name,
                    getdata.company_registration_number = this.c_register_no,
                    getdata.company_phone = this.c_phone,
                    getdata.company_website = this.c_website,
                    getdata.company_email = this.c_email,
                    getdata.company_country = this.c_country,
                    getdata.company_address = this.c_address,
                    getdata.company_type = this.c_type.toString(),
                    getdata.nature_of_business = this.nature.toString(),
                    getdata.company_description = this.c_description;
                getdata.type = this.type;
                localStorage.setItem("Marketplace_Logindata", JSON.stringify(getdata));
                this.config.refresh();
                this.navctrl.navigateForward('/profile');
            }
            this.loader.showToast(results.ResponseMsg);
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
    }
};
EditbusinessPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__.Crop },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__.ImagePicker },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__.FileTransfer }
];
EditbusinessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-editbusiness',
        template: _raw_loader_editbusiness_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editbusiness_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditbusinessPage);



/***/ }),

/***/ 48643:
/*!*****************************************************!*\
  !*** ./src/app/editbusiness/editbusiness.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backcolordiv {\n  position: relative;\n  width: 100%;\n  height: 175px;\n}\n\n.imag {\n  width: 100%;\n  height: 180px;\n  background-color: #fd9345;\n  -webkit-clip-path: ellipse(80% 60% at 59% 35%);\n  clip-path: ellipse(80% 60% at 50% 37%);\n}\n\n.inner {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 145px;\n  background-color: #f78427;\n  -webkit-clip-path: ellipse(80% 60% at 46% 35%);\n  clip-path: ellipse(80% 60% at 42% 37%);\n}\n\n.back2 {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 120px;\n  background-color: #f9771f;\n  -webkit-clip-path: ellipse(80% 61% at 29% 35%);\n  clip-path: ellipse(80% 61% at 29% 35%);\n}\n\n.circle {\n  position: absolute;\n  top: -25px;\n  height: 35%;\n  left: -47px;\n  transform: rotate(256deg);\n}\n\n.backicn {\n  position: absolute;\n  color: white;\n  font-size: 25px;\n  top: 35px;\n  left: 25px;\n}\n\n.profileimg {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -30px;\n  left: 150px;\n  border: 5px solid white;\n  box-shadow: 1px 0px 11px #c9c9c9;\n}\n\n.cameraicn {\n  position: absolute;\n  bottom: -25px;\n  left: 218px;\n  border-radius: 50%;\n  width: 31px;\n  height: 32px;\n}\n\n.inputbox {\n  border-bottom: 1px solid gray;\n  --padding-start: 0px;\n}\n\nion-select {\n  width: 100%;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\n.countrycode {\n  width: 55px;\n  border-right: 2px solid gray;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRidXNpbmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxzQ0FBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0Esc0NBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHNDQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFNSjs7QUFKQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFRSjs7QUFOQTtFQUNJLDZCQUFBO0VBQ0Esb0JBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7QUFVSjs7QUFSQTtFQUNJLDRFQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFXSjs7QUFUQTtFQUNJLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBWUoiLCJmaWxlIjoiZWRpdGJ1c2luZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrY29sb3JkaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG59XHJcbi5pbWFnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDkzNDU7XHJcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogZWxsaXBzZSg4MCUgNjAlIGF0IDU5JSAzNSUpO1xyXG4gICAgY2xpcC1wYXRoOiBlbGxpcHNlKDgwJSA2MCUgYXQgNTAlIDM3JSk7XHJcbn1cclxuLmlubmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzg0Mjc7XHJcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogZWxsaXBzZSg4MCUgNjAlIGF0IDQ2JSAzNSUpO1xyXG4gICAgY2xpcC1wYXRoOiBlbGxpcHNlKDgwJSA2MCUgYXQgNDIlIDM3JSk7XHJcbn1cclxuLmJhY2syIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTc3MWY7XHJcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogZWxsaXBzZSg4MCUgNjElIGF0IDI5JSAzNSUpO1xyXG4gICAgY2xpcC1wYXRoOiBlbGxpcHNlKDgwJSA2MSUgYXQgMjklIDM1JSk7XHJcbn1cclxuLmNpcmNsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yNXB4O1xyXG4gICAgaGVpZ2h0OiAzNSU7XHJcbiAgICBsZWZ0OiAtNDdweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI1NmRlZyk7XHJcbn1cclxuLmJhY2tpY24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdG9wOiAzNXB4O1xyXG4gICAgbGVmdDogMjVweDtcclxufVxyXG4ucHJvZmlsZWltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0zMHB4O1xyXG4gICAgbGVmdDogMTUwcHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAwcHggMTFweCAjYzljOWM5O1xyXG59XHJcbi5jYW1lcmFpY24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMjVweDtcclxuICAgIGxlZnQ6IDIxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDMxcHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuLmlucHV0Ym94IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnRuY2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjQ4ZGVnLCAjZjc4YTQ2IDAlLCAjZWU3ODQ4IDM0JSwgI2VhNmI0YSAxMDAlKTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbi5jb3VudHJ5Y29kZXtcclxuICAgIHdpZHRoOjU1cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6MnB4IHNvbGlkIGdyYXk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 93495:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editbusiness/editbusiness.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"backcolordiv\">\n    <div class=\"imag\"></div>\n    <div class=\"inner\"></div>\n    <div class=\"back2\"></div>\n    <img class=\"circle\" src=\"assets/image/circle.jpg\">\n    <ion-icon name=\"arrow-back-outline\" class=\"backicn\" (click)=\"back()\"></ion-icon>\n    <div>\n      <img src=\"{{Myimage}}\" class=\"profileimg\">\n      <img src=\"assets/image/edit - Copy.png\" class=\"cameraicn\" (click)=\"opengallery()\">\n      <!-- <ion-icon *ngIf=\"editprofile == '1'\" name=\"camera\" class=\"cameraicn\" (click)=\"opengallery()\"></ion-icon> -->\n    </div>\n  </div>\n\n  <div class=\"ht_50\"></div>\n  <div>\n    <div class=\"labeldiv\">User Name</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"uname\" placeholder=\"Enter User name\">\n      </ion-input>\n      <ion-icon slot=\"end\" name=\"person-outline\" class=\"personlogo\"></ion-icon>\n    </ion-item>\n\n    <div class=\"ht_10\"></div>\n    <div class=\"labeldiv\">Email</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter email\">\n      </ion-input>\n      <ion-icon slot=\"end\" name=\"mail-outline\" class=\"personlogo\"></ion-icon>\n    </ion-item>\n\n    <div class=\"ht_10\"></div>\n    <div class=\"labeldiv\">Phone Number</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"number\" [(ngModel)]=\"phone\" (keypress)=\"enterprice($event)\" placeholder=\"Enter Phone Number\">\n      </ion-input>\n      <ion-icon slot=\"end\" name=\"phone-portrait-outline\" class=\"personlogo\"></ion-icon>\n    </ion-item>\n\n    <div class=\"ht_10\"></div>\n    <div class=\"labeldiv\">Date Of Birth</div>\n    <ion-item class=\"inputitem\">\n      <ion-datetime display-format=\"DD/MM/YYYY\" placeholder=\"Enter the date of birth\" [(ngModel)]=\"dob\"\n        (ionChange)=\"selectbirthdate()\"></ion-datetime>\n      <ion-icon slot=\"end\" name=\"calendar-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n\n    <div class=\"ht_10\"></div>\n\n    <ion-row *ngIf=\"type != '2'\" class=\"row_90\">\n      <ion-col size=\"10\">\n        <div class=\"lbldiv\">Switch To Business Account</div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-toggle [(ngModel)]=\"switch\" style=\"padding: 0px 0px 2px 8px;\" (ionChange)=\"changetobusiness()\">\n        </ion-toggle>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf=\"type == '2'\">\n    <div class=\"labeldiv\">Company Name</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"c_name\" placeholder=\"Enter Company name\"></ion-input>\n      <ion-icon slot=\"end\" name=\"business-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n\n    <div class=\"ht_10\"></div>\n    <div class=\"labeldiv\">Company Description</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"c_description\" placeholder=\"Enter the company description\"></ion-input>\n      <ion-icon slot=\"end\" name=\"person-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n\n    <div class=\"ht_10\"></div>\n    <div class=\"labeldiv\">Company Address</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"c_address\" placeholder=\"Enter company address\"></ion-input>\n      <ion-icon slot=\"end\" name=\"location-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_10\"></div>\n    <div class=\"labeldiv\">Company Phone Number</div>\n    <ion-item class=\"inputitem\">\n      <div class=\"countrycode\">{{companycountrycode}}</div>\n      <ion-input type=\"number\" (keypress)=\"enterprice($event)\" [(ngModel)]=\"c_phone\"\n        placeholder=\"Enter company phone number\"></ion-input>\n      <ion-icon slot=\"end\" name=\"phone-portrait-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <div class=\"ht_10\"></div>\n    <div class=\"labeldiv\">Company Website(optional)</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"email\" [(ngModel)]=\"c_website\" placeholder=\"Enter the company website\"></ion-input>\n      <ion-icon slot=\"end\" name=\"globe-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n\n    <div class=\"ht_10\"></div>\n    <div class=\"labeldiv\">Company Email</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"email\" [(ngModel)]=\"c_email\" placeholder=\"Enter the company email\"></ion-input>\n      <ion-icon slot=\"end\" name=\"mail-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n    <!-- <div class=\"ht_10\"></div>\n    <div class=\"labeldiv\">User Name</div>\n    <ion-item class=\"inputitem\">\n      <ion-input type=\"text\" [(ngModel)]=\"uname\" placeholder=\"Enter user name\"></ion-input>\n      <ion-icon slot=\"end\" name=\"person-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item> -->\n\n    <div class=\"ht_10\"></div>\n    <div class=\"labeldiv\">Company Type</div>\n    <ion-item class=\"inputitem\">\n      <ion-select [(ngModel)]=\"c_type\" (ionChange)=\"selecttype()\" placeholder=\"Select the company type\">\n        <ion-select-option>Supplier</ion-select-option>\n        <ion-select-option>Contractor</ion-select-option>\n        <ion-select-option>Design & Engineering Consultancy</ion-select-option>\n        <ion-select-option>Manufacturer</ion-select-option>\n        <ion-select-option>Service Provider</ion-select-option>\n      </ion-select>\n      <!-- <ion-icon slot=\"end\" name=\"caret-down-outline\"></ion-icon> -->\n    </ion-item>\n\n    <div class=\"ht_10\"></div>\n    <div class=\"labeldiv\">Nature of Business</div>\n    <ion-item class=\"inputitem\">\n      <ion-select [(ngModel)]=\"nature\" mode=\"ios\" multiple=\"true\" placeholder=\"Select nature of Business\">\n        <ion-select-option *ngFor=\"let n of nature_of_business\" value=\"{{n}}\">{{n}}</ion-select-option>\n      </ion-select>\n      <ion-icon slot=\"end\" name=\"briefcase-outline\" class=\"logoicn\"></ion-icon>\n    </ion-item>\n  </div>\n\n  <div class=\"ht_20\"></div>\n  <ion-button class=\"btnclass\" (click)=\"update()\">Update</ion-button>\n  <div class=\"ht_10\"></div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_editbusiness_editbusiness_module_ts.js.map