(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 75434:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 29755);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 47350:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 75434);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 29755);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 29755:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 52907);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 70231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ 47531);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var _logoutpop_logoutpop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logoutpop/logoutpop.component */ 32421);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service.service */ 35881);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 45103);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 61281);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 33606);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 79051);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ 5901);














let ProfilePage = class ProfilePage {
    constructor(popover, config, service, loader, camera, crop, imagepicker, file, transfer, actionSheetController, navctrl) {
        this.popover = popover;
        this.config = config;
        this.service = service;
        this.loader = loader;
        this.camera = camera;
        this.crop = crop;
        this.imagepicker = imagepicker;
        this.file = file;
        this.transfer = transfer;
        this.actionSheetController = actionSheetController;
        this.navctrl = navctrl;
        this.cropOptions = {
            quality: 50,
            targetWidth: -1,
            targetHeight: -1
        };
        this.tabactive = '1';
        this.editprofile = '0';
        this.is_switch = '0';
        this.viewmore = '0';
        this.config.refresh();
        this.type = this.config.logindata.type;
        console.log(this.type);
        this.uname = this.config.logindata.user_name;
        this.email = this.config.logindata.email;
        this.phone = this.config.logindata.phone_number;
        this.country = this.config.logindata.country;
        this.c_name = this.config.logindata.company_name;
        this.c_country = this.config.logindata.company_country;
        this.c_phone = this.config.logindata.company_phone;
        this.c_email = this.config.logindata.company_email;
        this.c_address = this.config.logindata.company_address;
        this.c_type = this.config.logindata.company_type;
        this.nature = this.config.logindata.nature_of_business;
        this.c_description = this.config.logindata.company_description;
        if (this.config.logindata.image) {
            this.Myimage = this.config.logindata.image;
        }
        else {
            this.Myimage = "assets/image/profile.png";
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
            }
        });
        console.log('Peofile page');
    }
    ionViewWillEnter() {
        if (this.config.logindata.image) {
            this.Myimage = this.config.logindata.image;
        }
        else {
            this.Myimage = "assets/image/profile.png";
        }
        this.getuserdetail();
        this.getlisting();
        this.getfavorite();
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
    enterprice(ev) {
        const pattern = /[0-9.,]/;
        let inputchar = String.fromCharCode(ev.charCode);
        if (!pattern.test(inputchar)) {
            ev.preventDEfault();
        }
    }
    getuserdetail() {
        var params = {
            user_id: this.config.logindata.id
        };
        console.log(params);
        this.service.Getuserdetail(params)
            .then((results) => this.hanldeuserdetail(results));
    }
    hanldeuserdetail(results) {
        console.log(results);
        this.profiledata = results.user_data;
        // this.type = this.profiledata.type
        this.admin_verified = results.user_data.admin_verified;
        console.log(this.admin_verified);
        console.log(this.config.logindata.is_verified);
    }
    getlisting() {
        // this.loader.showLoader()
        var params = {
            user_id: this.config.logindata.id,
            login_id: this.config.logindata.id
        };
        console.log(params);
        this.service.Mylisting(params)
            .then((results) => this.hanldeLinsting(results));
    }
    hanldeLinsting(results) {
        console.log(results);
        // this.loader.dissmissLoader()
        if (results.ResponseCode == '1') {
            this.alllisting = results.data;
            if (this.alllisting) {
                this.badgelisting = this.alllisting.length;
                for (var i = 0; i < this.alllisting.length; i++) {
                    this.image = this.alllisting[i].image;
                    this.alllisting[i].image = this.image.split(',')[0];
                    this.alllisting[i].allimage = this.image;
                }
                console.log(this.alllisting);
            }
        }
    }
    getfavorite() {
        var params = {
            user_id: this.config.logindata.id
        };
        console.log(params);
        this.service.Getfavorite(params)
            .then((results) => this.handleFavorite(results));
    }
    handleFavorite(results) {
        console.log(results);
        if (results.ResponseCode == '1') {
            this.favorite = results.data;
            for (var i = 0; i < this.favorite.length; i++) {
                this.image = this.favorite[i].image;
                this.favorite[i].image = this.image.split(',')[0];
                this.favorite[i].allimage = this.image;
            }
        }
    }
    slecttab(id) {
        this.tabactive = id;
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const pop = yield this.popover.create({
                component: _logoutpop_logoutpop_component__WEBPACK_IMPORTED_MODULE_4__.LogoutpopComponent,
                cssClass: "logoutpopover"
            });
            pop.present();
        });
    }
    setting() {
        this.navctrl.navigateForward('/setting');
    }
    addlist() {
        this.navctrl.navigateForward('/addlisting');
    }
    gomylist(index, id) {
        if (id == '1') {
            this.navctrl.navigateForward(['/mylisting', this.alllisting[index]]);
        }
        else {
            this.navctrl.navigateForward(['/mylisting', this.favorite[index]]);
        }
    }
    login() {
        this.navctrl.navigateRoot('/login');
    }
    more(id) {
        this.viewmore = id;
    }
    edit(id) {
        console.log(this.tabactive);
        if (this.type == '1') {
            if (this.tabactive != '1') {
                this.tabactive = '1';
            }
            this.editprofile = id;
        }
        if (this.type == '2') {
            this.navctrl.navigateForward(['/editbusiness', { 'type': '2' }]);
        }
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
        this.loader.dissmissLoader();
        this.file.readAsDataURL(ImagePath, imageName).then(base64 => {
            this.croppedImagepath = base64;
            this.isLoading = false;
            this.loader.showLoader();
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
            console.log("data:", data.response);
            var imgdata = JSON.parse(data.response);
            console.log(imgdata);
            if (imgdata.ResponseCode == 1) {
                console.log(imgdata.image_url);
                this.userpic = imgdata.image_url;
                this.Myimage = 'https://appdevelopmentsingapore.com/marketplace/api/' + this.userpic;
                console.log(this.Myimage);
                this.loader.showToast('Profile Photo Uploaded');
                this.loader.dissmissLoader();
            }
        });
    }
    save() {
        console.log(this.type);
        console.log(this.is_switch);
        if (this.type == '1' && this.is_switch == '0') {
            this.loader.showLoader();
            var params = {
                user_id: this.config.logindata.id,
                user_name: this.uname,
                email: this.email,
                phone_number: this.phone,
                image: this.Myimage,
                country: this.country,
                company_name: this.c_name,
                company_phone: this.c_phone,
                company_email: this.c_email,
                company_address: this.c_address,
                company_type: this.c_type,
                nature_of_business: this.nature,
                company_description: this.c_description,
                type: '1'
            };
            console.log(params);
            this.service.Updateprofile(params)
                .then((results) => this.handleUpdate(results));
        }
        if (this.type == '1' && this.is_switch == '1') {
            if (this.companyvalidate()) {
                this.loader.showLoader();
                var params = {
                    user_id: this.config.logindata.id,
                    user_name: this.uname,
                    email: this.email,
                    phone_number: this.phone,
                    image: this.Myimage,
                    country: this.country,
                    company_name: this.c_name,
                    company_phone: this.c_phone,
                    company_email: this.c_email,
                    company_address: this.c_address,
                    company_type: this.c_type,
                    nature_of_business: this.nature,
                    company_description: this.c_description,
                    type: '2'
                };
                console.log(params);
                this.service.Updateprofile(params)
                    .then((results) => this.handleUpdate(results));
            }
        }
    }
    handleUpdate(results) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.type = results.data.type;
            localStorage.setItem("Marketplace_Logindata", JSON.stringify(results.data));
            this.config.refresh();
            this.loader.showToast(results.ResponseMsg);
            this.editprofile = '0';
            this.is_switch = '0';
        }
        else {
            this.loader.showAlert("Error", results.ResponseMsg);
        }
    }
    addfavorite(id, i) {
        if (this.config.logindata.id == '0') {
            this.loader.showAlert("Attention", "Please Login as the Individual or Company in app");
        }
        else {
            console.log(this.alllisting[i].is_liked);
            if (this.alllisting[i].is_liked == '0') {
                this.alllisting[i].is_liked = '1';
            }
            else {
                this.alllisting[i].is_liked = '0';
            }
            console.log(this.alllisting[i].is_liked);
            console.log(this.alllisting[i]);
            this.loader.showLoader();
            var params = {
                id: id,
                user_id: this.config.logindata.id
            };
            console.log(params);
            this.service.Favorite(params)
                .then((results) => this.handleaddFavorite(results, i));
        }
    }
    handleaddFavorite(results, i) {
        console.log(results);
        this.loader.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.loader.showToast(results.ResponseMsg);
        }
        else {
            this.loader.showAlert("Error", results.ResponseMsg);
        }
    }
    removefavorite(id) {
        var params = {
            id: id,
            user_id: this.config.logindata.id
        };
        console.log(params);
        this.service.Favorite(params)
            .then((results) => this.handleRemoveFavorite(results));
    }
    handleRemoveFavorite(results) {
        console.log(results);
        // this.getfavorite()
    }
    changetobusiness() {
        console.log(this.switch);
        console.log(this.type);
        if (this.switch == true) {
            this.is_switch = '1';
        }
        // const getdata = JSON.parse(localStorage.getItem("Marketplace_Logindata"))
        // console.log(getdata)
        // if (this.type == '2') {
        //   if (getdata) {
        //     getdata.type = '1'
        //     localStorage.setItem("Marketplace_Logindata", JSON.stringify(getdata))
        //     this.config.refresh()
        //     this.type = this.config.logindata.type
        //   }
        // } else {
        //   if (getdata.company_name && getdata.company_address && getdata.company_phone && getdata.company_email && getdata.company_type && getdata.nature_of_business && getdata.company_description) {
        //     getdata.type = '2'
        //     localStorage.setItem("Marketplace_Logindata", JSON.stringify(getdata))
        //     this.config.refresh()
        //     this.type = '2'
        //     console.log(this.type)
        //   } else {
        //     this.is_switch = '1'
        //   }
        // }
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
    companyvalidate() {
        if (!this.c_name) {
            this.loader.showAlert("Error", "Please Enter Company Name");
            return false;
        }
        if (!this.c_address) {
            this.loader.showAlert("Error", "Please Enter Company Address");
            return false;
        }
        if (!this.c_phone) {
            this.loader.showAlert("Error", "Please Enter Company Phone Number");
            return false;
        }
        if (!this.c_email) {
            this.loader.showAlert("Error", "Please Enter Company Email");
            return false;
        }
        if (!this.c_type) {
            this.loader.showAlert("Error", "Please Select Company Type");
            return false;
        }
        if (!this.nature) {
            this.loader.showAlert("Error", "Please Select Nature Of Business");
            return false;
        }
        if (!this.c_description) {
            this.loader.showAlert("Error", "Please Enter Comapny Description");
            return false;
        }
        return true;
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
    chat() {
        this.navctrl.navigateRoot('/chat');
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_5__.ServiceService },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__.Crop },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__.ImagePicker },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__.FileTransfer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 70231:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backcolordiv {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  background-color: #f9771f;\n}\n\n.imag {\n  width: 100%;\n  height: 249px;\n  background-color: #fd9345;\n  -webkit-clip-path: ellipse(80% 60% at 59% 35%);\n  clip-path: ellipse(80% 60% at 50% 37%);\n}\n\n.inner {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 223px;\n  background-color: #f78427;\n  -webkit-clip-path: ellipse(80% 60% at 46% 35%);\n  clip-path: ellipse(80% 60% at 42% 37%);\n}\n\n.back2 {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 200px;\n  background-color: #f9771f;\n  -webkit-clip-path: ellipse(80% 61% at 29% 35%);\n  clip-path: ellipse(80% 61% at 29% 35%);\n}\n\n.circle {\n  position: absolute;\n  top: -25px;\n  height: 35%;\n  left: -47px;\n  transform: rotate(256deg);\n}\n\n.profilerow {\n  position: absolute;\n  top: 35px;\n  width: 100%;\n  left: 0;\n}\n\n.profile {\n  margin: auto;\n  text-align: center;\n  height: 40px;\n  width: 40px;\n  font-size: 25px;\n  background-color: white;\n  border-radius: 50%;\n  color: #c1bfbf;\n  padding-top: 5px;\n}\n\n.profileimg {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin: auto;\n  display: table;\n  position: relative;\n}\n\n.spanicn {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.938);\n  margin-left: -10px;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.945);\n  font-size: 16px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.icn {\n  color: rgba(255, 255, 255, 0.938);\n  font-size: 33px;\n  margin-right: 5px;\n}\n\n.calendar {\n  margin: auto;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.781);\n  font-size: 18px;\n  margin-top: -27px;\n  position: absolute;\n}\n\n.jointxt {\n  color: rgba(255, 255, 255, 0.781);\n  font-size: 16px;\n  margin-top: 18px;\n  margin-left: -3px;\n}\n\n.calendar1 {\n  margin: auto;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.781);\n  font-size: 18px;\n  margin-top: -10px;\n  position: absolute;\n}\n\n.jointxt1 {\n  color: rgba(255, 255, 255, 0.781);\n  margin-top: -21px;\n  font-size: 16px;\n  margin-left: -3px;\n}\n\n.info {\n  color: black;\n  font-weight: 500;\n  font-size: 18px;\n  border-bottom: 2px solid black;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px 1px;\n  text-align: center;\n  margin: auto;\n}\n\n.list {\n  color: gray;\n  font-weight: 500;\n  font-size: 18px;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px 1px;\n  text-align: center;\n  margin: auto;\n}\n\n.personlogo {\n  margin: auto;\n  color: #f68546;\n  font-size: 26px;\n  margin-top: 5px;\n}\n\n.lbldiv {\n  color: gray;\n  font-size: 14px;\n  margin-top: 5px;\n}\n\n.valuediv {\n  color: black;\n  margin-top: 6px;\n  font-weight: 400;\n}\n\n.badgediv {\n  --background: linear-gradient(to right, #ed7d5b, #f99d58);\n  --padding-bottom: 2px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 2px;\n  border-radius: 15px;\n  font-size: 15px;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.inputbox {\n  border-bottom: 1px solid gray;\n  --padding-start:0px;\n  color: #000000;\n}\n\n.btnclass {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 90%;\n  height: 41px;\n  margin: auto;\n  display: table;\n  text-transform: none;\n}\n\n.cameraicn {\n  font-size: 18px;\n  color: white;\n  position: absolute;\n  top: 41px;\n  left: 50px;\n}\n\n.inputitemphone {\n  width: 100%;\n  margin: auto;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  border-bottom: 1px solid black;\n}\n\n.shielddiv {\n  position: relative;\n  margin: auto;\n  color: beige;\n  margin-left: -9px;\n  zoom: 1;\n}\n\n.doublecheckicn {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.938);\n  margin-left: -10px;\n  position: relative;\n}\n\n.checkmarkicn {\n  font-size: 13px;\n  position: absolute;\n  top: -3px;\n  left: -6px;\n  color: #f9771f;\n}\n\n.favimagediv {\n  position: relative;\n  height: 143px;\n}\n\n.moreview {\n  color: #f9771f;\n  text-align: center;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxzQ0FBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0Esc0NBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHNDQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7RUFFQSxpQ0FBQTtFQUNBLGtCQUFBO0FBT0o7O0FBSkE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FBT0o7O0FBSEE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVFKOztBQU5BO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVNKOztBQVBBO0VBQ0ksaUNBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVNKOztBQVBBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBVUo7O0FBUkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBV0o7O0FBVEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFhSjs7QUFYQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFjSjs7QUFaQTtFQUNJLHlEQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFlSjs7QUFiQTtFQUNJLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBZ0JKOztBQWRBO0VBQ0ksNEVBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQWlCSjs7QUFmQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQWtCSjs7QUFoQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0FBb0JKOztBQWxCQTtFQUNJLGVBQUE7RUFFQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBcUJKOztBQW5CQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQXNCSjs7QUFwQkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQXVCSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrY29sb3JkaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTc3MWY7XHJcbn1cclxuLmltYWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI0OXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkOTM0NTtcclxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBlbGxpcHNlKDgwJSA2MCUgYXQgNTklIDM1JSk7XHJcbiAgICBjbGlwLXBhdGg6IGVsbGlwc2UoODAlIDYwJSBhdCA1MCUgMzclKTtcclxufVxyXG4uaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIyM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ODQyNztcclxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBlbGxpcHNlKDgwJSA2MCUgYXQgNDYlIDM1JSk7XHJcbiAgICBjbGlwLXBhdGg6IGVsbGlwc2UoODAlIDYwJSBhdCA0MiUgMzclKTtcclxufVxyXG4uYmFjazIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NzcxZjtcclxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBlbGxpcHNlKDgwJSA2MSUgYXQgMjklIDM1JSk7XHJcbiAgICBjbGlwLXBhdGg6IGVsbGlwc2UoODAlIDYxJSBhdCAyOSUgMzUlKTtcclxufVxyXG4uY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTI1cHg7XHJcbiAgICBoZWlnaHQ6IDM1JTtcclxuICAgIGxlZnQ6IC00N3B4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjU2ZGVnKTtcclxufVxyXG4ucHJvZmlsZXJvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuLnByb2ZpbGUge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjYzFiZmJmO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4ucHJvZmlsZWltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNwYW5pY24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTNweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTM4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuXHJcbn1cclxuLnRleHQge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NDUpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogLTI0cHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5pY24ge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MzgpO1xyXG4gICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmNhbGVuZGFyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgxKTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi10b3A6IC0yN3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5qb2ludHh0IHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgxKTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcclxufVxyXG4uY2FsZW5kYXIxIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgxKTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5qb2ludHh0MSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4MSk7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XHJcbn1cclxuLmluZm8ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDVweCAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmxpc3Qge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogNXB4IDFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4ucGVyc29ubG9nbyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjb2xvcjogI2Y2ODU0NjtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4ubGJsZGl2IHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi52YWx1ZWRpdiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5iYWRnZWRpdiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VkN2Q1YiwgI2Y5OWQ1OCk7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmlucHV0Ym94e1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JheTtcclxuICAgIC0tcGFkZGluZy1zdGFydDowcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4uYnRuY2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjQ4ZGVnLCAjZjc4YTQ2IDAlLCAjZWU3ODQ4IDM0JSwgI2VhNmI0YSAxMDAlKTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuLmNhbWVyYWljbntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDFweDtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbn1cclxuLmlucHV0aXRlbXBob25le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5zaGllbGRkaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjb2xvcjogYmVpZ2U7XHJcbiAgICBtYXJnaW4tbGVmdDogLTlweDtcclxuICAgIHpvb206IDE7XHJcbn1cclxuLmRvdWJsZWNoZWNraWNue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTNweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTM4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2hlY2ttYXJraWNue1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gICAgbGVmdDogLTZweDtcclxuICAgIGNvbG9yOiAjZjk3NzFmO1xyXG59XHJcbi5mYXZpbWFnZWRpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDoxNDNweDtcclxufVxyXG4ubW9yZXZpZXd7XHJcbiAgICBjb2xvcjogI2Y5NzcxZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59Il19 */");

/***/ }),

