import * as i0 from '@angular/core';
import { Injectable, Component, ViewChild, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import * as i1 from 'primeng/card';
import { CardModule } from 'primeng/card';

class PicscoreOcrLibraryService {
    constructor() { }
}
PicscoreOcrLibraryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicscoreOcrLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PicscoreOcrLibraryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicscoreOcrLibraryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicscoreOcrLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PicsOcrvalidationComponent {
    constructor() {
        this.isformIO = false;
        this.isReadOnly = false;
        this.formJson = [];
    }
    ngOnInit() {
    }
    backToForm() {
    }
}
PicsOcrvalidationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsOcrvalidationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PicsOcrvalidationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PicsOcrvalidationComponent, selector: "lib-pics-ocrvalidation", inputs: { submitionData: "submitionData" }, viewQueries: [{ propertyName: "isReadOnly", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"card\">\n    <div class=\"row\">\n      <div class=\"col pr-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Uploaded Document\">\n          <img [src]=\"imgUrl\" alt=\"document\" class=\"w-100\" />\n        </p-card>\n      </div>\n      <div class=\"col pl-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Document Information\">\n          <div class=\"col-12 dynamic-page mt-0\" *ngIf=\"isformIO\">\n            <!-- <formio\n              #formIO\n              [form]=\"jsonForm\"\n              [readOnly]=\"isReadOnly\"\n              [submission]=\"submitionData\"\n              [refresh]=\"triggerRefresh\"\n          ></formio> -->\n          </div>\n          <button type=\"button\" class=\"btn success\" (click)=\"backToForm()\">Done</button>\n        </p-card>\n      </div>\n    </div>\n  </div>\n", styles: [""], components: [{ type: i1.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsOcrvalidationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-pics-ocrvalidation',
                    templateUrl: './pics-ocrvalidation.component.html',
                    styleUrls: ['./pics-ocrvalidation.component.scss']
                }]
        }], propDecorators: { isReadOnly: [{
                type: ViewChild,
                args: ['formIO']
            }], submitionData: [{
                type: Input
            }] } });

class PicscoreOcrLibraryComponent {
    constructor() { }
    ngOnInit() {
    }
}
PicscoreOcrLibraryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicscoreOcrLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PicscoreOcrLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PicscoreOcrLibraryComponent, selector: "lib-picscore-ocr-library", ngImport: i0, template: `
   <lib-pics-ocrvalidation></lib-pics-ocrvalidation>
  `, isInline: true, components: [{ type: PicsOcrvalidationComponent, selector: "lib-pics-ocrvalidation", inputs: ["submitionData"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicscoreOcrLibraryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-picscore-ocr-library',
                    template: `
   <lib-pics-ocrvalidation></lib-pics-ocrvalidation>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class PicscoreOcrLibraryModule {
}
PicscoreOcrLibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicscoreOcrLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PicscoreOcrLibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicscoreOcrLibraryModule, declarations: [PicscoreOcrLibraryComponent,
        PicsOcrvalidationComponent], imports: [CardModule], exports: [PicscoreOcrLibraryComponent] });
PicscoreOcrLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicscoreOcrLibraryModule, imports: [[
            CardModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicscoreOcrLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PicscoreOcrLibraryComponent,
                        PicsOcrvalidationComponent
                    ],
                    imports: [
                        CardModule
                    ],
                    exports: [
                        PicscoreOcrLibraryComponent
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
                }]
        }] });

/*
 * Public API Surface of picscore-ocr-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PicscoreOcrLibraryComponent, PicscoreOcrLibraryModule, PicscoreOcrLibraryService };
//# sourceMappingURL=picscore-ocr-library.js.map
