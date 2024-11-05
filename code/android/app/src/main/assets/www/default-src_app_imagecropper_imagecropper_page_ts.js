(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["default-src_app_imagecropper_imagecropper_page_ts"],{

/***/ 14306:
/*!***************************************************!*\
  !*** ./src/app/imagecropper/imagecropper.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagecropperPage": () => (/* binding */ ImagecropperPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_imagecropper_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./imagecropper.page.html */ 66439);
/* harmony import */ var _imagecropper_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imagecropper.page.scss */ 91247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 45103);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 61281);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-cropper */ 42945);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader.service */ 22150);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 85087);










let ImagecropperPage = class ImagecropperPage {
    constructor(navparams, camera, alert, transfer, modalctrl) {
        this.navparams = navparams;
        this.camera = camera;
        this.alert = alert;
        this.transfer = transfer;
        this.modalctrl = modalctrl;
        this.sourcetype = this.navparams.get('source');
        this.imgid = this.navparams.get('image_id');
        console.log(this.sourcetype);
        console.log(this.imgid);
    }
    ngOnInit() {
        console.log('imagecropper page');
        this.pickImage();
    }
    pickImage() {
        const options = {
            quality: 100,
            sourceType: this.sourcetype,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            cameraDirection: 1,
        };
        this.alert.showLoader();
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/png;base64,' + imageData;
            this.picture = base64Image;
            console.log(this.picture);
            // this.upload(this.picture);
            this.convertFileToDataURLviaFileReader(this.picture).subscribe(base64 => {
                this.cropImage = base64;
            });
        }, (err) => {
            console.log(err);
        });
    }
    convertFileToDataURLviaFileReader(url) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                let reader = new FileReader();
                reader.onloadend = function () {
                    observer.next(reader.result);
                    observer.complete();
                };
                reader.readAsDataURL(xhr.response);
            };
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.send();
        });
    }
    imageCropped(event) {
        this.alert.dissmissLoader();
        this.croppedimage = event.base64;
    }
    save() {
        this.angularCropper.crop();
        // this.alert.showLoader();
        this.modalctrl.dismiss({ 'image': this.croppedimage, 'imageid': this.imgid });
        // this.upload(this.croppedimage)
    }
    clear() {
        this.modalctrl.dismiss();
        this.angularCropper.imageBase64 = null;
        this.Myimage = null;
        this.cropImage = null;
    }
};
ImagecropperPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__.FileTransfer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
ImagecropperPage.propDecorators = {
    angularCropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__.ImageCropperComponent, { static: false },] }]
};
ImagecropperPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-imagecropper',
        template: _raw_loader_imagecropper_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_imagecropper_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImagecropperPage);



/***/ }),

/***/ 42945:
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/fesm2020/ngx-image-cropper.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropService": () => (/* binding */ CropService),
/* harmony export */   "ImageCropperComponent": () => (/* binding */ ImageCropperComponent),
/* harmony export */   "ImageCropperModule": () => (/* binding */ ImageCropperModule),
/* harmony export */   "base64ToFile": () => (/* binding */ base64ToFile),
/* harmony export */   "resizeCanvas": () => (/* binding */ resizeCanvas)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 93220);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 16274);





const _c0 = ["wrapper"];
const _c1 = ["sourceImage"];

function ImageCropperComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageCropperComponent_img_2_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.imageLoadedInView();
    })("mousedown", function ImageCropperComponent_img_2_Template_img_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r6.startMove($event, ctx_r6.moveTypes.Drag);
    })("touchstart", function ImageCropperComponent_img_2_Template_img_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r7.startMove($event, ctx_r7.moveTypes.Drag);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r1.imageVisible ? "visible" : "hidden")("transform", ctx_r1.safeTransformStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-ic-draggable", !ctx_r1.disabled && ctx_r1.allowMoveImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.safeImgDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}

function ImageCropperComponent_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r9.startMove($event, ctx_r9.moveTypes.Resize, "topleft");
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r11.startMove($event, ctx_r11.moveTypes.Resize, "topleft");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r12.startMove($event, ctx_r12.moveTypes.Resize, "topright");
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r13.startMove($event, ctx_r13.moveTypes.Resize, "topright");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r14.startMove($event, ctx_r14.moveTypes.Resize, "bottomright");
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r15.startMove($event, ctx_r15.moveTypes.Resize, "bottomright");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r16.startMove($event, ctx_r16.moveTypes.Resize, "bottomleft");
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r17.startMove($event, ctx_r17.moveTypes.Resize, "bottomleft");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r18.startMove($event, ctx_r18.moveTypes.Resize, "top");
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r19.startMove($event, ctx_r19.moveTypes.Resize, "top");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r20.startMove($event, ctx_r20.moveTypes.Resize, "right");
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r21.startMove($event, ctx_r21.moveTypes.Resize, "right");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r22.startMove($event, ctx_r22.moveTypes.Resize, "bottom");
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r23.startMove($event, ctx_r23.moveTypes.Resize, "bottom");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r24.startMove($event, ctx_r24.moveTypes.Resize, "left");
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r25.startMove($event, ctx_r25.moveTypes.Resize, "left");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}

function ImageCropperComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ImageCropperComponent_div_4_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r26.keyboardAccess($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_Template_div_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r28.startMove($event, ctx_r28.moveTypes.Move);
    })("touchstart", function ImageCropperComponent_div_4_Template_div_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r29.startMove($event, ctx_r29.moveTypes.Move);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageCropperComponent_div_4_ng_container_2_Template, 21, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r2.cropper.y1, "px")("left", ctx_r2.cropper.x1, "px")("width", ctx_r2.cropper.x2 - ctx_r2.cropper.x1, "px")("height", ctx_r2.cropper.y2 - ctx_r2.cropper.y1, "px")("margin-left", ctx_r2.alignImage === "center" ? ctx_r2.marginLeft : null)("visibility", ctx_r2.imageVisible ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-ic-round", ctx_r2.roundCropper);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.hideResizeSquares);
  }
}

class CropperSettings {
  constructor() {
    // From options
    this.format = 'png';
    this.maintainAspectRatio = true;
    this.transform = {};
    this.aspectRatio = 1;
    this.resizeToWidth = 0;
    this.resizeToHeight = 0;
    this.cropperMinWidth = 0;
    this.cropperMinHeight = 0;
    this.cropperMaxHeight = 0;
    this.cropperMaxWidth = 0;
    this.cropperStaticWidth = 0;
    this.cropperStaticHeight = 0;
    this.canvasRotation = 0;
    this.initialStepSize = 3;
    this.roundCropper = false;
    this.onlyScaleDown = false;
    this.imageQuality = 92;
    this.autoCrop = true;
    this.backgroundColor = null;
    this.containWithinAspectRatio = false;
    this.hideResizeSquares = false;
    this.alignImage = 'center'; // Internal

    this.cropperScaledMinWidth = 20;
    this.cropperScaledMinHeight = 20;
    this.cropperScaledMaxWidth = 20;
    this.cropperScaledMaxHeight = 20;
    this.stepSize = this.initialStepSize;
  }

  setOptions(options) {
    Object.keys(options).filter(k => k in this).forEach(k => this[k] = options[k]);
    this.validateOptions();
  }

