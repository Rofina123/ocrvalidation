import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "primeng/card";
export class PicsOcrvalidationComponent {
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
PicsOcrvalidationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PicsOcrvalidationComponent, selector: "lib-pics-ocrvalidation", inputs: { submitionData: "submitionData" }, viewQueries: [{ propertyName: "isReadOnly", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"card\">\n    <div class=\"row\">\n      <div class=\"col pr-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Uploaded Document\">\n          <img [src]=\"imgUrl\" alt=\"document\" class=\"w-100\" />\n        </p-card>\n      </div>\n      <div class=\"col pl-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Document Information\">\n          <div class=\"col-12 dynamic-page mt-0\" *ngIf=\"isformIO\">\n            <!-- <formio\n              #formIO\n              [form]=\"jsonForm\"\n              [readOnly]=\"isReadOnly\"\n              [submission]=\"submitionData\"\n              [refresh]=\"triggerRefresh\"\n          ></formio> -->\n          </div>\n          <button type=\"button\" class=\"btn success\" (click)=\"backToForm()\">Done</button>\n        </p-card>\n      </div>\n    </div>\n  </div>\n", styles: [":host ::ng-deep .p-card .p-card-content{padding:0}:host ::ng-deep .p-card .success{border-color:#146a5d;color:#146a5d}\n"], components: [{ type: i1.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljcy1vY3J2YWxpZGF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3Njb3JlLW9jci1saWJyYXJ5L3NyYy9saWIvcGljcy1vY3J2YWxpZGF0aW9uL3BpY3Mtb2NydmFsaWRhdGlvbi9waWNzLW9jcnZhbGlkYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljc2NvcmUtb2NyLWxpYnJhcnkvc3JjL2xpYi9waWNzLW9jcnZhbGlkYXRpb24vcGljcy1vY3J2YWxpZGF0aW9uL3BpY3Mtb2NydmFsaWRhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU9wRSxNQUFNLE9BQU8sMEJBQTBCO0lBTHZDO1FBU0UsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVuQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBZSxFQUFFLENBQUM7S0FlekI7SUFURCxRQUFRO0lBRVIsQ0FBQztJQUdDLFVBQVU7SUFFVixDQUFDOzt3SEFwQlUsMEJBQTBCOzRHQUExQiwwQkFBMEIsZ05DUHZDLCswQkF1QkE7NEZEaEJhLDBCQUEwQjtrQkFMdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxXQUFXLEVBQUUscUNBQXFDO29CQUNsRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztpQkFDbkQ7OEJBT0QsVUFBVTtzQkFEUCxTQUFTO3VCQUFDLFFBQVE7Z0JBSVosYUFBYTtzQkFBckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1waWNzLW9jcnZhbGlkYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGljcy1vY3J2YWxpZGF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGljcy1vY3J2YWxpZGF0aW9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGljc09jcnZhbGlkYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGltZ1VybDogYW55O1xuICBqc29uRm9ybTogYW55O1xuICBpc2Zvcm1JTyA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdmb3JtSU8nKVxuaXNSZWFkT25seSA9IGZhbHNlO1xuZm9ybUpzb246IEFycmF5PGFueT4gPSBbXTtcbnRyaWdnZXJSZWZyZXNoOiBhbnk7XG5ASW5wdXQoKSBzdWJtaXRpb25EYXRhOiBhbnk7XG5cblxuXG5uZ09uSW5pdCgpOiB2b2lkIHtcblxufVxuXG5cbiAgYmFja1RvRm9ybSgpIHtcbiAgIFxuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbCBwci0yXCI+XG4gICAgICAgIDxwLWNhcmQgc3R5bGVDbGFzcz1cInctMTAwIGgtMTAwXCIgaGVhZGVyPVwiVXBsb2FkZWQgRG9jdW1lbnRcIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwiaW1nVXJsXCIgYWx0PVwiZG9jdW1lbnRcIiBjbGFzcz1cInctMTAwXCIgLz5cbiAgICAgICAgPC9wLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGwtMlwiPlxuICAgICAgICA8cC1jYXJkIHN0eWxlQ2xhc3M9XCJ3LTEwMCBoLTEwMFwiIGhlYWRlcj1cIkRvY3VtZW50IEluZm9ybWF0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBkeW5hbWljLXBhZ2UgbXQtMFwiICpuZ0lmPVwiaXNmb3JtSU9cIj5cbiAgICAgICAgICAgIDwhLS0gPGZvcm1pb1xuICAgICAgICAgICAgICAjZm9ybUlPXG4gICAgICAgICAgICAgIFtmb3JtXT1cImpzb25Gb3JtXCJcbiAgICAgICAgICAgICAgW3JlYWRPbmx5XT1cImlzUmVhZE9ubHlcIlxuICAgICAgICAgICAgICBbc3VibWlzc2lvbl09XCJzdWJtaXRpb25EYXRhXCJcbiAgICAgICAgICAgICAgW3JlZnJlc2hdPVwidHJpZ2dlclJlZnJlc2hcIlxuICAgICAgICAgID48L2Zvcm1pbz4gLS0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gc3VjY2Vzc1wiIChjbGljayk9XCJiYWNrVG9Gb3JtKClcIj5Eb25lPC9idXR0b24+XG4gICAgICAgIDwvcC1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuIl19