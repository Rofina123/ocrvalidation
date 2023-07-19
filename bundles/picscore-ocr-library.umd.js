(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('primeng/card')) :
    typeof define === 'function' && define.amd ? define('picscore-ocr-library', ['exports', '@angular/core', 'primeng/card'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["picscore-ocr-library"] = {}, global.ng.core, global.i1));
})(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var PicscoreOcrLibraryService = /** @class */ (function () {
        function PicscoreOcrLibraryService() {
        }
        return PicscoreOcrLibraryService;
    }());
    PicscoreOcrLibraryService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicscoreOcrLibraryService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PicscoreOcrLibraryService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicscoreOcrLibraryService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicscoreOcrLibraryService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var PicsOcrvalidationComponent = /** @class */ (function () {
        function PicsOcrvalidationComponent() {
            this.isformIO = false;
            this.isReadOnly = false;
            this.formJson = [];
        }
        PicsOcrvalidationComponent.prototype.ngOnInit = function () {
        };
        PicsOcrvalidationComponent.prototype.backToForm = function () {
        };
        return PicsOcrvalidationComponent;
    }());
    PicsOcrvalidationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsOcrvalidationComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    PicsOcrvalidationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PicsOcrvalidationComponent, selector: "lib-pics-ocrvalidation", inputs: { submitionData: "submitionData" }, viewQueries: [{ propertyName: "isReadOnly", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card\">\n    <div class=\"row\">\n      <div class=\"col pr-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Uploaded Document\">\n          <img [src]=\"imgUrl\" alt=\"document\" class=\"w-100\" />\n        </p-card>\n      </div>\n      <div class=\"col pl-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Document Information\">\n          <div class=\"col-12 dynamic-page mt-0\" *ngIf=\"isformIO\">\n            <!-- <formio\n              #formIO\n              [form]=\"jsonForm\"\n              [readOnly]=\"isReadOnly\"\n              [submission]=\"submitionData\"\n              [refresh]=\"triggerRefresh\"\n          ></formio> -->\n          </div>\n          <button type=\"button\" class=\"btn success\" (click)=\"backToForm()\">Done</button>\n        </p-card>\n      </div>\n    </div>\n  </div>\n", styles: [":host ::ng-deep .p-card .p-card-content{padding:0}:host ::ng-deep .p-card .success{border-color:#146a5d;color:#146a5d}\n"], components: [{ type: i1__namespace.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsOcrvalidationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-pics-ocrvalidation',
                        templateUrl: './pics-ocrvalidation.component.html',
                        styleUrls: ['./pics-ocrvalidation.component.scss']
                    }]
            }], propDecorators: { isReadOnly: [{
                    type: i0.ViewChild,
                    args: ['formIO']
                }], submitionData: [{
                    type: i0.Input
                }] } });

    var PicscoreOcrLibraryComponent = /** @class */ (function () {
        function PicscoreOcrLibraryComponent() {
        }
        PicscoreOcrLibraryComponent.prototype.ngOnInit = function () {
        };
        return PicscoreOcrLibraryComponent;
    }());
    PicscoreOcrLibraryComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicscoreOcrLibraryComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    PicscoreOcrLibraryComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PicscoreOcrLibraryComponent, selector: "lib-picscore-ocr-library", ngImport: i0__namespace, template: "\n   <lib-pics-ocrvalidation></lib-pics-ocrvalidation>\n  ", isInline: true, components: [{ type: PicsOcrvalidationComponent, selector: "lib-pics-ocrvalidation", inputs: ["submitionData"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicscoreOcrLibraryComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-picscore-ocr-library',
                        template: "\n   <lib-pics-ocrvalidation></lib-pics-ocrvalidation>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var PicscoreOcrLibraryModule = /** @class */ (function () {
        function PicscoreOcrLibraryModule() {
        }
        return PicscoreOcrLibraryModule;
    }());
    PicscoreOcrLibraryModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicscoreOcrLibraryModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PicscoreOcrLibraryModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicscoreOcrLibraryModule, declarations: [PicscoreOcrLibraryComponent,
            PicsOcrvalidationComponent], imports: [i1.CardModule], exports: [PicscoreOcrLibraryComponent] });
    PicscoreOcrLibraryModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicscoreOcrLibraryModule, imports: [[
                i1.CardModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicscoreOcrLibraryModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            PicscoreOcrLibraryComponent,
                            PicsOcrvalidationComponent
                        ],
                        imports: [
                            i1.CardModule
                        ],
                        exports: [
                            PicscoreOcrLibraryComponent
                        ],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA, i0.NO_ERRORS_SCHEMA]
                    }]
            }] });

    /*
     * Public API Surface of picscore-ocr-library
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PicscoreOcrLibraryComponent = PicscoreOcrLibraryComponent;
    exports.PicscoreOcrLibraryModule = PicscoreOcrLibraryModule;
    exports.PicscoreOcrLibraryService = PicscoreOcrLibraryService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=picscore-ocr-library.umd.js.map