  setOptionsFromChanges(changes) {
    Object.keys(changes).filter(k => k in this).forEach(k => this[k] = changes[k].currentValue);
    this.validateOptions();
  }

  validateOptions() {
    if (this.maintainAspectRatio && !this.aspectRatio) {
      throw new Error('`aspectRatio` should > 0 when `maintainAspectRatio` is enabled');
    }
  }

}

var MoveTypes;

(function (MoveTypes) {
  MoveTypes["Drag"] = "drag";
  MoveTypes["Move"] = "move";
  MoveTypes["Resize"] = "resize";
  MoveTypes["Pinch"] = "pinch";
})(MoveTypes || (MoveTypes = {}));

function getPositionForKey(key) {
  switch (key) {
    case 'ArrowUp':
      return 'top';

    case 'ArrowRight':
      return 'right';

    case 'ArrowDown':
      return 'bottom';

    case 'ArrowLeft':
    default:
      return 'left';
  }
}

function getInvertedPositionForKey(key) {
  switch (key) {
    case 'ArrowUp':
      return 'bottom';

    case 'ArrowRight':
      return 'left';

    case 'ArrowDown':
      return 'top';

    case 'ArrowLeft':
    default:
      return 'right';
  }
}

function getEventForKey(key, stepSize) {
  switch (key) {
    case 'ArrowUp':
      return {
        clientX: 0,
        clientY: stepSize * -1
      };

    case 'ArrowRight':
      return {
        clientX: stepSize,
        clientY: 0
      };

    case 'ArrowDown':
      return {
        clientX: 0,
        clientY: stepSize
      };

    case 'ArrowLeft':
    default:
      return {
        clientX: stepSize * -1,
        clientY: 0
      };
  }
}
/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */


function resizeCanvas(canvas, width, height) {
  const width_source = canvas.width;
  const height_source = canvas.height;
  width = Math.round(width);
  height = Math.round(height);
  const ratio_w = width_source / width;
  const ratio_h = height_source / height;
  const ratio_w_half = Math.ceil(ratio_w / 2);
  const ratio_h_half = Math.ceil(ratio_h / 2);
  const ctx = canvas.getContext('2d');

  if (ctx) {
    const img = ctx.getImageData(0, 0, width_source, height_source);
    const img2 = ctx.createImageData(width, height);
    const data = img.data;
    const data2 = img2.data;

    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        const x2 = (i + j * width) * 4;
        const center_y = j * ratio_h;
        let weight = 0;
        let weights = 0;
        let weights_alpha = 0;
        let gx_r = 0;
        let gx_g = 0;
        let gx_b = 0;
        let gx_a = 0;
        const xx_start = Math.floor(i * ratio_w);
        const yy_start = Math.floor(j * ratio_h);
        let xx_stop = Math.ceil((i + 1) * ratio_w);
        let yy_stop = Math.ceil((j + 1) * ratio_h);
        xx_stop = Math.min(xx_stop, width_source);
        yy_stop = Math.min(yy_stop, height_source);

        for (let yy = yy_start; yy < yy_stop; yy++) {
          const dy = Math.abs(center_y - yy) / ratio_h_half;
          const center_x = i * ratio_w;
          const w0 = dy * dy; //pre-calc part of w

          for (let xx = xx_start; xx < xx_stop; xx++) {
            const dx = Math.abs(center_x - xx) / ratio_w_half;
            const w = Math.sqrt(w0 + dx * dx);

            if (w >= 1) {
              //pixel too far
              continue;
            } //hermite filter


            weight = 2 * w * w * w - 3 * w * w + 1;
            const pos_x = 4 * (xx + yy * width_source); //alpha

            gx_a += weight * data[pos_x + 3];
            weights_alpha += weight; //colors

            if (data[pos_x + 3] < 255) weight = weight * data[pos_x + 3] / 250;
            gx_r += weight * data[pos_x];
            gx_g += weight * data[pos_x + 1];
            gx_b += weight * data[pos_x + 2];
            weights += weight;
          }
        }

        data2[x2] = gx_r / weights;
        data2[x2 + 1] = gx_g / weights;
        data2[x2 + 2] = gx_b / weights;
        data2[x2 + 3] = gx_a / weights_alpha;
      }
    }

    canvas.width = width;
    canvas.height = height; //draw

    ctx.putImageData(img2, 0, 0);
  }
}

function percentage(percent, totalValue) {
  return percent / 100 * totalValue;
}

class CropService {
  crop(sourceImage, loadedImage, cropper, settings) {
    const imagePosition = this.getImagePosition(sourceImage, loadedImage, cropper, settings);
    const width = imagePosition.x2 - imagePosition.x1;
    const height = imagePosition.y2 - imagePosition.y1;
    const cropCanvas = document.createElement('canvas');
    cropCanvas.width = width;
    cropCanvas.height = height;
    const ctx = cropCanvas.getContext('2d');

    if (!ctx) {
      return null;
    }

    if (settings.backgroundColor != null) {
      ctx.fillStyle = settings.backgroundColor;
      ctx.fillRect(0, 0, width, height);
    }

    const scaleX = (settings.transform.scale || 1) * (settings.transform.flipH ? -1 : 1);
    const scaleY = (settings.transform.scale || 1) * (settings.transform.flipV ? -1 : 1);
    const transformedImage = loadedImage.transformed;
    ctx.setTransform(scaleX, 0, 0, scaleY, transformedImage.size.width / 2, transformedImage.size.height / 2);
    ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
    ctx.rotate((settings.transform.rotate || 0) * Math.PI / 180);
    const {
      translateH,
      translateV
    } = this.getCanvasTranslate(sourceImage, loadedImage, settings);
    ctx.drawImage(transformedImage.image, translateH - transformedImage.size.width / 2, translateV - transformedImage.size.height / 2);
    const output = {
      width,
      height,
      imagePosition,
      cropperPosition: { ...cropper
      }
    };

    if (settings.containWithinAspectRatio) {
      output.offsetImagePosition = this.getOffsetImagePosition(sourceImage, loadedImage, cropper, settings);
    }

    const resizeRatio = this.getResizeRatio(width, height, settings);

    if (resizeRatio !== 1) {
      output.width = Math.round(width * resizeRatio);
      output.height = settings.maintainAspectRatio ? Math.round(output.width / settings.aspectRatio) : Math.round(height * resizeRatio);
      resizeCanvas(cropCanvas, output.width, output.height);
    }

    output.base64 = cropCanvas.toDataURL('image/' + settings.format, this.getQuality(settings));
    return output;
  }

  getCanvasTranslate(sourceImage, loadedImage, settings) {
    if (settings.transform.translateUnit === 'px') {
      const ratio = this.getRatio(sourceImage, loadedImage);
      return {
        translateH: (settings.transform.translateH || 0) * ratio,
        translateV: (settings.transform.translateV || 0) * ratio
      };
    } else {
      return {
        translateH: settings.transform.translateH ? percentage(settings.transform.translateH, loadedImage.transformed.size.width) : 0,
        translateV: settings.transform.translateV ? percentage(settings.transform.translateV, loadedImage.transformed.size.height) : 0
      };
    }
  }

  getRatio(sourceImage, loadedImage) {
    const sourceImageElement = sourceImage.nativeElement;
    return loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
  }