/***/ 52907:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div *ngIf=\"config.logindata.id == '0'\">\n    <div class=\"ht_15\"></div>\n    <div class=\"ht_300\"></div>\n    <div class=\"notlogin\">Please Login as the Individual in app</div>\n    <div class=\"ht_5\"></div>\n    <ion-button class=\"loginbtnclass\" (click)=\"login()\">Login</ion-button>\n  </div>\n\n  <div *ngIf=\"config.logindata.id != '0'\">\n    <div class=\"backcolordiv\">\n      <!-- <div class=\"imag\"></div>\n      <div class=\"inner\"></div>\n      <div class=\"back2\"></div>\n      <img class=\"circle\" src=\"assets/image/circle.jpg\"> -->\n      <ion-row class=\"profilerow\">\n        <ion-col size=\"3\">\n          <img src=\"{{Myimage}}\" class=\"profileimg\">\n          <ion-icon *ngIf=\"editprofile == '1'\" name=\"camera\" class=\"cameraicn\" (click)=\"opengallery()\"></ion-icon>\n          <!-- <div class=\"profile\">\n          <ion-icon name=\"person\"></ion-icon>\n        </div> -->\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span *ngIf=\"admin_verified == '1'\" class=\"shielddiv\">\n                <ion-icon name=\"shield-checkmark\"></ion-icon>\n              </span>\n              <span class=\"text\">{{config.logindata.name}}</span>\n            </ion-col>\n            <!-- <ion-col size=\"2\">\n              <ion-icon *ngIf=\"config.logindata.is_verified == '1' && admin_verified == '0'\" name=\"shield-checkmark\" class=\"spanicn\">\n              </ion-icon>\n              <div *ngIf=\"config.logindata.is_verified == '1' && admin_verified == '1'\" class=\"shielddiv\">\n                <ion-icon name=\"shield\" class=\"doublecheckicn\"></ion-icon>\n                <ion-icon name=\"checkmark-done-outline\" class=\"checkmarkicn\"></ion-icon>\n              </div>\n            </ion-col>\n            <ion-col size=\"10\"\n              *ngIf=\"config.logindata.is_verified == '1' && admin_verified == '0' || config.logindata.is_verified == '1' && admin_verified == '1'\">\n              <div class=\"text\">{{config.logindata.user_name}}</div>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"config.logindata.is_verified == '0' && admin_verified == '0'\">\n              <div class=\"text\">{{config.logindata.user_name}}</div>\n            </ion-col> -->\n          </ion-row>\n          <!-- <div class=\"jointxt\"><span>\n              <ion-icon name=\"calendar-outline\"></ion-icon>\n            </span> Joined {{config.logindata.daysago}} days ago</div> -->\n            <br>\n          <div *ngIf=\"type == '2'\" class=\"jointxt1\"><span>\n              <ion-icon name=\"business-outline\"></ion-icon>\n            </span> {{config.logindata.company_name}}</div><br>\n          <!-- <div class=\"jointxt1\"><span> -->\n          <!-- <ion-icon name=\"chatbubbles-outline\"></ion-icon> -->\n          <!-- </span> Responsive</div> -->\n        </ion-col>\n        <ion-col size=\"2\">\n          <!-- <ion-icon name=\"log-out-outline\" class=\"icn\" (click)=\"logout()\"></ion-icon> -->\n          <ion-icon name=\"settings-outline\" class=\"icn\" (click)=\"setting()\"></ion-icon>\n          <!-- <img src=\"assets/image/edit.png\" width=\"30px;\" (click)=\"edit('1')\"> -->\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class=\"ht_15\"></div>\n    <ion-row style=\"width: 90%;\">\n      <ion-col class=\"ion-no-padding\" size=\"3\">\n        <div [ngClass]=\"(tabactive == '1')?'info':'list'\" (click)=\"slecttab('1')\">Info</div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"5\">\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <div [ngClass]=\"(tabactive == '2')?'info':'list'\" (click)=\"slecttab('2')\">Listing</div>\n          </ion-col>\n          <ion-col *ngIf=\"badgelisting\" class=\"ion-no-padding\">\n            <ion-badge class=\"badgediv\">{{badgelisting}}</ion-badge>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"4\">\n        <div [ngClass]=\"(tabactive == '3')?'info':'list'\" (click)=\"slecttab('3')\">My Likes</div>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf=\"tabactive == '1'\">\n      <div class=\"ht_10\"></div>\n      <div *ngIf=\"is_switch == '0'\">\n        <ion-row class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"person-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">User Name</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.user_name}}</div>\n            <ion-input *ngIf=\"editprofile == '1'\" [(ngModel)]=\"uname\" class=\"inputbox\"></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"ht_10\"></div>\n        <ion-row class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"mail-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Email</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.email}}</div>\n            <ion-input *ngIf=\"editprofile == '1'\" [(ngModel)]=\"email\" class=\"inputbox\"></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"ht_10\"></div>\n        <ion-row class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"phone-portrait-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Phone Number</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.phone_number}}</div>\n            <ion-input type=\"number\" (keypress)=\"enterprice($event)\" *ngIf=\"editprofile == '1'\" [(ngModel)]=\"phone\"\n              class=\"inputbox\"></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"ht_10\"></div>\n        <ion-row class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"calendar-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Date of Birth</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.dob}}</div>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"ht_10\"></div>\n        <ion-row class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"location-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Country</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.country}}</div>\n          </ion-col>\n        </ion-row>\n\n        <!-- <div *ngIf=\"type == '1'\"  class=\"ht_10\"></div>\n        <ion-row *ngIf=\"type == '1'\" class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"person-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Description</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.company_name}}</div>\n            <ion-input *ngIf=\"editprofile == '1'\" [(ngModel)]=\"c_description\" class=\"inputbox\"></ion-input>\n          </ion-col>\n        </ion-row> -->\n\n        <div *ngIf=\"type == '2'\" class=\"ht_10\"></div>\n        <ion-row *ngIf=\"type == '2'\" class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"business-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Company Name</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.company_name}}</div>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf=\"type == '2'\" class=\"ht_10\"></div>\n        <ion-row *ngIf=\"type == '2'\" class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"business-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Company Registration Number</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.company_registration_number}}</div>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf=\"type == '2'\" class=\"ht_10\"></div>\n        <ion-row *ngIf=\"type == '2'\" class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"person-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Company Description</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.company_description}}</div>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf=\"type == '2'\" class=\"ht_10\"></div>\n        <ion-row *ngIf=\"type == '2'\" class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"location-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Company Address</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.company_address}}</div>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf=\"type == '2'\" class=\"ht_10\"></div>\n        <ion-row *ngIf=\"type == '2'\" class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"globe-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Company Website</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.company_website}}</div>\n          </ion-col>\n        </ion-row>\n        \n        <div *ngIf=\"type == '2'\" class=\"ht_10\"></div>\n        <ion-row *ngIf=\"type == '2'\" class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"phone-portrait-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Company Phone Number</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.company_phone}}</div>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf=\"type == '2'\" class=\"ht_10\"></div>\n        <ion-row *ngIf=\"type == '2'\" class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"mail-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Company Email</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.company_email}}</div>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf=\"type == '2'\" class=\"ht_10\"></div>\n        <ion-row *ngIf=\"type == '2'\" class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"business-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Company Type</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.company_type}}</div>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf=\"type == '2'\" class=\"ht_10\"></div>\n        <ion-row *ngIf=\"type == '2'\" class=\"row_90\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"business-outline\" class=\"personlogo\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Nature of Business</div>\n            <div *ngIf=\"editprofile == '0'\" class=\"valuediv\">{{config.logindata.nature_of_business}}</div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"editprofile == '1' && type == '1'\" class=\"row_90\">\n          <ion-col size=\"10\">\n            <div class=\"lbldiv\">Switch To Business Account</div>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-toggle [(ngModel)]=\"switch\" (ionChange)=\"changetobusiness()\"></ion-toggle>\n          </ion-col>\n        </ion-row>\n\n        <!-- <div class=\"ht_10\"></div>\n        <div *ngIf=\"viewmore == '0' && editprofile == '0'\" class=\"moreview\" (click)=\"more('1')\">View More</div>\n        <div *ngIf=\"viewmore == '1' && editprofile == '0'\" class=\"moreview\" (click)=\"more('0')\">View Less</div> -->\n\n\n      </div>\n\n      <div class=\"ht_10\"></div>\n      <div *ngIf=\"is_switch == '1' && type == '1'\">\n        <div class=\"ht_15\"></div>\n        <div class=\"labeldiv\">Company Name</div>\n        <ion-item class=\"inputitem\">\n          <ion-input type=\"text\" [(ngModel)]=\"c_name\" placeholder=\"Enter Company name\"></ion-input>\n          <ion-icon slot=\"end\" name=\"business-outline\" class=\"logoicn\"></ion-icon>\n        </ion-item>\n\n        <div class=\"ht_15\"></div>\n        <div class=\"labeldiv\">Company Address</div>\n        <ion-item class=\"inputitem\">\n          <ion-input type=\"text\" [(ngModel)]=\"c_address\" placeholder=\"Enter company address\"></ion-input>\n          <ion-icon slot=\"end\" name=\"location-outline\" class=\"logoicn\"></ion-icon>\n        </ion-item>\n\n        <div class=\"ht_15\"></div>\n        <div class=\"labeldiv\">Company Phone Number</div>\n        <ion-item class=\"inputitem\">\n          <div class=\"countrycode\">{{companycountrycode}}</div>\n          <ion-input type=\"number\" (keypress)=\"enterprice($event)\" [(ngModel)]=\"c_phone\"\n            placeholder=\"Enter company phone number\"></ion-input>\n          <ion-icon slot=\"end\" name=\"phone-portrait-outline\" class=\"logoicn\"></ion-icon>\n        </ion-item>\n\n        <div class=\"ht_15\"></div>\n        <div class=\"labeldiv\">Company Email</div>\n        <ion-item class=\"inputitem\">\n          <ion-input type=\"email\" [(ngModel)]=\"c_email\" placeholder=\"Enter the company email\"></ion-input>\n          <ion-icon slot=\"end\" name=\"mail-outline\" class=\"logoicn\"></ion-icon>\n        </ion-item>\n\n        <div class=\"ht_15\"></div>\n        <div class=\"labeldiv\">Company Type</div>\n        <ion-item class=\"inputitem\">\n          <ion-select mode=\"md\" [(ngModel)]=\"c_type\" (ionChange)=\"selecttype()\" placeholder=\"Select the company type\">\n            <ion-select-option>Supplier</ion-select-option>\n            <ion-select-option>Contractor</ion-select-option>\n            <ion-select-option>Design & Engineering Consultancy</ion-select-option>\n            <ion-select-option>Manufacturer</ion-select-option>\n            <ion-select-option>Service Provider</ion-select-option>\n          </ion-select>\n          <ion-icon slot=\"end\" name=\"caret-down-outline\"></ion-icon>\n        </ion-item>\n        <div class=\"ht_15\"></div>\n\n        <div class=\"labeldiv\">Nature of Business</div>\n        <ion-item class=\"inputitem\">\n          <ion-select multiple=\"true\" [(ngModel)]=\"nature\" placeholder=\"Select nature of Business\">\n            <ion-select-option *ngFor=\"let n of nature_of_business\">{{n}}</ion-select-option>\n          </ion-select>\n          <ion-icon slot=\"end\" name=\"briefcase-outline\" class=\"logoicn\"></ion-icon>\n        </ion-item>\n\n        <div class=\"ht_15\"></div>\n        <div class=\"labeldiv\">Company Description</div>\n        <ion-item class=\"inputitem\">\n          <ion-input type=\"text\" [(ngModel)]=\"c_description\" placeholder=\"Enter the company description\"></ion-input>\n          <ion-icon slot=\"end\" name=\"person-outline\" class=\"logoicn\"></ion-icon>\n        </ion-item>\n        <div class=\"ht_25\"></div>\n      </div>\n\n      <div class=\"ht_10\"></div>\n      <ion-button *ngIf=\"editprofile == '1'\" class=\"btnclass\" (click)=\"save()\">Save</ion-button>\n    </div>\n\n    <div *ngIf=\"tabactive == '2'\">\n      <div class=\"ht_20\"></div>\n      <ion-row class=\"row_95\">\n        <ion-col size=\"6\" *ngFor=\"let list of alllisting;let i = index;\">\n          <ion-card class=\"card\">\n            <div class=\"imagediv\" (click)=\"gomylist(i,'1')\">\n              <img src=\"{{list.image}}\" class=\"cuter\">\n              <div *ngIf=\"list.status == '0'\" class=\"closediv\">Listing Closed</div>\n            </div>\n            <div class=\"pvnwc towlines\" (click)=\"gomylist(i,'1')\">{{list.name}}</div>\n            <div class=\"ht_10\"></div>\n            <ion-row (click)=\"gomylist(i,'1')\">\n              <ion-col class=\"ion-no-padding\">\n                <ion-row>\n                  <ion-col size=\"2\" class=\"ion-no-padding\">\n                    <ion-icon name=\"time-outline\" class=\"clockicn\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"10\" class=\"ion-no-padding\">\n                    <div class=\"clocktxt\">{{list.days_ago}}</div>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col class=\"ion-no-padding\">\n                <ion-row>\n                  <ion-col size=\"2\" class=\"ion-no-padding\">\n                    <ion-icon name=\"location-outline\" class=\"clockicn\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"10\" class=\"ion-no-padding\">\n                    <div class=\"clocktxt towlines\">{{list.country}}</div>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n            <ion-row  (click)=\"gomylist(i,'1')\">\n              <ion-col class=\"ion-no-padding\">\n                <ion-row>\n                  <ion-col size=\"2\" class=\"ion-no-padding\">\n                    <ion-icon name=\"globe-outline\" class=\"clockicn\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"10\" class=\"ion-no-padding\">\n                    <div style=\"height: 28px;\" class=\"clocktxt\">{{list.type}}</div>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col class=\"ion-no-padding\">\n                <ion-row>\n                  <ion-col size=\"2\" class=\"ion-no-padding\">\n                    <ion-icon name=\"receipt-outline\" class=\"clockicn\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"10\" class=\"ion-no-padding\">\n                    <div class=\"clocktxt\">{{list.is_new}}</div>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\" class=\"ion-no-padding\">\n                <div class=\"pricediv\">{{list.currency}}{{showprice(list.price)}}</div>\n              </ion-col>\n              <ion-col size=\"3\" style=\"text-align: right;\" class=\"ion-no-padding\">\n                <ion-icon [name]=\"(list.is_liked == '1')?'heart':'heart-outline'\" class=\"filllike\" (click)=\"addfavorite(list.id,i)\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf=\"tabactive == '3'\">\n      <div *ngIf=\"!favorite\">\n        <div class=\"nodata\">No Favourites Added</div>\n      </div>\n      <div *ngIf=\"favorite\">\n        <div class=\"ht_20\"></div>\n        <ion-row class=\"row_95\">\n          <ion-col size=\"6\" *ngFor=\"let fav of favorite;let i = index\" (click)=\"gomylist(i,'2')\">\n            <ion-card class=\"card\">\n              <div class=\"imagediv\">\n                <img src=\"{{fav.image}}\" class=\"cuter\">\n              </div>\n              <div class=\"pvnwc towlines\">{{fav.name}}</div>\n              <div class=\"ht_5\"></div>\n              <ion-row>\n                <ion-col class=\"ion-no-padding\">\n                  <ion-row>\n                    <ion-col size=\"2\" class=\"ion-no-padding\">\n                      <ion-icon name=\"time-outline\" class=\"clockicn\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"10\" class=\"ion-no-padding\">\n                      <div class=\"clocktxt\">{{fav.days_ago}}</div>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n                <ion-col class=\"ion-no-padding\">\n                  <ion-row>\n                    <ion-col size=\"2\" class=\"ion-no-padding\">\n                      <ion-icon name=\"location-outline\" class=\"clockicn\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"10\" class=\"ion-no-padding\">\n                      <div class=\"clocktxt towlines\">{{fav.country}}</div>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"ion-no-padding\">\n                  <ion-row>\n                    <ion-col size=\"2\" class=\"ion-no-padding\">\n                      <ion-icon name=\"globe-outline\" class=\"clockicn\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"10\" class=\"ion-no-padding\">\n                      <div style=\"height: 28px;\" class=\"clocktxt\">{{fav.type}}</div>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n                <ion-col class=\"ion-no-padding\">\n                  <ion-row>\n                    <ion-col size=\"2\" class=\"ion-no-padding\">\n                      <ion-icon name=\"receipt-outline\" class=\"clockicn\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"10\" class=\"ion-no-padding\">\n                      <div class=\"clocktxt\">{{fav.is_new}}</div>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"9\" class=\"ion-no-padding\">\n                  <div class=\"pricediv\">{{fav.currency}}{{showprice(fav.price)}}</div>\n                </ion-col>\n                <ion-col size=\"3\" style=\"text-align: right;\" class=\"ion-no-padding\">\n                  <ion-icon name=\"heart\" class=\"filllike\" (click)=\"removefavorite(fav.id)\"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div class=\"ht_65\"></div>\n    <!-- <div class=\"fabdiv\" (click)=\"addlist()\">\n      <ion-icon name=\"add\" style=\"font-size: 50px;\"></ion-icon>\n    </div> -->\n  </div>\n  <!-- <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" class=\"addfab\" (click)=\"addlist()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\" style=\"font-size: 50px;\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n</ion-content>\n<ion-footer>\n  <div class=\"ht_5\"></div>\n  <ion-row class=\"row_95 footerrow\">\n    <ion-col (click)=\"home()\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-col>\n    <ion-col (click)=\"list()\">\n      <ion-icon name=\"list-outline\"></ion-icon>\n    </ion-col>\n    <ion-col (click)=\"chat()\">\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.counter > 0\" class=\"showbagde\">{{config.counter}}</ion-badge>\n    </ion-col>\n    <ion-col (click)=\"notification()\">\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n      <ion-badge *ngIf=\"config.get_badge > 0\" class=\"showbagde\">{{config.get_badge}}</ion-badge>\n    </ion-col>\n    <ion-col>\n      <ion-icon name=\"person\" class=\"selecttab\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map