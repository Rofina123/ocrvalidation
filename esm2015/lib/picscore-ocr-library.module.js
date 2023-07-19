import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { PicscoreOcrLibraryComponent } from './picscore-ocr-library.component';
import { PicsOcrvalidationComponent } from './pics-ocrvalidation/pics-ocrvalidation/pics-ocrvalidation.component';
import { CardModule } from 'primeng/card';
import * as i0 from "@angular/core";
export class PicscoreOcrLibraryModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljc2NvcmUtb2NyLWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljc2NvcmUtb2NyLWxpYnJhcnkvc3JjL2xpYi9waWNzY29yZS1vY3ItbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQWdCMUMsTUFBTSxPQUFPLHdCQUF3Qjs7c0hBQXhCLHdCQUF3Qjt1SEFBeEIsd0JBQXdCLGlCQVhqQywyQkFBMkI7UUFDM0IsMEJBQTBCLGFBRzFCLFVBQVUsYUFHViwyQkFBMkI7dUhBSWxCLHdCQUF3QixZQVIxQjtZQUNQLFVBQVU7U0FDWDs0RkFNVSx3QkFBd0I7a0JBYnBDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLDJCQUEyQjt3QkFDM0IsMEJBQTBCO3FCQUMzQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsVUFBVTtxQkFDWDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsMkJBQTJCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGljc2NvcmVPY3JMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9waWNzY29yZS1vY3ItbGlicmFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGljc09jcnZhbGlkYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BpY3Mtb2NydmFsaWRhdGlvbi9waWNzLW9jcnZhbGlkYXRpb24vcGljcy1vY3J2YWxpZGF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jYXJkJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQaWNzY29yZU9jckxpYnJhcnlDb21wb25lbnQsXG4gICAgUGljc09jcnZhbGlkYXRpb25Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENhcmRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFBpY3Njb3JlT2NyTGlicmFyeUNvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgUGljc2NvcmVPY3JMaWJyYXJ5TW9kdWxlIHsgfVxuIl19