  getImagePosition(sourceImage, loadedImage, cropper, settings) {
    const ratio = this.getRatio(sourceImage, loadedImage);
    const out = {
      x1: Math.round(cropper.x1 * ratio),
      y1: Math.round(cropper.y1 * ratio),
      x2: Math.round(cropper.x2 * ratio),
      y2: Math.round(cropper.y2 * ratio)
    };

    if (!settings.containWithinAspectRatio) {
      out.x1 = Math.max(out.x1, 0);
      out.y1 = Math.max(out.y1, 0);
      out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
      out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
    }

    return out;
  }

  getOffsetImagePosition(sourceImage, loadedImage, cropper, settings) {
    const canvasRotation = settings.canvasRotation + loadedImage.exifTransform.rotate;
    const sourceImageElement = sourceImage.nativeElement;
    const ratio = loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
    let offsetX;
    let offsetY;

    if (canvasRotation % 2) {
      offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.height) / 2;
      offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.width) / 2;
    } else {
      offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.width) / 2;
      offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.height) / 2;
    }

    const out = {
      x1: Math.round(cropper.x1 * ratio) - offsetX,
      y1: Math.round(cropper.y1 * ratio) - offsetY,
      x2: Math.round(cropper.x2 * ratio) - offsetX,
      y2: Math.round(cropper.y2 * ratio) - offsetY
    };

    if (!settings.containWithinAspectRatio) {
      out.x1 = Math.max(out.x1, 0);
      out.y1 = Math.max(out.y1, 0);
      out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
      out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
    }

    return out;
  }

  getResizeRatio(width, height, settings) {
    const ratioWidth = settings.resizeToWidth / width;
    const ratioHeight = settings.resizeToHeight / height;
    const ratios = new Array();

    if (settings.resizeToWidth > 0) {
      ratios.push(ratioWidth);
    }

    if (settings.resizeToHeight > 0) {
      ratios.push(ratioHeight);
    }

    const result = ratios.length === 0 ? 1 : Math.min(...ratios);

    if (result > 1 && !settings.onlyScaleDown) {
      return result;
    }

    return Math.min(result, 1);
  }

  getQuality(settings) {
    return Math.min(1, Math.max(0, settings.imageQuality / 100));
  }

}

CropService.ɵfac = function CropService_Factory(t) {
  return new (t || CropService)();
};

CropService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CropService,
  factory: CropService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class CropperPositionService {
  resetCropperPosition(sourceImage, cropperPosition, settings) {
    if (!sourceImage?.nativeElement) {
      return;
    }

    const sourceImageElement = sourceImage.nativeElement;

    if (settings.cropperStaticHeight && settings.cropperStaticWidth) {
      cropperPosition.x1 = 0;
      cropperPosition.x2 = sourceImageElement.offsetWidth > settings.cropperStaticWidth ? settings.cropperStaticWidth : sourceImageElement.offsetWidth;
      cropperPosition.y1 = 0;
      cropperPosition.y2 = sourceImageElement.offsetHeight > settings.cropperStaticHeight ? settings.cropperStaticHeight : sourceImageElement.offsetHeight;
    } else {
      const cropperWidth = Math.min(settings.cropperScaledMaxWidth, sourceImageElement.offsetWidth);
      const cropperHeight = Math.min(settings.cropperScaledMaxHeight, sourceImageElement.offsetHeight);

      if (!settings.maintainAspectRatio) {
        cropperPosition.x1 = 0;
        cropperPosition.x2 = cropperWidth;
        cropperPosition.y1 = 0;
        cropperPosition.y2 = cropperHeight;
      } else if (sourceImageElement.offsetWidth / settings.aspectRatio < sourceImageElement.offsetHeight) {
        cropperPosition.x1 = 0;
        cropperPosition.x2 = cropperWidth;
        const cropperHeightWithAspectRatio = cropperWidth / settings.aspectRatio;
        cropperPosition.y1 = (sourceImageElement.offsetHeight - cropperHeightWithAspectRatio) / 2;
        cropperPosition.y2 = cropperPosition.y1 + cropperHeightWithAspectRatio;
      } else {
        cropperPosition.y1 = 0;
        cropperPosition.y2 = cropperHeight;
        const cropperWidthWithAspectRatio = cropperHeight * settings.aspectRatio;
        cropperPosition.x1 = (sourceImageElement.offsetWidth - cropperWidthWithAspectRatio) / 2;
        cropperPosition.x2 = cropperPosition.x1 + cropperWidthWithAspectRatio;
      }
    }
  }

  move(event, moveStart, cropperPosition) {
    const diffX = this.getClientX(event) - moveStart.clientX;
    const diffY = this.getClientY(event) - moveStart.clientY;
    cropperPosition.x1 = moveStart.x1 + diffX;
    cropperPosition.y1 = moveStart.y1 + diffY;
    cropperPosition.x2 = moveStart.x2 + diffX;
    cropperPosition.y2 = moveStart.y2 + diffY;
  }

  resize(event, moveStart, cropperPosition, maxSize, settings) {
    const moveX = this.getClientX(event) - moveStart.clientX;
    const moveY = this.getClientY(event) - moveStart.clientY;

    switch (moveStart.position) {
      case 'left':
        cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
        break;

      case 'topleft':
        cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
        cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
        break;

      case 'top':
        cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
        break;

      case 'topright':
        cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
        cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
        break;

      case 'right':
        cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
        break;

      case 'bottomright':
        cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
        cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
        break;

      case 'bottom':
        cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
        break;

      case 'bottomleft':
        cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
        cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
        break;

      case 'center':
        const scale = event.scale;
        const newWidth = Math.min(Math.max(settings.cropperScaledMinWidth, Math.abs(moveStart.x2 - moveStart.x1) * scale), settings.cropperScaledMaxWidth);
        const newHeight = Math.min(Math.max(settings.cropperScaledMinHeight, Math.abs(moveStart.y2 - moveStart.y1) * scale), settings.cropperScaledMaxHeight);
        cropperPosition.x1 = moveStart.clientX - newWidth / 2;
        cropperPosition.x2 = moveStart.clientX + newWidth / 2;
        cropperPosition.y1 = moveStart.clientY - newHeight / 2;
        cropperPosition.y2 = moveStart.clientY + newHeight / 2;

        if (cropperPosition.x1 < 0) {
          cropperPosition.x2 -= cropperPosition.x1;
          cropperPosition.x1 = 0;
        } else if (cropperPosition.x2 > maxSize.width) {
          cropperPosition.x1 -= cropperPosition.x2 - maxSize.width;
          cropperPosition.x2 = maxSize.width;
        }

        if (cropperPosition.y1 < 0) {
          cropperPosition.y2 -= cropperPosition.y1;
          cropperPosition.y1 = 0;
        } else if (cropperPosition.y2 > maxSize.height) {
          cropperPosition.y1 -= cropperPosition.y2 - maxSize.height;
          cropperPosition.y2 = maxSize.height;
        }

        break;
    }

    if (settings.maintainAspectRatio) {
      this.checkAspectRatio(moveStart.position, cropperPosition, maxSize, settings);
    }
  }

  checkAspectRatio(position, cropperPosition, maxSize, settings) {
    let overflowX = 0;
    let overflowY = 0;

    switch (position) {
      case 'top':
        cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(0 - cropperPosition.y1, 0);

        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }

        break;

      case 'bottom':
        cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);

        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }

        break;

      case 'topleft':
        cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(0 - cropperPosition.x1, 0);
        overflowY = Math.max(0 - cropperPosition.y1, 0);

        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x1 += overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }

        break;

      case 'topright':
        cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(0 - cropperPosition.y1, 0);

        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }

        break;

      case 'right':
      case 'bottomright':
        cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);

        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }

        break;

      case 'left':
      case 'bottomleft':
        cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(0 - cropperPosition.x1, 0);
        overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);

        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x1 += overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }

        break;

      case 'center':
        cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
        cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        const overflowX1 = Math.max(0 - cropperPosition.x1, 0);
        const overflowX2 = Math.max(cropperPosition.x2 - maxSize.width, 0);
        const overflowY1 = Math.max(cropperPosition.y2 - maxSize.height, 0);
        const overflowY2 = Math.max(0 - cropperPosition.y1, 0);

        if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
          cropperPosition.x1 += overflowY1 * settings.aspectRatio > overflowX1 ? overflowY1 * settings.aspectRatio : overflowX1;
          cropperPosition.x2 -= overflowY2 * settings.aspectRatio > overflowX2 ? overflowY2 * settings.aspectRatio : overflowX2;
          cropperPosition.y1 += overflowY2 * settings.aspectRatio > overflowX2 ? overflowY2 : overflowX2 / settings.aspectRatio;
          cropperPosition.y2 -= overflowY1 * settings.aspectRatio > overflowX1 ? overflowY1 : overflowX1 / settings.aspectRatio;
        }

        break;
    }
  }

  getClientX(event) {
    return event.touches?.[0].clientX || event.clientX || 0;
  }

  getClientY(event) {
    return event.touches?.[0].clientY || event.clientY || 0;
  }

}

CropperPositionService.ɵfac = function CropperPositionService_Factory(t) {
  return new (t || CropperPositionService)();
};

CropperPositionService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CropperPositionService,
  factory: CropperPositionService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropperPositionService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})(); // Black 2x1 JPEG, with the following meta information set:
// - EXIF Orientation: 6 (Rotated 90° CCW)
// Source: https://github.com/blueimp/JavaScript-Load-Image


const testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' + 'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' + 'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' + 'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' + 'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' + 'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';

function supportsAutomaticRotation() {
  return new Promise(resolve => {
    const img = new Image();

    img.onload = () => {
      // Check if browser supports automatic image orientation:
      const supported = img.width === 1 && img.height === 2;
      resolve(supported);
    };

    img.src = testAutoOrientationImageURL;
  });
}

function getTransformationsFromExifData(exifRotationOrBase64Image) {
  if (typeof exifRotationOrBase64Image === 'string') {
    exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
  }

  switch (exifRotationOrBase64Image) {
    case 2:
      return {
        rotate: 0,
        flip: true
      };

    case 3:
      return {
        rotate: 2,
        flip: false
      };

    case 4:
      return {
        rotate: 2,
        flip: true
      };

    case 5:
      return {
        rotate: 1,
        flip: true
      };

    case 6:
      return {
        rotate: 1,
        flip: false
      };

    case 7:
      return {
        rotate: 3,
        flip: true
      };

    case 8:
      return {
        rotate: 3,
        flip: false
      };

    default:
      return {
        rotate: 0,
        flip: false
      };
  }
}

function getExifRotation(imageBase64) {
  const view = new DataView(base64ToArrayBuffer(imageBase64));

  if (view.getUint16(0, false) !== 0xFFD8) {
    return -2;
  }

  const length = view.byteLength;
  let offset = 2;

  while (offset < length) {
    if (view.getUint16(offset + 2, false) <= 8) return -1;
    const marker = view.getUint16(offset, false);
    offset += 2;

    if (marker == 0xFFE1) {
      if (view.getUint32(offset += 2, false) !== 0x45786966) {
        return -1;
      }

      const little = view.getUint16(offset += 6, false) == 0x4949;
      offset += view.getUint32(offset + 4, little);
      const tags = view.getUint16(offset, little);
      offset += 2;

      for (let i = 0; i < tags; i++) {
        if (view.getUint16(offset + i * 12, little) == 0x0112) {
          return view.getUint16(offset + i * 12 + 8, little);
        }
      }
    } else if ((marker & 0xFF00) !== 0xFF00) {
      break;
    } else {
      offset += view.getUint16(offset, false);
    }
  }

  return -1;
}

function base64ToArrayBuffer(imageBase64) {
  imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
  const binaryString = atob(imageBase64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes.buffer;
}

class LoadImageService {
  constructor() {
    this.autoRotateSupported = supportsAutomaticRotation();
  }

  loadImageFile(file, cropperSettings) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = event => {
        this.loadImage(event.target.result, file.type, cropperSettings).then(resolve).catch(reject);
      };

      fileReader.readAsDataURL(file);
    });
  }

  loadImage(imageBase64, imageType, cropperSettings) {
    if (!this.isValidImageType(imageType)) {
      return Promise.reject(new Error('Invalid image type'));
    }

    return this.loadBase64Image(imageBase64, cropperSettings);
  }

  isValidImageType(type) {
    return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp|x-icon|vnd.microsoft.icon)/.test(type);
  }

  loadImageFromURL(url, cropperSettings) {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onerror = () => reject;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        context?.drawImage(img, 0, 0);
        this.loadBase64Image(canvas.toDataURL(), cropperSettings).then(resolve);
      };

      img.crossOrigin = 'anonymous';
      img.src = url;
    });
  }

  loadBase64Image(imageBase64, cropperSettings) {
    return new Promise((resolve, reject) => {
      const originalImage = new Image();

      originalImage.onload = () => resolve({
        originalImage,
        originalBase64: imageBase64
      });

      originalImage.onerror = reject;
      originalImage.src = imageBase64;
    }).then(res => this.transformImageBase64(res, cropperSettings));
  }

  async transformImageBase64(res, cropperSettings) {
    const autoRotate = await this.autoRotateSupported;
    const exifTransform = await getTransformationsFromExifData(autoRotate ? -1 : res.originalBase64);

    if (!res.originalImage || !res.originalImage.complete) {
      return Promise.reject(new Error('No image loaded'));
    }

    const loadedImage = {
      original: {
        base64: res.originalBase64,
        image: res.originalImage,
        size: {
          width: res.originalImage.naturalWidth,
          height: res.originalImage.naturalHeight
        }
      },
      exifTransform
    };
    return this.transformLoadedImage(loadedImage, cropperSettings);
  }

  async transformLoadedImage(loadedImage, cropperSettings) {
    const canvasRotation = cropperSettings.canvasRotation + loadedImage.exifTransform.rotate;
    const originalSize = {
      width: loadedImage.original.image.naturalWidth,
      height: loadedImage.original.image.naturalHeight
    };

    if (canvasRotation === 0 && !loadedImage.exifTransform.flip && !cropperSettings.containWithinAspectRatio) {
      return {
        original: {
          base64: loadedImage.original.base64,
          image: loadedImage.original.image,
          size: { ...originalSize
          }
        },
        transformed: {
          base64: loadedImage.original.base64,
          image: loadedImage.original.image,
          size: { ...originalSize
          }
        },
        exifTransform: loadedImage.exifTransform
      };
    }

    const transformedSize = this.getTransformedSize(originalSize, loadedImage.exifTransform, cropperSettings);
    const canvas = document.createElement('canvas');
    canvas.width = transformedSize.width;
    canvas.height = transformedSize.height;
    const ctx = canvas.getContext('2d');
    ctx?.setTransform(loadedImage.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
    ctx?.rotate(Math.PI * (canvasRotation / 2));
    ctx?.drawImage(loadedImage.original.image, -originalSize.width / 2, -originalSize.height / 2);
    const transformedBase64 = canvas.toDataURL();
    const transformedImage = await this.loadImageFromBase64(transformedBase64);
    return {
      original: {
        base64: loadedImage.original.base64,
        image: loadedImage.original.image,
        size: { ...originalSize
        }
      },
      transformed: {
        base64: transformedBase64,
        image: transformedImage,
        size: {
          width: transformedImage.width,
          height: transformedImage.height
        }
      },
      exifTransform: loadedImage.exifTransform
    };
  }

  loadImageFromBase64(imageBase64) {
    return new Promise((resolve, reject) => {
      const image = new Image();

      image.onload = () => resolve(image);

      image.onerror = reject;
      image.src = imageBase64;
    });
  }

  getTransformedSize(originalSize, exifTransform, cropperSettings) {
    const canvasRotation = cropperSettings.canvasRotation + exifTransform.rotate;

    if (cropperSettings.containWithinAspectRatio) {
      if (canvasRotation % 2) {
        const minWidthToContain = originalSize.width * cropperSettings.aspectRatio;
        const minHeightToContain = originalSize.height / cropperSettings.aspectRatio;
        return {
          width: Math.max(originalSize.height, minWidthToContain),
          height: Math.max(originalSize.width, minHeightToContain)
        };
      } else {
        const minWidthToContain = originalSize.height * cropperSettings.aspectRatio;
        const minHeightToContain = originalSize.width / cropperSettings.aspectRatio;
        return {
          width: Math.max(originalSize.width, minWidthToContain),
          height: Math.max(originalSize.height, minHeightToContain)
        };
      }
    }

    if (canvasRotation % 2) {
      return {
        height: originalSize.width,
        width: originalSize.height
      };
    }

    return {
      width: originalSize.width,
      height: originalSize.height
    };
  }

}

LoadImageService.ɵfac = function LoadImageService_Factory(t) {
  return new (t || LoadImageService)();
};

LoadImageService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LoadImageService,
  factory: LoadImageService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadImageService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class ImageCropperComponent {
  constructor(cropService, cropperPositionService, loadImageService, sanitizer, cd) {
    this.cropService = cropService;
    this.cropperPositionService = cropperPositionService;
    this.loadImageService = loadImageService;
    this.sanitizer = sanitizer;
    this.cd = cd;
    this.Hammer = window?.['Hammer'] || null;
    this.settings = new CropperSettings();
    this.setImageMaxSizeRetries = 0;
    this.marginLeft = '0px';
    this.maxSize = {
      width: 0,
      height: 0
    };
    this.moveTypes = MoveTypes;
    this.imageVisible = false;
    this.format = this.settings.format;
    this.transform = {};
    this.maintainAspectRatio = this.settings.maintainAspectRatio;
    this.aspectRatio = this.settings.aspectRatio;
    this.resizeToWidth = this.settings.resizeToWidth;
    this.resizeToHeight = this.settings.resizeToHeight;
    this.cropperMinWidth = this.settings.cropperMinWidth;
    this.cropperMinHeight = this.settings.cropperMinHeight;
    this.cropperMaxHeight = this.settings.cropperMaxHeight;
    this.cropperMaxWidth = this.settings.cropperMaxWidth;
    this.cropperStaticWidth = this.settings.cropperStaticWidth;
    this.cropperStaticHeight = this.settings.cropperStaticHeight;
    this.canvasRotation = this.settings.canvasRotation;
    this.initialStepSize = this.settings.initialStepSize;
    this.roundCropper = this.settings.roundCropper;
    this.onlyScaleDown = this.settings.onlyScaleDown;
    this.imageQuality = this.settings.imageQuality;
    this.autoCrop = this.settings.autoCrop;
    this.backgroundColor = this.settings.backgroundColor;
    this.containWithinAspectRatio = this.settings.containWithinAspectRatio;
    this.hideResizeSquares = this.settings.hideResizeSquares;
    this.allowMoveImage = false;
    this.cropper = {
      x1: -100,
      y1: -100,
      x2: 10000,
      y2: 10000
    };
    this.alignImage = this.settings.alignImage;
    this.disabled = false;
    this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.transformChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.reset();
  }

  ngOnChanges(changes) {
    this.onChangesUpdateSettings(changes);
    this.onChangesInputImage(changes);

    if (this.loadedImage?.original.image.complete && (changes['containWithinAspectRatio'] || changes['canvasRotation'])) {
      this.loadImageService.transformLoadedImage(this.loadedImage, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
    }

    if (changes['cropper'] || changes['maintainAspectRatio'] || changes['aspectRatio']) {
      this.setMaxSize();
      this.setCropperScaledMinSize();
      this.setCropperScaledMaxSize();

      if (this.maintainAspectRatio && (changes['maintainAspectRatio'] || changes['aspectRatio'])) {
        this.resetCropperPosition();
      } else if (changes['cropper']) {
        this.checkCropperPosition(false);
        this.doAutoCrop();
      }

      this.cd.markForCheck();
    }

    if (changes['transform']) {
      this.transform = this.transform || {};
      this.setCssTransform();
      this.doAutoCrop();
      this.cd.markForCheck();
    }
  }

  onChangesUpdateSettings(changes) {
    this.settings.setOptionsFromChanges(changes);

    if (this.settings.cropperStaticHeight && this.settings.cropperStaticWidth) {
      this.settings.setOptions({
        hideResizeSquares: true,
        cropperMinWidth: this.settings.cropperStaticWidth,
        cropperMinHeight: this.settings.cropperStaticHeight,
        cropperMaxHeight: this.settings.cropperStaticHeight,
        cropperMaxWidth: this.settings.cropperStaticWidth,
        maintainAspectRatio: false
      });
    }
  }

  onChangesInputImage(changes) {
    if (changes['imageChangedEvent'] || changes['imageURL'] || changes['imageBase64'] || changes['imageFile']) {
      this.reset();
    }

    if (changes['imageChangedEvent'] && this.isValidImageChangedEvent()) {
      this.loadImageFile(this.imageChangedEvent.target.files[0]);
    }

    if (changes['imageURL'] && this.imageURL) {
      this.loadImageFromURL(this.imageURL);
    }

    if (changes['imageBase64'] && this.imageBase64) {
      this.loadBase64Image(this.imageBase64);
    }

    if (changes['imageFile'] && this.imageFile) {
      this.loadImageFile(this.imageFile);
    }
  }

  isValidImageChangedEvent() {
    return this.imageChangedEvent?.target?.files?.length > 0;
  }

  setCssTransform() {
    const translateUnit = this.transform?.translateUnit || '%';
    this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle('scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' + 'scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' + 'rotate(' + (this.transform.rotate || 0) + 'deg)' + `translate(${this.transform.translateH || 0}${translateUnit}, ${this.transform.translateV || 0}${translateUnit})`);
  }

  ngOnInit() {
    this.settings.stepSize = this.initialStepSize;
    this.activatePinchGesture();
  }

  reset() {
    this.imageVisible = false;
    this.loadedImage = undefined;
    this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg' + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU' + 'AAarVyFEAAAAASUVORK5CYII=';
    this.moveStart = {
      active: false,
      type: null,
      position: null,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      clientX: 0,
      clientY: 0
    };
    this.maxSize = {
      width: 0,
      height: 0
    };
    this.cropper.x1 = -100;
    this.cropper.y1 = -100;
    this.cropper.x2 = 10000;
    this.cropper.y2 = 10000;
  }

  loadImageFile(file) {
    this.loadImageService.loadImageFile(file, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
  }

  loadBase64Image(imageBase64) {
    this.loadImageService.loadBase64Image(imageBase64, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
  }

  loadImageFromURL(url) {
    this.loadImageService.loadImageFromURL(url, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
  }

  setLoadedImage(loadedImage) {
    this.loadedImage = loadedImage;
    this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(loadedImage.transformed.base64);
    this.cd.markForCheck();
  }

  loadImageError(error) {
    console.error(error);
    this.loadImageFailed.emit();
  }

  imageLoadedInView() {
    if (this.loadedImage != null) {
      this.imageLoaded.emit(this.loadedImage);
      this.setImageMaxSizeRetries = 0;
      setTimeout(() => this.checkImageMaxSizeRecursively());
    }
  }

  checkImageMaxSizeRecursively() {
    if (this.setImageMaxSizeRetries > 40) {
      this.loadImageFailed.emit();
    } else if (this.sourceImageLoaded()) {
      this.setMaxSize();
      this.setCropperScaledMinSize();
      this.setCropperScaledMaxSize();
      this.resetCropperPosition();
      this.cropperReady.emit({ ...this.maxSize
      });
      this.cd.markForCheck();
    } else {
      this.setImageMaxSizeRetries++;
      setTimeout(() => this.checkImageMaxSizeRecursively(), 50);
    }
  }

  sourceImageLoaded() {
    return this.sourceImage?.nativeElement?.offsetWidth > 0;
  }

  onResize() {
    if (!this.loadedImage) {
      return;
    }

    this.resizeCropperPosition();
    this.setMaxSize();
    this.setCropperScaledMinSize();
    this.setCropperScaledMaxSize();
  }

  activatePinchGesture() {
    if (this.Hammer) {
      const hammer = new this.Hammer(this.wrapper.nativeElement);
      hammer.get('pinch').set({
        enable: true
      });
      hammer.on('pinchmove', this.onPinch.bind(this));
      hammer.on('pinchend', this.pinchStop.bind(this));
      hammer.on('pinchstart', this.startPinch.bind(this));
    } else if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()) {
      console.warn('[NgxImageCropper] Could not find HammerJS - Pinch Gesture won\'t work');
    }
  }

  resizeCropperPosition() {
    const sourceImageElement = this.sourceImage.nativeElement;

    if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
      this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
      this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
      this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
      this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
    }
  }

  resetCropperPosition() {
    this.cropperPositionService.resetCropperPosition(this.sourceImage, this.cropper, this.settings);
    this.doAutoCrop();
    this.imageVisible = true;
  }

  keyboardAccess(event) {
    this.changeKeyboardStepSize(event);
    this.keyboardMoveCropper(event);
  }

  changeKeyboardStepSize(event) {
    const key = +event.key;

    if (key >= 1 && key <= 9) {
      this.settings.stepSize = key;
    }
  }

  keyboardMoveCropper(event) {
    const keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];

    if (!keyboardWhiteList.includes(event.key)) {
      return;
    }

    const moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
    const position = event.altKey ? getInvertedPositionForKey(event.key) : getPositionForKey(event.key);
    const moveEvent = getEventForKey(event.key, this.settings.stepSize);
    event.preventDefault();
    event.stopPropagation();
    this.startMove({
      clientX: 0,
      clientY: 0
    }, moveType, position);
    this.moveImg(moveEvent);
    this.moveStop();
  }

  startMove(event, moveType, position = null) {
    if (this.disabled || this.moveStart?.active && this.moveStart?.type === MoveTypes.Pinch || moveType === MoveTypes.Drag && !this.allowMoveImage) {
      return;
    }

    if (event.preventDefault) {
      event.preventDefault();
    }

    this.moveStart = {
      active: true,
      type: moveType,
      position,
      transform: { ...this.transform
      },
      clientX: this.cropperPositionService.getClientX(event),
      clientY: this.cropperPositionService.getClientY(event),
      ...this.cropper
    };
  }

  startPinch(event) {
    if (!this.safeImgDataUrl) {
      return;
    }

    if (event.preventDefault) {
      event.preventDefault();
    }

    this.moveStart = {
      active: true,
      type: MoveTypes.Pinch,
      position: 'center',
      clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2,
      clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2,
      ...this.cropper
    };
  }

  moveImg(event) {
    if (this.moveStart.active) {
      if (event.stopPropagation) {
        event.stopPropagation();
      }

      if (event.preventDefault) {
        event.preventDefault();
      }

      if (this.moveStart.type === MoveTypes.Move) {
        this.cropperPositionService.move(event, this.moveStart, this.cropper);
        this.checkCropperPosition(true);
      } else if (this.moveStart.type === MoveTypes.Resize) {
        if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
          this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
        }

        this.checkCropperPosition(false);
      } else if (this.moveStart.type === MoveTypes.Drag) {
        const diffX = this.cropperPositionService.getClientX(event) - this.moveStart.clientX;
        const diffY = this.cropperPositionService.getClientY(event) - this.moveStart.clientY;
        this.transform = { ...this.transform,
          translateH: (this.moveStart.transform?.translateH || 0) + diffX,
          translateV: (this.moveStart.transform?.translateV || 0) + diffY
        };
        this.setCssTransform();
      }

      this.cd.detectChanges();
    }
  }

  onPinch(event) {
    if (this.moveStart.active) {
      if (event.stopPropagation) {
        event.stopPropagation();
      }

      if (event.preventDefault) {
        event.preventDefault();
      }

      if (this.moveStart.type === MoveTypes.Pinch) {
        this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
        this.checkCropperPosition(false);
      }

      this.cd.detectChanges();
    }
  }

  setMaxSize() {
    if (this.sourceImage) {
      const sourceImageElement = this.sourceImage.nativeElement;
      this.maxSize.width = sourceImageElement.offsetWidth;
      this.maxSize.height = sourceImageElement.offsetHeight;
      this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
    }
  }

  setCropperScaledMinSize() {
    if (this.loadedImage?.transformed?.image) {
      this.setCropperScaledMinWidth();
      this.setCropperScaledMinHeight();
    } else {
      this.settings.cropperScaledMinWidth = 20;
      this.settings.cropperScaledMinHeight = 20;
    }
  }

  setCropperScaledMinWidth() {
    this.settings.cropperScaledMinWidth = this.cropperMinWidth > 0 ? Math.max(20, this.cropperMinWidth / this.loadedImage.transformed.image.width * this.maxSize.width) : 20;
  }

  setCropperScaledMinHeight() {
    if (this.maintainAspectRatio) {
      this.settings.cropperScaledMinHeight = Math.max(20, this.settings.cropperScaledMinWidth / this.aspectRatio);
    } else if (this.cropperMinHeight > 0) {
      this.settings.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.loadedImage.transformed.image.height * this.maxSize.height);
    } else {
      this.settings.cropperScaledMinHeight = 20;
    }
  }

  setCropperScaledMaxSize() {
    if (this.loadedImage?.transformed?.image) {
      const ratio = this.loadedImage.transformed.size.width / this.maxSize.width;
      this.settings.cropperScaledMaxWidth = this.cropperMaxWidth > 20 ? this.cropperMaxWidth / ratio : this.maxSize.width;
      this.settings.cropperScaledMaxHeight = this.cropperMaxHeight > 20 ? this.cropperMaxHeight / ratio : this.maxSize.height;

      if (this.maintainAspectRatio) {
        if (this.settings.cropperScaledMaxWidth > this.settings.cropperScaledMaxHeight * this.aspectRatio) {
          this.settings.cropperScaledMaxWidth = this.settings.cropperScaledMaxHeight * this.aspectRatio;
        } else if (this.settings.cropperScaledMaxWidth < this.settings.cropperScaledMaxHeight * this.aspectRatio) {
          this.settings.cropperScaledMaxHeight = this.settings.cropperScaledMaxWidth / this.aspectRatio;
        }
      }
    } else {
      this.settings.cropperScaledMaxWidth = this.maxSize.width;
      this.settings.cropperScaledMaxHeight = this.maxSize.height;
    }
  }

  checkCropperPosition(maintainSize = false) {
    if (this.cropper.x1 < 0) {
      this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
      this.cropper.x1 = 0;
    }

    if (this.cropper.y1 < 0) {
      this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
      this.cropper.y1 = 0;
    }

    if (this.cropper.x2 > this.maxSize.width) {
      this.cropper.x1 -= maintainSize ? this.cropper.x2 - this.maxSize.width : 0;
      this.cropper.x2 = this.maxSize.width;
    }

    if (this.cropper.y2 > this.maxSize.height) {
      this.cropper.y1 -= maintainSize ? this.cropper.y2 - this.maxSize.height : 0;
      this.cropper.y2 = this.maxSize.height;
    }
  }

  moveStop() {
    if (this.moveStart.active) {
      this.moveStart.active = false;

      if (this.moveStart?.type === MoveTypes.Drag) {
        this.transformChange.emit(this.transform);
      } else {
        this.doAutoCrop();
      }
    }
  }

  pinchStop() {
    if (this.moveStart.active) {
      this.moveStart.active = false;
      this.doAutoCrop();
    }
  }

  doAutoCrop() {
    if (this.autoCrop) {
      this.crop();
    }
  }

  crop() {
    if (this.loadedImage?.transformed?.image != null) {
      this.startCropImage.emit();
      const output = this.cropService.crop(this.sourceImage, this.loadedImage, this.cropper, this.settings);

      if (output != null) {
        this.imageCropped.emit(output);
      }

      return output;
    }

    return null;
  }

}

ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) {
  return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CropService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CropperPositionService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LoadImageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

ImageCropperComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ImageCropperComponent,
  selectors: [["image-cropper"]],
  viewQuery: function ImageCropperComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sourceImage = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ImageCropperComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function ImageCropperComponent_mousemove_HostBindingHandler($event) {
        return ctx.moveImg($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchmove", function ImageCropperComponent_touchmove_HostBindingHandler($event) {
        return ctx.moveImg($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function ImageCropperComponent_mouseup_HostBindingHandler() {
        return ctx.moveStop();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchend", function ImageCropperComponent_touchend_HostBindingHandler() {
        return ctx.moveStop();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx.alignImage);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);
    }
  },
  inputs: {
    imageChangedEvent: "imageChangedEvent",
    imageURL: "imageURL",
    imageBase64: "imageBase64",
    imageFile: "imageFile",
    format: "format",
    transform: "transform",
    maintainAspectRatio: "maintainAspectRatio",
    aspectRatio: "aspectRatio",
    resizeToWidth: "resizeToWidth",
    resizeToHeight: "resizeToHeight",
    cropperMinWidth: "cropperMinWidth",
    cropperMinHeight: "cropperMinHeight",
    cropperMaxHeight: "cropperMaxHeight",
    cropperMaxWidth: "cropperMaxWidth",
    cropperStaticWidth: "cropperStaticWidth",
    cropperStaticHeight: "cropperStaticHeight",
    canvasRotation: "canvasRotation",
    initialStepSize: "initialStepSize",
    roundCropper: "roundCropper",
    onlyScaleDown: "onlyScaleDown",
    imageQuality: "imageQuality",
    autoCrop: "autoCrop",
    backgroundColor: "backgroundColor",
    containWithinAspectRatio: "containWithinAspectRatio",
    hideResizeSquares: "hideResizeSquares",
    allowMoveImage: "allowMoveImage",
    cropper: "cropper",
    alignImage: "alignImage",
    disabled: "disabled"
  },
  outputs: {
    imageCropped: "imageCropped",
    startCropImage: "startCropImage",
    imageLoaded: "imageLoaded",
    cropperReady: "cropperReady",
    loadImageFailed: "loadImageFailed",
    transformChange: "transformChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 10,
  consts: [["wrapper", ""], ["class", "ngx-ic-source-image", 3, "src", "visibility", "transform", "ngx-ic-draggable", "load", "mousedown", "touchstart", 4, "ngIf"], [1, "ngx-ic-overlay"], ["class", "ngx-ic-cropper", "tabindex", "0", 3, "ngx-ic-round", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], [1, "ngx-ic-source-image", 3, "src", "load", "mousedown", "touchstart"], ["sourceImage", ""], ["tabindex", "0", 1, "ngx-ic-cropper", 3, "keydown"], [1, "ngx-ic-move", 3, "mousedown", "touchstart"], [4, "ngIf"], [1, "ngx-ic-resize", "ngx-ic-topleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-square"], [1, "ngx-ic-resize", "ngx-ic-top"], [1, "ngx-ic-resize", "ngx-ic-topright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-right"], [1, "ngx-ic-resize", "ngx-ic-bottomright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-bottom"], [1, "ngx-ic-resize", "ngx-ic-bottomleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-left"], [1, "ngx-ic-resize-bar", "ngx-ic-top", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-right", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-bottom", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-left", 3, "mousedown", "touchstart"]],
  template: function ImageCropperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageCropperComponent_img_2_Template, 2, 7, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageCropperComponent_div_4_Template, 3, 15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.imageVisible && ctx.backgroundColor);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.safeImgDataUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.maxSize.width, "px")("height", ctx.maxSize.height, "px")("margin-left", ctx.alignImage === "center" ? ctx.marginLeft : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageVisible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image.ngx-ic-draggable[_ngcontent-%COMP%]{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}[_nghost-%COMP%]   .ngx-ic-overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:transparent;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{outline-width:100vh}}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{display:inline-block;background:#53535C;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw #ffffff4d;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh #ffffff4d;box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{display:none}"],
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'image-cropper',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div\n  [style.background]=\"imageVisible && backgroundColor\"\n  #wrapper\n>\n  <img\n    #sourceImage\n    class=\"ngx-ic-source-image\"\n    *ngIf=\"safeImgDataUrl\"\n    [src]=\"safeImgDataUrl\"\n    [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n    [style.transform]=\"safeTransformStyle\"\n    [class.ngx-ic-draggable]=\"!disabled && allowMoveImage\"\n    (load)=\"imageLoadedInView()\"\n    (mousedown)=\"startMove($event, moveTypes.Drag)\"\n    (touchstart)=\"startMove($event, moveTypes.Drag)\"\n  >\n  <div\n    class=\"ngx-ic-overlay\"\n    [style.width.px]=\"maxSize.width\"\n    [style.height.px]=\"maxSize.height\"\n    [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n  ></div>\n  <div class=\"ngx-ic-cropper\"\n       *ngIf=\"imageVisible\"\n       [class.ngx-ic-round]=\"roundCropper\"\n       [style.top.px]=\"cropper.y1\"\n       [style.left.px]=\"cropper.x1\"\n       [style.width.px]=\"cropper.x2 - cropper.x1\"\n       [style.height.px]=\"cropper.y2 - cropper.y1\"\n       [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n       [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n       (keydown)=\"keyboardAccess($event)\"\n       tabindex=\"0\"\n  >\n    <div\n      (mousedown)=\"startMove($event, moveTypes.Move)\"\n      (touchstart)=\"startMove($event, moveTypes.Move)\"\n      class=\"ngx-ic-move\">\n    </div>\n    <ng-container *ngIf=\"!hideResizeSquares\">\n            <span class=\"ngx-ic-resize ngx-ic-topleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topleft')\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-top\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-topright\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'topright')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'topright')\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-right\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-bottomright\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomright')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomright')\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-bottom\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-bottomleft\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomleft')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomleft')\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-left\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize-bar ngx-ic-top\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'top')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'top')\">\n            </span>\n      <span class=\"ngx-ic-resize-bar ngx-ic-right\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'right')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'right')\">\n            </span>\n      <span class=\"ngx-ic-resize-bar ngx-ic-bottom\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'bottom')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'bottom')\">\n            </span>\n      <span class=\"ngx-ic-resize-bar ngx-ic-left\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'left')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'left')\">\n            </span>\n    </ng-container>\n  </div>\n</div>\n",
      styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}:host>div{width:100%;position:relative}:host>div img.ngx-ic-source-image{max-width:100%;max-height:100%;transform-origin:center}:host>div img.ngx-ic-source-image.ngx-ic-draggable{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}:host .ngx-ic-overlay{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}:host .ngx-ic-cropper{position:absolute;display:flex;color:#53535c;background:transparent;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){:host .ngx-ic-cropper{outline-width:100vh}}:host .ngx-ic-cropper:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}:host .ngx-ic-cropper .ngx-ic-move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .ngx-ic-cropper:focus .ngx-ic-move{border-color:#1e90ff;border-width:2px}:host .ngx-ic-cropper .ngx-ic-resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .ngx-ic-cropper .ngx-ic-resize .ngx-ic-square{display:inline-block;background:#53535C;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-topright{top:-12px;right:-12px;cursor:nesw-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar{position:absolute;z-index:1}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .ngx-ic-cropper.ngx-ic-round{outline-color:transparent}:host .ngx-ic-cropper.ngx-ic-round:after{border-radius:100%;box-shadow:0 0 0 100vw #ffffff4d;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){:host .ngx-ic-cropper.ngx-ic-round:after{box-shadow:0 0 0 100vh #ffffff4d;box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}:host .ngx-ic-cropper.ngx-ic-round .ngx-ic-move{border-radius:100%}:host.disabled .ngx-ic-cropper .ngx-ic-resize,:host.disabled .ngx-ic-cropper .ngx-ic-resize-bar,:host.disabled .ngx-ic-cropper .ngx-ic-move{display:none}\n"]
    }]
  }], function () {
    return [{
      type: CropService
    }, {
      type: CropperPositionService
    }, {
      type: LoadImageService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    wrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['wrapper', {
        static: true
      }]
    }],
    sourceImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['sourceImage', {
        static: false
      }]
    }],
    imageChangedEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageURL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageBase64: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageFile: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    transform: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maintainAspectRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    aspectRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeToWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeToHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cropperMinWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cropperMinHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cropperMaxHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cropperMaxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cropperStaticWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cropperStaticHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    canvasRotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    initialStepSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    roundCropper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onlyScaleDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageQuality: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoCrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    containWithinAspectRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideResizeSquares: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allowMoveImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cropper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    alignImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.text-align']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.disabled']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageCropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    startCropImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    imageLoaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cropperReady: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    loadImageFailed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    transformChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['window:resize']
    }],
    moveImg: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:mousemove', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:touchmove', ['$event']]
    }],
    moveStop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:mouseup']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:touchend']
    }]
  });
})();

class ImageCropperModule {}

ImageCropperModule.ɵfac = function ImageCropperModule_Factory(t) {
  return new (t || ImageCropperModule)();
};

ImageCropperModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ImageCropperModule,
  declarations: [ImageCropperComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  exports: [ImageCropperComponent]
});
ImageCropperModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [ImageCropperComponent],
      exports: [ImageCropperComponent]
    }]
  }], null, null);
})();

function base64ToFile(base64Image) {
  const split = base64Image.split(',');
  const type = split[0].replace('data:', '').replace(';base64', '');
  const byteString = atob(split[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], {
    type
  });
}
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=ngx-image-cropper.mjs.map

/***/ }),

/***/ 91247:
/*!*****************************************************!*\
  !*** ./src/app/imagecropper/imagecropper.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  background: rgba(8, 8, 8, 0.34);\n  --background: rgba(24, 24, 24, 0.075);\n  height: 100%;\n}\n\n.uploaddiv {\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: auto;\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  z-index: 99999;\n  padding: 10px 12px;\n}\n\n.profileimg {\n  border-radius: 15px;\n  margin: auto;\n  display: table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlY3JvcHBlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6ImltYWdlY3JvcHBlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCA4IDggLyAzNCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0LCAyNCwgMjQsIDAuMDc1KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbi51cGxvYWRkaXYge1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG59XHJcbi5wcm9maWxlaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufSJdfQ== */");

/***/ }),

/***/ 66439:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imagecropper/imagecropper.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"ht_40\"></div>\n  <ion-row>\n    <ion-col>\n      <ion-button *ngIf=\"!Myimage && cropImage\" style=\"width: 100%;\" color=\"danger\" (click)=\"clear()\">\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button *ngIf=\"!Myimage && cropImage\" style=\"width: 100%;\" color=\"success\" (click)=\"save()\">\n        <ion-icon name=\"checkmark\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <div class=\"uploaddiv\" (click)=\"opengallery()\">\n    <image-cropper *ngIf=\"!Myimage && cropImage\" class=\"profileimg\" [imageBase64]=\"cropImage\" [maintainAspectRatio]=\"false\"\n    [aspectRatio]=\"4 / 3\"\n      format=\"png\" (imageCropped)=\"imageCropped($event)\" outputType=\"base64\">\n    </image-cropper>\n\n    <img *ngIf=\"Myimage\" src=\"{{Myimage}}\" class=\"profileimg\">\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_imagecropper_imagecropper_page_ts.js.map